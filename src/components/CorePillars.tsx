'use client';

import React from 'react';
import Link from 'next/link';
import {
  BarChart3,
  ShoppingBag,
  SearchCheck,
  Target,
  MessageSquareQuote,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'inteligencia-de-negocios-retail': <BarChart3 className="w-6 h-6 text-[#101828]" />,
  'vender-en-mercado-libre': <ShoppingBag className="w-6 h-6 text-[#101828]" />,
  'diagnostico-comercial-benchmark': <SearchCheck className="w-6 h-6 text-[#101828]" />,
  'adquisicion-y-ventas-b2c': <Target className="w-6 h-6 text-[#101828]" />,
  'objeciones-y-contratacion-comercial': <MessageSquareQuote className="w-6 h-6 text-[#101828]" />,
};

export const CorePillars: React.FC = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#155EEF] uppercase tracking-wider block mb-2">
              ARQUITECTURA DE SERVICIOS ESPECIALIZADOS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#101828] tracking-tight">
              Cinco áreas de intervención para destrabar rentabilidad y ventas.
            </h2>
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Cada servicio responde a un cuello de botella concreto en empresas de{' '}
              <strong>retail, e-commerce, Mercado Libre y ventas B2C</strong>.
            </p>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#155EEF] hover:underline uppercase tracking-wider"
            >
              <span>Ver comparativa completa de servicios</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 5 Specialized Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_DATA.map((service, index) => {
            const isFeatured = index === 0 || index === 3;
            return (
              <article
                key={service.slug}
                className={`group relative p-7 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isFeatured
                    ? 'border-slate-300 bg-slate-50/50 hover:border-[#155EEF] hover:bg-white hover:shadow-lg'
                    : 'border-slate-200 bg-white hover:border-[#155EEF] hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Yellow Lime Icon Container (preserving original identity) */}
                    <div className="w-14 h-14 rounded-full bg-[#D7FF00] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      {SERVICE_ICONS[service.slug]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 px-2.5 py-1 rounded-full bg-slate-100">
                      SERVICIO {service.number}
                    </span>
                  </div>

                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#155EEF] block mb-1.5">
                    {service.badge}
                  </span>

                  <h3 className="text-xl font-extrabold text-[#101828] mb-3 group-hover:text-[#155EEF] transition-colors leading-snug">
                    <Link href={`/servicios/${service.slug}`} className="focus:outline-none">
                      {service.shortTitle}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {service.heroSubtitle}
                  </p>

                  {/* Key Deliverables Preview */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#155EEF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#101828] group-hover:text-[#155EEF] transition-colors uppercase tracking-wider"
                  >
                    <span>Explorar servicio y alcance</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}

          {/* 6th Card: Custom Diagnostic / Author Credibility Anchor */}
          <div className="p-7 rounded-2xl bg-[#101828] text-white flex flex-col justify-between border border-slate-800 shadow-xl">
            <div>
              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#D7FF00] text-[#101828] mb-5">
                ¿NO SABÉS POR DÓNDE EMPEZAR?
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 leading-snug">
                Identificamos juntos el cuello de botella principal de tu negocio.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                En lugar de venderte un paquete enlatado, analizamos si tu urgencia hoy está en ordenar tus números de
                retail, rentabilizar Mercado Libre, auditar tu competencia o entrenar el cierre de ventas B2C.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <Link
                href="/servicios/diagnostico-comercial-benchmark"
                className="w-full py-3.5 px-4 text-xs font-extrabold text-[#101828] bg-[#D7FF00] hover:bg-[#cbf400] rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>VER DIAGNÓSTICO COMERCIAL</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/sobre-mi"
                className="block text-center text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Conocer la trayectoria de Ronan Lavorato →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
