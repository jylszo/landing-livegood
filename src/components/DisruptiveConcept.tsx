import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, Zap, Award, Layers } from 'lucide-react';
import { MODEL_COMPARISON_ROWS } from '../data/products';

interface DisruptiveConceptProps {
  onOpenRegister: () => void;
}

export const DisruptiveConcept: React.FC<DisruptiveConceptProps> = ({ onOpenRegister }) => {
  return (
    <section id="modelo" className="py-20 md:py-28 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wide text-emerald-400">
            EL MODELO DE NEGOCIO DISRUPTIVO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            ¿Por qué LiveGood está revolucionando la industria de la salud?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Durante décadas, las compañías de suplementos y redes de mercadeo inflaron los precios
            hasta un 1,000% solo para pagar cadenas interminables de intermediarios.
            LiveGood eliminó ese sobreprecio con un modelo transparente tipo club.
          </p>
        </div>

        {/* Visual Storytelling: The Shift Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
          {/* Card 1: Traditional MLM / Retail Model */}
          <div className="p-8 rounded-2xl bg-slate-950/70 border border-rose-900/40 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-rose-400 uppercase">
                  Modelo Antiguo & Tradicional
                </span>
                <span className="w-8 h-8 rounded-full bg-rose-950/80 text-rose-400 flex items-center justify-center">
                  <XCircle className="w-5 h-5" aria-hidden="true" />
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Precios inflados artificialmente para sostener comisiones
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p>
                    <strong>Costo real de fabricación: $8 - $10 USD</strong>, pero lo venden al público a <strong>$70 - $100 USD</strong>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p>
                    <strong>Recompras obligatorias mensuales ($100 - $200/mes)</strong> para no perder rangos o comisiones.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p>
                    <strong>Frustración y abandono</strong>: más del 85% de las personas abandonan en los primeros 90 días por costos insostenibles.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <p className="text-xs text-rose-400 font-medium">
                Resultado: Pocos ganan a costa del gasto de la mayoría.
              </p>
            </div>
          </div>

          {/* Card 2: The Disruptive LiveGood Model */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/40 shadow-xl shadow-emerald-950/20 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                  El Modelo Inteligente LiveGood
                </span>
                <span className="w-8 h-8 rounded-full bg-emerald-950/80 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Membresía club directo a fábrica: Calidad máxima a precio real
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p>
                    <strong>Mismo producto prémium por $9.95 - $18 USD</strong> directo de laboratorios certificados GMP en EE.UU.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p>
                    <strong>Cero compras forzadas</strong>: Solo pagas una membresía de <strong>$9.95/mes</strong> y compras solo lo que quieres cuando quieres.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p>
                    <strong>Retención sin precedentes</strong>: La gente ama los productos porque ahorra cientos de dólares cada año.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <p className="text-xs text-emerald-400 font-semibold">
                Resultado: Ahorro masivo del consumidor + Modelo ético y escalable.
              </p>
            </div>
          </div>
        </div>

        {/* The 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Layers className="w-5 h-5" aria-hidden="true" />
            </div>
            <h4 className="text-lg font-bold text-white">1. El Concepto Costco</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Al igual que compras en Costco para acceder a precios mayoristas, la suscripción mensual de LiveGood te da derecho a comprar suplementos a costo de fábrica.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Award className="w-5 h-5" aria-hidden="true" />
            </div>
            <h4 className="text-lg font-bold text-white">2. Calidad Grado Médico</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sin rellenos baratos. Ingredientes 100% orgánicos, pruebas de pureza en laboratorios de terceros y Certificados de Análisis públicos para cada lote.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Zap className="w-5 h-5" aria-hidden="true" />
            </div>
            <h4 className="text-lg font-bold text-white">3. Total Libertad</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sin autoenvíos ocultos ni contratos anuales forzosos. Si un mes no necesitas nada, no compras nada y no pierdes ningún derecho.
            </p>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden shadow-xl">
          <div className="p-6 sm:p-8 border-b border-slate-800">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Cuadro Comparativo Detallado
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Comprueba punto por punto por qué más de un millón de personas ya se han sumado.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-xs uppercase tracking-wider text-slate-400">
                  <th scope="col" className="p-4 sm:p-5 font-semibold">Aspecto Clave</th>
                  <th scope="col" className="p-4 sm:p-5 font-semibold text-rose-300">Modelo Tradicional</th>
                  <th scope="col" className="p-4 sm:p-5 font-semibold text-emerald-400">Modelo LiveGood</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {MODEL_COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white whitespace-nowrap align-top">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-300 align-top max-w-xs">
                      {row.traditional}
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-200 font-medium align-top max-w-sm bg-emerald-950/10">
                      {row.livegood}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-slate-900/60 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              ¿Listo para experimentar la diferencia y empezar a ahorrar en tus suplementos?
            </p>
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Asegurar mi Membresía</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
