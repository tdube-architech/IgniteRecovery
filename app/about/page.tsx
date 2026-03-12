import React from 'react';
import type { Metadata } from 'next';
import { Target, CheckCircle2, ShieldCheck, HeartHandshake, Zap, Compass, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Ignite Recovery — Our Team & Mission | Fall River, MA',
  description: 'Meet the Ignite Recovery team — licensed counselors providing personalized recovery support in Fall River, MA. Serving adults 18+ at any stage of recovery.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/about'
  }
};

const About: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Sequence */}
                <div className="text-center mb-20 animate-fadeInUp">
                    <span className="text-brand-magenta font-black tracking-[0.3em] uppercase text-sm">Our Core</span>
                    <h1 className="text-5xl lg:text-7xl font-black text-brand-indigo mt-4 mb-6">About Ignite</h1>
                    <div className="w-24 h-2 bg-brand-purple mx-auto rounded-full mb-8"></div>
                    <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest mt-8">
                        <span>Our Story</span>
                        <span className="text-brand-magenta">•</span>
                        <span>Mission & Vision</span>
                        <span className="text-brand-magenta">•</span>
                        <span>Philosophy</span>
                        <span className="text-brand-magenta">•</span>
                        <span>Values</span>
                        <span className="text-brand-magenta">•</span>
                        <span>Goals</span>
                    </div>
                </div>

                <div className="space-y-24">

                    {/* About Us Narrative */}
                    <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100">
                        <div className="max-w-4xl mx-auto space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed">
                            <p className="font-medium text-brand-indigo text-2xl mb-8">
                                Ignite Recovery was built on a simple belief: people deserve support that actually meets them where they are.
                            </p>
                            <p>
                                We're a licensed outpatient recovery support program serving adults 18+ in Fall River, MA and the surrounding South Coast communities. We offer a full continuum of recovery services, from peer coaching and navigation to outpatient counseling and justice-involved support, because recovery isn't one-size-fits-all and neither is the help people need to get there.
                            </p>
                            <p className="font-bold text-brand-purple">
                                What makes us different isn't just what we offer. It's how we show up.
                            </p>
                            <p>
                                Our team is made up of people who understand recovery from the inside out, people who've navigated the same systems, faced the same barriers, and found a way through. We bring that lived experience into everything we do, alongside the clinical training, the licensing, and the credentials that back it up.
                            </p>
                            <p>
                                We don't believe in gatekeeping support or making people jump through hoops to get help. We believe in moving fast, staying consistent, and treating every single person who walks through our door like their life is worth fighting for. Because it is.
                            </p>
                            <div className="bg-brand-purple/5 p-8 rounded-2xl border-l-4 border-brand-purple mt-8">
                                <p className="font-bold text-brand-indigo">
                                    Ignite Recovery is a women-owned, community-rooted organization. We're not a big system. We're not a revolving door. We're a team of people who genuinely care, and we built this program to prove that recovery support can be done differently.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Mission & Vision */}
                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-brand-indigo text-white p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                            <Target className="text-brand-magenta mb-6" size={48} />
                            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Our Mission</h2>
                            <p className="text-xl text-lavender leading-relaxed font-medium">
                                Ignite Recovery exists to ignite recovery from substance use disorder by restoring agency and delivering care with integrity.
                            </p>
                        </div>

                        <div className="bg-white text-brand-indigo p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden group">
                            <Compass className="text-brand-purple mb-6" size={48} />
                            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Our Vision</h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                We envision a community where individuals are empowered and supported to achieve and sustain recovery, and where recovery services are accessible, ethical, and enduring for anyone who seeks them.
                            </p>
                        </div>
                    </section>

                    {/* Philosophy */}
                    <section>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-black text-brand-indigo mb-4">Our Philosophy</h2>
                            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                                Ignite Recovery operates as one piece of a recovery-oriented system of care. Our philosophy is grounded in these beliefs:
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { title: "Hope", desc: "Recovery is always possible." },
                                { title: "Compassion", desc: "Suffering is met with dignity, not judgment." },
                                { title: "Empowerment", desc: "Individuals, when supported, can drive their own healing." },
                                { title: "Connection", desc: "Recovery strengthens through community and relationships." },
                                { title: "Growth", desc: "Recovery is a continuous process of learning and development." }
                            ].map((item, i) => (
                                <div key={i} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center">
                                    <h3 className="text-2xl font-black text-brand-purple mb-2 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-slate-600 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Core Values */}
                    <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
                            <ShieldCheck size={400} className="text-brand-indigo" />
                        </div>
                        <div className="relative z-10">
                            <div className="mb-16 text-center">
                                <h2 className="text-4xl font-black text-brand-indigo mb-4">Our Values</h2>
                                <p className="text-lg text-slate-500 font-medium">Ignite Recovery is guided by two core values that define our culture and our conduct.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-16">
                                {/* Agency */}
                                <div className="space-y-6">
                                    <h3 className="text-4xl font-black text-brand-indigo flex items-center">
                                        <Zap className="text-brand-magenta mr-4" size={40} /> AGENCY
                                    </h3>
                                    <p className="text-2xl text-brand-purple font-black">We build power, not dependence.</p>
                                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                        We believe meaningful change occurs when people develop the skills, confidence, and autonomy to direct their own recovery.
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                        <p className="font-bold text-brand-indigo mb-4 uppercase text-sm tracking-widest">At Ignite, Agency means:</p>
                                        <ul className="space-y-3">
                                            {["Clients are active partners in care", "Independence is cultivated", "Accountability is encouraged", "Skill-building is prioritized", "Leadership is expected at every level"].map((li, i) => (
                                                <li key={i} className="flex items-start text-slate-700 font-medium">
                                                    <CheckCircle2 className="text-green-500 mr-3 shrink-0 mt-0.5" size={20} />
                                                    {li}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="text-red-600 font-bold bg-red-50 p-4 rounded-xl border border-red-100">
                                        We do not practice Agency when we create reliance, suppress voice, or avoid responsibility.
                                    </p>
                                </div>

                                {/* Integrity */}
                                <div className="space-y-6">
                                    <h3 className="text-4xl font-black text-brand-indigo flex items-center">
                                        <ShieldCheck className="text-brand-magenta mr-4" size={40} /> INTEGRITY
                                    </h3>
                                    <p className="text-2xl text-brand-purple font-black">We do what is right, not what is easy.</p>
                                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                        We commit to honesty, transparency, and ethical decision-making at every level.
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                        <p className="font-bold text-brand-indigo mb-4 uppercase text-sm tracking-widest">At Ignite, Integrity means:</p>
                                        <ul className="space-y-3">
                                            {["Everyone's dignity is protected", "Boundaries are enforced fairly", "Mistakes are owned and corrected", "Services are represented truthfully", "Ethics are never compromised for convenience or profit"].map((li, i) => (
                                                <li key={i} className="flex items-start text-slate-700 font-medium">
                                                    <CheckCircle2 className="text-green-500 mr-3 shrink-0 mt-0.5" size={20} />
                                                    {li}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="text-red-600 font-bold bg-red-50 p-4 rounded-xl border border-red-100">
                                        We do not practice Integrity when we conceal, excuse, or shortcut.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Guiding Principle & Commitment */}
                    <section className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-brand-indigo text-white p-12 rounded-[2.5rem] shadow-xl">
                            <h2 className="text-sm font-black text-brand-magenta tracking-[0.3em] uppercase mb-4">Guiding Principle</h2>
                            <p className="text-3xl font-black mb-8 leading-tight">Rigid on Goals. Flexible on Methods.</p>
                            <div className="space-y-4 text-lavender text-lg font-medium">
                                <p>At Ignite, our mission and standards do not change.</p>
                                <p>Our methods evolve as needs change, evidence grows, and communities shift.</p>
                                <p className="text-white font-bold pt-4 border-t border-white/20">We are unwavering in purpose and adaptable in practice.</p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/20">
                                <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">How Our Values and Philosophy Work Together</h3>
                                <p className="text-lavender mb-2">Our philosophy explains how people heal.</p>
                                <p className="text-lavender">Our values govern how Ignite behaves while helping them heal.</p>
                            </div>
                        </div>

                        <div className="bg-brand-purple text-white p-12 rounded-[2.5rem] shadow-xl">
                            <h2 className="text-sm font-black text-brand-magenta tracking-[0.3em] uppercase mb-8">Our Commitment</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-black mb-2 uppercase">To our clients:</h3>
                                    <p className="text-lavender text-lg font-medium">You will be empowered, respected, and treated with dignity.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black mb-2 uppercase">To our staff:</h3>
                                    <p className="text-lavender text-lg font-medium">You will be supported, developed, and held accountable.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black mb-2 uppercase">To our community:</h3>
                                    <p className="text-lavender text-lg font-medium">We will operate ethically and transparently.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Goals & Objectives */}
                    <section>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-black text-brand-indigo mb-4">Organizational Goals</h2>
                            <p className="text-lg text-slate-500 font-medium">
                                Ignite Recovery pursues responsible growth that protects mission, quality, and culture.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {[
                                { goal: "GOAL 1: GROW OUR TEAM", desc: "Build a stable, competent, and mission-aligned workforce." },
                                { goal: "GOAL 2: SERVE MORE INDIVIDUALS", desc: "Increase access to care without compromising quality." },
                                { goal: "GOAL 3: ADD SERVICES", desc: "Develop new offerings that meet real community demand." }
                            ].map((g, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all">
                                    <ArrowUpRight className="text-brand-magenta mb-4" size={32} />
                                    <h3 className="text-xl font-black text-brand-indigo mb-3">{g.goal}</h3>
                                    <p className="text-slate-600 font-medium">{g.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-black text-brand-indigo mb-8 text-center uppercase tracking-widest">Objectives</h3>
                            <div className="grid md:grid-cols-3 gap-12">
                                <div>
                                    <h4 className="font-bold text-brand-purple text-xl mb-4">1. Staff Development:</h4>
                                    <ul className="space-y-3">
                                        {["Recruit and retain qualified staff", "Provide ongoing supervision and training", "Foster leadership and accountability"].map((li, i) => (
                                            <li key={i} className="flex items-start text-slate-600 font-medium">
                                                <HeartHandshake className="text-brand-magenta mr-2 shrink-0 mt-0.5" size={18} /> {li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-purple text-xl mb-4">2. Client Expansion:</h4>
                                    <ul className="space-y-3">
                                        {["Strengthen referral pathways", "Increase program access points", "Improve retention and engagement"].map((li, i) => (
                                            <li key={i} className="flex items-start text-slate-600 font-medium">
                                                <HeartHandshake className="text-brand-magenta mr-2 shrink-0 mt-0.5" size={18} /> {li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-purple text-xl mb-4">3. Service Growth:</h4>
                                    <ul className="space-y-3">
                                        {["Launch evidence-based programs", "Secure required approvals", "Ensure financial sustainability for new services"].map((li, i) => (
                                            <li key={i} className="flex items-start text-slate-600 font-medium">
                                                <HeartHandshake className="text-brand-magenta mr-2 shrink-0 mt-0.5" size={18} /> {li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default About;
