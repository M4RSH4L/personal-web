import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

export default function NotFound() {
  return (
    <main className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D7FF00] text-[#0A0A0A] text-xs font-mono font-black uppercase tracking-wider">
          <span>ERROR 404 · PÁGINA NO ENCONTRADA</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-black text-[#0A0A0A] tracking-tight">
          Esta ruta no existe, pero tu oportunidad de crecer sí.
        </h1>

        <p className="text-base text-slate-600 max-w-xl mx-auto">
          Es posible que el enlace haya cambiado o esté mal escrito. Explorá nuestras cinco áreas de consultoría
          especializada o regresá al inicio.
        </p>

        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#0A0A0A] hover:bg-[#155EEF] text-white text-xs font-extrabold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la página principal</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-slate-200 text-left">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-4 text-center">
            Servicios Especializados de MORPHO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="p-4 rounded-2xl border border-slate-200 hover:border-[#155EEF] bg-slate-50 hover:bg-white transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-bold text-[#101828] group-hover:text-[#155EEF]">
                  {service.number}. {service.shortTitle}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#155EEF] shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
