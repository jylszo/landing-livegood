import React from 'react';
import { ArrowRight, Play, ShieldCheck, Globe, DollarSign, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onOpenVideo }) => {
  const heroImage = '/src/assets/images/livegood_wellness_hero_1794174245259.jpg';

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial from-slate-900 via-slate-950 to-slate-950">
      {/* Background subtle light effects */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & High Conversion CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-400">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>EL MODELO CLUB DISRUPTIVO EN SALUD Y BIENESTAR</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">MEMBRESÍA INTELIGENTE</span>
            </div>

            {/* Impact Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              ¿Y si pudieras cuidar tu salud{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300">
                ahorrando hasta un 75%
              </span>{' '}
              en productos prémium?
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Imagina el modelo de suscripción de <strong>Costco o Amazon Prime</strong>,
              pero aplicado a la nutrición celular orgánica de grado farmacéutico.
              Sin intermediarios, sin recompras forzadas y directo del laboratorio a tu hogar por solo <strong>$9.95 al mes</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-xl shadow-lg shadow-emerald-500/25 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Conoce el Modelo y Únete</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-xl transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" aria-hidden="true" />
                </div>
                <span>Ver Video Explicativo (5 min)</span>
              </button>
            </div>

            {/* Micro-guarantee text */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                Garantía 90 días botella vacía
              </span>
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                Sin compras mínimas obligatorias
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                Envíos a 200+ países
              </span>
            </div>
          </div>

          {/* Right Column: Visual Focal Anchor & Live Proof Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl shadow-black/50 group">
              <img
                src={heroImage}
                alt="Suplementos orgánicos prémium de LiveGood sobre superficie de mármol travertino"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />

              {/* Gradient scrim for legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"
                aria-hidden="true"
              />

              {/* Floating Overlay Comparison Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <p className="text-xs text-slate-400">Ejemplo de Ahorro Directo</p>
                    <h2 className="text-sm font-bold text-white">Super Greens Orgánico Certificado</h2>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded">
                    -82% AHORRO
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Empresas habituales:</span>
                    <span className="text-slate-400 line-through text-sm font-semibold tabular-nums">$99.00 USD</span>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 block text-[11px] font-semibold">Miembro LiveGood:</span>
                    <span className="text-emerald-400 text-lg font-extrabold tabular-nums">$18.00 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof of scale KPI Strip (Full-width row below hero split) */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
              1,000,000+
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Miembros activos a nivel mundial
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight tabular-nums">
              $9.95 <span className="text-base text-slate-400 font-normal">/mes</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Membresía club accesible sin permanencia
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
              Hasta 75%
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Ahorro real frente a marcas tradicionales
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight tabular-nums">
              90 Días
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Garantía con frasco vacío sin preguntas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
