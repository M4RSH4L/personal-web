import React from 'react';
import { TiendanubeLogo, MetaPartnerLogo, MercadoLibreLogo, GooglePartnerLogo } from './BrandLogos';

export const PartnersRow: React.FC = () => {
  return (
    <section className="bg-white py-8 md:py-14 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
          
          {/* Label matching image: CERTIFICACIONES Y PARTNERS */}
          <div className="shrink-0 text-center md:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block leading-tight">
              CERTIFICACIONES<br className="hidden md:inline" /> Y PARTNERS
            </span>
          </div>

          {/* Desktop Layout (Grid / Flex) */}
          <div className="hidden md:grid grid-cols-4 gap-10 items-center flex-1 justify-items-end">
            <div className="py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors">
              <TiendanubeLogo className="h-7" />
            </div>

            <div className="py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors">
              <MetaPartnerLogo className="h-7" />
            </div>

            <div className="py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors">
              <MercadoLibreLogo className="h-7" />
            </div>

            <div className="py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors">
              <GooglePartnerLogo className="h-7" />
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Layout: Automatic Continuous Horizontal Scroll Carousel */}
      <div className="md:hidden relative w-full overflow-hidden mt-4 pt-2 pb-2">
        {/* Soft edge blur scrims */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee items-center gap-8 py-1">
          {/* First set */}
          <div className="px-3 shrink-0"><TiendanubeLogo className="h-6" /></div>
          <div className="px-3 shrink-0"><MetaPartnerLogo className="h-6" /></div>
          <div className="px-3 shrink-0"><MercadoLibreLogo className="h-6" /></div>
          <div className="px-3 shrink-0"><GooglePartnerLogo className="h-6" /></div>

          {/* Duplicate set for seamless infinite loop */}
          <div className="px-3 shrink-0"><TiendanubeLogo className="h-6" /></div>
          <div className="px-3 shrink-0"><MetaPartnerLogo className="h-6" /></div>
          <div className="px-3 shrink-0"><MercadoLibreLogo className="h-6" /></div>
          <div className="px-3 shrink-0"><GooglePartnerLogo className="h-6" /></div>
        </div>
      </div>
    </section>
  );
};

