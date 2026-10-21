import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG, getCanonicalUrl } from '../../lib/seo-config';
import { SERVICES_DATA } from '../../data/services';
import { ARTICLES_DATA } from '../../data/articles';
import { JsonLd, buildBreadcrumbSchema } from '../../components/JsonLd';
import { ServiceCtaTrigger } from '../../components/ServiceCtaTrigger';

export const metadata: Metadata = {
  title: 'Perfil Profesional: Ronan Lavorato — MORPHO | Estrategia Comercial y Datos',
  description:
    'Trayectoria profesional de Ronan Lavorato: especialista en crecimiento comercial, Business Intelligence para retail, e-commerce, adquisición digital y ventas B2C.',
  alternates: {
    canonical: getCanonicalUrl('/sobre-mi'),
  },
  openGraph: {
    type: 'profile',
    title: 'Ronan Lavorato — Fundador de MORPHO | Estrategia Comercial y BI',
    description:
      'Especialista en crecimiento comercial, Business Intelligence, e-commerce, adquisición B2C y psicología del consumidor.',
    url: getCanonicalUrl('/sobre-mi'),
    images: [
      {
        url: '/retrato_home.png',
        width: 800,
        height: 1000,
        alt: 'Ronan Lavorato — MORPHO',
      },
    ],
  },
};

export default function AboutAuthorPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Perfil Profesional', path: '/sobre-mi' },
  ]);

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_CONFIG.url.replace(/\/$/, '')}/#person-ronan-lavorato`,
      name: SITE_CONFIG.author.name,
      jobTitle: SITE_CONFIG.author.role,
      description: SITE_CONFIG.author.bio,
      url: getCanonicalUrl('/sobre-mi'),
      image: `${SITE_CONFIG.url.replace(/\/$/, '')}${SITE_CONFIG.author.image}`,
      sameAs: [SITE_CONFIG.author.linkedin],
      worksFor: {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.url.replace(/\/$/, '')}/#organization`,
        name: SITE_CONFIG.name,
      },
    },
  };

  return (
    <main className="bg-white text-[#111318]">
      <JsonLd data={[breadcrumbSchema, profilePageSchema]} />

      {/* 1. Editorial Profile Hero */}
      <section className="py-16 md:py-24 border-b border-[#E8EAF0]">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <p className="text-xs font-medium tracking-[0.14em] text-[#656B76] uppercase">
                MORPHO / PERFIL PROFESIONAL
              </p>

              <h1 className="text-4xl sm:text-5xl font-semibold text-[#111318] tracking-[-0.03em] leading-[1.06]">
                Ronan Lavorato
              </h1>

              <p className="text-lg text-[#2457D6] font-normal">
                Estrategia comercial, inteligencia de negocios, adquisición digital y comportamiento del consumidor.
              </p>

              <p className="text-base text-[#656B76] leading-relaxed max-w-2xl">
                Dirijo MORPHO bajo una premisa concreta: las empresas pierden rentabilidad cuando toman decisiones por intuición, desconectan el marketing del proceso de ventas y miran la facturación bruta sin comprender sus márgenes reales.
              </p>

              <p className="text-base text-[#656B76] leading-relaxed max-w-2xl">
                Mi enfoque integra tres disciplinas operativas: análisis de datos comerciales (Business Intelligence y Unit Economics), adquisición en canales digitales (Meta Ads, Google Ads, Mercado Libre, E-commerce) y psicología del consumidor aplicada al cierre de ventas B2C.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6">
                <ServiceCtaTrigger
                  serviceName="Conversación con Ronan Lavorato"
                  ctaLabel="Hablemos de tu negocio"
                  whatsappMessage="Hola Ronan, leí tu perfil en Morpho y me gustaría conversar sobre mi negocio."
                />

                <a
                  href={SITE_CONFIG.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#2457D6] hover:text-[#111318] transition-colors"
                >
                  LinkedIn verificado ↗
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <figure className="w-full max-w-[300px]">
                <div className="overflow-hidden bg-[#F6F7F9] border border-[#E8EAF0] aspect-[4/5]">
                  <img
                    src="/retrato_home.png"
                    alt="Ronan Lavorato — MORPHO"
                    width={300}
                    height={375}
                    className="w-full h-full object-cover object-top grayscale contrast-105"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Experiencia Verificable */}
      <section className="py-20 md:py-28 bg-[#F6F7F9] border-b border-[#E8EAF0]">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#656B76] mb-3">
                TRAYECTORIA
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#111318] tracking-[-0.02em]">
                Experiencia en proyectos reales.
              </h2>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#E8EAF0] border-t border-b border-[#E8EAF0]">
              {SITE_CONFIG.author.verifiedExperience.map((exp, idx) => (
                <div key={idx} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6">
                  <div className="sm:col-span-4">
                    <h3 className="text-base font-medium text-[#111318]">{exp.company}</h3>
                    <span className="text-xs text-[#2457D6] block mt-0.5">{exp.role}</span>
                  </div>
                  <p className="sm:col-span-8 text-sm text-[#656B76] leading-relaxed">
                    {exp.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Áreas de Práctica y Publicaciones */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10 space-y-20">
          <div>
            <h2 className="text-xl font-semibold text-[#111318] mb-6">
              Áreas de consultoría
            </h2>
            <div className="divide-y divide-[#E8EAF0] border-t border-b border-[#E8EAF0]">
              {SERVICES_DATA.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="py-5 flex items-center justify-between group"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-[#656B76]">{s.number}</span>
                    <span className="text-base font-medium text-[#111318] group-hover:text-[#2457D6] transition-colors">
                      {s.shortTitle}
                    </span>
                  </div>
                  <span aria-hidden="true" className="text-sm text-[#656B76] group-hover:text-[#2457D6]">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#111318] mb-6">
              Artículos y análisis publicados
            </h2>
            <div className="divide-y divide-[#E8EAF0] border-t border-b border-[#E8EAF0]">
              {ARTICLES_DATA.map((art) => (
                <Link
                  key={art.slug}
                  href={`/recursos/${art.slug}`}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group"
                >
                  <span className="text-base font-medium text-[#111318] group-hover:text-[#2457D6] transition-colors">
                    {art.title}
                  </span>
                  <span className="text-xs text-[#656B76] shrink-0">{art.category} ↗</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
