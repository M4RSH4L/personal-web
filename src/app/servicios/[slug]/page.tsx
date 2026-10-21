import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Layers,
  Compass,
  HelpCircle,
  BookOpen,
  ShieldCheck,
} from 'lucide-react';
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
    <main className="bg-white">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />

      {/* 1. Hero Section */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="text-xs font-semibold text-slate-500 mb-6 flex flex-wrap items-center gap-2"
          >
            <Link href="/" className="hover:text-[#155EEF]">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-[#155EEF]">
              Servicios
            </Link>
            <span>/</span>
            <span className="text-[#101828] font-bold">{service.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02] text-[#0A0A0A] text-[11px] font-mono font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#D7FF00] border border-black/30" />
                <span>
                  SERVICIO {service.number} · {service.badge}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.4rem] font-black text-[#0A0A0A] tracking-tight leading-[0.96]">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
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

            {/* Right Summary Box: Para quién es */}
            <aside className="lg:col-span-4 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#155EEF] block mb-2">
                  PERFIL DE EMPRESA IDEAL
                </span>
                <h2 className="text-lg font-extrabold text-[#101828]">
                  ¿Cuándo necesitás esta intervención?
                </h2>
              </div>

              <ul className="space-y-3">
                {service.targetAudience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
                Dirigido personalmente por{' '}
                <Link href="/sobre-mi" className="font-bold text-[#101828] hover:text-[#155EEF] underline">
                  Ronan Lavorato
                </Link>{' '}
                · Sin intermediarios junior.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 2. Problemas que Resolvemos */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#155EEF] block mb-2">
              DIAGNÓSTICO DE CUELLOS DE BOTELLA
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101828] tracking-tight">
              Qué problemas concretos resuelve este servicio.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.problemsSolved.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Síntoma / Fuga #{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#101828] leading-snug">
                    {item.problem}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Consecuencia:</strong> {item.consequence}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#155EEF] block mb-1">
                    Intervención MORPHO:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Scope Clarification Block (Specifically for Service 5: Objeciones vs Contratación Comercial) */}
      {service.scopeClarification && (
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="rounded-3xl bg-[#F0F5FF] border border-blue-200 p-7 sm:p-10">
              <div className="max-w-3xl mb-8">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#155EEF] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ESTRUCTURA MODULAR Y TRANSPARENCIA DE ALCANCE</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828] mb-2">
                  {service.scopeClarification.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {service.scopeClarification.note}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.scopeClarification.tracks.map((track, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#D7FF00] text-[#101828]">
                        {track.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-[#101828] mb-2">{track.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {track.description}
                    </p>
                    <ul className="space-y-2 pt-3 border-t border-slate-100">
                      {track.items.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Módulos de Trabajo / Qué incluye */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#155EEF]" />
              <span>ALCANCE TÉCNICO Y OPERATIVO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101828] tracking-tight">
              Módulos de implementación de {service.shortTitle}.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.coreModules.map((mod, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl border border-slate-200 hover:border-[#155EEF] transition-colors bg-white"
              >
                <h3 className="text-xl font-extrabold text-[#101828] mb-2">{mod.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {mod.description}
                </p>
                <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                  {mod.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Metodología Paso a Paso y Entregables */}
      <section className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D7FF00] text-xs font-extrabold uppercase tracking-wider mb-3">
                  <Compass className="w-3.5 h-3.5" />
                  <span>METODOLOGÍA DE EJECUCIÓN</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Cómo lo implementamos en tu negocio.
                </h2>
              </div>

              <div className="space-y-4">
                {service.methodologySteps.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700 flex items-start gap-4"
                  >
                    <span className="px-2.5 py-1 rounded bg-[#D7FF00] text-[#101828] font-mono text-xs font-black shrink-0">
                      {m.step}
                    </span>
                    <div>
                      <h3 className="text-base font-extrabold text-white mb-1">{m.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Box */}
            <div className="lg:col-span-5 bg-slate-800/90 rounded-3xl p-7 sm:p-8 border border-slate-700 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D7FF00] block mb-1">
                  ACTIVOS QUE QUEDAN EN TU EMPRESA
                </span>
                <h3 className="text-xl font-extrabold text-white">Entregables verificables</h3>
              </div>

              <ul className="space-y-3">
                {service.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#D7FF00] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-700">
                <ServiceCtaTrigger
                  serviceName={service.shortTitle}
                  ctaLabel={service.ctaLabel}
                  whatsappMessage={service.whatsappMessage}
                  variant="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Preguntas Frecuentes del Servicio */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#155EEF] text-xs font-extrabold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>PREGUNTAS FRECUENTES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101828]">
              Respuestas claras sobre {service.shortTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <h3 className="text-base font-extrabold text-[#101828] mb-2">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contenido Experto Relacionado y Servicios Complementarios */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Related Articles */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#155EEF] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Lectura Recomendada sobre esta Especialidad</span>
              </span>
              {relatedArticles.map((art) => (
                <div
                  key={art.slug}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#155EEF] transition-all"
                >
                  <span className="text-[11px] font-bold text-[#155EEF] uppercase">{art.category}</span>
                  <h3 className="text-lg font-extrabold text-[#101828] mt-1 mb-2">
                    <Link href={`/recursos/${art.slug}`} className="hover:text-[#155EEF]">
                      {art.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 mb-3">{art.summary}</p>
                  <Link
                    href={`/recursos/${art.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-[#155EEF] hover:underline"
                  >
                    <span>Leer guía técnica completa</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Related Services */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                Servicios Complementarios en MORPHO
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/servicios/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#155EEF] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        SERVICIO {rel.number}
                      </span>
                      <h3 className="text-base font-extrabold text-[#101828] group-hover:text-[#155EEF] mt-1 mb-2">
                        {rel.shortTitle}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3">{rel.heroSubtitle}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#155EEF] mt-4">
                      <span>Ver servicio</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
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
