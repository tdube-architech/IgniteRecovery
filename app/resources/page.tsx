import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Phone, Link as LinkIcon, Heart, ShieldCheck } from 'lucide-react';

import { client } from '../../lib/sanity';

export const metadata: Metadata = {
  title: 'Community Resources | Ignite Recovery',
  description: 'You do not have to navigate recovery alone. Find critical community resources for crisis support, housing, food, treatment, and legal aid in the South Coast region.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/resources'
  }
};

interface ResourceItem {
  _id: string;
  name: string;
  description?: string;
  phone?: string;
  url?: string;
}

interface ResourceCategory {
  _id: string;
  title: string;
  description?: string;
  items: ResourceItem[];
}

export const dynamic = 'force-dynamic';

export default async function ResourcesPage() {
    let categories: ResourceCategory[] = [];
    
    try {
        const query = `*[_type == "resourceCategory"] | order(order asc) {
            _id,
            title,
            description,
            "items": *[_type == "resourceItem" && category._ref == ^._id] | order(order asc) {
                _id,
                name,
                description,
                phone,
                url
            }
        }`;
        categories = await client.fetch(query);
    } catch (error) {
        console.error("Error fetching resources from Sanity:", error);
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="text-brand-magenta font-black tracking-widest uppercase text-sm">Community Support</span>
                    <h1 className="text-5xl lg:text-7xl font-black text-brand-indigo mt-4 mb-6">Resources</h1>
                    <h2 className="text-3xl font-black text-brand-purple mb-6">Because Recovery Takes a Village</h2>
                    <div className="w-24 h-2 bg-brand-magenta mx-auto rounded-full"></div>
                </div>

                {/* Intro */}
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 mb-16 animate-fadeInUp delay-100">
                    <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
                        You don't have to navigate this alone, and you don't have to wait until you're our client to access support.
                    </p>
                    <p className="text-xl text-brand-indigo leading-relaxed font-black">
                        Here are some of the resources we trust and refer to most.
                    </p>
                </div>

                {/* Core Resources Map */}
                <div className="space-y-16 animate-fadeInUp delay-200">
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <div key={category._id} className="relative">
                                <h3 className="text-3xl font-black text-brand-indigo mb-6 pl-6 border-l-4 border-brand-purple">
                                    {category.title}
                                </h3>
                                
                                {category.description && (
                                    <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100 italic text-slate-600 font-medium">
                                        {category.description}
                                    </div>
                                )}

                                <div className="grid gap-6">
                                    {category.items && category.items.length > 0 ? (
                                        category.items.map((item) => (
                                            <div key={item._id} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-50 group">
                                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                                    <div className="flex-1">
                                                        <h4 className="text-2xl font-black text-brand-indigo mb-2 group-hover:text-brand-magenta transition-colors">{item.name}</h4>
                                                        {item.description && (
                                                            <p className="text-slate-600 font-medium leading-relaxed">
                                                                {item.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                    
                                                    {/* Contact Action Buttons */}
                                                    <div className="flex flex-col gap-3 shrink-0 auto-cols-max">
                                                        {item.phone && (
                                                            <a href={`tel:${item.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center bg-brand-indigo/5 text-brand-indigo hover:bg-brand-indigo hover:text-white px-6 py-3 rounded-xl font-bold transition-colors">
                                                                <Phone size={18} className="mr-2" />
                                                                {item.phone}
                                                            </a>
                                                        )}
                                                        {item.url && (
                                                            <a href={item.url.startsWith('http') ? item.url : `https://${item.url}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta hover:text-white px-6 py-3 rounded-xl font-bold transition-colors">
                                                                <LinkIcon size={18} className="mr-2" />
                                                                Visit Website
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-slate-500 italic pl-6">No specific resources listed yet.</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white rounded-[2rem] p-12 text-center shadow-lg border border-gray-100">
                            <Heart className="mx-auto text-brand-magenta mb-6" size={56} />
                            <h3 className="text-2xl font-black text-brand-indigo mb-4">Building Our Resource Network</h3>
                            <p className="text-slate-600 font-medium text-lg max-w-lg mx-auto">
                                We are currently gathering and verifying the best community resources. Check back soon, or contact us directly if you need immediate assistance finding support.
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer Note */}
                <div className="mt-20 bg-brand-indigo rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden animate-fadeInUp delay-300">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-magenta/20 rounded-full blur-2xl pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
                    
                    <ShieldCheck className="mx-auto text-brand-magenta mb-6 relative z-10" size={56} />
                    <p className="text-xl md:text-2xl text-lavender font-medium leading-relaxed relative z-10 mb-8 max-w-2xl mx-auto">
                        This list is not exhaustive. If you're looking for something specific and don't see it here, reach out.
                    </p>
                    <p className="text-3xl md:text-4xl text-white font-black leading-tight relative z-10">
                        Connecting people to resources is literally what we do.
                    </p>
                    <div className="mt-10 relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact" className="w-full sm:w-auto bg-white text-brand-indigo px-10 py-4 rounded-full font-black text-xl shadow-xl hover:bg-gray-100 hover:scale-105 transition-all">
                            Contact Us
                        </Link>
                        <a href="tel:5082960523" className="w-full sm:w-auto bg-brand-magenta text-white px-10 py-4 rounded-full font-black text-xl shadow-xl hover:bg-brand-purple hover:scale-105 transition-all flex items-center justify-center">
                            <Phone className="mr-3" size={24} />
                            (508) 296-0523
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};
