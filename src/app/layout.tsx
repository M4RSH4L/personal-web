import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter_Tight, Caveat } from 'next/font/google';
import '../index.css';
import { SITE_CONFIG, getCanonicalUrl } from '../lib/seo-config';
import { JsonLd, buildOrganizationAndPersonSchema } from '../components/JsonLd';
import { SiteShell } from '../components/BookingContext';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-inter-tight',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'MORPHO — Agente Humano de Marketing | Crecimiento Comercial y BI',
    template: '%s',
  },
  description:
    'Transformo datos y procesos comerciales en crecimiento medible. Consultoría en Inteligencia de Negocios para Retail, Mercado Libre, Diagnóstico Comercial, Ventas B2C y Psicología del Consumidor.',
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: getCanonicalUrl('/'),
    siteName: `${SITE_CONFIG.name} — ${SITE_CONFIG.brandConcept}`,
    title: 'MORPHO — Agente Humano de Marketing | Crecimiento Comercial y BI',
    description:
      'Transformo datos y procesos comerciales en crecimiento medible para retail, e-commerce y empresas B2C. Dirigido por Ronan Lavorato.',
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
    title: 'MORPHO — Agente Humano de Marketing | Crecimiento Comercial y BI',
    description:
      'Estrategia comercial, Business Intelligence para retail, Mercado Libre, adquisición B2C y psicología del consumidor.',
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
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${interTight.variable} ${caveat.variable}`}
    >
      <head>
        <JsonLd data={buildOrganizationAndPersonSchema()} />
      </head>
      <body className="min-h-screen bg-white text-[#101828] antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
