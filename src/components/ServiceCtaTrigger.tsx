'use client';

import React, { useEffect } from 'react';
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
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <button
        type="button"
        onClick={() => openBooking(serviceName, `service_page_${variant}`)}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#111318] hover:bg-[#2457D6] rounded-lg transition-colors cursor-pointer w-fit"
      >
        <span>{ctaLabel}</span>
        <span aria-hidden="true">↗</span>
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
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#656B76] hover:text-[#111318] transition-colors py-2 w-fit"
      >
        <span>Consultar por WhatsApp</span>
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
};
