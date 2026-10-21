import React, { useState } from 'react';
import { Target, Megaphone, BarChart3, Users, ChevronRight, CheckCircle2 } from 'lucide-react';

interface PillarData {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const PILLARS: PillarData[] = [
  {
    id: 'meta_ads',
    number: '01',
    title: 'Meta Ads de Alto Rendimiento',
    summary: 'Campañas de adquisición a escala con creativos que detienen el scroll.',
    details: 'Estructuras de cuentas consolidadas (Advantage+ / CBO) con testing ágil de hooks, ángulos de dolor y variaciones de video. Optimizamos cada peso invertido para maximizar retorno y volumen.',
    deliverables: [
      'Campañas de escala masiva en Meta, Google y TikTok',
      'Factoría continua de creativos UGC y copys de respuesta directa',
      'Estrategias de adquisición de leads y ventas con ROAS predecible'
    ],
    icon: <Megaphone className="w-6 h-6 text-[#101828]" />
  },
  {
    id: 'business_intelligence',
    number: '02',
    title: 'Business Intelligence & Atribución',
    summary: 'Datos limpios, tracking forense y toma de decisiones con números reales.',
    details: 'Basta de suposiciones y métricas de vanidad. Diseñamos dashboards ejecutivos en tiempo real y tracking server-side (CAPI + GTM) para saber con exactitud matemática el margen neto de cada acción.',
    deliverables: [
      'Dashboards en tiempo real de CAC, LTV y contribución neta',
      'Implementación de Meta CAPI y Google Tag Manager server-side',
      'Modelos de atribución multicanal para no perder compras de iOS'
    ],
    icon: <BarChart3 className="w-6 h-6 text-[#101828]" />
  },
  {
    id: 'organico',
    number: '03',
    title: 'Campañas Orgánicas & Comunidad',
    summary: 'Estrategia de contenido que amplifica el alcance y reduce el costo de adquisición.',
    details: 'El contenido orgánico no es decoración: es la palanca que alimenta al algoritmo publicitario, genera confianza inmediata en la audiencia y crea una comunidad que recompra sin pagar pauta.',
    deliverables: [
      'Estrategia de contenido viral y educativo para TikTok, Reels y Shorts',
      'Sinergia orgánico-pago para testear ganchos a costo cero',
      'Construcción de comunidad y retención de marca a largo plazo'
    ],
    icon: <Target className="w-6 h-6 text-[#101828]" />
  },
  {
    id: 'decisiones_crecimiento',
    number: '04',
    title: 'Decisiones de Crecimiento Senior',
    summary: 'Acompañamiento humano con mentalidad de socios comerciales.',
    details: 'Sin intermediarios desconectados ni ejecutivos de cuenta junior. Hablás directamente con estrategas senior que conocen la economía de tu negocio y toman decisiones operativas todos los días.',
    deliverables: [
      'Canal directo de comunicación ágil por Slack / WhatsApp',
      'Sincronización quincenal de decisiones estratégicas y financieras',
      'Cero ataduras contractuales tóxicas; nos elegís por resultados'
    ],
    icon: <Users className="w-6 h-6 text-[#101828]" />
  }
];

export const CorePillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-[#155EEF] uppercase tracking-wider block mb-2">
              PROPUESTA DE VALOR INTEGRAL
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#101828] tracking-tight">
              Cuatro pilares para un crecimiento predecible.
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm md:text-base leading-relaxed">
            Unimos <strong>Meta Ads, Business Intelligence, campañas orgánicas</strong> y decisiones financieras con números reales para marcas de servicios, educación, B2B y e-commerce.
          </p>
        </div>

        {/* 4 Pillars Grid (matching reference image visual icons and typography) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar) => {
            const isSelected = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(isSelected ? null : pillar.id)}
                className={`group relative p-7 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? 'border-[#155EEF] bg-blue-50/30 shadow-md ring-2 ring-[#155EEF]/20' 
                    : 'border-slate-200 hover:border-slate-300 bg-white hover:shadow-sm'
                }`}
              >
                {/* Yellow Lime Icon Container (matching reference image) */}
                <div className="w-14 h-14 rounded-full bg-[#D7FF00] flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>

                {/* Editorial Number */}
                <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                  {pillar.number}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#101828] mb-2 group-hover:text-[#155EEF] transition-colors">
                  {pillar.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">
                  {pillar.summary}
                </p>

                {/* Expanded Details on Click */}
                {isSelected ? (
                  <div className="pt-4 mt-4 border-t border-blue-100 text-xs text-slate-700 animate-in fade-in duration-200">
                    <p className="mb-3 leading-relaxed text-slate-800 font-normal">
                      {pillar.details}
                    </p>
                    <ul className="space-y-2">
                      {pillar.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#155EEF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-xs font-bold text-[#155EEF] group-hover:underline">
                    <span>Ver qué incluye</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
