"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'phone',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message || (!formData.email && !formData.phone)) {
      setError('Please provide your name, a message, and at least one contact method (email or phone).');
      return;
    }
    setError('');
    setSubmitted(true);
    // In a real application, you would send this to your backend/API route
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="text-brand-magenta font-black tracking-[0.3em] uppercase text-sm">Reach Out</span>
          <h1 className="text-5xl lg:text-7xl font-black text-brand-indigo mt-4 mb-6">Contact Us</h1>
          <div className="w-24 h-2 bg-brand-purple mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Whether you have questions about our services, want to learn more about referrals, or are ready to take the next step — we are here to listen.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 space-y-8">
              <h2 className="text-3xl font-black text-brand-indigo mb-6">Get in Touch</h2>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-indigo/5 rounded-2xl text-brand-indigo shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-indigo text-lg mb-1">Our Location</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    672 Bedford St,<br />Fall River, MA 02720
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-indigo/5 rounded-2xl text-brand-indigo shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-indigo text-lg mb-1">Phone Number</h3>
                  <a href="tel:5082960523" className="text-slate-600 hover:text-brand-magenta font-bold transition-colors text-lg">
                    (508) 296-0523
                  </a>
                  <p className="text-slate-400 text-xs mt-1">Call or text us anytime during operating hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-indigo/5 rounded-2xl text-brand-indigo shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-indigo text-lg mb-1">Email Address</h3>
                  <a href="mailto:info@ignitemyrecovery.com" className="text-slate-600 hover:text-brand-magenta font-medium transition-colors">
                    info@ignitemyrecovery.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-indigo/5 rounded-2xl text-brand-indigo shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-indigo text-lg mb-1">Operating Hours</h3>
                  <p className="text-slate-600 font-medium">
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Crisis / Intake Box */}
            <div className="bg-brand-indigo text-white rounded-[2.5rem] p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-purple/20 skew-x-12 translate-x-10"></div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-black">Ready to Start Intake?</h3>
                <p className="text-lavender font-medium">
                  If you are ready to request services, skip the general contact form and jump straight to our confidential online intake wizard.
                </p>
                <Link
                  href="/intake"
                  className="inline-flex bg-brand-magenta text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-brand-indigo transition-all shadow-lg"
                >
                  Start Online Intake
                </Link>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 border border-green-100">
                    <Send size={36} />
                  </div>
                  <h2 className="text-3xl font-black text-brand-indigo">Message Sent Successfully</h2>
                  <p className="text-slate-600 max-w-md mx-auto font-medium text-lg leading-relaxed">
                    Thank you for reaching out to Ignite Recovery. A member of our team will get back to you within 24 to 48 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '', preferredContact: 'phone' });
                    }}
                    className="inline-flex bg-brand-indigo text-white px-8 py-3 rounded-full font-bold hover:bg-brand-magenta transition-colors shadow-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-3xl font-black text-brand-indigo mb-2">Send Us a Message</h2>
                  <p className="text-slate-500 mb-8 font-medium">Fill out the form below, and we'll connect with you shortly.</p>

                  {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm font-bold">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-brand-indigo font-bold text-sm uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all font-medium text-slate-700"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-brand-indigo font-bold text-sm uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all font-medium text-slate-700"
                        placeholder="(508) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-brand-indigo font-bold text-sm uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all font-medium text-slate-700"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="preferred" className="block text-brand-indigo font-bold text-sm uppercase tracking-wider mb-2">Preferred Contact Method</label>
                      <select
                        id="preferred"
                        className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all font-medium text-slate-700 appearance-none"
                        value={formData.preferredContact}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                      >
                        <option value="phone">Phone Call</option>
                        <option value="text">SMS Text</option>
                        <option value="email">Email</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-brand-indigo font-bold text-sm uppercase tracking-wider mb-2">How Can We Help? *</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all font-medium text-slate-700"
                      placeholder="Share details about what support or service you are interested in..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-indigo text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-brand-magenta transition-colors shadow-lg hover:shadow-xl hover:scale-[1.01] transform transition-all"
                  >
                    <Send className="mr-2" size={20} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Crisis Warning Banner */}
        <div className="mt-16 bg-red-50 rounded-3xl p-8 border border-red-100 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="p-3 bg-red-100 text-red-600 rounded-2xl shrink-0">
            <ShieldAlert size={28} />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-black text-red-800 text-xl uppercase tracking-tight">Crisis Resources</h3>
            <p className="text-red-700 font-medium leading-relaxed max-w-4xl">
              This contact form is for general inquiries and is monitored during regular business hours only. If you are experiencing a mental health or substance use crisis, please call or text <strong className="bg-red-200 px-1.5 py-0.5 rounded text-red-900 font-bold">988</strong> to connect with the 24/7 Suicide & Crisis Lifeline. If you have a medical emergency, call <strong className="bg-red-200 px-1.5 py-0.5 rounded text-red-900 font-bold">911</strong> immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
