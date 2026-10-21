'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, BarChart2, ShieldCheck, Sparkles } from 'lucide-react';
import { CaseStudy } from '../types';

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'kodland',
    client: 'Kodland',
    industry: 'EdTech Global · Programación para Niños',
    tagline: 'Meta Ads a Escala Global & Business Intelligence',
    companyPhoto: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85',
    channels: ['Meta Ads', 'Google Ads', 'Business Intelligence', 'WhatsApp Funnels', 'HubSpot'],
    headline: 'Escalamiento masivo de captación internacional con reducción del 35% en CAC',
    description: 'Liderazgo de estrategias de Paid Media para la captación internacional de alumnos hacia clases de prueba gratuitas (free masterclasses). Reestructuración completa de cuentas en Meta y Google, testing continuo de creativos UGC para padres de familia y automatización del funnel de asistencia.',
    metrics: [
      { label: 'Costo por Alumno (CAC)', before: '$28 USD', after: '$18 USD', delta: '-35%' },
      { label: 'Leads Calificados / Mes', before: '3,800', after: '12,500', delta: '+228%' },
      { label: 'Asistencia a Masterclass', before: '38%', after: '62%', delta: '+63%' }
    ],
    quote: 'La clave en EdTech de escala global es la sinergia entre creativos de impacto emocional para padres, Business Intelligence para medir la atribución real y una automatización por WhatsApp que garantice la asistencia a la clase.',
    author: 'Ronan Lavorato',
    role: 'Growth & Performance Lead'
  },
  {
    id: 'goiteens',
    client: 'GoITeens',
    industry: 'EdTech & IT Academy · Cursos de Tecnología',
    tagline: 'Adquisición de Alumnos & Toma de Decisiones con Datos',
    companyPhoto: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85',
    channels: ['Meta Ads', 'Google Search', 'Business Intelligence', 'Landing CRO', 'Campañas Orgánicas'],
    headline: 'Penetración acelerada en mercados hispanohablantes y +141% en conversión',
    description: 'Diseño y ejecución del funnel de adquisición de estudiantes para carreras tecnológicas y cursos de programación. Implementación de tracking server-side, optimización profunda de landing pages de alta conversión y segmentación de audiencias con alta intención de compra.',
    metrics: [
      { label: 'Tasa de Conversión Web', before: '2.4%', after: '5.8%', delta: '+141%' },
      { label: 'Costo por Registro (CPL)', before: '$4.80 USD', after: '$2.10 USD', delta: '-56%' },
      { label: 'Alumnos Matriculados', before: '1,200', after: '3,400', delta: '+183%' }
    ],
    quote: 'Logramos posicionar la marca en tiempo récord en Latinoamérica, bajando a más de la mitad el costo por registro y elevando la calificación de los prospectos antes del contacto comercial mediante toma de decisiones con números reales.',
    author: 'Ronan Lavorato',
    role: 'Marketing & Acquisition Strategist'
  },
  {
    id: 'rts',
    client: 'Rocket Tech School (RTS)',
    industry: 'Online Tech & Coding School · Internacional',
    tagline: 'Factoría Creativa de Alto Volumen & Paid Media',
    companyPhoto: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85',
    channels: ['Meta Ads', 'TikTok Ads', 'YouTube Ads', 'Performance Max', 'Campañas Orgánicas'],
    headline: 'Estructura publicitaria de alto volumen: ROAS de 2.2x a 4.6x',
    description: 'Gestión de presupuestos de pauta digital multiplataforma para captación masiva de alumnos en robótica, Scratch, Roblox y Python. Creación de una factoría de creativos de respuesta directa con testing ágil de hooks que erradicaron la fatiga publicitaria.',
    metrics: [
      { label: 'ROAS Global Comercial', before: '2.2x', after: '4.6x', delta: '+109%' },
      { label: 'Volumen Mensual de Leads', before: '1,800', after: '7,200', delta: '+300%' },
      { label: 'Retención y Renovaciones', before: '22%', after: '39%', delta: '+77%' }
    ],
    quote: 'Diversificar el presupuesto desde Meta hacia TikTok y YouTube con creativos nativos y análisis granular de retención nos permitió quebrar el techo de escala sin encarecer el costo de adquisición.',
    author: 'Ronan Lavorato',
    role: 'Head of Paid Acquisition'
  },
  {
    id: 'mascota',
    client: 'Lo Que Mastica Tu Mascota',
    industry: 'E-commerce D2C · Snacks Naturales Pet',
    tagline: 'Meta Ads, Comunidad Orgánica & Retención de LTV',
    companyPhoto: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=85',
    channels: ['Meta Ads', 'Campañas Orgánicas', 'Tiendanube', 'WhatsApp Automation', 'Email Marketing'],
    headline: 'De tienda en crecimiento a referente D2C con ROAS 5.8x y 44% de recompra',
    description: 'Estrategia integral de e-commerce y comunidad: migración a campañas Advantage+ consolidadas, contenido orgánico viral sobre salud animal, automatización de recuperación de carritos por WhatsApp en 15 minutos y armado de bundles con ticket promedio elevado.',
    metrics: [
      { label: 'ROAS Global en Meta', before: '2.4x', after: '5.8x', delta: '+141%' },
      { label: 'Facturación Mensual Neta', before: '$12k USD', after: '$41k USD', delta: '+241%' },
      { label: 'Tasa de Recompra (60 días)', before: '14%', after: '44%', delta: '+214%' }
    ],
    quote: 'El nicho pet tiene un potencial de LTV enorme. Al combinar creativos visuales irresistibles, contenido orgánico auténtico y retención automática por WhatsApp, las recompras se convirtieron en el motor de rentabilidad.',
    author: 'Ronan Lavorato',
    role: 'Growth Partner & Performance Strategist'
  },
  {
    id: 'morpho',
    client: 'Morpho',
    industry: 'Agente Humano de Marketing · Business Intelligence & Growth',
    tagline: 'El Método de Toma de Decisiones Orientadas a Rentabilidad Real',
    companyPhoto: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85',
    channels: ['Meta Ads', 'Business Intelligence', 'Campañas Orgánicas', 'Tracking CAPI', 'Automatización'],
    headline: '+$14M USD generados para marcas y 4.8x de ROAS promedio de cartera',
    description: 'La consolidación del método: un equipo senior y ágil que actúa como socio de crecimiento real para marcas de servicios, educación y e-commerce. Sin ejecutivos junior ni reportes burocráticos: dashboards de Business Intelligence en vivo, infraestructura de datos server-side, creativos que detienen el scroll y total foco en rentabilidad neta.',
    metrics: [
      { label: 'Ventas Totales Gestionadas', before: '$3M USD', after: '+$14M USD', delta: '4.6x' },
      { label: 'ROAS Promedio Cartera', before: '2.6x', after: '4.8x', delta: '+84%' },
      { label: 'Retención de Clientes', before: '70%', after: '94%', delta: '+34%' }
    ],
    quote: 'Morpho nació para resolver lo que las agencias tradicionales hacen mal: entendemos el negocio a nivel financiero, ejecutamos rápido y nos ganamos la continuidad con decisiones orientadas a números reales mes a mes.',
    author: 'Ronan Lavorato',
    role: 'Founder & Lead Marketing Agent'
  }
];

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const activeCase = CASE_STUDIES[selectedCase];

  const handleSelectCase = (newIndex: number) => {
    if (newIndex === selectedCase) return;
    setSlideDirection(newIndex > selectedCase ? 'right' : 'left');
    setIsTransitioning(true);
    setSelectedCase(newIndex);
  };

  const handlePrev = () => {
    setSlideDirection('left');
    setIsTransitioning(true);
    setSelectedCase((prev) => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideDirection('right');
    setIsTransitioning(true);
    setSelectedCase((prev) => (prev === CASE_STUDIES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 280);
    return () => clearTimeout(timer);
  }, [selectedCase]);

  return (
    <section id="casos" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#155EEF] text-xs font-extrabold uppercase tracking-wider mb-2">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>RESULTADOS COMPROBABLES · NUMEROS REALES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#101828] tracking-tight">
              Casos reales. Números reales.
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm md:text-base leading-relaxed">
            Sin vanity metrics. Medimos nuestro impacto en <strong>Meta Ads, Business Intelligence, campañas orgánicas</strong> y decisiones estratégicas basadas en rentabilidad real.
          </p>
        </div>

        {/* Carousel Tabs & Slider Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Tabs with Company Names */}
          <div className="flex gap-2 pb-2 sm:pb-0 overflow-x-auto no-scrollbar">
            {CASE_STUDIES.map((item, idx) => {
              const isSelected = selectedCase === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectCase(idx)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#101828] text-white shadow-md ring-2 ring-[#155EEF]'
                      : 'bg-white text-slate-700 hover:text-black border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#D7FF00]' : 'bg-slate-300'}`} />
                  <span>{item.client}</span>
                </button>
              );
            })}
          </div>

          {/* Prev / Next Sliding Controls */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <span className="text-xs text-slate-400 font-mono font-bold mr-2">
              {selectedCase + 1} / {CASE_STUDIES.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Caso anterior"
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 hover:text-[#155EEF] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 text-slate-700" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Caso siguiente"
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 hover:text-[#155EEF] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <ChevronRight className="w-4 h-4 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Sliding Case Showcase Card with Transition Effects */}
        <div className="relative">
          <div 
            className={`bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 transition-all duration-300 ease-out transform ${
              isTransitioning 
                ? slideDirection === 'right' 
                  ? 'opacity-40 translate-x-3 scale-[0.99]' 
                  : 'opacity-40 -translate-x-3 scale-[0.99]' 
                : 'opacity-100 translate-x-0 scale-100'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column: Company Narrative & Respective Company Photo */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  
                  {/* Top Metadata & Tagline */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-semibold text-slate-500">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#155EEF] font-bold border border-blue-200">
                      {activeCase.client}
                    </span>
                    <span>·</span>
                    <span>{activeCase.industry}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight leading-snug mb-3">
                    {activeCase.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-semibold mb-4 text-[#155EEF]">
                    ✦ {activeCase.tagline}
                  </p>

                  {/* Respective Company Real Photo Container */}
                  <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[16/8] bg-slate-100 border border-slate-200 group">
                    <img 
                      src={activeCase.companyPhoto} 
                      alt={`Operaciones y métricas de ${activeCase.client}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D7FF00]" />
                        <span className="font-extrabold tracking-wide drop-shadow-md">{activeCase.client}</span>
                      </div>
                      <span className="text-[11px] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-white/90">
                        {activeCase.industry.split('·')[0]}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal mb-6">
                    {activeCase.description}
                  </p>

                  {/* Channels Badge list */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Disciplinas:</span>
                    {activeCase.channels.map((ch, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Attributable Quote & LinkedIn Profile Link */}
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 mt-2">
                  <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed mb-3">
                    "{activeCase.quote}"
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-blue-200/50">
                    <div className="text-xs font-bold text-[#101828]">
                      {activeCase.author} <span className="text-slate-500 font-normal">· {activeCase.role}</span>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/ronan-lavorato/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#155EEF] hover:underline"
                    >
                      <span>Perfil LinkedIn de Ronan</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Quantified Audited Metrics Strip */}
              <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between shadow-inner">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-extrabold uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#155EEF]" />
                      MÉTRICAS AUDITADAS REALES
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                      Verificado LinkedIn
                    </span>
                  </div>

                  <div className="space-y-6">
                    {activeCase.metrics.map((metric, idx) => (
                      <div key={idx} className="pb-5 border-b border-slate-200 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-semibold text-slate-600">
                            {metric.label}
                          </span>
                          <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded font-mono">
                            {metric.delta}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-3">
                          <span className="text-xs text-slate-400 line-through font-mono">
                            {metric.before}
                          </span>
                          <span className="text-2xl sm:text-3xl font-black text-[#101828] font-mono">
                            {metric.after}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Strategic Takeaway Note */}
                  <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#155EEF]" />
                      <span>Decisión Clave en {activeCase.client}:</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-500">
                      Optimización de pauta basada en Business Intelligence y unit economics reales, sin perseguir métricas de vanidad.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3.5 px-5 text-xs font-extrabold text-[#101828] bg-[#D7FF00] hover:bg-[#cbf400] active:scale-[0.98] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>QUIERO RESULTADOS COMO ESTOS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Carousel Progress Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {CASE_STUDIES.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelectCase(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                selectedCase === i ? 'w-8 bg-[#155EEF]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Ir al caso ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
