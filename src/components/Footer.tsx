import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TiendanubeLogo, MetaPartnerLogo, MercadoLibreLogo, GooglePartnerLogo } from './BrandLogos';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-100">
          
          {/* Brand Info (Left) */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="#" 
              className="text-3xl font-black tracking-tighter text-[#101828] lowercase inline-block"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              morpho
            </a>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Agente Humano de Marketing. Estrategia, publicidad digital, creatividad y tecnología para hacer crecer marcas sin fricción.
            </p>
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Partners Oficiales
              </span>
              <div className="flex flex-wrap items-center gap-6 opacity-80">
                <TiendanubeLogo className="h-5" />
                <MetaPartnerLogo className="h-5" />
                <MercadoLibreLogo className="h-5" />
                <GooglePartnerLogo className="h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links (Middle) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-sm">
            <div>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                Explorar
              </span>
              <ul className="space-y-2 text-slate-600">
                <li><a href="#servicios" className="hover:text-[#155EEF] transition-colors">Servicios</a></li>
                <li><a href="#agente-diagnostico" className="hover:text-[#155EEF] transition-colors">Diagnóstico Exprés</a></li>
                <li><a href="#simulador" className="hover:text-[#155EEF] transition-colors">Simulador de ROI</a></li>
                <li><a href="#casos" className="hover:text-[#155EEF] transition-colors">Casos de Éxito</a></li>
                <li><a href="#metodologia" className="hover:text-[#155EEF] transition-colors">Metodología</a></li>
                <li><a href="#academia-infoproductos" className="text-[#155EEF] font-bold hover:underline">Academia VIP (Videos)</a></li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                Contacto
              </span>
              <ul className="space-y-2 text-slate-600">
                <li><span className="block text-slate-400 text-xs">Email</span> hola@morpho.agency</li>
                <li><span className="block text-slate-400 text-xs">Oficinas</span> Buenos Aires · Remoto Global</li>
                <li><span className="block text-slate-400 text-xs">WhatsApp</span> +54 9 11 2345-6789</li>
              </ul>
            </div>
          </div>

          {/* Action Box (Right) */}
          <div className="md:col-span-3 flex flex-col justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-xs font-extrabold uppercase text-[#155EEF] tracking-wider block mb-1">
                ¿LISTO PARA ESCALAR?
              </span>
              <h4 className="text-base font-extrabold text-[#101828] mb-2">
                Agendá una sesión estratégica gratuita de 30 min.
              </h4>
            </div>
            <button
              onClick={onOpenBooking}
              className="mt-4 w-full py-3 px-4 text-xs font-extrabold text-[#101828] bg-[#D7FF00] hover:bg-[#cbf400] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>RESERVAR SESIÓN</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} MORPHO Agency. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer">Términos de Servicio</span>
            <span className="hover:text-slate-800 cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-slate-800 cursor-pointer">Seguridad de Datos</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
