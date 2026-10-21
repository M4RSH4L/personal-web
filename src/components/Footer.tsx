'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { TiendanubeLogo, MetaPartnerLogo, MercadoLibreLogo, GooglePartnerLogo } from './BrandLogos';
import { SERVICES_DATA } from '../data/services';
import { SITE_CONFIG } from '../lib/seo-config';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-slate-100">
          {/* Brand Info (Left) */}
          <div className="md:col-span-4 space-y-4">
            <Link
              href="/"
              className="text-3xl font-black tracking-tighter text-[#101828] lowercase inline-block"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              morpho
            </Link>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              <strong>Agente Humano de Marketing.</strong> Consultoría especializada en crecimiento comercial,
              inteligencia de negocios para retail, e-commerce, Mercado Libre, adquisición B2C y psicología del consumidor.
            </p>
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Ecosistema & Plataformas
              </span>
              <div className="flex flex-wrap items-center gap-5 opacity-85">
                <TiendanubeLogo className="h-5" />
                <MetaPartnerLogo className="h-5" />
                <MercadoLibreLogo className="h-5" />
                <GooglePartnerLogo className="h-5" />
              </div>
            </div>
          </div>

          {/* Services Links (Middle-Left) */}
          <div className="md:col-span-3 text-sm">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
              Servicios Especializados
            </span>
            <ul className="space-y-2.5 text-slate-600 text-xs sm:text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="hover:text-[#155EEF] transition-colors block leading-snug"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/servicios" className="text-xs font-bold text-[#155EEF] hover:underline">
                  Ver arquitectura completa →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Author Links (Middle-Right) */}
          <div className="md:col-span-2 text-sm">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
              Explorar
            </span>
            <ul className="space-y-2 text-slate-600 text-xs sm:text-sm">
              <li>
                <Link href="/sobre-mi" className="hover:text-[#155EEF] transition-colors font-semibold text-slate-800">
                  Sobre Ronan Lavorato
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="hover:text-[#155EEF] transition-colors">
                  Artículos y Guías
                </Link>
              </li>
              <li>
                <Link href="/#agente-diagnostico" className="hover:text-[#155EEF] transition-colors">
                  Diagnóstico Interactivo
                </Link>
              </li>
              <li>
                <Link href="/#simulador" className="hover:text-[#155EEF] transition-colors">
                  Simulador de ROI
                </Link>
              </li>
              <li>
                <Link href="/#casos" className="hover:text-[#155EEF] transition-colors">
                  Casos Reales
                </Link>
              </li>
              <li>
                <Link href="/#metodologia" className="hover:text-[#155EEF] transition-colors">
                  Metodología
                </Link>
              </li>
              <li>
                <Link href="/#academia-infoproductos" className="text-[#155EEF] font-bold hover:underline">
                  Academia VIP (Videos)
                </Link>
              </li>
            </ul>
          </div>

          {/* Action Box & Contact (Right) */}
          <div className="md:col-span-3 flex flex-col justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-xs font-extrabold uppercase text-[#155EEF] tracking-wider block mb-1">
                CONVERSACIÓN DIRECTA
              </span>
              <h3 className="text-base font-extrabold text-[#101828] mb-2">
                Solicitá un diagnóstico comercial de 30 minutos.
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600 mt-3">
                <li>
                  <span className="text-slate-400">Email:</span>{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#155EEF] font-medium">
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <span className="text-slate-400">LinkedIn:</span>{' '}
                  <a
                    href={SITE_CONFIG.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#155EEF] font-semibold hover:underline"
                  >
                    Ronan Lavorato ↗
                  </a>
                </li>
                <li>
                  <span className="text-slate-400">Ubicación:</span> Buenos Aires · Global
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="mt-5 w-full py-3 px-4 text-xs font-extrabold text-[#101828] bg-[#D7FF00] hover:bg-[#cbf400] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>SOLICITAR DIAGNÓSTICO</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} MORPHO — Agente Humano de Marketing · Dirigido por{' '}
            <Link href="/sobre-mi" className="text-slate-800 font-semibold hover:underline">
              Ronan Lavorato
            </Link>
            .
          </p>
          <div className="flex items-center gap-6">
            <Link href="/sobre-mi" className="hover:text-slate-800">
              Credenciales y Trayectoria
            </Link>
            <Link href="/recursos" className="hover:text-slate-800">
              Recursos
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-800">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
