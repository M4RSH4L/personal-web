'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-black/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark (morpho) */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-black tracking-tighter text-[#0A0A0A] lowercase whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity font-display"
        >
          morpho
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-semibold text-[#0A0A0A]/75"
        >
          {/* Services Dropdown + Link */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              href="/servicios"
              className="hover:text-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 py-2 inline-flex items-center gap-1"
            >
              <span>Servicios</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </Link>

            {servicesDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-80 z-50">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-2 space-y-1">
                  <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    5 Especialidades Comerciales
                  </div>
                  {SERVICES_DATA.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servicios/${service.slug}`}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#101828] group-hover:text-[#155EEF] transition-colors">
                          {service.number}. {service.shortTitle}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#155EEF]" />
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                        {service.badge}
                      </p>
                    </Link>
                  ))}
                  <div className="pt-1 mt-1 border-t border-slate-100">
                    <Link
                      href="/servicios"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2 text-center text-xs font-extrabold text-[#155EEF] hover:bg-blue-50/50 rounded-xl transition-colors"
                    >
                      Ver todos los servicios →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#metodologia"
            className="hover:text-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Metodología
          </Link>

          <Link
            href="/#casos"
            className="hover:text-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Casos Reales
          </Link>

          <Link
            href="/recursos"
            className="hover:text-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Artículos & Guías
          </Link>

          <Link
            href="/sobre-mi"
            className="hover:text-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Sobre Ronan
          </Link>

          <Link
            href="/#academia-infoproductos"
            className="text-[#0A0A0A] font-bold hover:text-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 py-1"
          >
            <span>Academia VIP</span>
            <span className="text-[9px] font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#D7FF00] text-[#0A0A0A] font-black">
              VIDEOS
            </span>
          </Link>
        </nav>

        {/* Zone 3: Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider text-white bg-[#0A0A0A] hover:bg-[#D7FF00] hover:text-[#0A0A0A] active:scale-[0.98] rounded-full transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap shrink-0 uppercase"
          >
            <span>SOLICITAR DIAGNÓSTICO</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A0A0A] hover:bg-neutral-100 rounded-lg transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black/10 px-6 py-6 shadow-xl max-h-[85vh] overflow-y-auto">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-3 text-sm font-semibold text-[#0A0A0A]">
            <div className="pb-2 border-b border-slate-100">
              <Link
                href="/servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono uppercase tracking-wider text-[#155EEF] font-bold block mb-2"
              >
                Servicios Especializados (5)
              </Link>
              <div className="space-y-1.5 pl-2 border-l-2 border-[#D7FF00]">
                {SERVICES_DATA.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/servicios/${service.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs font-bold text-slate-800 hover:text-[#155EEF]"
                  >
                    {service.number}. {service.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#agente-diagnostico"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:opacity-70 transition-opacity"
            >
              Diagnóstico Interactivo
            </Link>
            <Link
              href="/#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:opacity-70 transition-opacity"
            >
              Metodología
            </Link>
            <Link
              href="/#casos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:opacity-70 transition-opacity"
            >
              Casos de Éxito
            </Link>
            <Link
              href="/recursos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:opacity-70 transition-opacity"
            >
              Artículos & Contenido Experto
            </Link>
            <Link
              href="/sobre-mi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:opacity-70 transition-opacity"
            >
              Sobre Ronan Lavorato
            </Link>
            <Link
              href="/#academia-infoproductos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 font-bold flex items-center justify-between"
            >
              <span>Academia VIP</span>
              <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded bg-[#D7FF00] text-[#0A0A0A] font-black">
                VIDEOS
              </span>
            </Link>
            <div className="pt-4 border-t border-black/5 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-5 text-center font-black text-xs tracking-wider text-[#0A0A0A] bg-[#D7FF00] hover:bg-[#cbf400] rounded-full shadow-sm transition-all uppercase"
              >
                SOLICITAR DIAGNÓSTICO →
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
