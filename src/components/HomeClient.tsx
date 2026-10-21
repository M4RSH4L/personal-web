'use client';

import React from 'react';
import { Hero } from './Hero';
import { PartnersRow } from './PartnersRow';
import { CorePillars } from './CorePillars';
import { MorphoInteractiveAgent } from './MorphoInteractiveAgent';
import { GrowthCalculator } from './GrowthCalculator';
import { CaseStudies } from './CaseStudies';
import { ProcessRoadmap } from './ProcessRoadmap';
import { ExpertContentSection } from './ExpertContentSection';
import { CalloutBanner } from './CalloutBanner';
import { FaqSection } from './FaqSection';
import { InfoproductsSection } from './InfoproductsSection';
import { useBooking } from './BookingContext';

export const HomeClient: React.FC = () => {
  const { openBooking } = useBooking();

  const handleOpenDiagnostic = () => {
    const el = document.getElementById('agente-diagnostico');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* 1. Hero Section: Propuesta de Valor Comercial & Retrato Editorial */}
      <Hero
        onOpenBooking={() => openBooking(undefined, 'hero')}
        onOpenDiagnostic={handleOpenDiagnostic}
      />

      {/* 2. Certificaciones y Ecosistema */}
      <PartnersRow />

      {/* 3. Cinco Servicios Especializados con Acceso Directo */}
      <CorePillars />

      {/* 4. Metodología: Diagnóstico, Análisis, Priorización, Implementación y Medición */}
      <ProcessRoadmap />

      {/* 5. Experiencia y Credibilidad: Casos Reales y Métricas Auditadas */}
      <CaseStudies onOpenBooking={() => openBooking(undefined, 'case_studies')} />

      {/* 6. Agente Interactivo Morpho: Diagnóstico en Vivo & Consulta */}
      <MorphoInteractiveAgent onOpenBooking={() => openBooking(undefined, 'interactive_agent')} />

      {/* 7. Simulador de Impacto & Calculadora de Retorno (ROI) */}
      <GrowthCalculator onOpenBooking={() => openBooking(undefined, 'roi_calculator')} />

      {/* 8. Contenido Experto: Artículos y Análisis vinculados a los 5 Servicios */}
      <ExpertContentSection />

      {/* 9. Preguntas Frecuentes */}
      <FaqSection />

      {/* 10. Callout Banner CTA */}
      <CalloutBanner onOpenBooking={() => openBooking(undefined, 'callout_banner')} />

      {/* 11. Área Exclusiva de Infoproductos en Video (Morpho Academy) */}
      <InfoproductsSection />
    </main>
  );
};
