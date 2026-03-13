import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Briefcase, HeartHandshake, Users, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Career Opportunities | Ignite Recovery',
  description: 'Join the Ignite Recovery team in Fall River, MA. We are looking for passionate individuals with lived experience to provide clinical skill and genuine heart to recovery support.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/careers'
  }
};

const CareersPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="text-brand-magenta font-black tracking-widest uppercase text-sm">Join Our Team</span>
                    <h1 className="text-5xl lg:text-7xl font-black text-brand-indigo mt-4 mb-6">Career Opportunities</h1>
                    <h2 className="text-3xl font-black text-brand-purple mb-6">Come Work With Us</h2>
                    <div className="w-24 h-2 bg-brand-magenta mx-auto rounded-full"></div>
                </div>

                {/* Intro */}
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 mb-16 animate-fadeInUp delay-100">
                    <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
                        If you're passionate about recovery, tired of systems that don't work, and ready to be part of something that actually makes a difference — you might be exactly who we're looking for.
                    </p>
                    <p className="text-xl text-slate-700 leading-relaxed font-medium">
                        <strong className="text-brand-indigo font-black">Ignite Recovery</strong> is a growing, women-owned, community-rooted organization in Fall River, MA. We're building a team of people who bring lived experience, clinical skill, and genuine heart to the work of recovery support. We don't just talk about meeting people where they are. We hire people who already know how to do it.
                    </p>
                </div>

                {/* Openings */}
                <div className="mb-20 animate-fadeInUp delay-200">
                    <h3 className="text-4xl font-black text-brand-indigo mb-10 flex items-center">
                        <Briefcase className="mr-4 text-brand-magenta" size={40} />
                        Current Openings
                    </h3>
                    
                    <div className="space-y-8">
                        {/* Job 1 */}
                        <div className="bg-white rounded-3xl p-8 shadow-md border-l-8 border-brand-magenta hover:shadow-xl transition-shadow">
                            <h4 className="text-2xl font-black text-brand-indigo mb-4">Recovery Coach</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Our Recovery Coaches are the backbone of what we do. You've lived it, you've made it through, and now you want to help others do the same. You'll work one-on-one with clients to build goals, provide accountability, and show up consistently as a trusted peer. <strong className="text-brand-indigo">Lived experience in recovery required. Certification as a Recovery Coach preferred or willingness to obtain.</strong>
                            </p>
                        </div>

                        {/* Job 2 */}
                        <div className="bg-white rounded-3xl p-8 shadow-md border-l-8 border-brand-purple hover:shadow-xl transition-shadow">
                            <h4 className="text-2xl font-black text-brand-indigo mb-4">Recovery Support Navigator</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Our Navigators help clients cut through the chaos of systems, services, and paperwork to get what they actually need. You know the South Coast landscape, you're a connector by nature, and you don't take no for an answer when a client needs help. <strong className="text-brand-indigo">Experience in case management, social services, or community health preferred.</strong>
                            </p>
                        </div>

                        {/* Job 3 */}
                        <div className="bg-white rounded-3xl p-8 shadow-md border-l-8 border-brand-indigo hover:shadow-xl transition-shadow">
                            <h4 className="text-2xl font-black text-brand-indigo mb-4">CSP-JI Specialist</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Our CSP-JI Specialists work with individuals navigating recovery and the justice system at the same time. You understand reentry, you can work alongside courts and probation, and you bring a trauma-informed, strengths-based approach to every interaction. <strong className="text-brand-indigo">Experience working with justice-involved populations required.</strong>
                            </p>
                        </div>

                        {/* Job 4 */}
                        <div className="bg-white rounded-3xl p-8 shadow-md border-l-8 border-brand-lavender text-slate-800 hover:shadow-xl transition-shadow">
                            <h4 className="text-2xl font-black text-brand-indigo mb-4">Licensed Clinician</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We're looking for a licensed clinician who believes in integrated, community-based care and wants to be part of a team that does things differently. <strong className="text-brand-indigo">LICSW, LMHC, or LADC required. Experience in substance use treatment and trauma-informed care strongly preferred.</strong>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Ignite */}
                <div className="bg-brand-indigo rounded-[3rem] p-10 md:p-16 text-white mb-20 shadow-2xl relative overflow-hidden animate-fadeInUp delay-300">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-magenta/20 rounded-full blur-2xl pointer-events-none"></div>
                    
                    <h3 className="text-4xl font-black mb-8 flex items-center relative z-10">
                        <HeartHandshake className="mr-4 text-brand-magenta" size={40} />
                        Why Ignite Recovery
                    </h3>
                    <div className="space-y-6 text-lg text-lavender font-medium relative z-10">
                        <p>
                            We're not a revolving door. We invest in our team, we support your growth, and we actually mean it when we say the work matters. You'll be part of a mission-driven organization that values your experience, respects your voice, and is building something worth being part of.
                        </p>
                        <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mt-8">
                            <p className="text-2xl text-white font-black italic text-center w-full leading-snug">
                                "People in recovery built this.<br/>People in recovery work here.<br/>And people in recovery lead it."
                            </p>
                        </div>
                    </div>
                </div>

                {/* How to Apply */}
                <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100 text-center animate-fadeInUp delay-400">
                    <Users className="mx-auto text-brand-magenta mb-6" size={56} />
                    <h3 className="text-3xl font-black text-brand-indigo mb-6">How to Apply</h3>
                    <p className="text-lg text-slate-600 mb-8 font-medium">
                        Send your resume and a brief note about why you want to join the Ignite Recovery team to <a href="mailto:HR@ignitemyrecovery.com" className="text-brand-magenta font-bold hover:underline">HR@ignitemyrecovery.com</a>. We review every application and we'll be in touch.
                    </p>
                    <a href="mailto:HR@ignitemyrecovery.com" className="inline-flex bg-brand-magenta text-white px-10 py-5 rounded-full font-black text-xl hover:bg-brand-purple transition-all transform hover:scale-105 shadow-xl">
                        Apply Now
                    </a>
                    
                    <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-center text-slate-500 font-medium text-sm text-left max-w-2xl mx-auto">
                        <ShieldCheck className="mr-4 text-brand-purple shrink-0" size={32} />
                        <p>Ignite Recovery is an equal opportunity employer. We strongly encourage applications from individuals with lived experience in recovery.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CareersPage;
