import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { AFFILIATE_LINK } from '../data/landingData';

export const ConversionHeader: React.FC = () => {
  return (
    <header className="w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50">
      {/* Top micro-notification banner */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-emerald-900/60 to-slate-950 text-emerald-300 text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium border-b border-emerald-500/20 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>★ PRERREGISTRO ABIERTO · CORTE SEMANAL DE LA POWERLINE EN CURSO</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand logo only, NO NAVIGATION LINKS to prevent distraction */}
        <div className="flex items-center gap-3">
          <Logo size="md" />
        </div>

        {/* High-intent direct CTA button */}
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-lg shadow-md shadow-emerald-500/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <span>Asegurar Posición</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
};
