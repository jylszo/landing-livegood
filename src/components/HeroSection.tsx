import React from 'react';
import { ArrowRight, ShieldCheck, DollarSign, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { AFFILIATE_LINK } from '../data/landingData';

export const HeroSection: React.FC = () => {
  const heroImage = '/src/assets/images/livegood_wellness_hero_1794174245259.jpg';

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-radial from-slate-900 via-slate-950 to-slate-950">
      {/* Background glow illumination */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-10 w-80 h-80 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Direct High-Conversion Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Direct Value Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
              <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>EL MODELO CLUB DISRUPTIVO EN SALUD Y NUTRICIÓN ORGÁNICA</span>
            </div>

            {/* Main Promise Headline with highlighted keywords */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
              ¿Y si pudieras cuidar tu salud{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300">
                ahorrando hasta un 75%
              </span>{' '}
              en productos prémium gracias al{' '}
              <span className="underline decoration-emerald-500/60 decoration-wavy decoration-2">
                modelo club inteligente
              </span>
              ?
            </h1>

            {/* Subtitle reinforcing transformation */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Imagina el modelo de suscripción de <strong>Costco o Amazon Prime</strong>, pero aplicado a la salud y bienestar. 
              Productos de grado farmacéutico directo de laboratorios en EE.UU. a tu puerta por solo <strong>$9.95 USD al mes</strong>. 
              <strong> Sin compras forzadas, sin autoenvíos obligatorios y sin intermediarios costosos.</strong>
            </p>

            {/* Giant Prominent Call To Action Button (linking strictly to AFFILIATE_LINK) */}
            <div className="pt-2 space-y-3">
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-5 text-base sm:text-lg font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-2xl shadow-xl shadow-emerald-500/30 text-center uppercase tracking-wide focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
              >
                <span>¡Quiero Asegurar Mi Posición Ahora!</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>

              <p className="text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Prerregistro 100% gratuito en la línea de poder global. Sin compromiso de pago.</span>
              </p>
            </div>

            {/* Micro-guarantee icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Garantía 90 días frasco vacío</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Sin recompras obligatorias</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Envíos directos a 200+ países</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup / Sales Anchor (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl shadow-black/60 group">
              <img
                src={heroImage}
                alt="Suplementos orgánicos prémium de LiveGood sobre mármol travertino"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[430px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />

              {/* Scrim for contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"
                aria-hidden="true"
              />

              {/* Floating Live Price Comparison Box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-emerald-500/30 shadow-2xl space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider">Ejemplo de Ahorro Directo</p>
                    <h2 className="text-sm sm:text-base font-extrabold text-white truncate">
                      BioActive Organic Super Greens
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950 border border-emerald-500/40 px-2.5 py-1 rounded-md shrink-0">
                    -82% AHORRO
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2.5 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Otras marcas líderes:</span>
                    <span className="text-slate-400 line-through text-sm font-semibold tabular-nums">$99.00 USD</span>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 block text-[11px] font-semibold">Miembro LiveGood:</span>
                    <span className="text-emerald-400 text-lg sm:text-xl font-black tabular-nums">$18.00 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
