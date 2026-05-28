import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Ignite Recovery — Outpatient Counseling & Support',
  description: 'Get in touch with Ignite Recovery in Fall River, MA. Contact us by phone, email, or our online form for support, outpatient counseling, or recovery inquiries.',
  alternates: {
    canonical: 'https://ignitemyrecovery.com/contact'
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
