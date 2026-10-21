'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { BookingSubmission } from '../types';
import { SERVICES_DATA } from '../data/services';
import { trackEvent } from '../lib/analytics';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const AVAILABLE_DAYS = [
  { dayName: 'Hoy', dateStr: 'Hoy' },
  { dayName: 'Mañana', dateStr: 'Mañana' },
  { dayName: 'Miércoles', dateStr: 'Miércoles' },
  { dayName: 'Jueves', dateStr: 'Jueves' },
  { dayName: 'Viernes', dateStr: 'Viernes' },
];

const TIME_SLOTS = ['10:00', '11:30', '14:00', '15:30', '17:00', '18:30'];

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
    mainGoal: initialService || 'Diagnóstico comercial y benchmark',
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
      setFormError('Por favor completá tu nombre, email válido y el nombre de tu empresa.');
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
    }, 400);
  };

  const resetAndClose = () => {
    setStep(1);
    setFormError(null);
    onClose();
  };

  const whatsappDirectUrl = `https://wa.me/${
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5491123456789'
  }?text=${encodeURIComponent(
    `Hola Ronan, reservé conversación para ${selectedDay} a las ${selectedTime}. Empresa: ${
      formData.businessName || ''
    }. Área de interés: ${formData.mainGoal}.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111318]/40 backdrop-blur-xs"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-lg bg-white border border-[#E8EAF0] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#E8EAF0]">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#656B76] block">
              MORPHO · CONTACTO DIRECTO
            </span>
            <h2 id="booking-modal-title" className="text-lg font-semibold text-[#111318] mt-0.5">
              Conversación inicial de diagnóstico
            </h2>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Cerrar ventana"
            className="p-1.5 text-[#656B76] hover:text-[#111318] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="pt-6 space-y-6">
            <p className="text-sm text-[#656B76] leading-relaxed">
              Seleccioná un día y horario tentativo para una reunión de 30 minutos por Google Meet, o iniciá una conversación directa por WhatsApp.
            </p>

            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-[#656B76] block mb-2.5">
                Día preferido
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {AVAILABLE_DAYS.map((day) => (
                  <button
                    key={day.dateStr}
                    type="button"
                    onClick={() => setSelectedDay(day.dateStr)}
                    className={`py-2.5 px-2 border text-xs transition-colors cursor-pointer ${
                      selectedDay === day.dateStr
                        ? 'border-[#2457D6] bg-[#F6F7F9] text-[#111318] font-medium'
                        : 'border-[#E8EAF0] text-[#656B76] hover:border-[#111318]'
                    }`}
                  >
                    {day.dayName}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-[#656B76] block mb-2.5">
                Horario (GMT-3)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2.5 px-3 border text-xs transition-colors cursor-pointer ${
                      selectedTime === slot
                        ? 'border-[#2457D6] bg-[#2457D6] text-white font-medium'
                        : 'border-[#E8EAF0] text-[#111318] hover:border-[#111318]'
                    }`}
                  >
                    {slot} hs
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#E8EAF0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a
                href={`https://wa.me/${
                  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5491123456789'
                }?text=${encodeURIComponent(
                  `Hola Ronan, me gustaría conversar sobre ${formData.mainGoal} para mi negocio.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent('whatsapp_click', {
                    location: 'booking_modal_step1',
                    service: formData.mainGoal,
                  })
                }
                className="text-xs font-medium text-[#656B76] hover:text-[#111318] transition-colors"
              >
                O escribir directo por WhatsApp ↗
              </a>

              <button
                type="button"
                onClick={handleContinueStep1}
                className="py-3 px-6 text-xs font-medium text-white bg-[#111318] hover:bg-[#2457D6] rounded-lg transition-colors cursor-pointer"
              >
                Continuar →
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="pt-6 space-y-4" noValidate>
            {formError && (
              <div
                role="alert"
                className="p-3 bg-[#F6F7F9] border border-[#111318] text-xs text-[#111318]"
              >
                {formError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-fullname" className="text-xs font-medium text-[#111318] block mb-1.5">
                  Nombre y apellido *
                </label>
                <input
                  id="booking-fullname"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8EAF0] focus:border-[#2457D6] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="booking-email" className="text-xs font-medium text-[#111318] block mb-1.5">
                  Email *
                </label>
                <input
                  id="booking-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8EAF0] focus:border-[#2457D6] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-business" className="text-xs font-medium text-[#111318] block mb-1.5">
                  Empresa *
                </label>
                <input
                  id="booking-business"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8EAF0] focus:border-[#2457D6] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="booking-web" className="text-xs font-medium text-[#111318] block mb-1.5">
                  Sitio web o canal
                </label>
                <input
                  id="booking-web"
                  type="text"
                  value={formData.websiteOrSocial}
                  onChange={(e) => setFormData({ ...formData, websiteOrSocial: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8EAF0] focus:border-[#2457D6] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="booking-service" className="text-xs font-medium text-[#111318] block mb-1.5">
                Área de interés principal
              </label>
              <select
                id="booking-service"
                value={formData.mainGoal}
                onChange={(e) => setFormData({ ...formData, mainGoal: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8EAF0] focus:border-[#2457D6] focus:outline-none"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.slug} value={s.shortTitle}>
                    {s.number} — {s.shortTitle}
                  </option>
                ))}
                <option value="Consulta general">Consulta general de crecimiento</option>
              </select>
            </div>

            <div className="pt-5 border-t border-[#E8EAF0] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[#656B76] hover:text-[#111318] cursor-pointer"
              >
                ← Volver
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-3 px-6 text-xs font-medium text-white bg-[#111318] hover:bg-[#2457D6] rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Confirmar solicitud ↗'}
              </button>
            </div>
          </form>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="pt-6 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2457D6]">
                SOLICITUD REGISTRADA
              </p>
              <h3 className="text-xl font-semibold text-[#111318]">
                Gracias, {formData.fullName}.
              </h3>
              <p className="text-sm text-[#656B76] leading-relaxed">
                Registramos tu solicitud para el <strong>{selectedDay}</strong> a las{' '}
                <strong>{selectedTime} hs</strong> sobre <strong>{formData.mainGoal}</strong>.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8EAF0] flex flex-col sm:flex-row gap-3 justify-end">
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
                className="px-5 py-2.5 text-xs font-medium text-white bg-[#2457D6] hover:bg-[#111318] rounded-lg transition-colors text-center"
              >
                Enviar resumen por WhatsApp ↗
              </a>
              <button
                type="button"
                onClick={resetAndClose}
                className="px-5 py-2.5 text-xs font-medium text-[#111318] border border-[#E8EAF0] hover:border-[#111318] rounded-lg transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
