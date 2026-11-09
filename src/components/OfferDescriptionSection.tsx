import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { formatCurrency } from '../utils/calculator';
import { AFFILIATE_LINK } from '../data/landingData';

export const OfferDescriptionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
            DESCRIPCIÓN DE LA OFERTA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            ¿Qué es exactamente LiveGood y por qué está cambiando las reglas del juego?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            LiveGood es un <strong>club de compras mayoristas exclusivo de salud y bienestar</strong>. 
            En lugar de inflar los precios de los suplementos entre 500% y 1,000% para pagar comisiones abusivas a intermediarios, 
            LiveGood los distribuye directamente de fábrica a sus miembros a precio de costo con hasta un <strong>75% de ahorro</strong>.
          </p>
        </div>

        {/* Side-by-Side Model Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Old Traditional Model Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-950 border border-rose-900/40 relative flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-rose-400 uppercase">
                  El Modelo Tradicional
                </span>
                <XCircle className="w-6 h-6 text-rose-500" aria-hidden="true" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Precios inflados artificialmente y consumo forzoso
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p>
                    <strong>Costo de fabricación $8 USD</strong> vendido a <strong>$70 - $100 USD</strong> para pagar comisiones a múltiples intermediarios.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p>
                    <strong>Autoenvío mensual obligatorio ($100 - $200 USD)</strong> bajo amenaza de perder tu cuenta, descuento o comisiones acumuladas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p>
                    <strong>Garajes llenos de cajas</strong> y más del 85% de las personas renunciando por no poder sostener los gastos.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-rose-400 font-semibold">
              Un sistema obsoleto donde el consumidor final paga todos los sobrecostos.
            </div>
          </div>

          {/* LiveGood Disruptive Model Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/50 shadow-2xl shadow-emerald-950/30 relative flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
                  La Revolución LiveGood
                </span>
                <CheckCircle2 className="w-6 h-6 text-emerald-400" aria-hidden="true" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Membresía club directo a fábrica sin intermediarios
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p>
                    <strong>Misma calidad prémium por solo $9.95 - $18 USD</strong> directo de laboratorios certificados cGMP en EE.UU.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p>
                    <strong>Sin compras mínimas obligatorias</strong>: Cuota de club de <strong>$9.95/mes</strong> y compras solo lo que necesitas cuando quieres.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p>
                    <strong>Retención superior al 85%</strong>: Miembros felices porque ahorran cientos de dólares reales mes tras mes.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-emerald-300 font-semibold flex items-center justify-between">
              <span>Ahorro real + Productos de máxima biodisponibilidad.</span>
            </div>
          </div>
        </div>

        {/* Flagship Price Comparison Snapshot */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Comprueba el Ahorro Real en Nuestro Catálogo
            </h3>
            <p className="text-sm text-slate-400">
              Mismos ingredientes orgánicos certificados, sin el markup comercial abusivo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS_DATA.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-400">{product.category}</span>
                    <span className="font-extrabold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      -{product.savingsPercentage}%
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {product.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {product.keyBenefit}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">{product.competitorBrand}:</span>
                    <span className="line-through text-slate-400 font-semibold tabular-nums">
                      {formatCurrency(product.competitorPrice)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                    <span className="font-bold text-emerald-400">Precio Miembro:</span>
                    <span className="text-lg font-black text-emerald-400 tabular-nums">
                      {formatCurrency(product.memberPrice)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-Page Call To Action Button (linking strictly to AFFILIATE_LINK) */}
        <div className="text-center pt-4">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-xl shadow-xl shadow-emerald-500/30 uppercase tracking-wide focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          >
            <span>Ver Catálogo Completo & Reservar Posición</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <p className="text-xs text-slate-400 mt-3">
            Acceso instantáneo al sitio oficial con garantía de 90 días con botella vacía.
          </p>
        </div>
      </div>
    </section>
  );
};
