import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, CheckCircle2, ArrowUpRight, UserCheck, Tag } from 'lucide-react';
import { ARTICLES_DATA, getArticleBySlug } from '../../../data/articles';
import { SITE_CONFIG, getCanonicalUrl } from '../../../lib/seo-config';
import { JsonLd, buildBreadcrumbSchema } from '../../../components/JsonLd';
import { ServiceCtaTrigger } from '../../../components/ServiceCtaTrigger';

export function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Artículo no encontrado | MORPHO',
    };
  }

  const canonical = getCanonicalUrl(`/recursos/${article.slug}`);

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    authors: [{ name: article.author.name, url: getCanonicalUrl(article.author.profileUrl) }],
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'article',
      title: article.seoTitle,
      description: article.seoDescription,
      url: canonical,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      siteName: `${SITE_CONFIG.name} — ${SITE_CONFIG.brandConcept}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seoTitle,
      description: article.seoDescription,
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Artículos y Guías', path: '/recursos' },
    { name: article.title, path: `/recursos/${article.slug}` },
  ]);

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.seoDescription,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getCanonicalUrl(`/recursos/${article.slug}`),
    },
    author: {
      '@type': 'Person',
      '@id': `${SITE_CONFIG.url.replace(/\/$/, '')}/#person-ronan-lavorato`,
      name: article.author.name,
      url: getCanonicalUrl('/sobre-mi'),
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url.replace(/\/$/, '')}/#organization`,
      name: SITE_CONFIG.name,
    },
    about: [
      {
        '@type': 'Service',
        name: article.relatedServiceTitle,
        url: getCanonicalUrl(`/servicios/${article.relatedServiceSlug}`),
      },
    ],
  };

  return (
    <main className="bg-white">
      <JsonLd data={[breadcrumbSchema, blogPostingSchema]} />

      <article className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="text-xs font-semibold text-slate-500 mb-6 flex flex-wrap items-center gap-2"
          >
            <Link href="/" className="hover:text-[#155EEF]">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/recursos" className="hover:text-[#155EEF]">
              Artículos y Guías
            </Link>
            <span>/</span>
            <span className="text-[#101828] font-bold truncate max-w-xs">{article.category}</span>
          </nav>

          {/* Header */}
          <header className="space-y-5 pb-10 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#155EEF] border border-blue-100">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-slate-500 font-mono">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight leading-[1.03]">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {article.summary}
            </p>

            {/* Author & Related Service Bar */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3">
                <img
                  src="/retrato_home.png"
                  alt={article.author.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover object-top filter grayscale border border-slate-300"
                />
                <div>
                  <Link
                    href={article.author.profileUrl}
                    className="text-xs sm:text-sm font-extrabold text-[#101828] hover:text-[#155EEF] flex items-center gap-1"
                  >
                    <span>{article.author.name}</span>
                    <UserCheck className="w-3.5 h-3.5 text-[#155EEF]" />
                  </Link>
                  <span className="text-[11px] text-slate-500 block">{article.author.role}</span>
                </div>
              </div>

              <div className="text-xs">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">
                  Servicio Relacionado:
                </span>
                <Link
                  href={`/servicios/${article.relatedServiceSlug}`}
                  className="font-extrabold text-[#155EEF] hover:underline inline-flex items-center gap-1"
                >
                  <span>{article.relatedServiceTitle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <section className="my-10 p-6 sm:p-8 rounded-2xl bg-[#F0F5FF] border border-blue-200">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#155EEF] mb-3">
              Puntos Clave de este Análisis Ejecutivo
            </h2>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Structured H2 / H3 Body */}
          <div className="space-y-12">
            {article.sections.map((sec, idx) => (
              <section key={idx} className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
                  {sec.h2}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{sec.intro}</p>

                <div className="space-y-6 pl-0 sm:pl-4 border-l-0 sm:border-l-2 border-slate-200">
                  {sec.subSections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-3 bg-slate-50/70 p-5 sm:p-6 rounded-2xl border border-slate-200/80">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#101828]">{sub.h3}</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{sub.content}</p>
                      {sub.bullets && (
                        <ul className="space-y-2 pt-2">
                          {sub.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                              <CheckCircle2 className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Search Intent & Keyword Hypotheses Transparency Box */}
          <aside className="mt-12 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#155EEF]" />
              <span>Ficha Editorial & Intención de Búsqueda:</span>
            </div>
            <p>{article.searchIntent}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {article.keywordHypotheses.map((kw, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-white border border-slate-200 text-[11px] font-mono">
                  {kw}
                </span>
              ))}
            </div>
          </aside>

          {/* Contextual CTA Box linking to the Service */}
          <section className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#101828] text-white space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D7FF00]">
                APLICÁ ESTA METODOLOGÍA EN TU EMPRESA
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{article.ctaTitle}</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {article.ctaDescription}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/servicios/${article.relatedServiceSlug}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#D7FF00] text-[#0A0A0A] text-xs font-black uppercase tracking-wider hover:bg-[#cbf400] transition-colors"
              >
                <span>{article.ctaButtonText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/servicios/${article.secondaryServiceSlug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white underline"
              >
                <span>Ver también: {article.secondaryServiceTitle}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10">
              <ServiceCtaTrigger
                serviceName={article.relatedServiceTitle}
                ctaLabel="SOLICITAR DIAGNÓSTICO DIRECTO"
                whatsappMessage={article.whatsappMessage}
                variant="dark"
              />
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
