import React from 'react';
import { Phone, CheckCircle2, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tratamento de Dependência em Fall River | Ignite Recovery',
  description: 'Suporte de recuperação e aconselhamento em Fall River, MA. Aceitamos MassHealth. Ligue para (508) 296-0523 para ajuda hoje.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/pt-br'
  }
};

const PortugueseLanding: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="text-brand-magenta font-black tracking-widest uppercase text-sm">Bem-vindo à Ignite Recovery</span>
                    <h1 className="text-5xl lg:text-7xl font-black text-brand-indigo mt-4 mb-6">Recuperação e Esperança em Fall River</h1>
                    <div className="w-24 h-2 bg-brand-purple mx-auto rounded-full"></div>
                    <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        Na Ignite Recovery, oferecemos suporte ambulatorial, aconselhamento e acompanhamento contínuo para dependência química e alcoolismo. Você não está sozinho.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-brand-indigo">
                        <h2 className="text-3xl font-black text-brand-indigo mb-6">Nossos Serviços</h2>
                        <ul className="space-y-4 text-lg text-slate-700 font-medium">
                            <li className="flex items-start"><CheckCircle2 className="text-brand-magenta mr-3 mt-1 shrink-0" /> Aconselhamento Ambulatorial Intensivo</li>
                            <li className="flex items-start"><CheckCircle2 className="text-brand-magenta mr-3 mt-1 shrink-0" /> Coaching de Recuperação (Recovery Coaching)</li>
                            <li className="flex items-start"><CheckCircle2 className="text-brand-magenta mr-3 mt-1 shrink-0" /> Grupos de Apoio e Terapia</li>
                            <li className="flex items-start"><CheckCircle2 className="text-brand-magenta mr-3 mt-1 shrink-0" /> Ajuda com Moradia e Emprego</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-lavender/10 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-brand-purple mb-3">Seguro e MassHealth</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Aceitamos <strong>MassHealth</strong>, Tufts e outros seguros privados. Nossa equipe irá ajudá-lo a verificar sua cobertura sem nenhum custo.
                            </p>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-yellow-800 mb-2 flex items-center"><ShieldAlert className="mr-2" /> Confidencialidade</h3>
                            <p className="text-yellow-900 leading-relaxed">
                                Seus dados estão seguros conosco. Oferecemos um ambiente livre de julgamentos, focado na sua saúde e bem-estar.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-brand-indigo rounded-[2.5rem] p-12 text-center text-white shadow-2xl relative overflow-hidden animate-fadeInUp">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-purple/20 skew-x-12 translate-x-10"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-black mb-6">Dê o Primeiro Passo Hoje</h2>
                        <p className="text-lavender text-xl mb-10 leading-relaxed">
                            Ligue agora para falar com nossa equipe ou preencha o formulário online. Nós falamos a sua língua e estamos aqui para ajudar.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="tel:5082960523" className="inline-flex items-center justify-center bg-white text-brand-indigo px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-transform text-lg">
                                <Phone className="mr-2" size={24} /> (508) 296-0523
                            </a>
                            <Link href="/intake" className="inline-flex items-center justify-center bg-brand-magenta text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-transform text-lg">
                                Iniciar Formulário (Inglês)
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PortugueseLanding;
