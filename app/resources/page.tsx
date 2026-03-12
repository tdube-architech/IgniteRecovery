import React from 'react';
import type { Metadata } from 'next';
import { BookOpen, Link as LinkIcon, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Addiction & Recovery Resources | Ignite Recovery, Fall River MA',
  description: 'Helpful guides, links, and documents for individuals and families navigating recovery and substance use treatment in Fall River, MA.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/resources'
  }
};

const ResourcesLanding: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="text-brand-magenta font-black tracking-widest uppercase text-sm">Knowledge is Power</span>
                    <h1 className="text-5xl lg:text-7xl font-black text-brand-indigo mt-4 mb-6">Recovery Resources</h1>
                    <div className="w-24 h-2 bg-brand-purple mx-auto rounded-full"></div>
                    <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        Whether you are starting your own journey or supporting a loved one, finding the right information can make all the difference. Explore our curated list of local and national resources.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Resource Cards */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                        <BookOpen className="text-brand-magenta mb-4 group-hover:-translate-y-1 transition-transform" size={40} />
                        <h3 className="text-xl font-bold text-brand-indigo mb-2">MassHealth Coverage Guide</h3>
                        <p className="text-slate-600 mb-6">A clear breakdown of what substance use services are covered by MassHealth and Tufts.</p>
                        <span className="text-brand-purple font-bold inline-flex items-center text-sm uppercase tracking-wider">
                            Coming Soon <Download className="ml-2" size={16} />
                        </span>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                        <LinkIcon className="text-brand-purple mb-4 group-hover:-translate-y-1 transition-transform" size={40} />
                        <h3 className="text-xl font-bold text-brand-indigo mb-2">AA & NA Meetings in Fall River</h3>
                        <p className="text-slate-600 mb-6">Find local daily Alcoholics Anonymous and Narcotics Anonymous meeting schedules and locations.</p>
                        <a href="https://aaboston.org/meetings" target="_blank" rel="noopener noreferrer" className="text-brand-magenta font-bold inline-flex items-center text-sm uppercase tracking-wider hover:underline">
                            View Directory <LinkIcon className="ml-2" size={16} />
                        </a>
                    </div>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                        <LinkIcon className="text-brand-purple mb-4 group-hover:-translate-y-1 transition-transform" size={40} />
                        <h3 className="text-xl font-bold text-brand-indigo mb-2">Family Support (Al-Anon)</h3>
                        <p className="text-slate-600 mb-6">Resources and meeting finders for family members and friends impacted by a loved one's substance use.</p>
                        <a href="https://ma-al-anon-alateen.org/" target="_blank" rel="noopener noreferrer" className="text-brand-magenta font-bold inline-flex items-center text-sm uppercase tracking-wider hover:underline">
                            MA Al-Anon Website <LinkIcon className="ml-2" size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesLanding;
