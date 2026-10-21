import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-black/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (morpho) */}
        <a 
          href="#" 
          className="text-2xl sm:text-3xl font-black tracking-tighter text-[#0A0A0A] lowercase whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity font-display"
        >
          morpho
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[13px] font-semibold text-[#0A0A0A]/75">
          <a 
            href="#servicios" 
            className="hover:text-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Servicios
          </a>
          <a 
            href="#agente-diagnostico" 
            className="hover:text-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Diagnóstico
          </a>
          <a 
            href="#simulador" 
            className="hover:text-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Simulador ROI
          </a>
          <a 
            href="#casos" 
            className="hover:text-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Casos de éxito
          </a>
          <a 
            href="#academia-infoproductos" 
            className="text-[#0A0A0A] font-bold hover:text-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 py-1"
          >
            <span>Academia VIP</span>
            <span className="text-[9px] font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#D7FF00] text-[#0A0A0A] font-black">
              VIDEOS
            </span>
          </a>
        </nav>

        {/* Zone 3: Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider text-white bg-[#0A0A0A] hover:bg-[#D7FF00] hover:text-[#0A0A0A] active:scale-[0.98] rounded-full transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap shrink-0 uppercase"
          >
            <span>AGENDAR SESIÓN</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0A0A0A] hover:bg-neutral-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-black/10 px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-4 text-sm font-semibold text-[#0A0A0A]">
            <a 
              href="#servicios" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:opacity-70 transition-opacity"
            >
              Servicios
            </a>
            <a 
              href="#agente-diagnostico" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:opacity-70 transition-opacity"
            >
              Diagnóstico
            </a>
            <a 
              href="#simulador" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:opacity-70 transition-opacity"
            >
              Simulador ROI
            </a>
            <a 
              href="#casos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:opacity-70 transition-opacity"
            >
              Casos de éxito
            </a>
            <a 
              href="#academia-infoproductos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 font-bold flex items-center justify-between"
            >
              <span>Academia VIP</span>
              <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded bg-[#D7FF00] text-[#0A0A0A] font-black">
                VIDEOS
              </span>
            </a>
            <div className="pt-4 border-t border-black/5 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-5 text-center font-black text-xs tracking-wider text-[#0A0A0A] bg-[#D7FF00] hover:bg-[#cbf400] rounded-full shadow-sm transition-all uppercase"
              >
                AGENDAR SESIÓN GRATUITA →
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
