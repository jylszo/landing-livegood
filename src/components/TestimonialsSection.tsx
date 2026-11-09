import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wide text-emerald-400">
            TESTIMONIOS Y EXPERIENCIAS VERIFICADAS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Lo que dicen médicos, familias y profesionales
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Historias reales de personas que transformaron su salud y sus finanzas con el modelo LiveGood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-emerald-400/40" aria-hidden="true" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <div>
                  <h3 className="text-base font-bold text-white">{t.name}</h3>
                  <p className="text-xs text-slate-400">{t.role}</p>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>

                <div className="pt-1">
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/20 inline-block">
                    {t.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
