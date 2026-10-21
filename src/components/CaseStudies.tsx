import React from 'react';
import Link from 'next/link';

interface CaseStudiesProps {
  onOpenBooking?: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = () => {
  return (
    <section id="caso-destacado" className="py-24 md:py-32 bg-[#F6F7F9] border-t border-b border-[#E8EAF0]">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Case Identification */}
          <div className="lg:col-span-4">
            <p className="text-xs font-medium tracking-[0.14em] text-[#656B76] uppercase mb-3">
              CASO DESTACADO
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#111318] tracking-[-0.02em] mb-2">
              Kodland
            </h2>
            <p className="text-sm text-[#656B76]">
              EdTech internacional · Adquisición y conversión B2C
            </p>
          </div>

          {/* Right Column: Editorial Breakdown */}
          <div className="lg:col-span-8 divide-y divide-[#E8EAF0] border-t border-b border-[#E8EAF0]">
            <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6">
              <span className="sm:col-span-3 text-xs font-medium uppercase tracking-wider text-[#656B76]">
                Contexto
              </span>
              <p className="sm:col-span-9 text-sm sm:text-base text-[#111318] leading-relaxed">
                Expansión en mercados hispanohablantes mediante la captación de alumnos hacia clases de prueba en vivo.
              </p>
            </div>

            <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6">
              <span className="sm:col-span-3 text-xs font-medium uppercase tracking-wider text-[#656B76]">
                Problema
              </span>
              <p className="sm:col-span-9 text-sm sm:text-base text-[#111318] leading-relaxed">
                Incremento en el costo de adquisición por fatiga creativa en pauta y baja tasa de asistencia efectiva entre el registro y la clase.
              </p>
            </div>

            <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6">
              <span className="sm:col-span-3 text-xs font-medium uppercase tracking-wider text-[#656B76]">
                Intervención
              </span>
              <p className="sm:col-span-9 text-sm sm:text-base text-[#111318] leading-relaxed">
                Reestructuración de campañas en Meta y Google Ads, tableros de Business Intelligence para medir atribución real y secuencias de confirmación por WhatsApp integradas a HubSpot.
              </p>
            </div>

            <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6">
              <span className="sm:col-span-3 text-xs font-medium uppercase tracking-wider text-[#2457D6]">
                Resultado
              </span>
              <div className="sm:col-span-9 space-y-2">
                <p className="text-sm sm:text-base font-medium text-[#111318] leading-relaxed">
                  Reducción del costo de adquisición por alumno y mejora sostenida en la tasa de asistencia a clase de prueba y matrícula efectiva.
                </p>
                <p className="text-xs text-[#656B76]">
                  Rol desempeñado: Growth & Performance Lead ·{' '}
                  <Link href="/sobre-mi" className="text-[#2457D6] hover:underline">
                    Ver experiencia completa
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
