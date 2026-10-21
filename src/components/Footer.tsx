'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '../lib/seo-config';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-white border-t border-[#E8EAF0] py-12 md:py-16">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#E8EAF0]">
          <div className="space-y-1.5">
            <Link
              href="/"
              className="text-base font-semibold tracking-[-0.02em] text-[#111318] hover:text-[#2457D6] transition-colors inline-block"
            >
              MORPHO
            </Link>
            <p className="text-sm text-[#656B76]">
              Agente Humano de Marketing. Inteligencia comercial, datos y ventas.
            </p>
          </div>

          <nav
            aria-label="Enlaces del pie de página"
            className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#656B76]"
          >
            <Link href="/servicios" className="hover:text-[#111318] transition-colors">
              Servicios
            </Link>
            <Link href="/sobre-mi" className="hover:text-[#111318] transition-colors">
              Perfil profesional
            </Link>
            <Link href="/recursos" className="hover:text-[#111318] transition-colors">
              Artículos
            </Link>
            <button
              type="button"
              onClick={onOpenBooking}
              className="hover:text-[#111318] transition-colors cursor-pointer"
            >
              Contacto
            </button>
            <a
              href={SITE_CONFIG.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111318] hover:text-[#2457D6] transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#656B76]">
          <p>© {new Date().getFullYear()} MORPHO · Ronan Lavorato.</p>
          <p>{SITE_CONFIG.location}</p>
        </div>
      </div>
    </footer>
  );
};
