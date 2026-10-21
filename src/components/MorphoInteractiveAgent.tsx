'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, RefreshCw, CheckCircle2, AlertTriangle, Send } from 'lucide-react';
import { BusinessModel, GrowthChallenge, DiagnosticResult } from '../types';

interface MorphoInteractiveAgentProps {
  onOpenBooking: () => void;
}

const DIAGNOSTIC_DATABASE: Record<string, DiagnosticResult> = {
  'ecommerce-low_roas': {
    title: 'Desalineación Creativa & Saturación de Audiencias en Meta Ads',
    verdict: 'Tus campañas están sufriendo fatiga publicitaria por falta de variación de ganchos (hooks) y una estructura de pauta sobrefragmentada.',
    leakIdentified: 'Pérdida del 35% al 50% del presupuesto en impresiones a públicos fríos que no conectan con la oferta inicial.',
    potentialUpside: '+45% a +85% en facturación neta optimizando creativos y CAPI.',
    recommendedActions: [
      'Migrar a estructura Advantage+ simplificada (1 campaña CBO principal con testing modular de creativos).',
      'Desarrollar 6 ángulos de ganchos semanales (Dolor vs Beneficio vs Comparativa vs Prueba Social).',
      'Implementar Meta Conversions API (CAPI) server-side para recuperar el 20% de eventos perdidos por iOS.'
    ],
    keyMetric: 'ROAS proyectado: 4.5x - 6.0x'
  },
  'ecommerce-low_conversion': {
    title: 'Fricción en Ficha de Producto y Checkout',
    verdict: 'El tráfico llega a tu tienda, pero la propuesta de valor y las opciones de pago/envío generan dudas en el momento crítico de compra.',
    leakIdentified: 'Tasa de rebote superior al 68% en la página de producto y más del 70% de carritos abandonados sin recuperación.',
    potentialUpside: 'Aumento del 25% al 40% en facturación sin gastar un dólar extra en publicidad.',
    recommendedActions: [
      'Reestructurar fichas de producto con micro-videos explicativos, testimonios verificados y calculadora de envío visible.',
      'Configurar bundles y ofertas de compra recurrente para elevar el Ticket Promedio (AOV).',
      'Desplegar secuencia omnicanal de carritos abandonados: WhatsApp interactivo + 3 emails automatizados.'
    ],
    keyMetric: 'Tasa de conversión objetivo: 2.4% - 3.2%'
  },
  'ecommerce-retention': {
    title: 'Dependencia Excesiva de Tráfico Pago Sin Retención (LTV Bajo)',
    verdict: 'Estás pagando por cada venta como si fuera el primer cliente, descuidando la base de compradores existentes que ya confían en tu marca.',
    leakIdentified: 'Menos del 15% de recompras en los primeros 90 días tras la primera orden.',
    potentialUpside: '+30% de rentabilidad neta directa al bolsillo del negocio.',
    recommendedActions: [
      'Diseñar programa de recompra post-venta automatizado por WhatsApp con cupones de tiempo limitado.',
      'Segmentación de clientes VIP en email marketing (Klaviyo) según frecuencia y ticket histórico.',
      'Campañas de retargeting en Meta exclusivas para clientes con ofertas de venta cruzada.'
    ],
    keyMetric: 'Recompra objetivo a 90 días: > 28%'
  },
  'ecommerce-scale_bottleneck': {
    title: 'Pérdida de Margen al Incrementar Presupuesto Publicitario',
    verdict: 'El algoritmo agota las audiencias de fondo de embudo y no tienes un motor predecible de atracción de demanda fría a gran escala.',
    leakIdentified: 'El CAC se duplica cada vez que aumentas el presupuesto más de un 20%.',
    potentialUpside: 'Escalamiento sostenido de 2x a 3x en inversión manteniendo el ROAS rentable.',
    recommendedActions: [
      'Estrategia de escala horizontal (testing continuo de nuevos conceptos creativos) en lugar de solo vertical.',
      'Incorporar Google Ads (Performance Max + Search de marca y categoría) para absorber la demanda generada en Meta y TikTok.',
      'Diversificación de ofertas de entrada para reducir el costo de adquisición inicial.'
    ],
    keyMetric: 'Capacidad de escala: +150% inversión con ROAS > 3.8x'
  },
  'b2b-high_cpl': {
    title: 'Leads Poco Calificados & Mensaje Comercial Difuso',
    verdict: 'Estás atrayendo contactos que no tienen el presupuesto o el poder de decisión adecuado, desgastando a tu equipo de ventas.',
    leakIdentified: 'Más del 60% de los leads generados son descartados en la primera llamada de calificación.',
    potentialUpside: 'Reducción de hasta un 45% en el costo por reunión calificada (SQL).',
    recommendedActions: [
      'Implementar campañas de Google Search hiperenfocadas en términos de alta intención comercial B2B.',
      'Filtros de fricción estratégica en formularios (preguntas clave sobre tamaño de empresa y presupuesto).',
      'Nutrición automatizada de leads con casos de estudio antes de la primera reunión de ventas.'
    ],
    keyMetric: 'Costo por SQL reducido en 40%'
  },
  'b2b-low_conversion': {
    title: 'Ciclo de Venta Extenso Sin Automatización de Seguimiento',
    verdict: 'Las oportunidades se enfrían entre el primer contacto y la propuesta comercial por falta de un flujo de seguimiento sistemático.',
    leakIdentified: 'Pérdida de propuestas enviadas sin respuesta por falta de touchpoints estratégicos.',
    potentialUpside: '+50% en tasa de cierre de propuestas comerciales.',
    recommendedActions: [
      'Integrar CRM con automatizaciones de WhatsApp para confirmación inmediata de reuniones.',
      'Secuencia de reactivación de cotizaciones dormidas con contenido de valor y garantías comerciales.',
      'Páginas de aterrizaje dedicadas por vertical o industria con pruebas específicas.'
    ],
    keyMetric: 'Tasa de cierre de propuestas: > 35%'
  }
};

const DEFAULT_DIAGNOSTIC: DiagnosticResult = {
  title: 'Oportunidad de Optimización Integral de Embudo Comercial',
  verdict: 'Tu negocio cuenta con un producto o servicio validado, pero el sistema de adquisición y conversión opera de forma aislada, perdiendo margen en cada etapa.',
  leakIdentified: 'Fricción en la transición de prospecto a comprador por falta de ofertas dinámicas y seguimiento automatizado.',
  potentialUpside: '+40% a +70% en facturación neta en los primeros 60 a 90 días.',
  recommendedActions: [
    'Auditar y reestructurar la cuenta publicitaria con creativos nativos de alto impacto.',
    'Implementar tracking omnicanal para medir con precisión qué canal y anuncio genera las compras reales.',
    'Activar flujos automatizados de retención y recuperación inmediata de ventas.'
  ],
  keyMetric: 'Crecimiento de facturación estimado: +45%'
};

export const MorphoInteractiveAgent: React.FC<MorphoInteractiveAgentProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'chat'>('audit');

  // Audit state
  const [businessModel, setBusinessModel] = useState<BusinessModel>('ecommerce');
  const [adSpend, setAdSpend] = useState<string>('5k_20k');
  const [challenge, setChallenge] = useState<GrowthChallenge>('low_roas');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResult | null>(null);

  // Chat state
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'morpho'; text: string }>>([
    {
      sender: 'morpho',
      text: '¡Hola! Soy Morpho, tu agente de marketing. Contame: ¿qué vende tu empresa y cuál es el mayor desafío comercial que enfrentás hoy?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const runDiagnostic = () => {
    setIsAnalyzing(true);
    setDiagnosticResult(null);

    setTimeout(() => {
      const key = `${businessModel}-${challenge}`;
      const result = DIAGNOSTIC_DATABASE[key] || DEFAULT_DIAGNOSTIC;
      setDiagnosticResult(result);
      setIsAnalyzing(false);
    }, 800);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isThinking) return;

    const userMsg = text.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInputMessage('');
    setIsThinking(true);

    setTimeout(() => {
      let reply = '';
      const lower = userMsg.toLowerCase();

      if (lower.includes('roas') || lower.includes('meta') || lower.includes('pauta') || lower.includes('ads')) {
        reply = 'El secreto para sostener un ROAS alto en 2025 no está en trucos de segmentación ocultos, sino en la **diversificación de creativos**. Cuando testeás 4 ángulos diferentes (problema real, prueba social cruda, comparativa directa y demostración de producto), el algoritmo de Meta encuentra a los compradores más baratos de forma automática. Te sugiero además revisar si tenés CAPI server-side instalado para no perder eventos.';
      } else if (lower.includes('tiendanube') || lower.includes('ecommerce') || lower.includes('tienda') || lower.includes('shopify')) {
        reply = 'En e-commerce vemos constantemente el mismo error: gastar todo el presupuesto en llevar gente a la tienda y descuidar el **ticket promedio** y la **recuperación de carritos**. Si activás un flujo de WhatsApp a los 15 minutos del carrito abandonado y bundles de 2 o 3 productos con descuento progresivo, tu facturación puede subir un 30% con el mismo tráfico.';
      } else if (lower.includes('b2b') || lower.includes('leads') || lower.includes('servicios') || lower.includes('cpl')) {
        reply = 'En B2B, buscar leads baratos suele ser una trampa que llena a tu equipo de ventas de curiosos sin presupuesto. Nuestra recomendación: Google Search de altísima intención + formulario con 2 filtros de fricción estratégica (presupuesto y urgencia). Menos leads totales, pero el triple de ventas cerradas.';
      } else if (lower.includes('precio') || lower.includes('cuanto') || lower.includes('cuesta') || lower.includes('honorarios')) {
        reply = 'En Morpho estructuramos propuestas personalizadas según el tamaño y la etapa de tu negocio, con modelos basados en una base mensual ágil más incentivos por crecimiento. Cero contratos de permanencia obligatoria: trabajamos mes a mes para ganarnos la continuidad con resultados medibles. Podemos ver tu caso exacto en una sesión gratuita.';
      } else {
        reply = `Entendido perfectamente. Para ese escenario, lo más efectivo es realizar una **auditoría forense de embudo**: identificar exactamente en qué punto se están escapando los clientes potenciales y desplegar creativos y automatizaciones directas. ¿Te parece que agendemos una sesión estratégica de 30 minutos sin costo para armar un plan a medida?`;
      }

      setMessages((prev) => [...prev, { sender: 'morpho', text: reply }]);
      setIsThinking(false);
    }, 900);
  };

  return (
    <section id="agente-diagnostico" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#155EEF] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVIDAD EN TIEMPO REAL</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#101828] tracking-tight mb-4">
            Probá al Agente Morpho ahora mismo.
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Diagnostica los cuellos de botella de tu marketing y descubre oportunidades reales para vender más y reducir fricciones.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex p-1.5 mt-8 bg-slate-200/80 rounded-2xl">
            <button
              onClick={() => setActiveTab('audit')}
              className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'audit'
                  ? 'bg-white text-[#101828] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ⚡ Diagnóstico Guiado Exprés (60s)
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'chat'
                  ? 'bg-white text-[#101828] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              💬 Consultar a Morpho en Vivo
            </button>
          </div>
        </div>

        {/* Content Tab 1: Diagnostic Flow */}
        {activeTab === 'audit' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Form Configurator (Left) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider block mb-2">
                    1. Tu Modelo de Negocio
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'ecommerce', label: 'E-commerce & D2C' },
                      { id: 'b2b', label: 'B2B & Servicios' },
                      { id: 'infoproducts', label: 'EdTech & Academias' },
                      { id: 'retail', label: 'Empresas en Escala' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setBusinessModel(item.id as BusinessModel)}
                        className={`p-3 text-xs font-bold rounded-xl border text-left transition-all ${
                          businessModel === item.id
                            ? 'border-[#155EEF] bg-blue-50/50 text-[#155EEF] ring-1 ring-[#155EEF]'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider block mb-2">
                    2. Inversión Mensual en Publicidad
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: '1k_5k', label: '$1,000 - $5,000 USD' },
                      { id: '5k_20k', label: '$5,000 - $20,000 USD' },
                      { id: '20k_50k', label: '$20,000 - $50,000 USD' },
                      { id: '50k_plus', label: '+$50,000 USD' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setAdSpend(item.id)}
                        className={`p-3 text-xs font-bold rounded-xl border text-left transition-all ${
                          adSpend === item.id
                            ? 'border-[#155EEF] bg-blue-50/50 text-[#155EEF] ring-1 ring-[#155EEF]'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider block mb-2">
                    3. Mayor Desafío Actual
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'low_roas', label: 'Meta Ads: fatiga creativa y ROAS inestable' },
                      { id: 'scale_bottleneck', label: 'Business Intelligence: falta atribución y datos limpios' },
                      { id: 'retention', label: 'Campañas orgánicas y retención inexistentes' },
                      { id: 'low_conversion', label: 'Toma de decisiones sin números reales de margen' },
                      { id: 'high_cpl', label: 'Costo por lead (CPL) alto y baja asistencia/conversión' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setChallenge(item.id as GrowthChallenge)}
                        className={`w-full p-3 text-xs font-bold rounded-xl border text-left transition-all ${
                          challenge === item.id
                            ? 'border-[#155EEF] bg-blue-50/50 text-[#155EEF] ring-1 ring-[#155EEF]'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={runDiagnostic}
                  disabled={isAnalyzing}
                  className="w-full py-4 px-6 text-sm font-extrabold text-[#101828] bg-[#D7FF00] hover:bg-[#cbf400] active:scale-[0.98] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Analizando embudo con Morpho...</span>
                    </>
                  ) : (
                    <>
                      <span>GENERAR DIAGNÓSTICO EN VIVO</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Diagnostic Output (Right) */}
              <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 flex flex-col justify-between min-h-[440px]">
                {isAnalyzing ? (
                  <div className="flex flex-col items-center justify-center my-auto py-12 text-center">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-[#155EEF] animate-pulse">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <p className="font-bold text-[#101828] text-base mb-1">
                      El Agente Morpho está evaluando tus parámetros...
                    </p>
                    <p className="text-xs text-slate-500 max-w-sm">
                      Comparando con benchmarks de +150 campañas optimizadas en Google, Meta y plataformas aliadas.
                    </p>
                  </div>
                ) : diagnosticResult ? (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                      <div>
                        <span className="text-[11px] font-extrabold uppercase text-[#155EEF] tracking-wider block">
                          DIAGNÓSTICO ESTRATÉGICO
                        </span>
                        <h3 className="text-xl font-extrabold text-[#101828] mt-1">
                          {diagnosticResult.title}
                        </h3>
                      </div>
                      <div className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full shrink-0 border border-emerald-200">
                        {diagnosticResult.keyMetric}
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {diagnosticResult.verdict}
                    </p>

                    <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-1">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>Fuga crítica detectada en el embudo:</span>
                      </div>
                      <p className="text-xs text-amber-950 leading-relaxed">
                        {diagnosticResult.leakIdentified}
                      </p>
                      <div className="mt-2 text-xs font-bold text-emerald-800">
                        Potencial de crecimiento: {diagnosticResult.potentialUpside}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-extrabold uppercase text-slate-500 tracking-wider mb-2">
                        Plan de Acción Inmediato (3 Pasos):
                      </h4>
                      <ul className="space-y-2">
                        {diagnosticResult.recommendedActions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs text-slate-500 text-center sm:text-left">
                        Querés que ejecutemos este plan en tu empresa?
                      </div>
                      <button
                        onClick={onOpenBooking}
                        className="w-full sm:w-auto px-5 py-2.5 text-xs font-extrabold text-white bg-[#101828] hover:bg-[#155EEF] rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>AGENDAR SESIÓN GRATUITA</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center my-auto py-12 text-center">
                    <div className="w-14 h-14 rounded-full bg-blue-50 text-[#155EEF] flex items-center justify-center mb-4">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-[#101828] mb-1">
                      Descubrí las fugas de tu marketing
                    </h3>
                    <p className="text-xs text-slate-500 max-w-sm mb-6">
                      Selecciona tu modelo y tu mayor cuello de botella a la izquierda para generar una auditoría inmediata.
                    </p>
                    <button
                      onClick={runDiagnostic}
                      className="px-6 py-2.5 text-xs font-extrabold text-[#101828] bg-[#D7FF00] hover:bg-[#cbf400] rounded-xl shadow-sm cursor-pointer"
                    >
                      Ejecutar Diagnóstico Ahora
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* Content Tab 2: Live Chat with Morpho */}
        {activeTab === 'chat' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl max-w-3xl mx-auto overflow-hidden">
            
            {/* Chat Header */}
            <div className="p-4 sm:p-5 bg-[#101828] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#155EEF] flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <h3 className="font-extrabold text-sm tracking-tight flex items-center gap-2">
                    <span>Agente Humano Morpho</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    Estratega comercial en vivo · Respuesta inmediata
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="hidden sm:inline-flex px-3.5 py-1.5 text-xs font-bold bg-[#D7FF00] text-[#101828] rounded-lg hover:bg-white transition-colors"
              >
                Agendar Llamada
              </button>
            </div>

            {/* Quick Prompts Bar */}
            <div className="p-3 bg-slate-100 border-b border-slate-200 flex gap-2 overflow-x-auto text-xs no-scrollbar">
              <span className="text-slate-400 font-bold self-center text-[10px] uppercase shrink-0">Preguntas sugeridas:</span>
              {[
                '¿Cómo escalo Tiendanube sin perder ROAS?',
                '¿Cómo recupero carritos abandonados con WhatsApp?',
                '¿Qué conviene para B2B: Google o Meta?'
              ].map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-3 py-1 bg-white hover:bg-blue-50 hover:text-[#155EEF] text-slate-700 rounded-lg text-xs font-medium border border-slate-200 shrink-0 transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[420px] overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#155EEF] text-white rounded-br-sm'
                        : 'bg-slate-100 text-slate-800 rounded-bl-sm font-normal'
                    }`}
                  >
                    <div>
                      {msg.text.split(/(\*\*.*?\*\*)/g).map((part, partIdx) =>
                        part.startsWith('**') && part.endsWith('**') ? (
                          <strong key={partIdx}>{part.slice(2, -2)}</strong>
                        ) : (
                          <React.Fragment key={partIdx}>{part}</React.Fragment>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isThinking && (
                <div className="flex justify-start">
                  <div className="p-4 rounded-2xl bg-slate-100 text-xs text-slate-500 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#155EEF] animate-spin" />
                    <span>Morpho está pensando tu estrategia...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribí tu consulta sobre marketing o ventas..."
                  className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isThinking}
                  className="px-5 py-3 rounded-xl bg-[#101828] hover:bg-[#155EEF] disabled:opacity-40 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Enviar</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
