import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowUpRight, Clock, UserCheck } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';

export const ExpertContentSection: React.FC = () => {
  return (
    <section id="recursos-expertos" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#155EEF] text-xs font-extrabold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CONTENIDO EXPERTO & ANÁLISIS APLICADO</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#101828] tracking-tight">
              Guías técnicas sobre retail, e-commerce y ventas B2C.
            </h2>
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Artículos escritos desde la práctica operativa para responder preguntas reales sobre rentabilidad,
              dashboards, Mercado Libre, benchmark y manejo de objeciones.
            </p>
            <Link
              href="/recursos"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#155EEF] hover:underline uppercase tracking-wider"
            >
              <span>Explorar biblioteca completa de artículos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.slug}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-[#155EEF] hover:shadow-lg transition-all p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-[11px] font-bold text-slate-500 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#155EEF] border border-blue-100">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#101828] group-hover:text-[#155EEF] transition-colors leading-snug mb-2.5">
                  <Link href={`/recursos/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-medium text-slate-700">
                    <UserCheck className="w-3.5 h-3.5 text-[#155EEF]" />
                    {article.author.name}
                  </span>
                  <Link
                    href={`/servicios/${article.relatedServiceSlug}`}
                    className="text-[#155EEF] hover:underline font-semibold"
                  >
                    {article.relatedServiceTitle}
                  </Link>
                </div>

                <Link
                  href={`/recursos/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-[#101828] group-hover:text-[#155EEF] pt-1"
                >
                  <span>Leer análisis completo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}

          {/* Author & Methodology Credibility Box */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                AUTORÍA & CRITERIO REAL
              </span>
              <h3 className="text-lg font-extrabold text-[#101828] mb-2">
                Por qué documentamos nuestra metodología en abierto
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Cada guía publicada en MORPHO sintetiza aprendizajes reales auditando catálogos minoristas, cuentas de
                Meta y Google Ads, operaciones en Mercado Libre y equipos comerciales B2C.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/sobre-mi"
                className="text-xs font-extrabold text-[#155EEF] hover:underline inline-flex items-center gap-1"
              >
                <span>Ver perfil y experiencia de Ronan Lavorato</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
