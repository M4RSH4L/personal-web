'use client';

import React from 'react';
import Link from 'next/link';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenDiagnostic?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-white text-[#111318] min-h-[70vh] lg:min-h-[76vh] flex items-center py-16 md:py-24">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Typography Column */}
          <div className="lg:col-span-8">
            <p className="text-xs font-medium tracking-[0.14em] text-[#656B76] uppercase mb-6">
              MORPHO / ESTRATEGIA · DATOS · CRECIMIENTO
            </p>

            <h1 className="text-[2.75rem] sm:text-[3.75rem] lg:text-[4.5rem] font-semibold text-[#111318] tracking-[-0.035em] leading-[1.04] mb-6 max-w-3xl">
              Menos intuición.{' '}
              <span className="block sm:inline">Más criterio.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#656B76] font-normal leading-relaxed max-w-xl mb-10">
              Inteligencia comercial, adquisición y ventas para negocios que quieren crecer con datos.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#111318] hover:bg-[#2457D6] rounded-lg transition-colors cursor-pointer w-fit"
              >
                <span>Hablemos de tu negocio</span>
                <span aria-hidden="true">↗</span>
              </button>

              <Link
                href="#servicios"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#656B76] hover:text-[#111318] transition-colors w-fit py-2"
              >
                <span>Conocer mi enfoque</span>
              </Link>
            </div>
          </div>

          {/* Discreet Editorial Portrait */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <figure className="w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[320px]">
              <div className="overflow-hidden bg-[#F6F7F9] border border-[#E8EAF0] aspect-[4/5]">
                <img
                  src="/retrato_home.png"
                  alt="Ronan Lavorato — MORPHO"
                  width={320}
                  height={400}
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top grayscale contrast-105"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-xs text-[#656B76]">
                <span className="font-medium text-[#111318]">Ronan Lavorato</span>
                <span>Agente Humano de Marketing</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
