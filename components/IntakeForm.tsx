"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Loader2 } from 'lucide-react';
import { client } from '../lib/sanity';

const steps = [
  "Personal Info",
  "Background",
  "Clinical & Services",
  "Insurance Details"
];

const IntakeForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [intakeServices, setIntakeServices] = useState<{_id: string, title: string}[]>([]);
  const [insuranceProviders, setInsuranceProviders] = useState<{_id: string, title: string}[]>([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    ssn: '',
    rawSsn: '',
    gender: '',
    streetAddress: '',
    suite: '',
    city: '',
    zipCode: '',
    livingSituation: '',
    maritalStatus: '',
    children: '',
    race: '',
    language: '',
    employer: '',
    legalIssues: '',
    referralSource: '',
    pcp: '',
    services: [] as string[],
    clientConcern: '',
    medications: '',
    emergencyContact: '',
    emergencyPhone: '',
    insuranceProvider: '',
    insuranceId: '',
    comments: ''
  });

  const [ipAddress, setIpAddress] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateTime = () => setCurrentDateTime(new Date().toLocaleString('en-US'));
    updateTime();
    const timer = setInterval(updateTime, 1000);

    const fetchIp = async () => {
      try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        setIpAddress(data.ip);
      } catch (e) {
        console.error("Error fetching IP:", e);
        setIpAddress("Unavailable");
      }
    };
    fetchIp();

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchIntakeData = async () => {
      try {
        const services = await client.fetch(`*[_type == "intakeService"] | order(order asc)`);
        if (services && services.length > 0) {
          setIntakeServices(services);
        } else {
          setIntakeServices([
            {_id: '1', title: 'Recovery Coach'},
            {_id: '2', title: 'DynamiCare'},
            {_id: '3', title: 'Recovery Support Navigator'},
            {_id: '4', title: 'IOP/SOAP'},
            {_id: '5', title: 'Clinical'}
          ]);
        }

        const insurers = await client.fetch(`*[_type == "insuranceProvider"] | order(order asc)`);
        if (insurers && insurers.length > 0) {
          setInsuranceProviders(insurers);
        } else {
          setInsuranceProviders([
            {_id: '1', title: 'MassHealth (Standard/CarePlus/Family Assistance)'},
            {_id: '2', title: 'MassHealth - Community Care Partners'},
            {_id: '3', title: 'Other / Private Insurance'},
            {_id: '4', title: 'No Insurance (Self-Pay)'}
          ]);
        }
      } catch (e) {
        console.error("Error fetching intake fields:", e);
      }
    };
    fetchIntakeData();
  }, []);

  const [formError, setFormError] = useState('');

  const handlePhoneFormat = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    let res = '';
    if (digits.length > 0) res = `(${digits.slice(0, 3)}`;
    if (digits.length >= 4) res += `) ${digits.slice(3, 6)}`;
    if (digits.length >= 7) res += `-${digits.slice(6, 10)}`;
    return res;
  };

  const handleSSNFormat = (rawDigits: string) => {
    let res = '';
    // Mask the first 3 digits
    if (rawDigits.length > 0) res = '•'.repeat(Math.min(3, rawDigits.length));
    // Add the first dash and mask the next 2 digits
    if (rawDigits.length >= 4) res += `-${'•'.repeat(Math.min(2, rawDigits.length - 3))}`;
    // Add the second dash and SHOW the last 4 digits
    if (rawDigits.length >= 6) res += `-${rawDigits.slice(5, 9)}`;
    return res;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;
    
    if (name === 'phone' || name === 'emergencyPhone') {
      value = handlePhoneFormat(value);
      setFormData(prev => ({ ...prev, [name]: value }));
    } else if (name === 'ssn') {
      const isDeleting = formData.ssn.length > value.length;
      let newRawSsn = formData.rawSsn;
      
      if (isDeleting) {
          newRawSsn = newRawSsn.slice(0, -1);
      } else {
          const addedChar = value.slice(-1);
          if (/\d/.test(addedChar) && newRawSsn.length < 9) {
            newRawSsn += addedChar;
          }
      }
      
      setFormData(prev => ({ 
        ...prev, 
        rawSsn: newRawSsn,
        ssn: handleSSNFormat(newRawSsn) 
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceChange = (title: string) => {
    setFormData(prev => {
      const services = prev.services.includes(title) 
        ? prev.services.filter(s => s !== title) 
        : [...prev.services, title];
      return { ...prev, services };
    });
  };

  const validateStep = (currentStep: number) => {
    if (currentStep === 0) {
      return formData.firstName && formData.lastName && formData.email && formData.phone.length === 14;
    }
    if (currentStep === 1) {
      return formData.streetAddress && formData.city && formData.zipCode && formData.livingSituation && formData.maritalStatus && formData.children !== '' && formData.race && formData.language && formData.legalIssues;
    }
    if (currentStep === 2) {
      return formData.referralSource && formData.pcp && formData.clientConcern && formData.services.length > 0 && formData.medications && formData.emergencyContact && formData.emergencyPhone.length === 14;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setFormError('');
      setStep(prev => Math.min(prev + 1, steps.length - 1));
    } else {
      setFormError('Please complete all required fields in this step in the correct format.');
    }
  };
  const prevStep = () => {
    setFormError('');
    setStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // The specific Power Automate Webhook URL
    const WEBHOOK_URL = "https://default1421340b2f6e47608a2b8ca3f62ba8.a4.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/b0337e460e8749988e9c4dcfa251c780/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wy-05HF6e-kbwI9sQREuhgbaa16Rq2Lwba-YW1PPYw0";

    try {
      const payload = {
        firstName: formData.firstName || "",
        lastName: formData.lastName || "",
        email: formData.email || "",
        phone: formData.phone || "",
        dob: formData.dob || "",
        ssn: formData.rawSsn || "",
        gender: formData.gender || "",
        streetAddress: formData.streetAddress || "",
        suite: formData.suite || "",
        city: formData.city || "",
        zipCode: formData.zipCode || "",
        livingSituation: formData.livingSituation || "",
        maritalStatus: formData.maritalStatus || "",
        children: formData.children ? String(formData.children) : "",
        race: formData.race || "",
        language: formData.language || "",
        employer: formData.employer || "",
        legalIssues: formData.legalIssues || "",
        referralSource: formData.referralSource || "",
        pcp: formData.pcp || "",
        services: formData.services.length > 0 ? formData.services.join(', ') : "",
        clientConcern: formData.clientConcern || "",
        medications: formData.medications || "",
        emergencyContact: formData.emergencyContact || "",
        emergencyPhone: formData.emergencyPhone || "",
        insuranceProvider: formData.insuranceProvider || "",
        insuranceId: formData.insuranceId || "",
        comments: formData.comments || "",
        submissionDateTime: currentDateTime,
        ipAddress: ipAddress
      };

      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error('Network response from logic app was not ok');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a secure error safely transmitting this data. Please call us at (508) 296-0523 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center border-t-8 border-brand-purple">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-3xl font-bold text-brand-indigo mb-4">Intake Request Received</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Thank you for reaching out. An Ignite Recovery team member will review your secure submission and contact you within 24–48 hours to schedule your initial assessment.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-brand-indigo text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
        >
          Return Home
        </button>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:outline-none transition-all text-sm";
  const labelClass = "block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide";

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      {/* Progress Bar */}
      <div className="bg-gray-50 p-6 sm:p-8 border-b border-gray-100">
        <div className="flex justify-between mb-4">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm mb-3 transition-all ${step >= i ? 'bg-brand-purple text-white shadow-lg' : 'bg-gray-200 text-gray-500'}`}>
                {i + 1}
              </div>
              <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center hidden sm:block ${step >= i ? 'text-brand-purple' : 'text-gray-400'}`}>
                {s}
              </span>
            </div>
          ))}
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-purple transition-all duration-700 ease-out"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-12">
        <div className="mb-8 text-sm text-slate-600 bg-lavender/10 p-4 rounded-xl border border-brand-lavender/20">
          <p>
            <strong className="text-brand-indigo font-bold">Admission Criteria:</strong> Must have a substance use disorder, a mental health/behavioral health condition of psychoactive substance use and be 18+ years old. Patient must not be experiencing active withdrawal symptoms and must be willing and able to actively engage in treatment.
          </p>
        </div>

        {step === 0 && (
          <div className="space-y-8 animate-fadeIn">
            <h3 className="text-2xl sm:text-3xl font-black text-brand-indigo border-b border-gray-100 pb-4">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>First Name <span className="text-red-500">*</span></label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>Last Name <span className="text-red-500">*</span></label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={inputClass} required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="sm:col-span-2">
                <label className={labelClass}>Email Address <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(XXX) XXX-XXXX" required />
              </div>
              <div>
                <label className={labelClass}>Date of Birth <span className="text-red-500">*</span></label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className={inputClass} required />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className={labelClass}>Gender Identity <span className="text-red-500">*</span></label>
                <select name="gender" value={formData.gender} onChange={handleChange} className={inputClass}>
                  <option value="">Select...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-8 animate-fadeIn">
            <h3 className="text-2xl sm:text-3xl font-black text-brand-indigo border-b border-gray-100 pb-4">Background & Living Situation</h3>
            
            <div>
              <label className={labelClass}>Street Address <span className="text-red-500">*</span></label>
              <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} className={inputClass} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className={labelClass}>Apt/Suite</label>
                <input type="text" name="suite" value={formData.suite} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>City <span className="text-red-500">*</span></label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Zip Code <span className="text-red-500">*</span></label>
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className={labelClass}>Current Living Situation <span className="text-red-500">*</span></label>
                <input type="text" name="livingSituation" value={formData.livingSituation} onChange={handleChange} className={inputClass} placeholder="e.g. Renting, Unhoused, Living with family" />
              </div>
              <div>
                <label className={labelClass}>Marital Status <span className="text-red-500">*</span></label>
                <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className={inputClass}>
                  <option value="">Select...</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Number of Children <span className="text-red-500">*</span></label>
                <input type="number" name="children" value={formData.children} onChange={handleChange} min="0" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className={labelClass}>Race/Ethnicity <span className="text-red-500">*</span></label>
                <select name="race" value={formData.race} onChange={handleChange} className={inputClass}>
                  <option value="">Select...</option>
                  <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                  <option value="Asian">Asian</option>
                  <option value="Black or African American">Black or African American</option>
                  <option value="Hispanic or Latino">Hispanic or Latino</option>
                  <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                  <option value="White">White</option>
                  <option value="Two or More Races">Two or More Races</option>
                  <option value="Prefer not to answer">Prefer not to answer</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Primary Language <span className="text-red-500">*</span></label>
                <select name="language" value={formData.language} onChange={handleChange} className={inputClass}>
                  <option value="">Select...</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="French / Haitian Creole">French / Haitian Creole</option>
                  <option value="Mandarin / Cantonese">Mandarin / Cantonese</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Current Employer</label>
                <input type="text" name="employer" value={formData.employer} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Current Legal Issues / Probate <span className="text-red-500">*</span></label>
              <input type="text" name="legalIssues" value={formData.legalIssues} onChange={handleChange} className={inputClass} placeholder="List any pending court dates, probation (Type None if applicable)" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-fadeIn">
            <h3 className="text-2xl sm:text-3xl font-black text-brand-indigo border-b border-gray-100 pb-4">Clinical Needs & Services</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Referral Source <span className="text-red-500">*</span></label>
                <input type="text" name="referralSource" value={formData.referralSource} onChange={handleChange} className={inputClass} placeholder="Who referred you to Ignite?" />
              </div>
              <div>
                <label className={labelClass}>Primary Care Physician (PCP) <span className="text-red-500">*</span></label>
                <input type="text" name="pcp" value={formData.pcp} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Client Concern (Why are you seeking treatment?) <span className="text-red-500">*</span></label>
              <textarea name="clientConcern" value={formData.clientConcern} onChange={handleChange} className={`${inputClass} min-h-[100px]`} required></textarea>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <label className="block text-sm font-bold text-brand-indigo mb-4 uppercase tracking-wide">Services Requested <span className="text-red-500">*</span> (Select all that apply)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {intakeServices.map((service) => (
                  <label key={service._id} className="flex items-center p-4 bg-white border border-gray-100 rounded-xl cursor-pointer hover:border-brand-lavender hover:bg-lavender/5 transition-all shadow-sm">
                    <input 
                      type="checkbox" 
                      onChange={() => handleServiceChange(service.title)}
                      checked={formData.services.includes(service.title)}
                      className="w-5 h-5 text-brand-purple rounded border-gray-300 focus:ring-brand-purple" 
                    />
                    <span className="ml-4 font-semibold text-slate-700">{service.title}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClass}>Current Medications <span className="text-red-500">*</span></label>
              <textarea name="medications" value={formData.medications} onChange={handleChange} className={`${inputClass} min-h-[100px]`} placeholder="List any current prescriptions (Type 'None' if not applicable)"></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Emergency Contact Name <span className="text-red-500">*</span></label>
                <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Emergency Phone <span className="text-red-500">*</span></label>
                <input type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} placeholder="(XXX) XXX-XXXX" className={inputClass} />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 animate-fadeIn">
            <h3 className="text-2xl sm:text-3xl font-black text-brand-indigo border-b border-gray-100 pb-4">Insurance & Submission</h3>
            
            <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-800 text-sm rounded-r-lg">
              <strong>Notice:</strong> We accept all MassHealth and Tufts health plans.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Insurance Provider <span className="text-red-500">*</span></label>
                <select name="insuranceProvider" value={formData.insuranceProvider} onChange={handleChange} className={inputClass} required>
                  <option value="">Select your provider...</option>
                  {insuranceProviders.map((provider) => (
                    <option key={provider._id} value={provider.title}>{provider.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Insurance ID / Member Number</label>
                <input type="text" name="insuranceId" value={formData.insuranceId} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className={labelClass}>Social Security Number <span className="text-red-500">*</span></label>
                <input type="text" name="ssn" value={formData.ssn} onChange={handleChange} placeholder="XXX-XX-XXXX" className={inputClass} required />
              </div>
            </div>

            <div>
              <label className={labelClass}>Additional Comments or Concerns</label>
              <textarea name="comments" value={formData.comments} onChange={handleChange} className={`${inputClass} min-h-[100px]`}></textarea>
            </div>

            <div className="bg-gray-50/80 p-6 sm:p-8 rounded-2xl text-xs text-slate-600 space-y-4 border border-gray-200">
              <p className="flex items-start">
                <CheckCircle size={16} className="text-brand-magenta mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Payee responsibility for no show/late cancellation policy:</strong> We work closely with your insurance company to ensure payment for our services. In the event your insurance company rejects the claims (deductible, ineligibility, etc.) you are responsible for the payment for services rendered. Please be advised that you must provide 24-hour notice for cancellation, or risk being charged for the missed appointment.</span>
              </p>
              <p className="flex items-start">
                <CheckCircle size={16} className="text-brand-magenta mr-3 mt-0.5 flex-shrink-0" />
                <span>I hereby give permission to furnish information, including a psychiatric diagnosis to my insurance company. In consideration of services rendered, or to be rendered, I hereby assign and transfer to any benefits.</span>
              </p>
            </div>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center relative">
          {formError && <div className="absolute -top-12 left-0 right-0 text-center text-red-600 font-bold bg-red-50 py-2 rounded-lg border border-red-200">{formError}</div>}

          {step > 0 ? (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center px-6 py-3 text-slate-500 font-bold hover:text-brand-purple hover:bg-lavender/10 rounded-full transition-all w-full sm:w-auto justify-center mb-4 sm:mb-0"
            >
              <ChevronLeft className="mr-1" /> Back
            </button>
          ) : <div className="hidden sm:block" />}

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center bg-brand-indigo text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-brand-purple transition-all w-full sm:w-auto justify-center"
            >
              Next Step <ChevronRight className="ml-1" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center ${isSubmitting ? 'bg-gray-400' : 'bg-brand-magenta hover:bg-[#a60b6d] hover:-translate-y-1'} text-white px-12 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto justify-center`}
            >
              {isSubmitting ? <><Loader2 className="animate-spin mr-2" size={20} /> Transmitting...</> : 'Submit Securely'}
            </button>
          )}
        </div>

        {/* Security Meta Footnote */}
        <div className="mt-8 pt-4 text-center text-xs text-gray-400 font-mono tracking-wide flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-2 sm:space-y-0 opacity-60">
          <span className="flex items-center justify-center"><CheckCircle size={10} className="mr-1" /> Secure Session</span>
          <span>{currentDateTime}</span>
          <span>IP: {ipAddress || "Fetching..."}</span>
        </div>
      </form>
    </div>
  );
};

export default IntakeForm;
