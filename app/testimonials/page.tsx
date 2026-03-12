import React from 'react';
import { Quote } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Success Stories & Testimonials | Ignite Recovery',
  description: 'Hear directly from the individuals whose lives have been impacted by our dedicated team and personalized approach to recovery in Fall River.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/testimonials'
  }
};

const TESTIMONIALS = [
  {
    quote: "Ignite Recovery exudes professionalism; from their first rate consulting services, to their ever-present transportation and logistics support... I quite frankly could not imagine having successfully navigating my recovery without them...",
    author: "G.H."
  },
  {
    quote: "Ignite Recovery is a \"teamwork makes the dreamwork\" operation. From day one Ignite linked me with Chris, and we connected instantly. My life was a mess when I first met Chris and Laura. They helped me navigate several court cases and motivated me to chase my dreams. I am forever grateful for their patience and professionalism. God only knows where I would be today without their love and support.",
    author: "D.H."
  },
  {
    quote: "I have nothing bad to say about these guys!!! Awesome help, great personable staff, and just caring helpful people in all!! Thank you so much for all the help y'all have provided and continue to provide!!",
    author: "J.L."
  },
  {
    quote: "Ignite Recovery has been a huge part of my recovery. Amy Bishop goes out of her way on a daily basis for every one of her clients and I can say that firsthand because she does it for me. Amy is always there when I have needed her weather it's to talk, need a ride to an appointment or helping me move. There is nothing Ignite and Amy Bishop will not do to insure the best recovery possible for their clients.",
    author: "A.K."
  },
  {
    quote: "Ignite recovery has held my hand since before I was really ready to commit to my recovery, guiding me without me realizing that it was slowly setting in. God bless Amy, Courtney, and Laura - they've helped me save my life for Maisie, CJ, and me!",
    author: "L.S."
  },
  {
    quote: "My ignite recovery team (JR and Lauren) have been a crucial component of my recovery and success. When I came to ignite I had almost nothing but with a little patience and guidance, I’ve learned to love myself again.",
    author: "C.F."
  },
  {
    quote: "I just have the best recovery coach there!",
    author: "A.M."
  },
  {
    quote: "All the workers have real life experience so I feel like I can be open with them.",
    author: "A.T."
  },
  {
    quote: "Always there for me when I need it.",
    author: "D.P."
  },
  {
    quote: "My worker is amazing and probably one of the best assets that the company has behind them!!",
    author: "K.R."
  }
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="text-brand-magenta font-black tracking-widest uppercase text-sm">Real Stories</span>
          <h1 className="text-5xl lg:text-7xl font-black text-brand-indigo mt-4 mb-6">Testimonials</h1>
          <div className="w-24 h-2 bg-brand-purple mx-auto rounded-full"></div>
          <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Don't just take our word for it. Hear directly from the individuals whose lives have been impacted by our dedicated team and personalized approach to recovery.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={80} className="text-brand-purple rotate-180" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <Quote size={32} className="text-brand-magenta mb-6" />
                <p className="text-slate-700 leading-relaxed font-medium text-lg mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <div className="w-8 h-1 bg-brand-purple mb-4 rounded-full"></div>
                  <p className="font-black text-brand-indigo text-lg">— {testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-indigo rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden animate-fadeInUp">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-purple/20 skew-x-12 translate-x-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-black mb-6">Ready to write your own story?</h2>
            <p className="text-lavender text-xl mb-10 leading-relaxed">
              Our team is ready to meet you exactly where you are and support you on your journey.
            </p>
            <a href="/intake" className="inline-flex bg-brand-magenta text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-all text-lg hover:-translate-y-1">
              Start Your Intake
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialsPage;
