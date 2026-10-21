import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { getCanonicalUrl } from '../../lib/seo-config';
import { JsonLd, buildBreadcrumbSchema } from '../../components/JsonLd';
import { ServiceCtaTrigger } from '../../components/ServiceCtaTrigger';

export const metadata: Metadata = {
  title: 'Servicios de Crecimiento Comercial, BI Retail, Mercado Libre y Ventas B2C | MORPHO',
  description:
    'Cinco servicios especializados: Inteligencia de Negocios para Retail, Consultoría Mercado Libre, Diagnóstico Comercial y Benchmark, Adquisición y Ventas B2C, y Manejo de Objeciones.',
  alternates: {
    canonical: getCanonicalUrl('/servicios'),
  },
  openGraph: {
    title: 'Servicios Especializados de Crecimiento Comercial | MORPHO',
    description:
      'Consultoría en Business Intelligence para Retail, Mercado Libre, Diagnóstico Comercial, Ventas B2C y Psicología del Consumidor.',
    url: getCanonicalUrl('/servicios'),
  },
};

export default function ServicesIndexPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Servicios Especializados', path: '/servicios' },
  ]);

  const servicesListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Catálogo de Servicios Especializados de MORPHO',
    itemListElement: SERVICES_DATA.map((service, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.seoDescription,
        url: getCanonicalUrl(`/servicios/${service.slug}`),
      },
    })),
  };

  return (
    <main className="bg-white">
      <JsonLd data={[breadcrumbSchema, servicesListSchema]} />

      {/* Hero Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-200 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-slate-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#155EEF]">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-[#101828] font-bold">Servicios</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#155EEF] text-xs font-extrabold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ARQUITECTURA COMERCIAL MORPHO</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-[#0A0A0A] tracking-tight leading-[0.95] mb-6">
              Cinco especialidades para transformar datos y procesos en ventas rentables.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              No ofrecemos paquetes genéricos de agencia. Intervenimos con metodología, datos y psicología del
              consumidor sobre los cinco problemas que definen la rentabilidad de empresas minoristas, e-commerce y
              equipos B2C.
            </p>

            <ServiceCtaTrigger
              serviceName="Diagnóstico Comercial y Benchmark"
              ctaLabel="SOLICITAR DIAGNÓSTICO DE ORIENTACIÓN"
              whatsappMessage="¡Hola Ronan! Estoy viendo la página de Servicios de Morpho y me gustaría conversar para identificar qué servicio se adapta mejor a mi negocio."
            />
          </div>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.slug}
              className="rounded-3xl border border-slate-200 bg-white hover:border-[#155EEF] transition-all p-7 sm:p-10 shadow-sm hover:shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#D7FF00] text-[#0A0A0A] font-mono text-xs font-black">
                      SERVICIO {service.number}
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#155EEF]">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828] leading-tight">
                    <Link href={`/servicios/${service.slug}`} className="hover:text-[#155EEF] transition-colors">
                      {service.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.heroSubtitle}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
                      ¿Para quién está diseñado?
                    </span>
                    <ul className="space-y-1.5">
                      {service.targetAudience.map((aud, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF] mt-2 shrink-0" />
                          <span>{aud}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block mb-3">
                      Entregables y Resultados Clave:
                    </span>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="w-full py-3.5 px-5 rounded-xl bg-[#101828] hover:bg-[#155EEF] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>VER PROGRAMA Y METODOLOGÍA COMPLETA</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
