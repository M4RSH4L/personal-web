import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES_DATA } from '../../data/services';
import { getCanonicalUrl } from '../../lib/seo-config';
import { JsonLd, buildBreadcrumbSchema } from '../../components/JsonLd';
import { ServiceCtaTrigger } from '../../components/ServiceCtaTrigger';

export const metadata: Metadata = {
  title: 'Servicios de Crecimiento Comercial, BI Retail, Mercado Libre y Ventas B2C | MORPHO',
  description:
    'Cinco áreas de consultoría especializada: Inteligencia de negocios para retail, Mercado Libre, Diagnóstico comercial y benchmark, Adquisición y ventas B2C, y Manejo de objeciones.',
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
    { name: 'Servicios', path: '/servicios' },
  ]);

  const servicesListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios Especializados de MORPHO',
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
    <main className="bg-white text-[#111318]">
      <JsonLd data={[breadcrumbSchema, servicesListSchema]} />

      {/* Editorial Hero */}
      <section className="py-16 md:py-24 border-b border-[#E8EAF0]">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
          <p className="text-xs font-medium tracking-[0.14em] text-[#656B76] uppercase mb-5">
            MORPHO / SERVICIOS ESPECIALIZADOS
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold text-[#111318] tracking-[-0.03em] leading-[1.08] max-w-3xl mb-6">
            Cinco áreas. Un mismo objetivo.
          </h1>

          <p className="text-lg text-[#656B76] leading-relaxed max-w-2xl mb-10">
            Identificar qué frena el crecimiento de tu operación comercial y actuar con datos, procesos y criterio sobre lo que realmente importa.
          </p>

          <ServiceCtaTrigger
            serviceName="Diagnóstico comercial y benchmark"
            ctaLabel="Hablemos de tu negocio"
            whatsappMessage="Hola Ronan, estoy viendo los servicios de Morpho y me gustaría conversar sobre mi negocio."
          />
        </div>
      </section>

      {/* Editorial Service Index */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10 divide-y divide-[#E8EAF0] border-t border-b border-[#E8EAF0]">
          {SERVICES_DATA.map((service) => (
            <article key={service.slug} className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-mono text-[#2457D6] block">
                  {service.number}
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#111318] tracking-[-0.02em]">
                  <Link href={`/servicios/${service.slug}`} className="hover:text-[#2457D6] transition-colors">
                    {service.shortTitle}
                  </Link>
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-base text-[#656B76] leading-relaxed">
                  {service.heroSubtitle}
                </p>

                <ul className="space-y-2 border-l border-[#E8EAF0] pl-4">
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <li key={i} className="text-sm text-[#111318]">
                      {item}
                    </li>
                  ))}
                </ul>

                <div>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2457D6] hover:text-[#111318] transition-colors"
                  >
                    <span>Explorar servicio y alcance</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
