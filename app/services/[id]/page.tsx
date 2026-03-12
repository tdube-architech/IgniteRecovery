import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES, ICON_MAP } from '../../../constants';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find(s => s.id === id);
  
  if (!service) {
    return {
      title: 'Service Not Found | Ignite Recovery'
    };
  }

  return {
    title: service.seoTitle,
    description: service.metaDesc,
    alternates: {
      canonical: `https://ignitemyrecovery.com/services/${service.id}`
    }
  };
}

// Ensure all service pages are statically generated at build time
export function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }));
}

export default async function ServiceDetail({ params }: Props) {
  const { id } = await params;
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    notFound();
  }

  const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-brand-indigo py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-purple/20 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="text-lavender hover:text-white mb-6 inline-flex items-center font-bold">
            <ArrowRight className="rotate-180 mr-2" size={18} /> Back to Services
          </Link>
          <div className="flex flex-col lg:flex-row items-center gap-8 mt-4">
            <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center flex-shrink-0 border border-white/20">
              {Icon && <Icon size={48} className="text-brand-magenta" />}
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-black mb-4">{service.title}</h1>
              <p className="text-lavender text-xl lg:text-2xl max-w-2xl">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-black text-brand-indigo mb-6">How our {service.title} works</h2>
                <p className="mb-8">{service.fullDescription}</p>

                {service.id === 'iop-soap' ? (
                  <div className="mt-12 bg-lavender/5 p-8 rounded-2xl border border-lavender/20">
                    <h3 className="text-2xl font-bold text-brand-indigo mb-4">Evening IOP - Because Life Doesn't Wait</h3>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      You're ready to get serious about recovery. But you've also got work. Kids. A life.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      That's exactly why we built our evening IOP.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Ignite Recovery offers Intensive Outpatient Program (IOP) services licensed through DPH/BSAS and covered by MassHealth - scheduled in the evenings so you can actually show up without blowing up everything else you're holding together.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed">
                      You'll get at least 9 hours of support per week across 3 evenings, including group therapy, individual counseling, and real recovery planning that's built around your life - not a one-size-fits-all checklist.
                    </p>
                  </div>
                ) : service.id === 'recovery-coaching' ? (
                  <div className="mt-12 bg-lavender/5 p-8 rounded-2xl border border-lavender/20">
                    <h3 className="text-2xl font-bold text-brand-indigo mb-4">Recovery Coaching: Someone In Your Corner</h3>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Not a therapist. Not a case manager. Something different.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      A Recovery Coach is someone who's been through it and made it to the other side. At Ignite Recovery, our coaches walk alongside you in your recovery, not ahead of you, not behind you. Right there with you.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Whether you're just starting out, coming out of treatment, or trying to stay on track after a rough stretch, a Recovery Coach is the person who picks up, shows up, and doesn't give up on you.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      We help you set real goals, work through real obstacles, and build a life in recovery that actually feels worth living. No clinical jargon. No judgment. Just honest, peer-based support from someone who gets it because they've lived it.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Recovery looks different for everyone. Your coach will meet you exactly where you are.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed">
                      Recovery Coaching is available to adults 18+ and is covered by MassHealth. Referrals welcome, or reach out directly. We'll take it from there.
                    </p>
                  </div>
                ) : service.id === 'recovery-navigation' ? (
                  <div className="mt-12 bg-lavender/5 p-8 rounded-2xl border border-lavender/20">
                    <h3 className="text-2xl font-bold text-brand-indigo mb-4">Recovery Support Navigation: We'll Help You Figure It Out</h3>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Housing. Benefits. Treatment. Transportation. Legal stuff. Childcare.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Recovery doesn't happen in a vacuum, and for a lot of people, the hardest part isn't wanting to get better. It's trying to navigate a system that wasn't built with them in mind.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      That's where our Recovery Support Navigators come in.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      We help you cut through the chaos, connecting you to the resources, services, and supports you actually need to stabilize your life and stay in recovery. We know the system, we know the community, and we know how to get things moving when everything feels stuck.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      No more falling through the cracks. No more being passed around and never getting answers. Just someone in your corner who knows where to go and how to get you there.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed">
                      Available to adults 18+ and covered by MassHealth. We coordinate with treatment providers, housing programs, courts, and community organizations across the South Coast.
                    </p>
                  </div>
                ) : service.id === 'csp-ji' ? (
                  <div className="mt-12 bg-lavender/5 p-8 rounded-2xl border border-lavender/20">
                    <h3 className="text-2xl font-bold text-brand-indigo mb-4">CSP-JI - Community Support Program for Justice-Involved Individuals</h3>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      The system is complicated. Recovery is hard enough. You shouldn't have to figure out both alone.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Ignite Recovery's Community Support Program for Justice-Involved individuals (CSP-JI) is built specifically for people navigating recovery and the criminal justice system - whether you're coming home from incarceration, working through a diversion program, or trying to stay compliant while rebuilding your life.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      We've seen how fast things can unravel when the right support isn't there. We're here to make sure that doesn't happen.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Our CSP-JI services include reentry planning, connection to housing, treatment, and benefits, coordination with courts and probation, and consistent one-on-one support from someone who actually knows how to navigate both worlds. We work directly with referral sources so nothing falls through the cracks - and we show up for our clients the same way.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      This isn't about checking boxes. It's about giving people a real shot.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed">
                      Referrals accepted from courts, probation officers, parole, diversion programs, and reentry organizations. Self-referrals welcome too.
                    </p>
                  </div>
                ) : service.id === 'clinical-services' ? (
                  <div className="mt-12 bg-lavender/5 p-8 rounded-2xl border border-lavender/20">
                    <h3 className="text-2xl font-bold text-brand-indigo mb-4">Outpatient Counseling: Real Support, No Waiting Room Judgment</h3>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Sometimes you need more than a coach. Sometimes you need to actually sit down with someone and work through the stuff that's underneath it all.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Ignite Recovery offers individual and group outpatient counseling with licensed clinicians who actually get it. Not just clinically, but humanly. Our counselors understand addiction, trauma, and the complicated, messy, nonlinear road that recovery really is.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Individual counseling gives you a private space to go deeper, work through what's driving your use, and build the coping skills and self-awareness that make recovery stick. Group counseling puts you in a room with people who are walking a similar road, where real connection and shared experience become part of the healing.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      Both are grounded in evidence-based, trauma-informed care. And both are delivered by people who show up for you like it matters, because it does.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed mb-4">
                      You don't have to have it all figured out to walk through our door. You just have to be willing to try.
                    </p>
                    <p className="font-medium text-slate-700 leading-relaxed">
                      Outpatient counseling is covered by MassHealth. Referrals welcome from clinicians, courts, and providers, or reach out yourself. We'll meet you where you are.
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="mt-16 p-8 bg-lavender/10 rounded-3xl border-2 border-dashed border-brand-lavender/30">
                <h3 className="text-2xl font-black text-brand-indigo mb-4">Core Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['Person-centered care', 'Agency-focused', 'Lived experience insights', 'MassHealth supported', 'Local Bristol County experts', 'Ethical documentation'].map((benefit) => (
                    <div key={benefit} className="flex items-center text-slate-700">
                      <CheckCircle2 className="text-brand-magenta mr-3" size={20} />
                      <span className="font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <div className="bg-brand-indigo rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Start your journey today</h3>
                  <Link href="/intake" className="w-full bg-brand-magenta text-white py-4 rounded-xl font-bold text-lg mb-4 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all">
                    Start Intake Now
                  </Link>
                  <a href="tel:5082960523" className="w-full border-2 border-white/20 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-white/5 transition-all">
                    <Phone className="mr-2" /> (508) 296-0523
                  </a>
                  <p className="text-center text-lavender text-sm mt-6 font-medium uppercase tracking-widest">
                    Serving Bristol County
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                  <h4 className="text-brand-indigo font-bold text-lg mb-4">Insurance Notice</h4>
                  <p className="text-slate-600 text-sm mb-4">
                    We accept all MassHealth and Tufts health plans.
                  </p>
                  <Link href="/insurance" className="text-brand-purple font-bold text-sm underline hover:text-brand-magenta">Verify your coverage</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
