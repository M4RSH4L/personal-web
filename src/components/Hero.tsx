'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenDiagnostic?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-white text-[#0A0A0A] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
          {/* Left Area: Commercial Message (Monumental Editorial Anchor) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start z-10 animate-hero-fade-up">
            {/* 1. Kicker / Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02] text-[#0A0A0A] text-[11px] font-mono font-bold tracking-[0.2em] uppercase mb-5 sm:mb-7 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF00] border border-black/30" />
              <span>MORPHO · AGENTE HUMANO DE MARKETING</span>
            </div>

            {/* 2. Monumental H1 — Preserving exact visual impact & communicating measurable commercial outcome */}
            <h1 className="font-display font-black tracking-[-0.04em] leading-[0.9] mb-6 sm:mb-7 text-[2.75rem] sm:text-[4.1rem] md:text-[4.8rem] lg:text-[4.1rem] xl:text-[4.9rem] 2xl:text-[5.5rem]">
              <span className="block text-[#0A0A0A]">TRANSFORMO DATOS</span>
              <span className="block text-[#D7FF00] my-1 sm:my-1.5 bg-[#0A0A0A] px-3 py-1 inline-block rounded-xl">
                Y PROCESOS EN
              </span>
              <span className="block text-[#0A0A0A]">CRECIMIENTO MEDIBLE.</span>
            </h1>

            {/* 3. Controlled Description Paragraph — Qué hago, para quién y qué problemas resuelvo */}
            <p className="text-base sm:text-lg text-[#0A0A0A]/80 font-normal leading-relaxed max-w-xl mb-5 text-balance">
              Trabajo junto a <strong>empresas de retail, e-commerce y negocios B2C</strong> para eliminar fugas de margen, ordenar la toma de decisiones con <strong>Business Intelligence</strong>, profesionalizar <strong>Mercado Libre</strong> y estructurar sistemas de <strong>adquisición y ventas</strong> basados en datos reales y psicología del consumidor.
            </p>

            {/* Quick Specialty Pills linking to the 5 services */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { label: 'BI para Retail', href: '/servicios/inteligencia-de-negocios-retail' },
                { label: 'Consultoría Mercado Libre', href: '/servicios/vender-en-mercado-libre' },
                { label: 'Diagnóstico & Benchmark', href: '/servicios/diagnostico-comercial-benchmark' },
                { label: 'Adquisición & Ventas B2C', href: '/servicios/adquisicion-y-ventas-b2c' },
                { label: 'Objeciones & Talento Comercial', href: '/servicios/objeciones-y-contratacion-comercial' },
              ].map((pill) => (
                <Link
                  key={pill.href}
                  href={pill.href}
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#D7FF00] text-[#101828] border border-slate-200 transition-colors"
                >
                  {pill.label} →
                </Link>
              ))}
            </div>

            {/* 4. Conversion Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto mb-12 sm:mb-14">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-black tracking-wider text-[#0A0A0A] bg-[#D7FF00] hover:bg-[#cbf400] active:scale-[0.98] rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap uppercase"
              >
                <span>SOLICITAR DIAGNÓSTICO COMERCIAL</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <Link
                href="/servicios"
                className="group inline-flex items-center justify-center gap-2 py-2 text-sm sm:text-base font-bold text-[#0A0A0A] hover:text-[#155EEF] border-b border-[#0A0A0A]/30 hover:border-[#155EEF] transition-colors whitespace-nowrap self-center sm:self-auto"
              >
                <span>Explorar los 5 servicios</span>
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            {/* 5. Verified Metrics Strip — Subtle & Non-competing */}
            <div className="pt-7 border-t border-black/10 w-full max-w-lg">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div className="text-lg sm:text-xl font-black text-[#0A0A0A] font-display tracking-tight">
                    +$14M USD
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#0A0A0A]/60 font-medium tracking-wide mt-0.5">
                    Ventas gestionadas en casos reales
                  </div>
                </div>

                <div className="border-l border-black/10 pl-4 sm:pl-6">
                  <div className="text-lg sm:text-xl font-black text-[#0A0A0A] font-display tracking-tight">
                    BI & Ventas
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#0A0A0A]/60 font-medium tracking-wide mt-0.5">
                    Retail, E-commerce y B2C
                  </div>
                </div>

                <div className="border-l border-black/10 pl-4 sm:pl-6">
                  <div className="text-lg sm:text-xl font-black text-[#0A0A0A] font-display tracking-tight">
                    100% Datos
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#0A0A0A]/60 font-medium tracking-wide mt-0.5">
                    Márgenes y conversión real
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Area: Personal Identity & Editorial Portrait */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col items-center lg:items-end justify-center animate-hero-fade-in">
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[470px] xl:max-w-[490px]">
              {/* Intentional & Discreet Lime Accent Behind Figure */}
              <div
                className="absolute -top-3 -left-4 sm:-left-6 w-36 sm:w-48 h-52 sm:h-64 bg-[#D7FF00] -rotate-3 rounded-2xl opacity-90 -z-10 pointer-events-none transition-transform duration-500"
                aria-hidden="true"
              />

              {/* Editorial Handwritten Concept Annotation */}
              <div className="absolute -top-7 -right-2 sm:-right-4 z-20 text-right pointer-events-none select-none">
                <div className="font-handwriting text-sm sm:text-base font-bold text-[#0A0A0A]/85 leading-tight transform rotate-2">
                  <span>Estrategia + Inteligencia de Datos</span>
                  <br />
                  <span>+ Psicología del consumidor</span>
                </div>
              </div>

              {/* Main Portrait — High-Impact B&W Portrait */}
              <div className="relative overflow-hidden aspect-[3.7/4.8] w-full rounded-sm">
                <img
                  src="/retrato_home.png"
                  alt="Ronan Lavorato — Fundador y Estratega Principal de MORPHO, Agente Humano de Marketing"
                  width={490}
                  height={635}
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top filter grayscale contrast-115 brightness-[0.98] transition-transform duration-700 ease-out hover:scale-[1.015]"
                />

                {/* Soft natural edge gradient at the very bottom for seamless editorial blending */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              </div>

              {/* Discrete Identification: RONAN · MORPHO */}
              <div className="mt-3.5 flex items-center justify-between w-full px-1">
                <Link
                  href="/sobre-mi"
                  className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#0A0A0A] hover:text-[#155EEF] uppercase transition-colors"
                >
                  RONAN LAVORATO · MORPHO
                </Link>
                <span className="text-[10px] font-mono text-[#0A0A0A]/50 tracking-wider uppercase">
                  HUMAN MARKETING AGENT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
