"use client";
import React, { useState } from 'react';
import { Mail, Phone, Building2, User, Send, CheckCircle2 } from 'lucide-react';

const PartnershipForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [phone, setPhone] = useState('');

    const handlePhoneFormat = (value: string) => {
        const digits = value.replace(/\D/g, '').slice(0, 10);
        let res = '';
        if (digits.length > 0) res = `(${digits.slice(0, 3)}`;
        if (digits.length >= 4) res += `) ${digits.slice(3, 6)}`;
        if (digits.length >= 7) res += `-${digits.slice(6, 10)}`;
        return res;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(handlePhoneFormat(e.target.value));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch("https://formsubmit.co/ajax/community@ignitemyrecovery.com", {
                method: "POST",
                headers: { 
                    'Accept': 'application/json'
                },
                body: formData
            });
            setSubmitted(true);
        } catch (err) {
            console.error(err);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-12 bg-green-50 rounded-2xl border border-green-100">
                <CheckCircle2 className="mx-auto text-green-500 mb-4" size={48} />
                <h4 className="text-2xl font-bold text-green-800 mb-2">Message Received</h4>
                <p className="text-green-700 font-medium px-4">Thank you for reaching out. We will connect with you within 24 hours.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-brand-indigo font-bold hover:text-brand-magenta transition-colors"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Formsubmit Configurations */}
            <input type="hidden" name="_subject" value="New Partnership Inquiry" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Your Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input required name="name" type="text" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white focus:border-brand-purple focus:outline-none transition-all font-medium" placeholder="Jane Doe" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Organization</label>
                    <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input required name="organization" type="text" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white focus:border-brand-purple focus:outline-none transition-all font-medium" placeholder="Clinic / Program" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input required name="email" type="email" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white focus:border-brand-purple focus:outline-none transition-all font-medium" placeholder="email@example.com" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phone</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input type="tel" name="phone" value={phone} onChange={handlePhoneChange} className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white focus:border-brand-purple focus:outline-none transition-all font-medium" placeholder="(508) 000-0000" />
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                <textarea required name="message" rows={4} className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white focus:border-brand-purple focus:outline-none transition-all font-medium resize-none" placeholder="How can we collaborate?"></textarea>
            </div>

            <button type="submit" className="w-full bg-brand-magenta text-white py-4 rounded-xl font-black text-lg flex items-center justify-center hover:bg-[#b00cb3] transition-all transform hover:-translate-y-1 shadow-lg">
                <Send className="mr-2" size={20} /> Send Message
            </button>
        </form>
    );
};

export default PartnershipForm;
