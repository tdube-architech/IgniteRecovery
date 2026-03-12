import React from 'react';
import { SERVICES } from '../../constants';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Addiction & Recovery Services | Ignite Recovery',
  description: 'Explore our continuum of recovery services in Fall River, MA: Outpatient Counseling, Recovery Coaching, Navigation, and Justice-Involved Support.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/services'
  }
};

const ServicesHub: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 min-h-screen">
      <h1 className="text-5xl lg:text-7xl font-black text-brand-indigo mb-12 animate-fadeInUp">Our Services</h1>
      <p className="text-xl text-slate-600 max-w-3xl mb-16 animate-fadeInUp">
        We offer a full continuum of recovery services, from peer coaching and navigation to outpatient counseling and justice-involved support, because recovery isn't one-size-fits-all and neither is the help people need to get there.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
        {SERVICES.map((s: any) => (
          <Link key={s.id} href={`/services/${s.id}`} className="p-8 bg-off-white rounded-[2rem] shadow-lg shadow-brand-indigo/5 border border-brand-lavender/40 hover:shadow-2xl hover:shadow-brand-purple/20 transition-all group flex flex-col h-full hover:-translate-y-2">
            <h3 className="text-2xl font-black text-brand-indigo mb-4 group-hover:text-brand-purple">{s.title}</h3>
            <p className="text-slate-600 font-medium leading-relaxed flex-grow">{s.shortDescription}</p>
            <div className="mt-8 pt-6 border-t border-gray-100 w-full flex justify-between items-center font-bold text-brand-magenta">
                Learn More <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesHub;
