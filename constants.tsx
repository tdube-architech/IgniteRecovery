
import React from 'react';
import { ShieldCheck, Users, ClipboardList, Activity, HeartHandshake, MapPin } from 'lucide-react';
import { Service } from './types';

export const COLORS = {
  primary: '#160F56',
  secondary: '#760972',
  accent: '#9D0396',
  lavender: '#9D89B4',
  offWhite: '#F2EBF7',
  charcoal: '#121826',
  slate: '#475569',
};

export const SERVICES: Service[] = [
  {
    id: 'clinical-services',
    title: 'Outpatient Counseling',
    path: '/services/clinical-services',
    shortDescription: 'Individual, group, and family therapy tailored to your needs.',
    fullDescription: 'Expert clinical therapy providing safe spaces for individuals, families, and groups. We address the behavioral health conditions alongside substance use for holistic healing.',
    icon: 'Users',
    seoTitle: 'Outpatient Substance Abuse Counseling Fall River, MA | Ignite Recovery',
    metaDesc: 'Professional individual, group, and family therapy in Fall River. Restore your agency through evidence-based clinical care.',
  },
  {
    id: 'iop-soap',
    title: 'IOP/SOAP Program',
    path: '/services/iop-soap',
    shortDescription: 'Intensive Outpatient and Structured Outpatient Addiction Program.',
    fullDescription: 'A high-engagement program designed for stability and growth. We provide consistent structure and therapeutic support for adults ready to take their recovery to the next level.',
    icon: 'Activity',
    seoTitle: 'IOP Program in Fall River, MA | Ignite Recovery',
    metaDesc: 'Join our Intensive Outpatient (IOP) and SOAP programs in Fall River. Structured support for adults 18+ seeking real progress.',
  },
  {
    id: 'recovery-coaching',
    title: 'Recovery Coaching',
    path: '/services/recovery-coaching',
    shortDescription: 'Peer-based, person-centered support by individuals with lived experience.',
    fullDescription: 'Our Recovery Coaching provides peer-based, person-centered support. This is more than just guidance; it is a partnership with individuals who have walked similar paths. We focus on your agency and long-term success.',
    icon: 'HeartHandshake',
    seoTitle: 'Recovery Coaching in Fall River, MA | Ignite Recovery',
    metaDesc: 'Peer-based recovery coaching in Fall River. Lived experience meets professional integrity to support your unique journey.',
  },
  {
    id: 'recovery-navigation',
    title: 'Recovery Support Navigation',
    path: '/services/recovery-navigation',
    shortDescription: 'Comprehensive care management to remove significant barriers to recovery.',
    fullDescription: 'Our Support Navigators help manage complex barriers—housing, legal, and medical—so you can focus entirely on your wellness. We coordinate care with integrity and responsive documentation.',
    icon: 'MapPin',
    seoTitle: 'Recovery Support Navigation in Fall River, MA | Ignite Recovery',
    metaDesc: 'Professional care management for addiction recovery barriers in Bristol County. We handle the complexity so you can focus on healing.',
  },
  {
    id: 'csp-ji',
    title: 'CSP-JI Services',
    path: '/services/csp-ji',
    shortDescription: 'Community Support Program for Justice Involved individuals.',
    fullDescription: 'Specialized support for those navigating the transition from justice systems back into the community, focusing on reducing recidivism and promoting health.',
    icon: 'ShieldCheck',
    seoTitle: 'CSP-JI Services in Fall River, MA | Ignite Recovery',
    metaDesc: 'Specialized community support for justice-involved individuals in Fall River and Attleboro. We provide a bridge to recovery.',
  },
];

export const ICON_MAP: Record<string, React.ElementType> = {
  HeartHandshake,
  MapPin,
  Users,
  Activity,
  ShieldCheck,
  ClipboardList
};
