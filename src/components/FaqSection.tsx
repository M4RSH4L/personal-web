import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: '¿Qué significa exactamente que Morpho sea un "Agente Humano de Marketing"?',
    answer: 'A diferencia de las agencias tradicionales lentas y burocráticas o de los bots automáticos desalmados, en Morpho operamos como un agente de crecimiento dedicado: entendemos la economía de tu negocio, diagnosticamos oportunidades con tecnología e inteligencia artificial, y ejecutamos con el criterio estratégico de especialistas humanos senior.'
  },
  {
    question: '¿Exigen contratos de permanencia obligatoria o ataduras?',
    answer: 'No. Creemos que la permanencia debe ganarse mes a mes con resultados en la cuenta bancaria. Trabajamos bajo un modelo ágil mensual sin cláusulas abusivas ni multas por cancelación.'
  },
  {
    question: '¿En cuánto tiempo empezamos a ver resultados medibles?',
    answer: 'La fase de auditoría e implementación técnica toma los primeros 7 a 14 días. Las primeras mejoras de ROAS, recuperación de carritos y volumen de ventas suelen manifestarse entre la tercera y cuarta semana de ejecución continuada.'
  },
  {
    question: '¿Con qué plataformas y tecnologías se integran?',
    answer: 'Somos partners y especialistas en Tiendanube, Shopify, Mercado Libre, WooCommerce, VTEX, Meta Ads, Google Ads, TikTok Ads, Klaviyo, HubSpot y automatizaciones vía Make / WhatsApp Business API.'
  },
  {
    question: '¿Quién produce los anuncios y creativos?',
    answer: 'Nuestro equipo creativo diseña, guiona y edita piezas estáticas y en video (UGC, comparativas, demos) orientadas 100% a respuesta directa y conversión, sin que tengas que gastar en productoras externas.'
  },
  {
    question: '¿Qué ocurre si ya contamos con un equipo interno de marketing?',
    answer: 'Nos acoplamos de forma simbiótica. Podemos liderar la estrategia de pauta paga y automatización avanzada, potenciando y acelerando el trabajo del equipo interno existente sin pisarnos.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#155EEF] text-xs font-extrabold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RESOLVEMOS TUS DUDAS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#101828] tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Transparencia total sobre cómo colaboramos y cómo generamos impacto.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-extrabold text-sm sm:text-base text-[#101828]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#155EEF] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
