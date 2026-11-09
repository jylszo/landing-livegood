import React from 'react';
import { TESTIMONIALS_DATA, AFFILIATE_LINK } from '../data/landingData';
import { Quote, ArrowRight, Activity, MapPin, DollarSign, Award } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header strictly formatted */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-xs font-bold text-emerald-400">
            <span>★ Historias reales de transformación</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            Consumidores inteligentes que construyeron un ingreso extra real
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Sin perseguir amigos ni almacenar inventarios en casa. Personas reales compartiendo una membresía que ahorra dinero.
          </p>
        </div>

        {/* 3-Column Testimonial Grid with exact specified rank colors and contents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6 relative group shadow-xl"
            >
              <div className="space-y-4">
                {/* Header with Rank Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-xs font-black uppercase px-2.5 py-1 rounded-md border tracking-wider ${t.rankColor}`}
                    >
                      Rango: {t.rank}
                    </span>
                  </div>
                  <Quote className="w-6 h-6 text-emerald-400/30 shrink-0" aria-hidden="true" />
                </div>

                {/* Before state */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-400">
                  <span className="font-bold text-slate-300 block mb-0.5">Antes:</span>
                  <span>{t.before}</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer & Income Verified */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                    <span>{t.location}</span>
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs flex items-center justify-between">
                  <span className="text-slate-400">Ingreso reportado:</span>
                  <span className="font-bold text-emerald-400 tabular-nums">
                    {t.income}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Activity Bar strictly specified */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-emerald-500/30 p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="text-xs sm:text-sm font-bold text-white">
              <span className="text-emerald-400 font-black">EN VIVO:</span> Nuevos miembros unidos en los últimos 60 minutos:{' '}
              <span className="text-emerald-300 font-black tabular-nums">+148 personas</span>
            </div>
          </div>

          {/* Country breakdown badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-medium">
              🇵🇪 Perú <strong className="text-emerald-400">+34</strong>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-medium">
              🇲🇽 México <strong className="text-emerald-400">+28</strong>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-medium">
              🇨🇴 Colombia <strong className="text-emerald-400">+19</strong>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-medium">
              🇨🇱 Chile <strong className="text-emerald-400">+15</strong>
            </span>
          </div>
        </div>

        {/* Action button strictly linking to AFFILIATE_LINK */}
        <div className="text-center pt-2">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-xl shadow-xl shadow-emerald-500/30 uppercase tracking-wide focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          >
            <span>Quiero Unirme al Equipo Ahora</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
