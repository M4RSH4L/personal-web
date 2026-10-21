'use client';

import React from 'react';

interface CalloutBannerProps {
  onOpenBooking: () => void;
}

export const CalloutBanner: React.FC<CalloutBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 md:py-32 bg-[#F6F7F9] border-t border-[#E8EAF0]">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111318] tracking-[-0.025em]">
            ¿Qué está frenando tu crecimiento?
          </h2>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#111318] hover:bg-[#2457D6] rounded-lg transition-colors cursor-pointer w-fit shrink-0"
          >
            <span>Conversemos</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};
