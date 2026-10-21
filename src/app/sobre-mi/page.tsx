import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Briefcase, Award, BookOpen } from 'lucide-react';
import { SITE_CONFIG, getCanonicalUrl } from '../../lib/seo-config';
import { SERVICES_DATA } from '../../data/services';
import { ARTICLES_DATA } from '../../data/articles';
import { JsonLd, buildBreadcrumbSchema } from '../../components/JsonLd';
import { ServiceCtaTrigger } from '../../components/ServiceCtaTrigger';

export const metadata: Metadata = {
  title: 'Sobre Ronan Lavorato — Fundador de MORPHO y Estratega de Crecimiento Comercial',
  description:
    'Conocé la trayectoria profesional de Ronan Lavorato: especialista en crecimiento comercial, Business Intelligence para retail, e-commerce, adquisición digital (Meta & Google Ads) y estructura de ventas B2C.',
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
    { name: 'Sobre Ronan Lavorato', path: '/sobre-mi' },
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
    <main className="bg-white">
      <JsonLd data={[breadcrumbSchema, profilePageSchema]} />

      {/* 1. Profile Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-slate-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#155EEF]">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-[#101828] font-bold">Sobre Ronan Lavorato</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02] text-[#0A0A0A] text-[11px] font-mono font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#D7FF00] border border-black/30" />
                <span>PERFIL PROFESIONAL & FUNDADOR DE MORPHO</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-[#0A0A0A] tracking-tight leading-[0.95]">
                Ronan Lavorato
              </h1>

              <p className="text-lg sm:text-xl font-bold text-[#155EEF]">
                Estratega en Crecimiento Comercial, Business Intelligence, E-commerce y Sistemas de Adquisición B2C.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Fundé <strong>MORPHO</strong> bajo una premisa concreta: la mayoría de las empresas no fracasan por
                falta de esfuerzo, sino por tomar decisiones comerciales a ciegas, desconectar la publicidad del piso de
                ventas y mirar la facturación bruta sin entender sus márgenes reales.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Mi trabajo integra tres disciplinas que rara vez conviven en una agencia tradicional:{' '}
                <strong>análisis riguroso de datos (Business Intelligence y Unit Economics)</strong>,{' '}
                <strong>arquitectura de adquisición digital (Meta Ads, Google Ads, Mercado Libre, E-commerce)</strong> y{' '}
                <strong>psicología del consumidor aplicada al manejo de objeciones y cierre de ventas</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={SITE_CONFIG.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#101828] hover:bg-[#155EEF] text-white text-xs font-extrabold uppercase tracking-wider transition-colors"
                >
                  <span>Ver Perfil Verificado en LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-4">
                <ServiceCtaTrigger
                  serviceName="Diagnóstico Comercial con Ronan Lavorato"
                  ctaLabel="AGENDAR SESIÓN CON RONAN"
                  whatsappMessage="¡Hola Ronan! Estuve leyendo tu perfil profesional en Morpho y me gustaría conversar sobre mi negocio."
                />
              </div>
            </div>

            {/* Editorial Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px]">
                <div
                  className="absolute -top-3 -left-4 w-40 h-56 bg-[#D7FF00] -rotate-3 rounded-2xl -z-10"
                  aria-hidden="true"
                />
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 aspect-[3.7/4.6]">
                  <img
                    src="/retrato_home.png"
                    alt="Ronan Lavorato — Estratega Comercial y Fundador de MORPHO"
                    width={420}
                    height={520}
                    className="w-full h-full object-cover object-top filter grayscale contrast-115"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-600 px-1">
                  <span className="font-bold text-[#0A0A0A]">RONAN LAVORATO</span>
                  <span>BUENOS AIRES · GLOBAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Experiencia Comprobable y Casos Liderados */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#155EEF] text-xs font-extrabold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>EXPERIENCIA OPERATIVA VERIFICABLE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101828] tracking-tight">
              Trayectoria en empresas de escala global, EdTech, Retail y D2C.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SITE_CONFIG.author.verifiedExperience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#155EEF] uppercase">
                    {exp.role}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#101828] mt-1 mb-2">{exp.company}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{exp.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Competencias Técnicas y Herramientas */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-extrabold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#155EEF]" />
                <span>ESPECIALIDADES & STACK</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101828] tracking-tight">
                Áreas de dominio técnico y comercial.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cada proyecto se aborda integrando visión financiera de negocio con ejecución técnica directa en las
                plataformas líderes del ecosistema.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  group: 'Business Intelligence & Datos',
                  items: [
                    'Modelado de Unit Economics, CAC, LTV y margen de contribución',
                    'Dashboards ejecutivos (Looker Studio, Power BI, Sheets avanzados)',
                    'Análisis de retail: facturación, unidades, kilogramos y rotación ABC',
                    'Tracking Server-Side (Google Tag Manager & Meta CAPI)',
                  ],
                },
                {
                  group: 'E-commerce & Marketplaces',
                  items: [
                    'Consultoría integral en Mercado Libre (rentabilidad, catálogo, Flex/Full)',
                    'Optimización de tiendas en Tiendanube y Shopify (CRO & AOV)',
                    'Ingeniería de precios, packs, combos y logística comercial',
                    'Recuperación automatizada de carritos vía WhatsApp y Email',
                  ],
                },
                {
                  group: 'Adquisición & Paid Media',
                  items: [
                    'Estrategia y escala en Meta Ads (Advantage+ / CBO) y Google Ads',
                    'Dirección de creativos UGC y ganchos de respuesta directa',
                    'Auditoría forense de cuentas publicitarias y benchmark competitivo',
                    'Atribución multicanal entre pauta y cierres reales en CRM',
                  ],
                },
                {
                  group: 'Ventas B2C & Psicología del Consumidor',
                  items: [
                    'Diseño de pipelines comerciales en CRM (HubSpot, Kommo, WhatsApp)',
                    'Matrices de manejo de objeciones sin destrucción de margen',
                    'Capacitación, guiones consultivos y roleplay para vendedores',
                    'Criterios técnicos para evaluación y selección de perfiles comerciales',
                  ],
                },
              ].map((spec, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-extrabold text-[#101828] mb-3">{spec.group}</h3>
                  <ul className="space-y-2">
                    {spec.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#155EEF] shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Los 5 Servicios y Publicaciones de Ronan */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div>
            <h2 className="text-2xl font-extrabold text-[#101828] mb-6">
              Servicios dirigidos por Ronan Lavorato en MORPHO
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {SERVICES_DATA.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#155EEF] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#155EEF]">
                      SERVICIO {s.number}
                    </span>
                    <h3 className="text-sm font-extrabold text-[#101828] group-hover:text-[#155EEF] mt-1">
                      {s.shortTitle}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 group-hover:text-[#155EEF] mt-3 inline-flex items-center gap-1">
                    <span>Ver alcance</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#101828] mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#155EEF]" />
              <span>Artículos y Guías Técnicas Escritas por Ronan Lavorato</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {ARTICLES_DATA.map((art) => (
                <Link
                  key={art.slug}
                  href={`/recursos/${art.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#155EEF] transition-all group"
                >
                  <span className="text-[10px] font-bold uppercase text-[#155EEF]">{art.category}</span>
                  <h3 className="text-sm font-extrabold text-[#101828] group-hover:text-[#155EEF] mt-1 mb-2">
                    {art.title}
                  </h3>
                  <span className="text-xs font-bold text-[#155EEF] inline-flex items-center gap-1">
                    <span>Leer artículo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
