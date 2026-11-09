import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, ArrowRight, Zap, CheckCircle2, AlertCircle } from 'lucide-react';
import { OFFER_PILLARS, AFFILIATE_LINK } from '../data/landingData';
import { getTimeUntilNextCutoff, padZero, TimeLeft } from '../utils/timer';

export const HowItWorksOfferSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeUntilNextCutoff());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilNextCutoff());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
            LA OFERTA IRRESISTIBLE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            ¿Cómo funciona la membresía inteligente de LiveGood?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Un sistema simple, justo y diseñado para que ahorres desde tu primer pedido o generes ingresos sin barreras de entrada.
          </p>
        </div>

        {/* 4 Pillars of the Offer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFER_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4 relative group hover:border-emerald-500/40 transition-all"
            >
              <div className="space-y-3">
                <span className="text-2xl font-black text-emerald-400/50 block font-mono">
                  {pillar.number}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency & Scarcity Box with Live Dynamic Cutoff Countdown */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-emerald-500/40 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Clock className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>GATILLO DE URGENCIA: CORTE SEMANAL DE LA POWERLINE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                El reloj está corriendo para el corte de este jueves a medianoche
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Cada segundo, personas de todo el mundo se registran en LiveGood. Cuando te prerregistras gratis, quedas colocado en la <strong>Línea de Poder Global</strong>. Cada persona que entra después de ti se ubica debajo. 
                Si aseguras tu posición antes del corte semanal, bloqueas tu lugar definitivo en la matriz de derrame.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  Prerregistro 100% gratuito
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  Visualiza a quienes se unen después de ti
                </span>
              </div>
            </div>

            {/* Right: Countdown Cards & CTA */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-5">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                Tiempo restante para el próximo corte:
              </span>

              {/* 4-cell Countdown Timer */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-sm">
                <div className="p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums block">
                    {padZero(timeLeft.days)}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase">Días</span>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tabular-nums block">
                    {padZero(timeLeft.hours)}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase">Horas</span>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tabular-nums block">
                    {padZero(timeLeft.minutes)}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase">Min</span>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-teal-300 font-mono tabular-nums block">
                    {padZero(timeLeft.seconds)}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase">Seg</span>
                </div>
              </div>

              {/* Action Button strictly linking to AFFILIATE_LINK */}
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 px-6 text-sm font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 rounded-xl shadow-lg shadow-emerald-500/25 transition-all uppercase tracking-wide focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
              >
                Asegurar Mi Posición en la Powerline
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
