"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            {/* Using the user's provided logo with a white background clip if needed for transparency, but assuming the PNG is high-quality */}
            <div className={`relative transition-all duration-500 ${scrolled ? 'h-14' : 'h-20'}`}>
              <img
                src="/ignite-logo-final.png"
                alt="Ignite Recovery Logo"
                className="h-full w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/400x120/160F56/white?text=IGNITE+RECOVERY";
                }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-brand-indigo hover:text-[#9D89B4] hover:underline underline-offset-8 decoration-2 font-bold transition-all">Home</Link>
            <div className="relative group">
              <Link href="/services" className="text-brand-indigo hover:text-[#9D89B4] hover:underline underline-offset-8 decoration-2 font-bold transition-all flex items-center">
                Services
              </Link>
              <div className="absolute top-full -left-4 pt-4 hidden group-hover:block animate-fadeIn">
                <div className="w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
                  <Link href="/services/recovery-navigation" className="block px-6 py-4 hover:bg-lavender/10 text-brand-indigo text-sm font-bold border-b border-gray-50">Recovery Support Navigation</Link>
                  <Link href="/services/recovery-coaching" className="block px-6 py-4 hover:bg-lavender/10 text-brand-indigo text-sm font-bold border-b border-gray-50">Recovery Coaching</Link>
                  <Link href="/services/clinical-services" className="block px-6 py-4 hover:bg-lavender/10 text-brand-indigo text-sm font-bold border-b border-gray-50">Outpatient Counseling</Link>
                  <Link href="/services/iop-soap" className="block px-6 py-4 hover:bg-lavender/10 text-brand-indigo text-sm font-bold border-b border-gray-50">IOP/SOAP Program</Link>
                  <Link href="/services/csp-ji" className="block px-6 py-4 hover:bg-lavender/10 text-brand-indigo text-sm font-bold">CSP-JI Services</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link href="/about" className="text-brand-indigo hover:text-[#9D89B4] hover:underline underline-offset-8 decoration-2 font-bold transition-all flex items-center">
                About
              </Link>
              <div className="absolute top-full -left-4 pt-4 hidden group-hover:block animate-fadeIn">
                <div className="w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
                  <Link href="/about" className="block px-6 py-4 hover:bg-lavender/10 text-brand-indigo text-sm font-bold border-b border-gray-50">About Ignite</Link>
                  <Link href="/team" className="block px-6 py-4 hover:bg-lavender/10 text-brand-indigo text-sm font-bold border-b border-gray-50">Meet the Team</Link>
                  <Link href="/careers" className="block px-6 py-4 hover:bg-lavender/10 text-brand-indigo text-sm font-bold border-b border-gray-50">Careers</Link>
                  <Link href="/resources" className="block px-6 py-4 hover:bg-lavender/10 text-brand-indigo text-sm font-bold">Resources</Link>
                </div>
              </div>
            </div>
            <Link href="/providers" className="text-brand-indigo hover:text-[#9D89B4] hover:underline underline-offset-8 decoration-2 font-bold transition-all">Providers</Link>
            <div className="relative group">
              <Link href="/faq" className="text-brand-indigo hover:text-[#9D89B4] hover:underline underline-offset-8 decoration-2 font-bold transition-all flex items-center">
                F.A.Q.
              </Link>
              <div className="absolute top-full -left-4 pt-4 hidden group-hover:block animate-fadeIn">
                <div className="w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
                  <Link href="/faq" className="block px-6 py-4 hover:bg-lavender/10 text-brand-indigo text-sm font-bold border-b border-gray-50">Frequently Asked Questions</Link>
                  <Link href="/testimonials" className="block px-6 py-4 hover:bg-lavender/10 text-brand-indigo text-sm font-bold">Testimonials</Link>
                </div>
              </div>
            </div>
            <Link href="/insurance" className="text-brand-indigo hover:text-[#9D89B4] hover:underline underline-offset-8 decoration-2 font-bold transition-all">Insurance</Link>
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center">
            <Link
              href="/intake"
              className="hidden lg:inline-flex bg-brand-indigo text-white px-8 py-3 rounded-full font-bold hover:bg-brand-magenta transition-all transform hover:scale-105 shadow-xl"
            >
              Get Started
            </Link>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center">
              <a href="tel:5082960523" className="mr-4 p-3 bg-brand-indigo/10 rounded-full text-brand-indigo">
                <Phone size={20} />
              </a>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-indigo">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      </header>

      {/* Mobile Menu */}
      {
        isOpen && (
          <div className="lg:hidden fixed inset-0 z-40 animate-fadeIn">
            {/* Solid background locked in place */}
            <div className="fixed inset-0 bg-white" />
            
            {/* Scrollable content layer */}
            <div className="relative z-10 w-full h-full pt-28 px-8 pb-12 space-y-6 flex flex-col items-center justify-start overflow-y-auto overscroll-contain">
              <Link href="/" className="text-3xl font-black text-brand-indigo">Home</Link>
              <Link href="/services" className="text-3xl font-black text-brand-indigo">Services</Link>
              <Link href="/about" className="text-3xl font-black text-brand-indigo">About Ignite</Link>
              <Link href="/team" className="text-3xl font-black text-brand-indigo">Meet the Team</Link>
              <Link href="/careers" className="text-3xl font-black text-brand-indigo">Careers</Link>
              <Link href="/resources" className="text-3xl font-black text-brand-indigo">Resources</Link>
              <Link href="/providers" className="text-3xl font-black text-brand-indigo">Providers</Link>
              <Link href="/faq" className="text-3xl font-black text-brand-indigo">F.A.Q.</Link>
              <Link href="/testimonials" className="text-3xl font-black text-brand-indigo">Testimonials</Link>
              <Link href="/insurance" className="text-3xl font-black text-brand-indigo">Insurance</Link>
              <Link
                href="/intake"
                className="w-full text-center bg-brand-indigo text-white py-5 rounded-3xl text-2xl font-black shadow-lg shrink-0 mt-4"
              >
                Start Intake
              </Link>
              <button onClick={() => setIsOpen(false)} className="mt-8 shrink-0 text-slate-400 font-bold uppercase tracking-widest flex items-center">
                <X size={20} className="mr-2" /> Close
              </button>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Header;
