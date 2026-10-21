import type { Metadata } from 'next';
import { HomeClient } from '../components/HomeClient';
import { JsonLd } from '../components/JsonLd';
import { getCanonicalUrl } from '../lib/seo-config';
import { SERVICES_DATA } from '../data/services';

export const metadata: Metadata = {
  title: 'MORPHO — Agente Humano de Marketing | BI Retail, Ecommerce y Ventas B2C',
  description:
    'Transformo datos y procesos comerciales en crecimiento medible. Consultoría en Inteligencia de Negocios para Retail, Mercado Libre, Diagnóstico Comercial, Ventas B2C y Manejo de Objeciones.',
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
};

export default function HomePage() {
  const servicesItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios Especializados de MORPHO',
    itemListElement: SERVICES_DATA.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      description: service.seoDescription,
      url: getCanonicalUrl(`/servicios/${service.slug}`),
    })),
  };

  return (
    <>
      <JsonLd data={servicesItemListSchema} />
      <HomeClient />
    </>
  );
}
