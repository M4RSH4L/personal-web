'use client';

import React, { useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useBooking } from './BookingContext';
import { trackEvent } from '../lib/analytics';

interface ServiceCtaTriggerProps {
  serviceName: string;
  ctaLabel: string;
  whatsappMessage: string;
  variant?: 'primary' | 'dark' | 'inline';
}

export const ServiceCtaTrigger: React.FC<ServiceCtaTriggerProps> = ({
  serviceName,
  ctaLabel,
  whatsappMessage,
  variant = 'primary',
}) => {
  const { openBooking, setCustomWhatsAppMessage } = useBooking();

  useEffect(() => {
    setCustomWhatsAppMessage(whatsappMessage);
    return () => setCustomWhatsAppMessage(null);
  }, [whatsappMessage, setCustomWhatsAppMessage]);

  const whatsappUrl = `https://wa.me/${
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5491123456789'
  }?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
      <button
        type="button"
        onClick={() => openBooking(serviceName, `service_page_${variant}`)}
        className={`group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-black tracking-wider rounded-full transition-all duration-200 cursor-pointer uppercase ${
          variant === 'dark'
            ? 'bg-[#D7FF00] text-[#0A0A0A] hover:bg-[#cbf400] shadow-md'
            : 'bg-[#D7FF00] text-[#0A0A0A] hover:bg-[#cbf400] shadow-sm hover:shadow-md'
        }`}
      >
        <span>{ctaLabel}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent('whatsapp_click', {
            service: serviceName,
            location: `service_page_${variant}`,
          })
        }
        className={`inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold rounded-full border transition-colors ${
          variant === 'dark'
            ? 'border-white/25 text-white hover:bg-white/10'
            : 'border-slate-300 text-[#101828] hover:border-[#101828] bg-white'
        }`}
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span>Consultar por WhatsApp</span>
      </a>
    </div>
  );
};
