import React from 'react';
import { HelpCircle, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQs — Recovery Support & Outpatient Counseling | Ignite Recovery',
  description: 'Common questions about recovery support, outpatient counseling, intake process, insurance, and what to expect at Ignite Recovery in Fall River, MA.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/faq'
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need a referral to get services at Ignite Recovery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nope. You can reach out directly and we'll get you started. That said, we also work closely with clinicians, courts, hospitals, and community organizations who refer clients to us regularly."
      }
    },
    {
      "@type": "Question",
      "name": "Does Ignite Recovery accept MassHealth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We are a MassHealth-covered provider. If you have MassHealth, most or all of our services will be covered. Not sure about your coverage? Call us and we'll help you figure it out."
      }
    },
    {
      "@type": "Question",
      "name": "What happens when I first reach out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We'll connect with you within 24 to 48 hours, do a brief intake to learn about your situation and your goals, and get you matched with the right services. It's a conversation, not an interrogation."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a waitlist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work hard to make sure there isn't one. If you reach out, we're going to do everything we can to get you connected quickly."
      }
    },
    {
      "@type": "Question",
      "name": "What services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer evening IOP, outpatient counseling, recovery coaching, recovery support navigation, and CSP-JI services for justice-involved individuals. Head to our Services page to learn more about each one."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to be in active recovery to get services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We meet people at every stage, including people who are still figuring things out. You don't have to have it together to reach out."
      }
    },
    {
      "@type": "Question",
      "name": "Is what I share confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Your privacy is protected under state and federal confidentiality laws, including 42 CFR Part 2, which provides extra protections specifically for substance use treatment records. You can learn more about your rights under Massachusetts law at mass.gov/confidentiality-of-substance-use-disorder-patient-records."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with justice-involved individuals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our CSP-JI program is built specifically for people navigating recovery and the criminal justice system at the same time. We work directly with courts, probation, parole, and reentry programs."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're based in Fall River, MA and serve the surrounding South Coast communities. Not sure if we serve your area? Reach out and we'll let you know."
      }
    }
  ]
};

const Faq: React.FC = () => {
    return (
        <div className="pt-32 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Header Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h1 className="text-brand-magenta font-black tracking-widest uppercase mb-4">F.A.Q.</h1>
                <h2 className="text-5xl lg:text-7xl font-black text-brand-indigo mb-8">Frequently Asked Questions</h2>
                <div className="w-24 h-2 bg-brand-purple mx-auto rounded-full"></div>
            </section>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <p className="text-xl text-slate-600 text-center mb-12">
                    We know reaching out can feel like a big step. Here are answers to some of the questions we hear most often.
                </p>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-brand-purple mb-4">Do I need a referral to get services at Ignite Recovery?</h4>
                    <p className="text-slate-600 leading-relaxed">Nope. You can reach out directly and we'll get you started. That said, we also work closely with clinicians, courts, hospitals, and community organizations who refer clients to us regularly.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-brand-purple mb-4">Does Ignite Recovery accept MassHealth?</h4>
                    <p className="text-slate-600 leading-relaxed">Yes. We are a MassHealth-covered provider. If you have MassHealth, most or all of our services will be covered. Not sure about your coverage? Call us and we'll help you figure it out.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-brand-purple mb-4">What happens when I first reach out?</h4>
                    <p className="text-slate-600 leading-relaxed">We'll connect with you within 24 to 48 hours, do a brief intake to learn about your situation and your goals, and get you matched with the right services. It's a conversation, not an interrogation.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-brand-purple mb-4">Is there a waitlist?</h4>
                    <p className="text-slate-600 leading-relaxed">We work hard to make sure there isn't one. If you reach out, we're going to do everything we can to get you connected quickly.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-brand-purple mb-4">What services do you offer?</h4>
                    <p className="text-slate-600 leading-relaxed">We offer evening IOP, outpatient counseling, recovery coaching, recovery support navigation, and CSP-JI services for justice-involved individuals. Head to our Services page to learn more about each one.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-brand-purple mb-4">Do I have to be in active recovery to get services?</h4>
                    <p className="text-slate-600 leading-relaxed">No. We meet people at every stage, including people who are still figuring things out. You don't have to have it together to reach out.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-brand-purple mb-4">Is what I share confidential?</h4>
                    <p className="text-slate-600 leading-relaxed">Yes. Your privacy is protected under state and federal confidentiality laws, including 42 CFR Part 2, which provides extra protections specifically for substance use treatment records. You can learn more about your rights under Massachusetts law at <a href="https://www.mass.gov/info-details/confidentiality-of-substance-use-disorder-patient-records" target="_blank" rel="noopener noreferrer" className="text-brand-magenta font-bold hover:underline">mass.gov/confidentiality-of-substance-use-disorder-patient-records</a>.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-brand-purple mb-4">Do you work with justice-involved individuals?</h4>
                    <p className="text-slate-600 leading-relaxed">Absolutely. Our CSP-JI program is built specifically for people navigating recovery and the criminal justice system at the same time. We work directly with courts, probation, parole, and reentry programs.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-brand-purple mb-4">What areas do you serve?</h4>
                    <p className="text-slate-600 leading-relaxed">We're based in Fall River, MA and serve the surrounding South Coast communities. Not sure if we serve your area? Reach out and we'll let you know.</p>
                </div>

                <div className="mt-16 bg-brand-indigo rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-purple/20 skew-x-12 translate-x-10"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-black mb-6">Still have questions?</h2>
                        <p className="text-lavender text-xl mb-10 leading-relaxed">
                            Every single one of us had questions before we reached out. Let's talk about what recovery could look like for you.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/intake" className="inline-flex items-center justify-center bg-brand-magenta text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-transform">
                                Start Your Intake
                            </Link>
                            <a href="tel:5082960523" className="inline-flex items-center justify-center bg-white text-brand-indigo px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-transform">
                                <Phone className="mr-2" size={20} /> Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
