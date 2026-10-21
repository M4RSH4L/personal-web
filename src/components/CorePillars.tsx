import React from 'react';
import Link from 'next/link';

const EDITORIAL_SERVICES = [
  {
    number: '01',
    name: 'Inteligencia de negocios para retail',
    summary: 'Dashboards, márgenes, unidades e inventario para decidir con datos reales en cada sucursal.',
    href: '/servicios/inteligencia-de-negocios-retail',
  },
  {
    number: '02',
    name: 'Mercado Libre: estrategia y rentabilidad',
    summary: 'Estructura de costos, comisiones, logística y catálogo para vender con margen neto positivo.',
    href: '/servicios/vender-en-mercado-libre',
  },
  {
    number: '03',
    name: 'Diagnóstico comercial y benchmark',
    summary: 'Auditoría del sistema comercial, precios y competencia para detectar fugas en el embudo.',
    href: '/servicios/diagnostico-comercial-benchmark',
  },
  {
    number: '04',
    name: 'Adquisición y ventas B2C',
    summary: 'Integración entre pauta digital, CRM y procesos comerciales para convertir consultas en clientes.',
    href: '/servicios/adquisicion-y-ventas-b2c',
  },
  {
    number: '05',
    name: 'Objeciones y talento comercial',
    summary: 'Psicología del consumidor aplicada al cierre de ventas y evaluación de perfiles comerciales.',
    href: '/servicios/objeciones-y-contratacion-comercial',
  },
];

export const CorePillars: React.FC = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111318] tracking-[-0.025em] mb-3">
            Cinco áreas. Un mismo objetivo.
          </h2>
          <p className="text-base sm:text-lg text-[#656B76] leading-relaxed">
            Identificar qué frena el crecimiento y actuar sobre lo que realmente importa.
          </p>
        </div>

        {/* Editorial Numbered Rows */}
        <div className="border-t border-[#E8EAF0]">
          {EDITORIAL_SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block border-b border-[#E8EAF0] py-7 sm:py-8 transition-colors hover:bg-[#F6F7F9]/60 -mx-4 px-4 sm:mx-0 sm:px-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline">
                <div className="md:col-span-1 text-xs font-mono text-[#656B76] group-hover:text-[#2457D6] transition-colors">
                  {service.number}
                </div>

                <div className="md:col-span-5">
                  <h3 className="text-lg sm:text-xl font-medium text-[#111318] group-hover:text-[#2457D6] transition-colors">
                    {service.name}
                  </h3>
                </div>

                <div className="md:col-span-5">
                  <p className="text-sm text-[#656B76] leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                <div className="md:col-span-1 flex md:justify-end">
                  <span
                    aria-hidden="true"
                    className="text-sm text-[#656B76] group-hover:text-[#2457D6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform inline-block"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
