import React from 'react';
import { ShieldCheck, Truck, Ban, Award, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface BenefitsGridProps {
  onOpenRegister: () => void;
}

export const BenefitsGrid: React.FC<BenefitsGridProps> = ({ onOpenRegister }) => {
  const superfoodsImg = '/src/assets/images/livegood_superfoods_showcase_1794174245789.jpg';
  const lifestyleImg = '/src/assets/images/livegood_global_lifestyle_1794174245873.jpg';

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wide text-emerald-400">
            VENTAJAS Y DIFERENCIALES ÚNICOS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Todo lo que hace a LiveGood la opción más inteligente
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Diseñado para que cuides tu cuerpo con la nutrición más limpia del planeta mientras
            proteges la economía de tu hogar.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Bento Card 1: Pureza & Certificaciones (Span 2) */}
          <div className="md:col-span-2 rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden flex flex-col sm:flex-row items-stretch group">
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Award className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Ingredientes Orgánicos y Grado Farmacéutico
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Fórmulas desarrolladas por expertos médicos y farmacólogos. Sin rellenos baratos ni colorantes artificiales. Cada lote cuenta con un <strong>Certificado de Análisis (COA)</strong> público de laboratorio independiente para garantizar potencia y pureza absoluta.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  Instalaciones cGMP en EE.UU.
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  Non-GMO & Libre de Gluten
                </span>
              </div>
            </div>

            <div className="sm:w-64 relative shrink-0 min-h-[220px]">
              <img
                src={superfoodsImg}
                alt="Ingredientes orgánicos y superalimentos certificados"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Bento Card 2: Sin Recompras Forzadas (Span 1) */}
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Ban className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Cero Compras Forzadas ni Cuotas Ocultas
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Olvídate de autoenvíos involuntarios que vacían tu tarjeta. En LiveGood tú tienes el control absoluto: compra cuando necesites reponer tus vitaminas y no gastes un solo dólar de más.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-emerald-400 font-semibold">
              Libertad total: solo $9.95/mes sin contratos.
            </div>
          </div>

          {/* Bento Card 3: Garantía 90 Días Botella Vacía (Span 1) */}
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Garantía 90 Días "Botella Vacía"
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Usa el producto hasta la última gota. Si después de 3 meses sientes que no transformó tu energía y bienestar, envías el frasco vacío y se te reembolsa el 100% del importe. Cero riesgo para ti.
              </p>
            </div>

            <div className="text-xs text-slate-400">
              100% de confianza en nuestras fórmulas.
            </div>
          </div>

          {/* Bento Card 4: Oportunidad Global y Estilo de Vida (Span 2) */}
          <div className="md:col-span-2 rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden flex flex-col sm:flex-row items-stretch group">
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Oportunidad Global de Ingresos Desde Casa
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ¿Quieres generar ingresos compartiendo un producto que la gente genuinamente necesita y ahorra dinero? Con un único pago de activación de $40 USD te conviertes en afiliado y accedes a un sistema digital automatizado con matriz forzada 2x15 y 6 formas de ingresos.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenRegister}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span>Conocer detalles del plan de afiliados</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <div className="sm:w-64 relative shrink-0 min-h-[220px]">
              <img
                src={lifestyleImg}
                alt="Estilo de vida saludable y emprendimiento digital"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Bento Card 5: Logística Mundial a 200+ Países (Full row span 3) */}
          <div className="md:col-span-3 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Infraestructura Logística y Envíos a Más de 200 Países
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Despachos rápidos con rastreo satelital desde centros logísticos en Estados Unidos directamente a tu puerta en Europa, Latinoamérica, Norteamérica y Asia.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenRegister}
              className="px-6 py-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
