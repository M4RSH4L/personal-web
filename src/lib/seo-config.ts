export const SITE_CONFIG = {
  name: 'MORPHO',
  brandConcept: 'Agente Humano de Marketing',
  tagline: 'Transformo datos y procesos comerciales en crecimiento medible.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://personal-web-theta-three.vercel.app',
  locale: 'es_AR',
  language: 'es',
  email: 'hola@morpho.agency',
  supportEmail: 'soporte@morpho.agency',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5491123456789',
  location: 'Buenos Aires, Argentina · Consultoría Global en Español',
  author: {
    name: 'Ronan Lavorato',
    role: 'Founder & Lead Growth / Marketing Strategist',
    url: '/sobre-mi',
    linkedin: 'https://www.linkedin.com/in/ronan-lavorato/',
    image: '/retrato_home.png',
    bio: 'Especialista en crecimiento comercial, Business Intelligence aplicado a retail y e-commerce, adquisición digital (Meta Ads & Google Ads), estructura de ventas B2C y psicología del consumidor.',
    verifiedExperience: [
      {
        company: 'MORPHO',
        role: 'Founder & Lead Marketing Agent',
        focus: 'Consultoría en crecimiento comercial, Business Intelligence, adquisición y conversión.',
      },
      {
        company: 'Kodland',
        role: 'Growth & Performance Lead',
        focus: 'Escalamiento internacional en EdTech con Paid Media, Business Intelligence y funnels por WhatsApp.',
      },
      {
        company: 'GoITeens',
        role: 'Marketing & Acquisition Strategist',
        focus: 'Adquisición de alumnos en mercados hispanohablantes, optimización CRO y toma de decisiones con datos.',
      },
      {
        company: 'Rocket Tech School (RTS)',
        role: 'Head of Paid Acquisition',
        focus: 'Gestión multiplataforma de pauta y factoría creativa de respuesta directa.',
      },
      {
        company: 'Lo Que Mastica Tu Mascota',
        role: 'Growth Partner & Performance Strategist',
        focus: 'Estrategia D2C, Tiendanube, retención por WhatsApp y optimización de LTV.',
      },
    ],
  },
};

export function getCanonicalUrl(path: string = '/'): string {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return cleanPath === '/' ? baseUrl : `${baseUrl}${cleanPath}`;
}
