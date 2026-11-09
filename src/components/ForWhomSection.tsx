import React from 'react';
import { Check, X, ArrowRight, UserCheck } from 'lucide-react';
import { FOR_WHOM_ITEMS, AFFILIATE_LINK } from '../data/landingData';

export const ForWhomSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
            EVALUACIÓN DE PERFIL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            ¿Para quién es realmente la oportunidad de LiveGood?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Comprueba en 30 segundos si este modelo se alinea con tus metas personales, familiares y financieras.
          </p>
        </div>

        {/* 4 Persona / Situation Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FOR_WHOM_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-5 h-5 stroke-[3]" aria-hidden="true" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Not for / filter box */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 text-xs text-slate-400 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
            <X className="w-4 h-4" aria-hidden="true" />
          </div>
          <p className="leading-relaxed">
            <strong>Para quién NO es esto:</strong> No es para quienes buscan esquemas de enriquecimiento mágico sin trabajar, ni para quienes prefieren pagar un 80% más en marcas comerciales convencionales sin importarles la pureza biológica.
          </p>
        </div>

        {/* Direct CTA button */}
        <div className="text-center pt-2">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-xl shadow-xl shadow-emerald-500/30 uppercase tracking-wide focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          >
            <span>¡Me Identifico! Quiero Unirme Ahora</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
