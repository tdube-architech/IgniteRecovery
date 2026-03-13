import React from 'react';
import { client, urlFor } from '../../lib/sanity';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet the Team | Ignite Recovery, Fall River MA',
  description: 'Meet the Ignite Recovery team — licensed counselors providing personalized recovery support in Fall River, MA. Serving adults 18+ at any stage of recovery.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/team'
  }
};

interface TeamCategory {
  _id: string;
  title: string;
  members: TeamMember[];
}

interface TeamMember {
  _id: string;
  name: string;
  title: string;
  bio?: string;
  image?: any;
}

export const dynamic = 'force-dynamic'; // Always fetch fresh data from Sanity on page load

export default async function TeamPage() {
    let categories: TeamCategory[] = [];
    
    try {
        const query = `
          *[_type == "teamCategory"] | order(order asc) {
            _id,
            title,
            "members": *[_type == "teamMember" && references(^._id)] | order(order asc, name asc)
          }
        `;
        const cats = await client.fetch(query);
        categories = cats.filter((c: any) => c.members && c.members.length > 0);
    } catch (error) {
        console.error("Error fetching team grouped by category:", error);
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="text-brand-magenta font-black tracking-widest uppercase text-sm">Our People</span>
                    <h1 className="text-5xl lg:text-7xl font-black text-brand-indigo mt-4 mb-6">Meet the Team</h1>
                    <div className="w-24 h-2 bg-brand-purple mx-auto rounded-full"></div>
                    <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        At Ignite Recovery, our team brings a unique combination of lived experience, clinical expertise, and a deep commitment to the Fall River community. We understand the journey because many of us have walked it ourselves.
                    </p>
                </div>

                {categories.length > 0 ? (
                    <div className="space-y-24">
                        {categories.map((category) => (
                            <div key={category._id} className="animate-fadeInUp">
                                <div className="mb-10 text-center md:text-left">
                                    <h2 className="text-4xl font-black text-brand-indigo mb-4">{category.title}</h2>
                                    <div className="w-24 h-1.5 bg-brand-purple mx-auto md:mx-0 rounded-full"></div>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {category.members.map((member) => (
                                        <div key={member._id} className="bg-white rounded-[1.5rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col h-full">
                                            <div className="h-48 overflow-hidden bg-brand-indigo/5 flex items-center justify-center shrink-0">
                                                {member.image ? (
                                                    // @ts-ignore
                                                    <img src={urlFor(member.image).width(400).height(400).url()} alt={member.name} className="w-full h-full object-contain object-top pt-6" />
                                                ) : (
                                                    <img src={`https://placehold.co/300x300/160F56/ffffff?text=${encodeURIComponent(member.name)}`} alt={member.name} className="w-full h-full object-contain p-4" />
                                                )}
                                            </div>
                                            <div className="p-6 flex-grow">
                                                <h3 className="text-xl font-black text-brand-indigo mb-1">{member.name}</h3>
                                                <p className="text-brand-magenta font-bold uppercase tracking-wider text-xs mb-3">{member.title}</p>
                                                {member.bio ? (
                                                    <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                                        {member.bio}
                                                    </p>
                                                ) : (
                                                    <p className="text-slate-400 italic leading-relaxed font-medium text-sm">
                                                        No bio provided.
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-slate-500 py-12">
                        <p className="text-xl font-medium">Team members will be added soon.</p>
                        <p className="mt-2 text-sm max-w-md mx-auto">Create Team Categories and add Team Members through the Sanity Studio dashboard.</p>
                    </div>
                )}

            </div>
        </div>
    );
}
