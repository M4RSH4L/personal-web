import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES_DATA, getServiceBySlug } from '../../../data/services';
import { ARTICLES_DATA } from '../../../data/articles';
import { SITE_CONFIG, getCanonicalUrl } from '../../../lib/seo-config';
import { JsonLd, buildBreadcrumbSchema } from '../../../components/JsonLd';
import { ServiceCtaTrigger } from '../../../components/ServiceCtaTrigger';

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Servicio no encontrado | MORPHO',
    };
  }

  const canonical = getCanonicalUrl(`/servicios/${service.slug}`);

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      title: service.seoTitle,
      description: service.seoDescription,
      url: canonical,
      siteName: `${SITE_CONFIG.name} — ${SITE_CONFIG.brandConcept}`,
      images: [
        {
          url: '/retrato_home.png',
          width: 800,
          height: 1000,
          alt: `${service.shortTitle} — MORPHO`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.seoDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedArticles = ARTICLES_DATA.filter((art) =>
    service.relatedArticleSlugs.includes(art.slug)
  );
  const relatedServices = SERVICES_DATA.filter((srv) =>
    service.relatedServiceSlugs.includes(srv.slug)
  );

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: service.shortTitle, path: `/servicios/${service.slug}` },
  ]);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${getCanonicalUrl(`/servicios/${service.slug}`)}#service`,
    name: service.title,
    serviceType: service.shortTitle,
    description: service.seoDescription,
    url: getCanonicalUrl(`/servicios/${service.slug}`),
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url.replace(/\/$/, '')}/#organization`,
      name: SITE_CONFIG.name,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Argentina y Latinoamérica',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Módulos de ${service.shortTitle}`,
      itemListElement: service.coreModules.map((mod) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: mod.title,
          description: mod.description,
        },
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="bg-white text-[#111318]">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />

      {/* 1. Editorial Hero */}
      <section className="py-16 md:py-24 border-b border-[#E8EAF0]">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-[#656B76] mb-8 flex flex-wrap items-center gap-2"
          >
            <Link href="/" className="hover:text-[#111318]">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-[#111318]">
              Servicios
            </Link>
            <span>/</span>
            <span className="text-[#111318]">{service.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <p className="text-xs font-mono text-[#2457D6] uppercase tracking-wider">
                SERVICIO {service.number} · {service.badge}
              </p>

              <h1 className="text-3xl sm:text-5xl font-semibold text-[#111318] tracking-[-0.03em] leading-[1.08]">
                {service.title}
              </h1>

              <p className="text-lg text-[#656B76] leading-relaxed max-w-2xl">
                {service.heroSubtitle}
              </p>

              <div className="pt-2">
                <ServiceCtaTrigger
                  serviceName={service.shortTitle}
                  ctaLabel={service.ctaLabel}
                  whatsappMessage={service.whatsappMessage}
                />
              </div>
            </div>

            <aside className="lg:col-span-4 bg-[#F6F7F9] p-6 sm:p-8 border border-[#E8EAF0] space-y-4">
              <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-[#656B76]">
                Para quién está pensado
              </h2>
              <ul className="space-y-3 divide-y divide-[#E8EAF0]">
                {service.targetAudience.map((item, idx) => (
                  <li key={idx} className="pt-3 first:pt-0 text-sm text-[#111318] leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* 2. Problemas que Resolvemos */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E8EAF0]">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#656B76] mb-3">
              DIAGNÓSTICO
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#111318] tracking-[-0.02em]">
              Problemas que resuelve esta intervención.
            </h2>
          </div>

          <div className="divide-y divide-[#E8EAF0] border-t border-b border-[#E8EAF0]">
            {service.problemsSolved.map((item, idx) => (
              <div key={idx} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-4">
                  <span className="text-xs font-mono text-[#656B76] block mb-1">0{idx + 1}</span>
                  <h3 className="text-lg font-medium text-[#111318]">{item.problem}</h3>
                </div>
                <div className="lg:col-span-4">
                  <span className="text-xs uppercase tracking-wider text-[#656B76] block mb-1">
                    Impacto en el negocio
                  </span>
                  <p className="text-sm text-[#656B76] leading-relaxed">{item.consequence}</p>
                </div>
                <div className="lg:col-span-4">
                  <span className="text-xs uppercase tracking-wider text-[#2457D6] block mb-1">
                    Enfoque MORPHO
                  </span>
                  <p className="text-sm text-[#111318] leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clarificación de Alcance (Servicio 05) */}
      {service.scopeClarification && (
        <section className="py-20 bg-[#F6F7F9] border-b border-[#E8EAF0]">
          <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#2457D6] mb-3">
                DEFINICIÓN DE ALCANCE
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#111318] tracking-[-0.02em] mb-3">
                {service.scopeClarification.title}
              </h2>
              <p className="text-sm sm:text-base text-[#656B76] leading-relaxed">
                {service.scopeClarification.note}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.scopeClarification.tracks.map((track, idx) => (
                <div key={idx} className="bg-white p-7 border border-[#E8EAF0] space-y-4">
                  <span className="text-xs font-mono text-[#2457D6]">{track.status}</span>
                  <h3 className="text-lg font-semibold text-[#111318]">{track.name}</h3>
                  <p className="text-sm text-[#656B76] leading-relaxed">{track.description}</p>
                  <ul className="space-y-2 pt-3 border-t border-[#E8EAF0]">
                    {track.items.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm text-[#111318]">
                        — {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Módulos de Trabajo */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E8EAF0]">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#656B76] mb-3">
              ALCANCE TÉCNICO
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#111318] tracking-[-0.02em]">
              Módulos de trabajo.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {service.coreModules.map((mod, idx) => (
              <div key={idx} className="border-t border-[#E8EAF0] pt-6 space-y-4">
                <h3 className="text-lg font-semibold text-[#111318]">{mod.title}</h3>
                <p className="text-sm text-[#656B76] leading-relaxed">{mod.description}</p>
                <ul className="space-y-2 pt-2">
                  {mod.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-sm text-[#111318] leading-relaxed flex items-start gap-2">
                      <span className="text-[#2457D6]">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Metodología y Entregables */}
      <section className="py-20 md:py-28 bg-[#F6F7F9] border-b border-[#E8EAF0]">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#656B76] mb-3">
                  PROCESO
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#111318] tracking-[-0.02em]">
                  Secuencia de implementación.
                </h2>
              </div>

              <div className="divide-y divide-[#E8EAF0] border-t border-b border-[#E8EAF0]">
                {service.methodologySteps.map((m, idx) => (
                  <div key={idx} className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4">
                    <span className="sm:col-span-2 text-xs font-mono text-[#2457D6]">{m.step}</span>
                    <div className="sm:col-span-10 space-y-1">
                      <h3 className="text-base font-medium text-[#111318]">{m.title}</h3>
                      <p className="text-sm text-[#656B76] leading-relaxed">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-7 sm:p-8 border border-[#E8EAF0] space-y-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#656B76] mb-2">
                  ENTREGABLES
                </p>
                <h3 className="text-xl font-semibold text-[#111318]">
                  Qué queda instalado en tu negocio
                </h3>
              </div>

              <ul className="space-y-3 divide-y divide-[#E8EAF0]">
                {service.deliverables.map((deliv, i) => (
                  <li key={i} className="pt-3 first:pt-0 text-sm text-[#111318] leading-relaxed">
                    {deliv}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#E8EAF0]">
                <ServiceCtaTrigger
                  serviceName={service.shortTitle}
                  ctaLabel={service.ctaLabel}
                  whatsappMessage={service.whatsappMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Preguntas Frecuentes */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E8EAF0]">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#656B76] mb-3">
                PREGUNTAS FRECUENTES
              </p>
              <h2 className="text-2xl font-semibold text-[#111318] tracking-[-0.02em]">
                Dudas habituales sobre {service.shortTitle}
              </h2>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#E8EAF0] border-t border-b border-[#E8EAF0]">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="py-6 space-y-2">
                  <h3 className="text-base font-medium text-[#111318]">{faq.question}</h3>
                  <p className="text-sm text-[#656B76] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lectura Relacionada y Servicios Complementarios */}
      <section className="py-16 bg-[#F6F7F9]">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#656B76] block">
                ANÁLISIS RELACIONADO
              </span>
              {relatedArticles.map((art) => (
                <div key={art.slug} className="p-6 bg-white border border-[#E8EAF0] space-y-2">
                  <h3 className="text-base font-medium text-[#111318]">
                    <Link href={`/recursos/${art.slug}`} className="hover:text-[#2457D6] transition-colors">
                      {art.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#656B76] leading-relaxed">{art.summary}</p>
                  <Link
                    href={`/recursos/${art.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#2457D6] pt-1"
                  >
                    <span>Leer artículo</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#656B76] block">
                SERVICIOS COMPLEMENTARIOS
              </span>
              <div className="divide-y divide-[#E8EAF0] border-t border-b border-[#E8EAF0] bg-white px-6">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/servicios/${rel.slug}`}
                    className="py-5 flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#656B76] mr-3">{rel.number}</span>
                      <span className="text-sm font-medium text-[#111318] group-hover:text-[#2457D6] transition-colors">
                        {rel.shortTitle}
                      </span>
                    </div>
                    <span aria-hidden="true" className="text-xs text-[#656B76] group-hover:text-[#2457D6]">
                      ↗
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
