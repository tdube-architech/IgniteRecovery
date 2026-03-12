import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Phone, ArrowRight, ShieldCheck, Heart, UserPlus, Zap, CheckCircle2 } from 'lucide-react';
import { SERVICES, ICON_MAP } from '../constants';

export const metadata: Metadata = {
  title: 'Recovery Support & Outpatient Counseling in Fall River, MA | Ignite Recovery',
  description: 'Ignite Recovery offers outpatient substance use counseling, recovery coaching, and wraparound support in Fall River & Attleboro, MA. MassHealth accepted. Call (508) 296-0523.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com'
  }
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Ignite Recovery",
    "url": "https://ignitemyrecovery.com",
    "logo": "https://ignitemyrecovery.com/logo.png",
    "telephone": "+15082960523",
    "email": "info@ignitemyrecovery.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "672 Bedford St",
      "addressLocality": "Fall River",
      "addressRegion": "MA",
      "postalCode": "02720",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

const Home: React.FC = () => {
  return (
    <div className="pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-32">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple/5 -skew-x-12 transform translate-x-32 pointer-events-none hidden lg:block animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fadeInLeft">

              <h1 className="text-brand-indigo font-black text-6xl lg:text-8xl leading-[1.1] mb-8">
                Recovery is <br />
                <span className="text-brand-magenta drop-shadow-sm">your choice.</span>
              </h1>
              <p className="text-slate-600 text-xl lg:text-2xl leading-relaxed mb-12 max-w-xl font-medium">
                We provide the support, tools, and expertise. You lead the way. Discover a new standard of person-centered care in Bristol County.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/intake" className="bg-brand-indigo text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-[#760972] transition-all transform hover:-translate-y-1 flex items-center justify-center">
                  Start Intake
                </Link>
                <a href="tel:5082960523" className="border-4 border-[#160F56]/10 text-brand-indigo px-10 py-5 rounded-full font-black text-xl hover:bg-[#160F56] hover:text-white transition-all flex items-center justify-center">
                  <Phone className="mr-3" size={24} /> (508) 296-0523
                </a>
              </div>
              <div className="mt-8">
                <p className="text-slate-600 font-medium">Looking for help for a loved one? <Link href="/intake" className="text-brand-magenta font-bold hover:underline">We can guide you.</Link></p>
              </div>
              <div className="mt-8 flex items-center text-slate-500 font-bold uppercase tracking-widest text-xs">
                <ShieldCheck className="text-brand-magenta mr-3" size={20} />
                <span>MassHealth and Tufts accepted</span>
              </div>
            </div>

            <div className="relative animate-fadeInRight">
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(22,15,86,0.2)] border-[12px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1600"
                  alt="Peer support and recovery coaching session"
                  className="w-full h-[600px] object-cover"
                />

                <div className="absolute bottom-8 left-8 right-8 glass-card p-8 rounded-[2rem] shadow-2xl border-l-8 border-brand-magenta">
                  <p className="italic text-brand-indigo text-xl font-black leading-tight">
                    "At Ignite, we honor the individual behind the recovery."
                  </p>
                </div>
              </div>

              {/* Floating status badge - subtle and professional */}
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-brand-magenta/10 rounded-2xl flex items-center justify-center text-brand-magenta">
                    <Heart size={32} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Approach</div>
                    <div className="text-xl font-black text-brand-indigo">Person-Centered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-20 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-indigo mb-2 group-hover:text-brand-magenta transition-colors leading-tight">Local</div>
              <div className="text-slate-400 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em]">Bristol County</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-indigo mb-2 group-hover:text-brand-magenta transition-colors leading-tight">Peer-Led</div>
              <div className="text-slate-400 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em]">Lived Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-indigo mb-2 group-hover:text-brand-magenta transition-colors leading-tight">Recovery<br className="lg:hidden" /> Oriented</div>
              <div className="text-slate-400 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em]">Holistic Minded</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-indigo mb-2 group-hover:text-brand-magenta transition-colors leading-tight">Mobile</div>
              <div className="text-slate-400 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em]">Hybrid Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 bg-gray-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-32 opacity-[0.03] pointer-events-none">
          <Zap size={500} className="text-brand-magenta" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fadeInUp">
            <span className="text-brand-magenta font-black tracking-[0.4em] uppercase text-xs">Pathways to Agency</span>
            <h2 className="text-brand-indigo text-5xl lg:text-6xl font-black mt-6">Restoring Your Independence</h2>
            <div className="w-32 h-2 bg-brand-purple mx-auto mt-8 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <Link
                  key={service.id}
                  href={service.path}
                  className={`group bg-off-white p-8 rounded-[2.5rem] border border-brand-lavender/40 shadow-lg shadow-brand-indigo/5 hover:shadow-2xl hover:shadow-brand-purple/20 transition-all transform hover:-translate-y-2 animate-fadeInUp ${index % 2 !== 0 ? 'xl:mt-16' : ''
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-lavender/10 text-brand-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-indigo group-hover:text-white transition-all">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-brand-indigo mb-4 group-hover:text-brand-purple transition-colors leading-tight min-h-[4rem]">{service.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-4 text-sm font-medium leading-relaxed">{service.shortDescription}</p>
                  <div className="flex items-center text-brand-magenta font-black uppercase text-xs tracking-widest group-hover:translate-x-3 transition-transform mt-auto">
                    View Service <ArrowRight className="ml-2" size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Roadmap section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl lg:text-7xl font-black text-brand-indigo mb-10 leading-tight">
                Reclaiming <br /><span className="text-brand-magenta">Your Future.</span>
              </h2>
              <div className="space-y-16">
                {[
                  { step: '01', title: 'Connect', desc: 'Secure online intake or direct phone call with an intake specialist.' },
                  { step: '02', title: 'Collaborate', desc: 'Clinical mapping to align our services with your personal goals.' },
                  { step: '03', title: 'Cultivate', desc: 'Continuous growth through peer support and professional counseling.' }
                ].map((item) => (
                  <div key={item.step} className="flex group">
                    <div className="text-7xl font-black text-brand-purple/10 group-hover:text-brand-purple/20 transition-colors mr-8 leading-none flex-shrink-0">{item.step}</div>
                    <div className="pt-2">
                      <h4 className="text-2xl font-black text-brand-indigo mb-3 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-lg font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-indigo rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none"></div>
              <h3 className="text-4xl font-black mb-8">Provider Referrals</h3>
              <p className="text-lavender text-xl mb-10 leading-relaxed font-medium">
                We maintain <strong>Integrity in Care</strong> by providing agencies with seamless transitions and comprehensive documentation.
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-center text-lg font-bold"><CheckCircle2 className="text-brand-magenta mr-4" size={24} /> Same-day intake coordination</li>
                <li className="flex items-center text-lg font-bold"><CheckCircle2 className="text-brand-magenta mr-4" size={24} /> HIPAA-compliant data sharing</li>
                <li className="flex items-center text-lg font-bold"><CheckCircle2 className="text-brand-magenta mr-4" size={24} /> Collaborative care planning</li>
              </ul>
              <Link href="/about" className="inline-flex items-center font-black text-brand-magenta hover:text-white transition-colors text-xl uppercase tracking-widest">
                Partner Portal <ArrowRight className="ml-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 brand-gradient relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-white text-5xl lg:text-7xl font-black mb-10 leading-tight">Take back the flame.</h2>
          <p className="text-white/80 text-xl lg:text-3xl mb-16 font-medium">
            Restoring agency. Delivering care with integrity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link href="/intake" className="w-full sm:w-auto bg-brand-magenta text-white px-16 py-6 rounded-full font-black text-2xl shadow-2xl hover:bg-brand-purple hover:scale-105 transition-all">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
