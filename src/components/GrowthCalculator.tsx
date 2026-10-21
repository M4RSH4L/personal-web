'use client';

import React, { useState } from 'react';
import { TrendingUp, ArrowRight, Zap } from 'lucide-react';

interface GrowthCalculatorProps {
  onOpenBooking: () => void;
}

export const GrowthCalculator: React.FC<GrowthCalculatorProps> = ({ onOpenBooking }) => {
  const [adSpend, setAdSpend] = useState<number>(4000);
  const [monthlyVisits, setMonthlyVisits] = useState<number>(25000);
  const [currentConversionRate, setCurrentConversionRate] = useState<number>(1.2);
  const [averageOrderValue, setAverageOrderValue] = useState<number>(55);

  // Calculations
  const currentOrders = Math.round(monthlyVisits * (currentConversionRate / 100));
  const currentRevenue = Math.round(currentOrders * averageOrderValue);
  const currentRoas = adSpend > 0 ? (currentRevenue / adSpend).toFixed(2) : '0';

  // Morpho Projection (conservative model based on CRO + better hooks + bundles)
  const improvedConversionRate = Math.min(3.8, currentConversionRate + 0.9);
  const improvedAov = Math.round(averageOrderValue * 1.22); // +22% AOV via bundles & cross-sells
  const projectedOrders = Math.round(monthlyVisits * (improvedConversionRate / 100));
  const projectedRevenue = Math.round(projectedOrders * improvedAov);
  const projectedRoas = adSpend > 0 ? (projectedRevenue / adSpend).toFixed(2) : '0';
  
  const additionalMonthlyRevenue = projectedRevenue - currentRevenue;
  const annualUpside = additionalMonthlyRevenue * 12;

  return (
    <section id="simulador" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#155EEF]" />
            <span>SIMULADOR DE IMPACTO COMERCIAL</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#101828] tracking-tight mb-4">
            ¿Cuánto dinero estás dejando sobre la mesa?
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Move los controles con los números reales de tu negocio y descubrí el potencial de facturación al eliminar fricciones en tu embudo.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Slider 1: Ad Spend */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Inversión Mensual en Publicidad
                  </label>
                  <span className="text-sm font-extrabold font-mono text-[#155EEF]">
                    ${adSpend.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="30000"
                  step="500"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#155EEF]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>$500</span>
                  <span>$15,000</span>
                  <span>$30,000+</span>
                </div>
              </div>

              {/* Slider 2: Monthly Traffic */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Visitas / Tráfico Web Mensual
                  </label>
                  <span className="text-sm font-extrabold font-mono text-[#155EEF]">
                    {monthlyVisits.toLocaleString()} visitas
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="120000"
                  step="2000"
                  value={monthlyVisits}
                  onChange={(e) => setMonthlyVisits(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#155EEF]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>2,000</span>
                  <span>60,000</span>
                  <span>120,000+</span>
                </div>
              </div>

              {/* Slider 3: Conversion Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Tasa de Conversión Actual
                  </label>
                  <span className="text-sm font-extrabold font-mono text-[#155EEF]">
                    {currentConversionRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.3"
                  max="3.5"
                  step="0.1"
                  value={currentConversionRate}
                  onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#155EEF]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>0.3%</span>
                  <span>1.8%</span>
                  <span>3.5%</span>
                </div>
              </div>

              {/* Slider 4: Average Order Value */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Ticket Promedio (AOV)
                  </label>
                  <span className="text-sm font-extrabold font-mono text-[#155EEF]">
                    ${averageOrderValue} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="250"
                  step="5"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#155EEF]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>$15</span>
                  <span>$120</span>
                  <span>$250</span>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 text-xs text-slate-500 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#155EEF] shrink-0" />
              <span>Cálculos calibrados con datos de más de 80 clientes en e-commerce y servicios.</span>
            </div>
          </div>

          {/* Results Comparison Column (Right) */}
          <div className="lg:col-span-6 bg-[#101828] text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-[#D7FF00] tracking-wider block">
                    POTENCIAL DE CRECIMIENTO
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Facturación Incremental
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#155EEF] text-white text-xs font-bold">
                  {projectedRoas}x ROAS Proyectado
                </div>
              </div>

              {/* Highlight Big Number */}
              <div className="mb-8">
                <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                  Ganancia mensual estimada sin aumentar pauta:
                </span>
                <div className="text-4xl sm:text-5xl font-black text-[#D7FF00] tracking-tight font-mono">
                  +${additionalMonthlyRevenue.toLocaleString()} <span className="text-2xl font-sans text-white">USD / mes</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Equivalente a <strong className="text-white">+${annualUpside.toLocaleString()} USD anuales</strong> en crecimiento comercial.
                </p>
              </div>

              {/* Side by Side Comparison Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                    Situación Actual
                  </span>
                  <div className="text-lg font-bold text-slate-200 font-mono">
                    ${currentRevenue.toLocaleString()} USD
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {currentOrders} compras · ROAS {currentRoas}x
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-blue-950/60 border border-[#155EEF]/50">
                  <span className="text-[10px] font-bold uppercase text-[#D7FF00] block mb-1">
                    Con Optimización Morpho
                  </span>
                  <div className="text-lg font-bold text-white font-mono">
                    ${projectedRevenue.toLocaleString()} USD
                  </div>
                  <div className="text-xs text-blue-200 mt-1">
                    {projectedOrders} compras · ROAS {projectedRoas}x
                  </div>
                </div>
              </div>

            </div>

            {/* CTA in Calculator */}
            <div>
              <button
                onClick={onOpenBooking}
                className="w-full py-4 px-6 text-sm font-extrabold text-[#101828] bg-[#D7FF00] hover:bg-[#cbf400] active:scale-[0.98] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VALIDAR ESTE NÚMERO EN MI NEGOCIO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Sesión de 30 minutos sin costo con un estratega senior de Morpho.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
