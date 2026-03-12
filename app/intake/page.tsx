import React from 'react';
import type { Metadata } from 'next';
import IntakeForm from '../../components/IntakeForm';
import { Phone, Clock, FileCheck, ShieldCheck, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Start Your Recovery Journey — Free Intake | Ignite Recovery, Fall River MA',
  description: 'Start your recovery journey today. Complete our confidential intake form or call (508) 296-0523. MassHealth accepted. No referral needed.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/intake'
  }
};

const IntakePage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Instructions Column */}
          <div className="lg:col-span-1">
            <h1 className="text-4xl font-black text-brand-indigo mb-6">Patient Intake</h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We've made our intake process as straightforward as possible. Once submitted, our team will review your details to ensure we are the right fit for your recovery journey. <strong className="text-brand-magenta">This takes about 5 minutes.</strong>
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="text-brand-purple" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-indigo text-lg">Fast Response</h4>
                  <p className="text-slate-500 text-sm mt-1">Expect a callback from an intake specialist within 24–48 hours.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <ShieldCheck className="text-brand-purple" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-indigo text-lg">Confidential & Secure</h4>
                  <p className="text-slate-500 text-sm mt-1">Your data is handled with the highest level of integrity and HIPAA compliance.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <FileCheck className="text-brand-purple" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-indigo text-lg">MassHealth Friendly</h4>
                  <p className="text-slate-500 text-sm mt-1">We verify coverage during the first call. Most MassHealth plans accepted.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-brand-indigo rounded-2xl text-white">
              <h4 className="font-bold text-xl mb-4">Prefer to talk now?</h4>
              <p className="text-lavender mb-6">Our specialists are available during business hours for phone intakes.</p>
              <div className="flex flex-col gap-4">
                <a href="tel:5082960523" className="flex items-center justify-center w-full bg-brand-magenta py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all">
                  <Phone className="mr-2" size={20} /> Call Now
                </a>
                <a href="sms:5082960523" className="flex items-center justify-center w-full border-2 border-white/20 text-white py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                  <MessageSquare className="mr-2" size={20} /> Text Us
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <IntakeForm />
            <div className="mt-8 text-center text-slate-400 text-sm">
              If you are experiencing a life-threatening emergency, please call 911 immediately.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakePage;
