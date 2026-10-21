'use client';

import React, { createContext, useContext, useState } from 'react';
import { BookingModal } from './BookingModal';
import { Header } from './Header';
import { Footer } from './Footer';
import { trackEvent } from '../lib/analytics';

interface BookingContextValue {
  openBooking: (preselectedService?: string, sourceLocation?: string) => void;
  setCustomWhatsAppMessage: (msg: string | null) => void;
}

const BookingContext = createContext<BookingContextValue>({
  openBooking: () => {},
  setCustomWhatsAppMessage: () => {},
});

export const useBooking = () => useContext(BookingContext);

export const SiteShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [, setCustomWhatsAppMessage] = useState<string | null>(null);

  const openBooking = (serviceName?: string, sourceLocation?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    trackEvent('cta_booking_open', {
      service: serviceName || 'general',
      location: sourceLocation || 'site',
    });
    setIsBookingOpen(true);
  };

  return (
    <BookingContext.Provider value={{ openBooking, setCustomWhatsAppMessage }}>
      <div className="min-h-screen bg-white text-[#111318] font-sans antialiased flex flex-col">
        <Header onOpenBooking={() => openBooking(undefined, 'header')} />
        <div className="flex-1">{children}</div>
        <Footer onOpenBooking={() => openBooking(undefined, 'footer')} />
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialService={preselectedService}
        />
      </div>
    </BookingContext.Provider>
  );
};
