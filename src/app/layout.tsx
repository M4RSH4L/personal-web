import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';
import { SITE_CONFIG, getCanonicalUrl } from '../lib/seo-config';
import { JsonLd, buildOrganizationAndPersonSchema } from '../components/JsonLd';
import { SiteShell } from '../components/BookingContext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'MORPHO — Agente Humano de Marketing | Estrategia, Datos y Crecimiento',
    template: '%s',
  },
  description:
    'Inteligencia comercial, adquisición y ventas para negocios que quieren crecer con datos. Consultoría en BI para Retail, Mercado Libre, Diagnóstico Comercial y Ventas B2C.',
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: getCanonicalUrl('/'),
    siteName: `${SITE_CONFIG.name} — ${SITE_CONFIG.brandConcept}`,
    title: 'MORPHO — Menos intuición. Más criterio.',
    description:
      'Inteligencia comercial, adquisición y ventas para negocios que quieren crecer con datos.',
    images: [
      {
        url: '/retrato_home.png',
        width: 800,
        height: 1000,
        alt: 'Ronan Lavorato — MORPHO Agente Humano de Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MORPHO — Menos intuición. Más criterio.',
    description:
      'Inteligencia comercial, adquisición y ventas para negocios que quieren crecer con datos.',
    images: ['/retrato_home.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <JsonLd data={buildOrganizationAndPersonSchema()} />
      </head>
      <body className="min-h-screen bg-white text-[#111318] antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
