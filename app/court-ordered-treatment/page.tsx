import React from 'react';
import { Phone, ArrowRight, Gavel, FileSignature, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Court-Ordered Treatment & Counseling | Ignite Recovery, Fall River MA',
  description: 'Ignite Recovery provides court-ordered substance use treatment, probation-mandated counseling, and official reporting in Fall River, MA. Fast intake available.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/court-ordered-treatment'
  }
};

const CourtOrderedLanding: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="text-brand-magenta font-black tracking-widest uppercase text-sm">Legal & Probation Support</span>
                    <h1 className="text-5xl lg:text-7xl font-black text-brand-indigo mt-4 mb-6">Court-Ordered Treatment</h1>
                    <div className="w-24 h-2 bg-brand-purple mx-auto rounded-full"></div>
                    <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        Fulfilling court requirements shouldn't be confusing. We provide recognized, compliant substance use treatment and counseling with direct reporting capabilities for probation, parole, and DCF.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                            <Gavel size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-indigo mb-3">Probation & Parole</h3>
                        <p className="text-slate-600 font-medium">Fulfill conditions of release with our licensed outpatient counseling and recovery protocols.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-purple-50 text-brand-purple rounded-2xl flex items-center justify-center mb-6">
                            <FileSignature size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-indigo mb-3">Official Reporting</h3>
                        <p className="text-slate-600 font-medium">We handle monthly progress reports, compliance letters, and direct communication with your probation officer.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-indigo mb-3">DCF Mandates</h3>
                        <p className="text-slate-600 font-medium">Satisfy Department of Children & Families requirements with our approved wraparound support services.</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-brand-indigo rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
                    
                    <div className="lg:w-1/2 relative z-10 space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-black">How to Get Started</h2>
                        <div className="space-y-4 text-lavender font-medium text-lg">
                            <p>1. Call us or submit an intake form and specify that this is court-ordered.</p>
                            <p>2. Bring your court paperwork or probation officer's contact information to your intake assessment.</p>
                            <p>3. We will evaluate your needs and set up an approved treatment schedule.</p>
                            <p>4. We handle the reporting. You focus on your recovery.</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative z-10 bg-white rounded-3xl p-8 lg:p-10 text-center shadow-xl w-full">
                        <h3 className="text-2xl font-black text-brand-indigo mb-4">Fast-Track Your Intake</h3>
                        <p className="text-slate-500 font-medium mb-8">
                            We know there are strict deadlines. Our team prioritizes court-ordered evaluations to keep you compliant.
                        </p>
                        <a href="tel:5082960523" className="w-full mb-4 inline-flex items-center justify-center bg-brand-indigo text-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-transform">
                            <Phone className="mr-2" /> Call (508) 296-0523
                        </a>
                        <Link href="/intake" className="w-full inline-flex items-center justify-center bg-brand-magenta text-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-transform border border-transparent">
                            Submit Intake Form <ArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourtOrderedLanding;
