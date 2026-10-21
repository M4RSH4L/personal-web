'use client';

import React, { useState } from 'react';
import { Search, Compass, Rocket, Repeat, CheckCircle } from 'lucide-react';

interface Step {
  id: string;
  number: string;
  timeline: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const STEPS: Step[] = [
  {
    id: 'step1',
    number: '01',
    timeline: 'Días 1 a 7',
    title: 'Inmersión & Auditoría Forense',
    description: 'Analizamos a fondo tu negocio: márgenes reales, historial de cuentas publicitarias, tasa de conversión web y comportamiento del cliente. Nada de suposiciones.',
    deliverables: [
      'Auditoría técnica de píxeles, eventos de compra y fugas de datos',
      'Diagnóstico de saturación y fatiga creativa en Meta y Google',
      'Análisis de la oferta comercial y psicología de compra del cliente'
    ],
    icon: <Search className="w-5 h-5 text-[#155EEF]" />
  },
  {
    id: 'step2',
    number: '02',
    timeline: 'Días 8 a 14',
    title: 'Plan Maestro & Arquitectura de Tracking',
    description: 'Diseñamos la estrategia de embudo y resolvemos los problemas de atribución con tecnología server-side para alimentar al algoritmo con datos limpios de primer nivel.',
    deliverables: [
      'Implementación de Meta Conversions API (CAPI) y Google Tag Manager',
      'Roadmap de creativos: guiones, conceptos de ganchos y ángulos de dolor',
      'Configuración de flujos automatizados de carritos y recuperación'
    ],
    icon: <Compass className="w-5 h-5 text-[#155EEF]" />
  },
  {
    id: 'step3',
    number: '03',
    timeline: 'Días 15 a 30',
    title: 'Despliegue de Campañas & Creativos',
    description: 'Lanzamos la nueva arquitectura publicitaria con creativos nativos de alto impacto diseñados para detener el scroll y generar compras de inmediato.',
    deliverables: [
      'Lanzamiento de campañas con estructura consolidada (Advantage+ / Search)',
      'Testing semanal de nuevos ángulos visuales y copys persuasivos',
      'Optimización de páginas de aterrizaje y fichas de producto'
    ],
    icon: <Rocket className="w-5 h-5 text-[#155EEF]" />
  },
  {
    id: 'step4',
    number: '04',
    timeline: 'Mes 2 en adelante',
    title: 'Optimización Continua & Escalamiento',
    description: 'Revisamos resultados en tiempo real y escalamos el presupuesto únicamente en lo que demuestra retorno medible. Acompañamiento cercano y ágil.',
    deliverables: [
      'Reuniones quincenales de sincronización con tus estrategas senior',
      'Dashboard en vivo con métricas de ventas y ROAS real',
      'Apertura de nuevos canales de adquisición (TikTok Ads, YouTube, Retargeting)'
    ],
    icon: <Repeat className="w-5 h-5 text-[#155EEF]" />
  }
];

export const ProcessRoadmap: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('step1');

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-[#155EEF] uppercase tracking-wider block mb-2">
              EL SISTEMA MORPHO
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#101828] tracking-tight">
              Cómo trabajamos: paso a paso, sin fricción.
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm md:text-base leading-relaxed">
            Una metodología probada en +120 empresas para pasar del caos publicitario a una máquina predecible de adquisición y ventas.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const isActive = activeStep === step.id;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'border-[#155EEF] bg-blue-50/20 shadow-md ring-1 ring-[#155EEF]/30'
                    : 'border-slate-200 hover:border-slate-300 bg-white hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold font-mono text-[#155EEF] px-2 py-0.5 rounded bg-blue-50 border border-blue-100">
                      FASE {step.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {step.timeline}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[#101828] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider block mb-2">
                    Entregables clave:
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
