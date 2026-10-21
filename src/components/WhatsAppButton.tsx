import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '5491123456789',
  defaultMessage = '¡Hola Ronan! Me gustaría consultar sobre estrategia y escalabilidad para mi marca con Morpho.',
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Show a welcome tooltip after 3.5 seconds to capture subtle attention
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleDismissTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto select-none">
      {/* Speech Bubble / Quick Prompt */}
      {showTooltip && (
        <div 
          className="mb-3 max-w-xs bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200/90 text-[#101828] relative animate-fade-in transition-all duration-300"
          style={{
            boxShadow: '0 12px 30px -4px rgba(16, 24, 40, 0.15), 0 4px 12px -2px rgba(37, 211, 102, 0.12)'
          }}
        >
          <button
            onClick={handleDismissTooltip}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-1 rounded-full transition-colors"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-start gap-2.5 pr-4">
            <div className="relative flex-shrink-0 mt-0.5">
              <img 
                src="/retrato_home.png" 
                alt="Ronan Lavorato" 
                className="w-9 h-9 rounded-full object-cover border border-slate-200"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-[#101828]">Ronan Lavorato</span>
                <span className="text-[10px] text-[#25D366] font-semibold flex items-center gap-1">
                  • En línea
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                ¿Tenés dudas sobre cómo escalar tu negocio? Escribime directamente.
              </p>
            </div>
          </div>

          {/* Call to action inside balloon */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setHasInteracted(true)}
            className="mt-2.5 flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-95 shadow-sm"
            style={{ backgroundColor: '#25D366' }}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Iniciar chat directo</span>
          </a>

          {/* Little tail pointing to the button */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-200/90 transform rotate-45"></div>
        </div>
      )}

      {/* Main Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp para atención rápida"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 8px 24px -2px rgba(37, 211, 102, 0.5), 0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Soft pulsing ring */}
        <span 
          className="absolute inset-0 rounded-full animate-ping opacity-25 pointer-events-none"
          style={{ backgroundColor: '#25D366' }}
        ></span>

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-7 h-7 md:w-8 md:h-8 text-white fill-current transform transition-transform group-hover:scale-105"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>

        {/* Status dot badge */}
        <span className="absolute top-1 right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-[#25D366]"></span>
        </span>
      </a>
    </div>
  );
};
