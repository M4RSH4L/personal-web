import Link from 'next/link';
import { SERVICES_DATA } from '../data/services';

export default function NotFound() {
  return (
    <main className="py-24 md:py-32 bg-white text-[#111318]">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-10 space-y-12">
        <div className="max-w-xl space-y-4">
          <p className="text-xs font-mono uppercase tracking-wider text-[#656B76]">
            ERROR 404
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold text-[#111318] tracking-[-0.03em]">
            Página no encontrada.
          </h1>
          <p className="text-base text-[#656B76] leading-relaxed">
            La ruta que buscás no existe o fue movida. Podés regresar al inicio o explorar las cinco áreas de trabajo.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#111318] hover:bg-[#2457D6] rounded-lg transition-colors"
            >
              <span>← Volver al inicio</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-[#E8EAF0] pt-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-[#656B76] mb-4">
            Servicios
          </h2>
          <div className="divide-y divide-[#E8EAF0] border-t border-b border-[#E8EAF0]">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="py-4 flex items-center justify-between group"
              >
                <span className="text-sm font-medium text-[#111318] group-hover:text-[#2457D6] transition-colors">
                  {service.number} — {service.shortTitle}
                </span>
                <span aria-hidden="true" className="text-xs text-[#656B76] group-hover:text-[#2457D6]">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
