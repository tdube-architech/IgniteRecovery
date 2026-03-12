import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PartnershipForm from '../../components/PartnershipForm';

export const metadata: Metadata = {
  title: 'Our Providers & Counselors | Ignite Recovery, Fall River MA',
  description: 'Meet our licensed counselors and recovery coaches. Experienced, compassionate care for substance use disorders in Fall River & Attleboro, Massachusetts.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/providers'
  }
};

const Providers: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="text-brand-magenta font-black tracking-widest uppercase text-sm">Partnership</span>
                    <h1 className="text-5xl lg:text-7xl font-black text-brand-indigo mt-4 mb-6">Partners & Providers: Let's Work Together</h1>
                    <div className="w-24 h-2 bg-brand-purple mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Content Section */}
                    <div className="space-y-12 text-lg text-slate-700 leading-relaxed font-medium">
                        <section>
                            <p className="mb-6">
                                Recovery doesn't happen in isolation. Neither does good care.
                            </p>
                            <p className="mb-6">
                                At Ignite Recovery, we believe the strongest outcomes happen when providers, clinicians, community organizations, and recovery support services are working together, not in silos. We are committed to being an active, reliable, and connected partner in the recovery-oriented system of care across Fall River and the South Coast.
                            </p>
                            <p>
                                Whether you're a hospital, a treatment program, a court, a probation officer, a housing provider, or a community organization, we want to know you. Because when we know each other, our clients don't fall through the cracks.
                            </p>
                        </section>

                        <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-black text-brand-indigo mb-4">Who We Work With</h3>
                            <p>
                                We actively partner with and accept referrals from outpatient and inpatient treatment programs, detox and residential facilities, hospitals and emergency departments, courts, probation, and parole, reentry and diversion programs, housing and shelter providers, primary care and behavioral health providers, schools, DYS, DCF, and other community-based organizations.
                            </p>
                        </section>

                        <section className="bg-brand-indigo p-8 rounded-[2rem] text-white shadow-xl">
                            <h3 className="text-2xl font-black mb-4">What You Can Expect From Us</h3>
                            <p className="text-lavender mb-4">
                                We take referrals seriously. When you send someone to us, we follow up fast, communicate back to you, and keep the connection going. We show up to coalition meetings, care conferences, and community tables because we believe coordination isn't optional, it's part of the job.
                            </p>
                            <p className="text-lavender font-bold">
                                We're not here to compete. We're here to collaborate. The more connected our system is, the better chance everyone in it has.
                            </p>
                        </section>

                    </div>

                    {/* Form Section */}
                    <div className="sticky top-32 bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl border border-gray-100">
                        <h3 className="text-3xl font-black text-brand-indigo mb-2">Start a Partnership Conversation</h3>
                        <p className="text-slate-500 mb-8 font-medium">
                            If you want to establish a formal partnership or just get to know what we do, we'd love to hear from you. Reach out via phone at <a href="tel:5082960523" className="text-brand-magenta font-bold hover:underline">(508) 296-0523</a> or use the form below. We'll get back to you within 24 hours.
                        </p>

                        <PartnershipForm />

                        {/* Referral Link */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h4 className="text-2xl font-black text-brand-indigo mb-2">Looking to make a referral?</h4>
                            <p className="text-slate-500 mb-6 font-medium">
                                If you have a client who could benefit from our services, please use our secure online intake form to start the referral process.
                            </p>
                            <Link href="/intake" className="w-full bg-brand-indigo text-white py-4 rounded-xl font-black text-lg flex items-center justify-center hover:bg-brand-purple transition-all shadow-lg transform hover:-translate-y-1">
                                Go to Intake Form <ArrowRight className="ml-3" size={24} />
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Providers;
