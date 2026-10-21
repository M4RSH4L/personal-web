import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
    { name: 'Artículos', path: '/recursos' },
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
    <main className="bg-white text-[#111318]">
      <JsonLd data={[breadcrumbSchema, blogPostingSchema]} />

      <article className="py-16 md:py-24">
        <div className="max-w-[780px] mx-auto px-6 sm:px-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-[#656B76] mb-8 flex flex-wrap items-center gap-2"
          >
            <Link href="/" className="hover:text-[#111318]">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/recursos" className="hover:text-[#111318]">
              Artículos
            </Link>
            <span>/</span>
            <span className="text-[#111318] truncate max-w-xs">{article.category}</span>
          </nav>

          {/* Header */}
          <header className="space-y-5 pb-10 border-b border-[#E8EAF0]">
            <p className="text-xs font-mono text-[#2457D6] uppercase tracking-wider">
              {article.category} · {article.readingTime}
            </p>

            <h1 className="text-3xl sm:text-4xl font-semibold text-[#111318] tracking-[-0.025em] leading-[1.12]">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#656B76] leading-relaxed">
              {article.summary}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#656B76]">
              <div>
                Por{' '}
                <Link href={article.author.profileUrl} className="font-medium text-[#111318] hover:text-[#2457D6]">
                  {article.author.name}
                </Link>
              </div>
              <div>
                Área relacionada:{' '}
                <Link
                  href={`/servicios/${article.relatedServiceSlug}`}
                  className="font-medium text-[#2457D6] hover:underline"
                >
                  {article.relatedServiceTitle} ↗
                </Link>
              </div>
            </div>
          </header>

          {/* Key Takeaways */}
          <section className="my-10 p-6 bg-[#F6F7F9] border border-[#E8EAF0] space-y-3">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-[#656B76]">
              Síntesis ejecutiva
            </h2>
            <ul className="space-y-2">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="text-sm text-[#111318] leading-relaxed flex items-start gap-2">
                  <span className="text-[#2457D6]">—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Body H2 / H3 */}
          <div className="space-y-12">
            {article.sections.map((sec, idx) => (
              <section key={idx} className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#111318] tracking-[-0.02em]">
                  {sec.h2}
                </h2>
                <p className="text-base text-[#656B76] leading-relaxed">{sec.intro}</p>

                <div className="space-y-8 pt-2">
                  {sec.subSections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-3 border-l border-[#E8EAF0] pl-5">
                      <h3 className="text-lg font-medium text-[#111318]">{sub.h3}</h3>
                      <p className="text-sm sm:text-base text-[#656B76] leading-relaxed">{sub.content}</p>
                      {sub.bullets && (
                        <ul className="space-y-2 pt-1">
                          {sub.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="text-sm text-[#111318] leading-relaxed">
                              — {b}
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

          {/* Contextual CTA */}
          <section className="mt-16 pt-10 border-t border-[#E8EAF0] space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider text-[#2457D6]">
                SERVICIO RELACIONADO
              </p>
              <h2 className="text-2xl font-semibold text-[#111318]">{article.ctaTitle}</h2>
              <p className="text-sm text-[#656B76] leading-relaxed">{article.ctaDescription}</p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <ServiceCtaTrigger
                serviceName={article.relatedServiceTitle}
                ctaLabel="Conversemos"
                whatsappMessage={article.whatsappMessage}
              />
              <Link
                href={`/servicios/${article.relatedServiceSlug}`}
                className="text-sm font-medium text-[#2457D6] hover:text-[#111318] transition-colors"
              >
                Ver alcance de {article.relatedServiceTitle} ↗
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
