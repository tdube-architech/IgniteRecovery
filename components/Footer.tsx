"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, X } from 'lucide-react';

const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  return (
    <footer className="bg-brand-indigo text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col items-start">
            <p className="text-white font-bold leading-relaxed mb-8 text-xl">
              Restoring agency and delivering care with integrity in Bristol County.
            </p>
            <div className="mb-8">
              <p className="text-lavender text-xs uppercase tracking-widest font-bold mb-3">Licensed By</p>
              <div className="bg-white p-4 rounded-xl inline-block">
                <img
                  src="/bsas-logo-v2.png"
                  alt="Bureau of Substance Addiction Services"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-white/60 text-[10px] mt-2 max-w-[200px] leading-tight uppercase tracking-wider">
                Bureau of Substance Addiction Services
              </p>
            </div>
            <div className="flex space-x-6">
              {/* <a href="#" className="text-lavender hover:text-brand-magenta transition-colors"><Facebook size={28} /></a>
              <a href="#" className="text-lavender hover:text-brand-magenta transition-colors"><Instagram size={28} /></a>
              <a href="#" className="text-lavender hover:text-brand-magenta transition-colors"><Linkedin size={28} /></a> */}
            </div>


          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4 text-lavender text-lg font-medium">
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/intake" className="hover:text-white transition-colors">Online Intake</Link></li>
              <li><Link href="/insurance" className="hover:text-white transition-colors">Insurance</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Career Opportunities</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-6 text-lavender text-lg">
              <li className="flex items-start space-x-4">
                <MapPin className="mt-1 flex-shrink-0 text-brand-magenta" size={24} />
                <span>672 Bedford St,<br />Fall River, MA 02720</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="flex-shrink-0 text-brand-magenta" size={24} />
                <a href="tel:5082960523" className="hover:text-white transition-colors font-bold">(508) 296-0523</a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="flex-shrink-0 text-brand-magenta" size={24} />
                <a href="mailto:info@ignitemyrecovery.com" className="hover:text-white transition-colors">info@ignitemyrecovery.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white uppercase tracking-wider">Our Ethics</h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-lavender mb-6">
                Accepted: <strong>MassHealth Standard, CarePlus, Family Assistance, CCP.</strong>
              </p>
              <div className="flex items-center text-brand-magenta font-black mb-2 uppercase text-sm tracking-tighter">
                <Clock size={16} className="mr-2" />
                Operating Hours
              </div>
              <p className="text-white font-medium">Mon-Fri: 9:00 AM - 5:00 PM</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-brand-magenta font-black uppercase text-xs tracking-tighter mb-2">Crisis Resources</p>
                <p className="text-white/80 text-sm font-medium">Suicide & Crisis Lifeline: Call or text <strong className="text-white bg-red-600 px-1 rounded">988</strong></p>
                <p className="text-white/80 text-sm mt-1 font-medium">Medical Emergency: Call <strong className="text-white bg-red-600 px-1 rounded">911</strong></p>
              </div>
            </div>


          </div>
        </div>



        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-lavender font-medium">
          <p>© {new Date().getFullYear()} Ignite Recovery. Integrity in Care.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <button onClick={(e) => { e.preventDefault(); setIsPrivacyOpen(true); }} className="hover:text-white transition-colors">Privacy</button>
            <button onClick={(e) => { e.preventDefault(); setIsTermsOpen(true); }} className="hover:text-white transition-colors">Terms</button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-brand-indigo/60 backdrop-blur-sm"
            onClick={() => setIsPrivacyOpen(false)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-fadeInUp">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-2xl font-black text-brand-indigo uppercase tracking-tight">Privacy Policy</h2>
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="p-2 text-slate-400 hover:text-brand-magenta hover:bg-brand-magenta/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto text-slate-600 prose prose-brand max-w-none text-left">
              <h3 className="text-xl font-bold text-brand-indigo mt-0">Introduction</h3>
              <p>Welcome to Ignite Recovery, where we are committed to ensuring your privacy and protecting your personal information. We implement strict access controls and regular audits to ensure that user data is not shared without authorization. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website and engage with our content. By using our site, you agree to the terms outlined in this policy.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Information We Collect</h3>
              <h4 className="font-bold text-brand-purple">Personal Information</h4>
              <p>When you visit our website, we do not share mobile information with third parties for marketing purposes. We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Contact Information:</strong> Name, email address, phone number.</li>
                <li><strong>Account Information:</strong> Username, password, and any other details you provide when creating an account or subscribing to our services.</li>
                <li><strong>Communication Records:</strong> Any messages or correspondence with our support team.</li>
                <li><strong>Mobile Information Sharing:</strong> We do not share mobile information with third parties for marketing purposes.</li>
                <li><strong>Data Transfer Limitations:</strong> We limit consumer data transfers and only share data when necessary for Service provision and Legal compliance.</li>
              </ul>
              <p>Additionally, we maintain confidentiality and implement security measures.<br />
                <strong>Opt-Out Instructions:</strong> To opt out of future SMS communications, text "STOP" or "UNSUBSCRIBE".</p>

              <h4 className="font-bold text-brand-purple mt-6">Non-Personal Information</h4>
              <p>We also collect non-personal information that helps us understand how our website is used, such as:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Usage Data:</strong> IP address, browser type, operating system, referring URLs, pages visited, and time spent on the site.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to track your interactions with our website and enhance your experience.</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Use of De-Identified Information for Program Improvement and Research</h3>
              <p>As part of your care, information about your treatment may be collected and securely stored in our systems. Occasionally, we may use de-identified data—meaning that all personal identifiers have been removed—for purposes such as clinical research, program evaluation, or quality improvement initiatives. These efforts help us enhance our services and contribute to broader scientific understanding.</p>
              <p>Your privacy is our top priority. Any data used for these purposes will not include your name, contact information, or any other details that could identify you. Participation in these efforts is entirely voluntary and will not affect the quality of care you receive.</p>
              <p>If you have any questions or concerns regarding this, please speak with your provider.</p>

              <h4 className="font-bold text-brand-purple mt-6">Here’s what you can expect from us:</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>We will support you and help you to establish a plan for life in recovery.</li>
                <li>We will help you connect with people who can help you succeed in recovery, and we will explore services that you may want to consider using to support you in attaining a comfortable recovery.</li>
                <li>We will keep our relationship with you confidential, but we will acknowledge your participation in this program if you request that we do so.</li>
                <li>We are legally and ethically obligated to report a client’s disclosure of personal involvement with child or elder abuse/neglect, threatened self-harm, or harm to others.</li>
                <li>Our staff will be available to support you within reason. Please respect our staff’s personal boundaries. If you are unable to do so, you could be assigned to a different staff member or become no longer eligible to receive recovery services from IGNITE RECOVERY.</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Provide and Improve Services:</strong> Deliver the services and content you request, enhance user experience, and improve our website.</li>
                <li><strong>Communication:</strong> Respond to your inquiries, send you updates, newsletters, and other relevant information.</li>
                <li><strong>Analytics:</strong> Analyze usage patterns to improve website functionality and performance.</li>
                <li><strong>Security:</strong> Protect our site and users from fraudulent or malicious activities.</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Data Sharing and Disclosure</h3>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Service Providers:</strong> With third-party vendors who assist us in operating our website and delivering services, under strict confidentiality agreements.</li>
                <li><strong>Legal Compliance:</strong> When required by law or to comply with legal processes, protect our rights or the safety of others.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
                <li><strong>Consumer Consent:</strong> We do not claim consumer consent for sharing personal information with third parties for marketing purposes.</li>
                <li><strong>Data Transfer Commitment:</strong> We commit not to transfer consumer data to external organizations except as outlined in this policy.</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Security</h3>
              <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Your Choices and Rights</h3>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Access and Update:</strong> You may access, update, or correct your personal information by contacting us.</li>
                <li><strong>Opt-Out:</strong> You can opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.</li>
                <li><strong>Data Deletion:</strong> You may request the deletion of your personal information, subject to legal and operational constraints.</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Third-Party Links</h3>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Children's Privacy</h3>
              <p>Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware of any information collected from children under 18, we will take steps to delete it.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Changes to This Privacy Policy</h3>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website with a revised effective date.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Contact Us</h3>
              <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
              <p className="font-medium mt-4">
                <strong>Ignite Recovery</strong><br />
                Email: info@ignitemyrecovery.com<br />
                Phone: (508) 296-0523<br />
                Address: 672 Bedford St. Fall River, MA 02720
              </p>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="bg-brand-indigo text-white px-8 py-3 rounded-full font-bold hover:bg-brand-purple transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Terms of Service Modal */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-brand-indigo/60 backdrop-blur-sm"
            onClick={() => setIsTermsOpen(false)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-fadeInUp">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-2xl font-black text-brand-indigo uppercase tracking-tight">Terms of Service</h2>
              <button
                onClick={() => setIsTermsOpen(false)}
                className="p-2 text-slate-400 hover:text-brand-magenta hover:bg-brand-magenta/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto text-slate-600 prose prose-brand max-w-none text-left">
              <h3 className="text-xl font-bold text-brand-indigo mt-0">Introduction</h3>
              <p>Welcome to Ignite Recovery. By engaging with our services, website, or community offerings, you are agreeing to these Terms of Service. Please read them carefully. If you do not agree with any part of these terms, you should discontinue use of our site and services immediately.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Healthcare Disclaimer</h3>
              <p>The content provided on the Ignite Recovery website is for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health providers with any questions you may have regarding a medical condition.</p>
              <p>If you think you may have a medical emergency, call your doctor or 911 immediately. Ignite Recovery does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the site.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Use of Services</h3>
              <p>By using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information during intake and assessment processes.</li>
                <li>Maintain the confidentiality of your personal health information to the extent within your control.</li>
                <li>Respect the privacy and confidentiality of other clients and staff members you may interact with.</li>
                <li>Engage respectfully with staff and volunteers. We reserve the right to terminate services if boundaries are consistently violated or if the safety of our staff is compromised.</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Intellectual Property Rights</h3>
              <p>All content on this website, including but not limited to text, graphics, logos, icons, images, and software, is the property of Ignite Recovery or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">User Conduct</h3>
              <p>You agree not to use our website to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Post or transmit any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, or otherwise objectionable.</li>
                <li>Impersonate any person or entity, including an Ignite Recovery employee.</li>
                <li>Attempt to gain unauthorized access to our systems, user accounts, or computer networks.</li>
                <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Limitation of Liability</h3>
              <p>Ignite Recovery shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our website or services. This includes damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Indemnification</h3>
              <p>You agree to indemnify, defend, and hold harmless Ignite Recovery, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses relating to or arising out of your use of or inability to use the site or services, any user postings made by you, your violation of any terms of this agreement, or your violation of any rights of a third party.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the Commonwealth of Massachusetts. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Changes to Terms</h3>
              <p>Ignite Recovery reserves the right, in its sole discretion, to change the Terms under which our website and services are offered. The most current version of the Terms will supersede all previous versions. We encourage you to periodically review the Terms to stay informed of our updates.</p>

              <h3 className="text-xl font-bold text-brand-indigo mt-8">Contact Information</h3>
              <p>If you have questions about these Terms, please contact us at:</p>
              <p className="font-medium mt-4">
                <strong>Ignite Recovery</strong><br />
                Email: info@ignitemyrecovery.com<br />
                Phone: (508) 296-0523<br />
                Address: 672 Bedford St. Fall River, MA 02720
              </p>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end">
              <button
                onClick={() => setIsTermsOpen(false)}
                className="bg-brand-indigo text-white px-8 py-3 rounded-full font-bold hover:bg-brand-purple transition-colors"
              >
                Accept & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
