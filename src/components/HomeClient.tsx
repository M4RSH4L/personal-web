'use client';

import React from 'react';
import Link from 'next/link';
import { Hero } from './Hero';
import { PartnersRow } from './PartnersRow';
import { CorePillars } from './CorePillars';
import { CaseStudies } from './CaseStudies';
import { CalloutBanner } from './CalloutBanner';
import { useBooking } from './BookingContext';

export const HomeClient: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <main>
      {/* 1. Hero */}
      <Hero onOpenBooking={() => openBooking(undefined, 'hero')} />

      {/* 2. Credenciales discretas */}
      <PartnersRow />

      {/* 3. Servicios en filas editoriales */}
      <CorePillars />

      {/* 4. Caso destacado único */}
      <CaseStudies />

      {/* 5. Perfil profesional (Conciso, <= 45 palabras) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium tracking-[0.14em] text-[#656B76] uppercase mb-3">
                PERFIL PROFESIONAL
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#111318] tracking-[-0.02em]">
                Estrategia comercial con visión de negocio.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base sm:text-lg text-[#656B76] leading-relaxed">
                Soy Ronan Lavorato. Trabajo junto a dueños y directores de retail, e-commerce y empresas B2C para ordenar sus datos, optimizar la adquisición de clientes y profesionalizar sus procesos de venta con criterio técnico y comercial.
              </p>

              <div>
                <Link
                  href="/sobre-mi"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2457D6] hover:text-[#111318] transition-colors"
                >
                  <span>Conocer trayectoria completa</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA final */}
      <CalloutBanner onOpenBooking={() => openBooking(undefined, 'final_cta')} />
    </main>
  );
};
