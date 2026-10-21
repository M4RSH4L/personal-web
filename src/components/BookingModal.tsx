'use client';

import React, { useState, useEffect } from 'react';
import { X, Clock, CheckCircle2, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { BookingSubmission } from '../types';
import { SERVICES_DATA } from '../data/services';
import { trackEvent } from '../lib/analytics';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const AVAILABLE_DAYS = [
  { dayName: 'Hoy', dateStr: 'Próximo turno hoy', isToday: true },
  { dayName: 'Mañana', dateStr: 'Mañana', isToday: false },
  { dayName: 'Miércoles', dateStr: 'Miércoles', isToday: false },
  { dayName: 'Jueves', dateStr: 'Jueves', isToday: false },
  { dayName: 'Viernes', dateStr: 'Viernes', isToday: false },
];

const TIME_SLOTS = ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM'];

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDay, setSelectedDay] = useState(AVAILABLE_DAYS[1].dateStr);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[1]);
  const [formError, setFormError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<BookingSubmission, 'date' | 'timeSlot'>>({
    fullName: '',
    email: '',
    businessName: '',
    websiteOrSocial: '',
    monthlyAdSpend: '5k_20k',
    mainGoal: initialService || 'Diagnóstico Comercial y Benchmark',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, mainGoal: initialService }));
    }
  }, [initialService]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleContinueStep1 = () => {
    trackEvent('booking_step_complete', {
      step: 1,
      day: selectedDay,
      time: selectedTime,
    });
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.fullName.trim() || !formData.email.includes('@') || !formData.businessName.trim()) {
      setFormError('Por favor completá tu nombre, email corporativo válido y el nombre de tu empresa.');
      trackEvent('booking_submission_error', { reason: 'validation_failed' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      trackEvent('booking_submission_success', {
        service: formData.mainGoal,
        adSpend: formData.monthlyAdSpend,
      });
      setStep(3);
    }, 500);
  };

  const resetAndClose = () => {
    setStep(1);
    setFormError(null);
    onClose();
  };

  const whatsappDirectUrl = `https://wa.me/${
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5491123456789'
  }?text=${encodeURIComponent(
    `¡Hola Ronan! Reservé una sesión para ${selectedDay} a las ${selectedTime}. Mi empresa es ${
      formData.businessName || ''
    } y mi interés principal es: ${formData.mainGoal}.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-[#101828] lowercase tracking-tight">morpho</span>
            <span className="text-xs text-slate-400">|</span>
            <span id="booking-modal-title" className="text-xs font-bold text-[#155EEF] uppercase tracking-wider">
              Diagnóstico Estratégico 1-a-1
            </span>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Cerrar ventana de agendamiento"
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="px-6 pt-4 pb-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
            <span className={step >= 1 ? 'text-[#155EEF]' : ''}>1. Horario</span>
            <span className={step >= 2 ? 'text-[#155EEF]' : ''}>2. Datos y Servicio</span>
            <span className={step === 3 ? 'text-[#155EEF]' : ''}>3. Confirmación</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#155EEF] h-full transition-all duration-300"
              style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
            />
          </div>
        </div>

        {/* Step 1: Select Day & Time */}
        {step === 1 && (
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-[#101828] mb-1">
                Elegí el mejor momento para reunirnos
              </h3>
              <p className="text-xs text-slate-500">
                Sesión de diagnóstico de 30 minutos vía Google Meet directamente con Ronan Lavorato.
              </p>
            </div>

            {/* Days row */}
            <div>
              <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider block mb-2">
                Día Disponible
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {AVAILABLE_DAYS.map((day) => (
                  <button
                    key={day.dateStr}
                    type="button"
                    onClick={() => setSelectedDay(day.dateStr)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      selectedDay === day.dateStr
                        ? 'border-[#155EEF] bg-blue-50 text-[#155EEF] font-bold shadow-sm ring-1 ring-[#155EEF]'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300 font-medium'
                    }`}
                  >
                    <span className="text-[11px] block text-slate-500 font-normal">{day.dayName}</span>
                    <span className="text-xs font-bold block truncate">{day.dateStr}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time slots */}
            <div>
              <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider block mb-2">
                Horario (GMT-3 / Hora Argentina)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      selectedTime === slot
                        ? 'border-[#155EEF] bg-[#155EEF] text-white shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slot}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs text-slate-500">
                Seleccionado:{' '}
                <strong className="text-slate-900">
                  {selectedDay} a las {selectedTime}
                </strong>
              </div>
              <button
                type="button"
                onClick={handleContinueStep1}
                className="py-3 px-6 text-xs font-extrabold text-[#101828] bg-[#D7FF00] hover:bg-[#cbf400] rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>CONTINUAR</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Business Info Form */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4" noValidate>
            <div>
              <h3 className="text-xl font-extrabold text-[#101828] mb-1">Contanos sobre tu negocio</h3>
              <p className="text-xs text-slate-500">
                Así preparamos un análisis preliminar antes de ingresar a la llamada.
              </p>
            </div>

            {formError && (
              <div
                role="alert"
                className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2 font-medium"
              >
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="booking-fullname" className="text-xs font-bold text-slate-700 block mb-1">
                  Tu Nombre y Apellido *
                </label>
                <input
                  id="booking-fullname"
                  type="text"
                  required
                  placeholder="Ej: Marcos Rossi"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="booking-email" className="text-xs font-bold text-slate-700 block mb-1">
                  Email de Trabajo *
                </label>
                <input
                  id="booking-email"
                  type="email"
                  required
                  placeholder="marcos@tuempresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="booking-business" className="text-xs font-bold text-slate-700 block mb-1">
                  Nombre de la Empresa / Marca *
                </label>
                <input
                  id="booking-business"
                  type="text"
                  required
                  placeholder="Ej: Urban Store"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="booking-web" className="text-xs font-bold text-slate-700 block mb-1">
                  Sitio Web, Tienda o Instagram
                </label>
                <input
                  id="booking-web"
                  type="text"
                  placeholder="tienda.com o @instagram"
                  value={formData.websiteOrSocial}
                  onChange={(e) => setFormData({ ...formData, websiteOrSocial: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="booking-service" className="text-xs font-bold text-slate-700 block mb-1">
                  Servicio de Interés Principal
                </label>
                <select
                  id="booking-service"
                  value={formData.mainGoal}
                  onChange={(e) => setFormData({ ...formData, mainGoal: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.slug} value={s.shortTitle}>
                      {s.number}. {s.shortTitle}
                    </option>
                  ))}
                  <option value="Consulta Integral de Crecimiento">Consulta Integral de Crecimiento</option>
                </select>
              </div>

              <div>
                <label htmlFor="booking-spend" className="text-xs font-bold text-slate-700 block mb-1">
                  Escala / Inversión Comercial Actual
                </label>
                <select
                  id="booking-spend"
                  value={formData.monthlyAdSpend}
                  onChange={(e) => setFormData({ ...formData, monthlyAdSpend: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
                >
                  <option value="under_1k">Iniciando / Menos de $1,000 USD/mes</option>
                  <option value="1k_5k">$1,000 a $5,000 USD / mes</option>
                  <option value="5k_20k">$5,000 a $20,000 USD / mes</option>
                  <option value="20k_plus">Más de $20,000 USD / mes</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                ← Volver al calendario
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-3 px-6 text-xs font-extrabold text-[#101828] bg-[#D7FF00] hover:bg-[#cbf400] rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? 'PROCESANDO...' : 'CONFIRMAR DIAGNÓSTICO'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 3 && (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-[#101828] mb-2">
                ¡Solicitud de diagnóstico registrada!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Pre-reservamos tu espacio para <strong>{selectedDay}</strong> a las{' '}
                <strong>{selectedTime}</strong> sobre <strong>{formData.mainGoal}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-left max-w-md mx-auto space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#155EEF]">
                <Sparkles className="w-4 h-4" />
                <span>¿Qué veremos en la sesión de 30 minutos?</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                <li>Diagnóstico en vivo de tus métricas, márgenes o embudo comercial</li>
                <li>Detección de fugas críticas y oportunidades de corto plazo</li>
                <li>Hoja de ruta recomendada según la etapa real de tu empresa</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent('whatsapp_click', {
                    location: 'booking_modal_confirmation',
                    service: formData.mainGoal,
                  })
                }
                className="px-6 py-3 text-xs font-extrabold bg-[#25D366] text-white rounded-xl hover:opacity-95 transition-opacity"
              >
                CONFIRMAR AHORA POR WHATSAPP →
              </a>
              <button
                type="button"
                onClick={resetAndClose}
                className="px-6 py-3 text-xs font-extrabold bg-[#101828] text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
              >
                VOLVER AL SITIO
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
