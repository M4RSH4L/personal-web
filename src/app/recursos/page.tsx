import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowUpRight, UserCheck } from 'lucide-react';
import { ARTICLES_DATA } from '../../data/articles';
import { SERVICES_DATA } from '../../data/services';
import { getCanonicalUrl } from '../../lib/seo-config';
import { JsonLd, buildBreadcrumbSchema } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Artículos y Guías de Crecimiento Comercial, BI Retail, Mercado Libre y Ventas B2C | MORPHO',
  description:
    'Biblioteca de análisis y guías prácticas sobre Inteligencia de Negocios para Retail, rentabilidad en Mercado Libre, benchmark comercial, embudos de venta B2C y psicología del consumidor.',
  alternates: {
    canonical: getCanonicalUrl('/recursos'),
  },
  openGraph: {
    title: 'Recursos y Artículos de Estrategia Comercial | MORPHO',
    description:
      'Guías prácticas sobre Business Intelligence, Mercado Libre, Diagnóstico Comercial, Ventas B2C y Manejo de Objeciones por Ronan Lavorato.',
    url: getCanonicalUrl('/recursos'),
  },
};

export default function ResourcesIndexPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Artículos y Guías', path: '/recursos' },
  ]);

  return (
    <main className="bg-white">
      <JsonLd data={breadcrumbSchema} />

      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-slate-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#155EEF]">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-[#101828] font-bold">Artículos y Guías</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#155EEF] text-xs font-extrabold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CONOCIMIENTO APLICADO · SIN RELLENO TEÓRICO</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-[#0A0A0A] tracking-tight leading-[0.95] mb-5">
              Artículos, marcos de trabajo y análisis comercial.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Guías escritas por{' '}
              <Link href="/sobre-mi" className="font-bold text-[#101828] underline hover:text-[#155EEF]">
                Ronan Lavorato
              </Link>{' '}
              para responder las preguntas que enfrentan a diario dueños y directores de retail, e-commerce y equipos de
              ventas B2C.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES_DATA.map((article) => (
              <article
                key={article.slug}
                className="rounded-3xl border border-slate-200 bg-white hover:border-[#155EEF] hover:shadow-xl transition-all p-7 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-500 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-[#155EEF] border border-blue-100">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#101828] group-hover:text-[#155EEF] transition-colors leading-snug mb-3">
                    <Link href={`/recursos/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <Link
                      href="/sobre-mi"
                      className="flex items-center gap-1.5 font-bold text-slate-800 hover:text-[#155EEF]"
                    >
                      <UserCheck className="w-4 h-4 text-[#155EEF]" />
                      <span>Por {article.author.name}</span>
                    </Link>

                    <Link
                      href={`/servicios/${article.relatedServiceSlug}`}
                      className="text-xs font-semibold text-[#155EEF] hover:underline"
                    >
                      Servicio: {article.relatedServiceTitle} →
                    </Link>
                  </div>

                  <Link
                    href={`/recursos/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#101828] group-hover:text-[#155EEF] uppercase tracking-wider pt-1"
                  >
                    <span>Leer guía completa</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Direct Links to the 5 Services */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <h2 className="text-xl font-extrabold text-[#101828] mb-4">
              Explorar Servicios Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {SERVICES_DATA.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#155EEF] text-xs font-bold text-[#101828] hover:text-[#155EEF] transition-colors"
                >
                  {service.number}. {service.shortTitle} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
