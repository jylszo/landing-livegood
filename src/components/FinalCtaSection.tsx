import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Sparkles, Globe } from 'lucide-react';
import { AFFILIATE_LINK } from '../data/landingData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Background glow illumination */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/15 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-xs font-bold text-emerald-400">
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          <span>CIERRE DE OFERTA EXCLUSIVA · TU SALUD Y TU ECONOMÍA</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight text-balance">
          No dejes pasar la oportunidad de cuidar tu salud ahorrando hasta un 75%
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Por solo <strong>$9.95 USD al mes</strong> tienes acceso al club de nutrición más puro del planeta, o la opción de construir un ingreso recurrente sólido sin recompras forzadas.
        </p>

        {/* Benefits checklist recap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left text-xs sm:text-sm text-slate-300 pt-2">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>Hasta 75% de ahorro en cada suplemento prémium</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>Garantía total de 90 días con frasco vacío</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>Cero compras forzadas ni autoenvíos sorpresa</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>Posicionamiento inmediato en la Powerline global</span>
          </div>
        </div>

        {/* Giant Final CTA Button (strictly linking to AFFILIATE_LINK) */}
        <div className="pt-4 space-y-4">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-xl font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-2xl shadow-2xl shadow-emerald-500/30 uppercase tracking-wide focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          >
            <span>¡Sí, Quiero Asegurar Mi Posición en LiveGood Ahora!</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Conexión 100% segura con cifrado SSL
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Garantía de devolución total de 90 días
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Envíos a más de 200 países
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
