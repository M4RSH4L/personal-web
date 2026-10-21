import React from 'react';
import { SITE_CONFIG, getCanonicalUrl } from '../lib/seo-config';

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
};

export function buildOrganizationAndPersonSchema() {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, '');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: SITE_CONFIG.name,
        alternateName: `${SITE_CONFIG.name} — ${SITE_CONFIG.brandConcept}`,
        url: baseUrl,
        description:
          'Consultoría y Agente Humano de Marketing especializado en crecimiento comercial, inteligencia de negocios para retail, Mercado Libre, diagnóstico comercial, adquisición B2C y psicología del consumidor.',
        email: SITE_CONFIG.email,
        founder: {
          '@id': `${baseUrl}/#person-ronan-lavorato`,
        },
        sameAs: [SITE_CONFIG.author.linkedin],
        knowsAbout: [
          'Business Intelligence para Retail',
          'Consultoría Mercado Libre',
          'Diagnóstico Comercial y Benchmark',
          'Adquisición de Clientes y Ventas B2C',
          'Manejo de Objeciones y Psicología del Consumidor',
          'Meta Ads',
          'Google Ads',
          'E-commerce',
        ],
      },
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person-ronan-lavorato`,
        name: SITE_CONFIG.author.name,
        jobTitle: SITE_CONFIG.author.role,
        url: getCanonicalUrl(SITE_CONFIG.author.url),
        image: `${baseUrl}${SITE_CONFIG.author.image}`,
        description: SITE_CONFIG.author.bio,
        worksFor: {
          '@id': `${baseUrl}/#organization`,
        },
        sameAs: [SITE_CONFIG.author.linkedin],
        knowsAbout: [
          'Crecimiento Comercial',
          'Business Intelligence',
          'Retail Analytics',
          'E-commerce & Mercado Libre',
          'Adquisición Digital y Ventas B2C',
          'Psicología del Consumidor y Manejo de Objeciones',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: `${SITE_CONFIG.name} — ${SITE_CONFIG.brandConcept}`,
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
        inLanguage: 'es-AR',
      },
    ],
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}
