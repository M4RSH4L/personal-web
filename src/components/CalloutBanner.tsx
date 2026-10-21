'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CalloutBannerProps {
  onOpenBooking: () => void;
}

export const CalloutBanner: React.FC<CalloutBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Rounded callout container matching the reference image layout */}
        <div className="relative rounded-3xl bg-[#F0F5FF] border border-blue-100/80 p-8 sm:p-14 md:p-16 overflow-hidden">
          
          {/* Yellow lime doodle wave flourish at bottom left matching reference image */}
          <div className="absolute -bottom-4 left-6 sm:left-14 pointer-events-none z-10">
            <svg width="180" height="60" viewBox="0 0 200 70" fill="none">
              <path 
                d="M10 50 C 40 20, 80 65, 120 30 C 150 10, 180 40, 195 25" 
                stroke="#D7FF00" 
                strokeWidth="14" 
                strokeLinecap="round" 
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20">
            
            {/* Left: Giant Bold Headline */}
            <div className="lg:col-span-7">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] select-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span className="text-[#155EEF]">Tu crecimiento</span><br />
                <span className="text-[#155EEF]">no es casualidad.</span><br />
                <span className="text-[#101828]">Es estrategia.</span>
              </h2>
            </div>

            {/* Right: Hand-drawn arrow + Annotation + Action button */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
              
              {/* Hand-drawn Annotation: "Hablemos de tu próximo paso." */}
              <div className="relative mb-2 lg:text-right">
                <span 
                  className="font-handwriting text-[#155EEF] font-bold text-xl sm:text-2xl block transform -rotate-3 leading-none"
                >
                  Hablemos de<br />
                  tu próximo paso.
                </span>

                {/* Hand-drawn curved arrow pointing to button */}
                <div className="flex justify-start lg:justify-end my-1">
                  <svg className="w-16 h-10 transform -rotate-6" viewBox="0 0 70 40" fill="none">
                    <path 
                      d="M15 8 C 30 18, 50 20, 56 30" 
                      stroke="#155EEF" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      fill="none" 
                    />
                    <path 
                      d="M48 28 L 56 30 L 52 22" 
                      stroke="#155EEF" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
              </div>

              {/* Action Button: Dark Navy with White Text & Arrow (as in reference image) */}
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm sm:text-base font-extrabold text-white bg-[#101828] hover:bg-[#155EEF] active:scale-[0.98] rounded-full transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
              >
                <span>AGENDAR SESIÓN</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
