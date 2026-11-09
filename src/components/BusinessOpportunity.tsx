import React from 'react';
import { DollarSign, Users, Award, Shield, ArrowRight, Clock, Check } from 'lucide-react';

interface BusinessOpportunityProps {
  onOpenRegister: () => void;
}

export const BusinessOpportunity: React.FC<BusinessOpportunityProps> = ({ onOpenRegister }) => {
  const waysToEarn = [
    {
      title: '1. Bono de Inicio Rápido Semanal',
      desc: 'Gana $25 USD por cada persona que invites y se active ($50 total: $40 afiliación + $9.95 membresía). Recuperas el 50% de tu costo en tu primer invitado, con pagos hasta 10 niveles.',
      highlight: '50% de comisión directa',
    },
    {
      title: '2. Comisiones de Matriz 2x15',
      desc: 'El sistema organiza a los miembros en una matriz forzada 2x15. Gracias al derrame de tu equipo ascendente, puedes generar hasta $2,047.50 USD al mes incluso sin enrolar a nadie, o hasta $16,383.50 USD al mes con rangos.',
      highlight: 'Hasta $2,047.50 /mes',
    },
    {
      title: '3. Bonos de Igualación (Matching Bonuses)',
      desc: 'La fuente de riqueza más poderosa: cobra el 50% de las comisiones de matriz que ganen todas las personas que inscribas personalmente, más bonos adicionales por generaciones.',
      highlight: '50% de igualación',
    },
    {
      title: '4. Comisiones por Ventas Minoristas',
      desc: 'Gana el 50% de la diferencia entre el precio de miembro y el precio de venta minorista cuando clientes compren a través de tu enlace oficial.',
      highlight: '50% del diferencial',
    },
    {
      title: '5. Bonos por Volumen de Clientes',
      desc: 'Para quienes generen ventas al por menor a gran escala, la comisión del diferencial se incrementa hasta el 100%.',
      highlight: 'Hasta 100% de margen',
    },
    {
      title: '6. Fondo de Bonificación Diamante',
      desc: 'El 2% de las ventas totales de la compañía (membresías y productos a nivel mundial) se reparte mensualmente entre todos los líderes clasificados Diamante.',
      highlight: '2% del pastel mundial',
    },
  ];

  return (
    <section id="oportunidad" className="py-20 md:py-28 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wide text-emerald-400">
            OPORTUNIDAD DE NEGOCIO OPCIONAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            El sistema de afiliados más justo y lucrativo de la industria
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Sin tener que convencer a nadie de pagar sobreprecios. Promueves un ahorro real
            del 75% y recibes ingresos recurrentes con un sistema automatizado en línea.
          </p>
        </div>

        {/* 6 Ways to Earn Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {waysToEarn.map((way, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30 inline-block">
                  {way.highlight}
                </span>
                <h3 className="text-lg font-bold text-white">{way.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {way.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Powerline System Box */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-emerald-500/40 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>SISTEMA POWERLINE: CORTE SEMANAL CADA JUEVES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Asegura tu posición en la línea de poder antes del próximo corte
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Cuando te preregistras gratis, quedas posicionado en la Powerline global. Todas las personas que se registren en el mundo después de ti se colocan debajo en la línea. Si aseguras tu membresía antes del corte semanal del jueves a medianoche, bloqueas tu posición en la matriz definitiva.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  Prerregistro 100% gratuito y sin compromiso
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  Acceso inmediato a tu oficina virtual de prueba
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="w-full p-6 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3">
                <p className="text-xs text-slate-400">Activación de Afiliado Oficial:</p>
                <div className="text-3xl font-black text-white tabular-nums">
                  $40.00 <span className="text-xs font-normal text-slate-400">USD (pago único)</span>
                </div>
                <p className="text-xs text-emerald-400">
                  + $9.95 USD / mes de membresía club
                </p>
                <button
                  onClick={onOpenRegister}
                  className="w-full py-3.5 px-4 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Bloquear Mi Posición Ahora</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
