import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BookingSubmission } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_DAYS = [
  { dayName: 'Hoy', dateStr: '13 Octubre', isToday: true },
  { dayName: 'Mañana', dateStr: '14 Octubre', isToday: false },
  { dayName: 'Miércoles', dateStr: '15 Octubre', isToday: false },
  { dayName: 'Jueves', dateStr: '16 Octubre', isToday: false },
  { dayName: 'Viernes', dateStr: '17 Octubre', isToday: false }
];

const TIME_SLOTS = [
  '10:00 AM',
  '11:30 AM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
  '06:30 PM'
];

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDay, setSelectedDay] = useState(AVAILABLE_DAYS[1].dateStr);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[1]);

  const [formData, setFormData] = useState<Omit<BookingSubmission, 'date' | 'timeSlot'>>({
    fullName: '',
    email: '',
    businessName: '',
    websiteOrSocial: '',
    monthlyAdSpend: '$5k_20k',
    mainGoal: 'Escalar ventas con ROAS rentable'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 600);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-[#101828] lowercase tracking-tight">morpho</span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs font-bold text-[#155EEF] uppercase tracking-wider">Sesión Estratégica 1-a-1</span>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="px-6 pt-4 pb-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
            <span className={step >= 1 ? 'text-[#155EEF]' : ''}>1. Horario</span>
            <span className={step >= 2 ? 'text-[#155EEF]' : ''}>2. Datos del Negocio</span>
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
                Llamada de 30 minutos vía Google Meet con un estratega senior de Morpho.
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
                    <span className="text-xs font-bold block">{day.dateStr.split(' ')[0]}</span>
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
                Seleccionado: <strong className="text-slate-900">{selectedDay} a las {selectedTime}</strong>
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
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
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
            <div>
              <h3 className="text-xl font-extrabold text-[#101828] mb-1">
                Contanos sobre tu negocio
              </h3>
              <p className="text-xs text-slate-500">
                Así preparamos un análisis preliminar de tus métricas antes de ingresar a la llamada.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Tu Nombre y Apellido</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Marcos Rossi"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email de Trabajo</label>
                <input
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
                <label className="text-xs font-bold text-slate-700 block mb-1">Nombre de la Empresa / Marca</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Urban Store"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Sitio Web o Instagram</label>
                <input
                  type="text"
                  required
                  placeholder="tienda.com o @instagram"
                  value={formData.websiteOrSocial}
                  onChange={(e) => setFormData({ ...formData, websiteOrSocial: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Inversión mensual en pauta</label>
              <select
                value={formData.monthlyAdSpend}
                onChange={(e) => setFormData({ ...formData, monthlyAdSpend: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
              >
                <option value="under_1k">Menos de $1,000 USD / mes</option>
                <option value="1k_5k">$1,000 a $5,000 USD / mes</option>
                <option value="5k_20k">$5,000 a $20,000 USD / mes</option>
                <option value="20k_plus">Más de $20,000 USD / mes</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">¿Qué objetivo querés desbloquear?</label>
              <input
                type="text"
                placeholder="Ej: Aumentar el ROAS de Meta y recuperar carritos con WhatsApp"
                value={formData.mainGoal}
                onChange={(e) => setFormData({ ...formData, mainGoal: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
              />
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
                <span>{isSubmitting ? 'AGENDANDO...' : 'CONFIRMAR SESIÓN GRATUITA'}</span>
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
                ¡Sesión confirmada con éxito!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Reservamos tu espacio para el <strong>{selectedDay}</strong> a las <strong>{selectedTime}</strong>. Te enviamos la invitación con el link de Google Meet a <strong>{formData.email || 'tu correo'}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-left max-w-md mx-auto space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#155EEF]">
                <Sparkles className="w-4 h-4" />
                <span>¿Qué veremos en la llamada de 30 minutos?</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                <li>Diagnóstico en vivo de tus campañas activas</li>
                <li>Detección de fugas en la conversión de tu web</li>
                <li>Hoja de ruta concreta para los próximos 60 días</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
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
