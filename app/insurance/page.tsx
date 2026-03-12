import React from 'react';
import { Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insurance & MassHealth Coverage for Recovery Services | Ignite Recovery',
  description: 'Ignite Recovery accepts MassHealth, Tufts, private insurance, and offers sliding scale payment. Verify your coverage — call (508) 296-0523.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/insurance'
  }
};

const InsurancePage = () => (
  <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
    <div className="bg-white p-12 rounded-3xl shadow-xl border-t-8 border-brand-indigo">
      <h1 className="text-4xl font-black text-brand-indigo mb-6">Insurance Coverage</h1>
      <p className="text-xl text-slate-600 mb-8">We aim to remove financial barriers to care by offering comprehensive payment and coverage options.</p>

      <div className="bg-lavender/10 p-8 rounded-2xl mb-8">
        <h3 className="text-2xl font-bold text-brand-purple mb-4">MassHealth & Tufts Focus</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Ignite Recovery accepts <strong>ALL MassHealth and Tufts health plans</strong>. This includes Standard, CarePlus, Family Assistance, Community Care Partners, and Tufts.
        </p>
      </div>
      
      <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-brand-indigo mb-4">Private Insurance & Sliding Scale</h3>
        <p className="text-slate-700 leading-relaxed">
          Beyond state coverage, we accept most major private insurances. 
          For those without insurance or with high deductibles, we offer flexible <strong>Cash/Self-Pay</strong> options and <strong>Sliding Scale</strong> considerations so you never have to delay your recovery journey due to finances.
        </p>
      </div>

      <div className="text-center mt-12">
        <h4 className="font-bold text-brand-indigo text-xl mb-4">Ready to take the next step? Verify your specific plan:</h4>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="tel:5082960523" className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-indigo text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
            <Phone className="mr-2" /> (508) 296-0523
          </a>
          <Link href="/intake" className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-magenta text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
            Start Your Intake
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default InsurancePage;
