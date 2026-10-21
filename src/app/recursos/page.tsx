import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES_DATA } from '../../data/articles';
import { getCanonicalUrl } from '../../lib/seo-config';
import { JsonLd, buildBreadcrumbSchema } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Artículos y Análisis Comercial: BI Retail, Mercado Libre y Ventas B2C | MORPHO',
  description:
    'Análisis y guías prácticas sobre Inteligencia de negocios para retail, rentabilidad en Mercado Libre, diagnóstico comercial, embudos de venta B2C y psicología del consumidor.',
  alternates: {
    canonical: getCanonicalUrl('/recursos'),
  },
  openGraph: {
    title: 'Artículos y Análisis de Estrategia Comercial | MORPHO',
    description:
      'Guías prácticas sobre Business Intelligence, Mercado Libre, Diagnóstico Comercial, Ventas B2C y Manejo de Objeciones por Ronan Lavorato.',
    url: getCanonicalUrl('/recursos'),
  },
};

export default function ResourcesIndexPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Artículos', path: '/recursos' },
  ]);

  return (
    <main className="bg-white text-[#111318]">
      <JsonLd data={breadcrumbSchema} />

      <section className="py-16 md:py-24 border-b border-[#E8EAF0]">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
          <p className="text-xs font-medium tracking-[0.14em] text-[#656B76] uppercase mb-5">
            MORPHO / ANÁLISIS & CRITERIO
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold text-[#111318] tracking-[-0.03em] leading-[1.08] max-w-3xl mb-6">
            Artículos y análisis comercial.
          </h1>

          <p className="text-lg text-[#656B76] leading-relaxed max-w-2xl">
            Documentos escritos por{' '}
            <Link href="/sobre-mi" className="text-[#111318] underline hover:text-[#2457D6]">
              Ronan Lavorato
            </Link>{' '}
            sobre rentabilidad en retail, operación en Mercado Libre, diagnóstico de embudos y procesos de venta B2C.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10 divide-y divide-[#E8EAF0] border-t border-b border-[#E8EAF0]">
          {ARTICLES_DATA.map((article, idx) => (
            <article key={article.slug} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-2 text-xs font-mono text-[#656B76]">
                0{idx + 1} · {article.readingTime}
              </div>

              <div className="lg:col-span-7 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#111318] tracking-[-0.015em]">
                  <Link href={`/recursos/${article.slug}`} className="hover:text-[#2457D6] transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm text-[#656B76] leading-relaxed">{article.summary}</p>
              </div>

              <div className="lg:col-span-3 flex lg:justify-end">
                <Link
                  href={`/recursos/${article.slug}`}
                  className="text-sm font-medium text-[#2457D6] hover:text-[#111318] transition-colors"
                >
                  Leer análisis ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
