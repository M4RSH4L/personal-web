import React from 'react';

export const PartnersRow: React.FC = () => {
  return (
    <section
      aria-label="Plataformas y ecosistema de trabajo"
      className="bg-white border-t border-b border-[#E8EAF0] py-6"
    >
      <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs text-[#656B76] tracking-wide">
            Especialización en plataformas y ecosistemas comerciales
          </span>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-medium text-[#656B76]">
            <li>Meta Business Partner</li>
            <li>Google Ads & Looker Studio</li>
            <li>Mercado Libre</li>
            <li>Tiendanube</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
