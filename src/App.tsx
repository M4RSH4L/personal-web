/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PartnersRow } from './components/PartnersRow';
import { CorePillars } from './components/CorePillars';
import { MorphoInteractiveAgent } from './components/MorphoInteractiveAgent';
import { GrowthCalculator } from './components/GrowthCalculator';
import { CaseStudies } from './components/CaseStudies';
import { ProcessRoadmap } from './components/ProcessRoadmap';
import { CalloutBanner } from './components/CalloutBanner';
import { FaqSection } from './components/FaqSection';
import { InfoproductsSection } from './components/InfoproductsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenDiagnostic = () => {
    const el = document.getElementById('agente-diagnostico');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#101828] font-sans antialiased selection:bg-[#D7FF00] selection:text-[#101828]">
      {/* Top Header */}
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Experience */}
      <main>
        {/* 1. Hero Section: Primer Impacto con Agente Humano de Marketing */}
        <Hero 
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenDiagnostic={handleOpenDiagnostic}
        />

        {/* 2. Certificaciones y Partners Oficiales */}
        <PartnersRow />

        {/* 3. Cuatro Pilares del Agente Humano */}
        <CorePillars />

        {/* 4. Interactividad del Agente Morpho: Diagnóstico en Vivo & Consulta */}
        <MorphoInteractiveAgent 
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 5. Simulador de Impacto & Calculadora de Retorno (ROI) */}
        <GrowthCalculator 
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 6. Casos de Éxito & Métricas Comprobables */}
        <CaseStudies 
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 7. Metodología: El Sistema Morpho */}
        <ProcessRoadmap />

        {/* 8. Callout Banner: "Tu crecimiento no es casualidad. Es estrategia." */}
        <CalloutBanner 
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 9. Preguntas Frecuentes */}
        <FaqSection />

        {/* 10. Área Exclusiva de Infoproductos en Video (Gated con Inicio de Sesión) */}
        <InfoproductsSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
