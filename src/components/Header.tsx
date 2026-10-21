'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E8EAF0]">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="text-base font-semibold tracking-[-0.02em] text-[#111318] hover:text-[#2457D6] transition-colors"
        >
          MORPHO
        </Link>

        {/* Desktop Minimal Navigation */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-8 text-sm text-[#656B76]"
        >
          <Link href="/servicios" className="hover:text-[#111318] transition-colors">
            Servicios
          </Link>
          <Link href="/sobre-mi" className="hover:text-[#111318] transition-colors">
            Perfil
          </Link>
          <button
            type="button"
            onClick={onOpenBooking}
            className="hover:text-[#111318] transition-colors cursor-pointer"
          >
            Contacto
          </button>
        </nav>

        {/* Single Discrete CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-[#111318] hover:text-[#2457D6] transition-colors cursor-pointer"
          >
            <span>Conversemos</span>
            <span aria-hidden="true" className="text-[#2457D6]">↗</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#111318] hover:text-[#2457D6] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Simple Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E8EAF0] px-6 py-6">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-4 text-sm text-[#111318]">
            <Link
              href="/servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2457D6] transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/sobre-mi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2457D6] transition-colors"
            >
              Perfil
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="py-1 text-left hover:text-[#2457D6] transition-colors"
            >
              Contacto
            </button>
            <div className="pt-3 border-t border-[#E8EAF0]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2457D6]"
              >
                <span>Hablemos de tu negocio</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
