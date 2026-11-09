import React from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { CartItem, calculateSavings, formatCurrency, ANNUAL_MEMBERSHIP_COST } from '../utils/calculator';
import { Plus, Minus, Trash2, ArrowRight, Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react';

interface SavingsCalculatorProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onResetCart: () => void;
  onOpenRegister: () => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({
  cart,
  onUpdateQuantity,
  onResetCart,
  onOpenRegister,
}) => {
  // Convert PRODUCTS_DATA to format expected by calculator
  const productItems = PRODUCTS_DATA.map((p) => ({
    id: p.id,
    name: p.name,
    category: p.category,
    shortDesc: p.shortDesc,
    memberPrice: p.memberPrice,
    retailPrice: p.competitorPrice, // compare with equivalent market products
  }));

  const savings = calculateSavings(cart, productItems);
  const totalItemCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-semibold tracking-wide text-emerald-400">
            SIMULADOR INTERACTIVO EN TIEMPO REAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Calcula cuánto dinero ahorrarás este año
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Personaliza tu canasta mensual de suplementos y comprueba cómo la membresía de LiveGood
            se paga sola desde tu primer pedido.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Product Selection in Basket (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Tu Canasta Mensual</h3>
                  <p className="text-xs text-slate-400">
                    {totalItemCount} {totalItemCount === 1 ? 'producto seleccionado' : 'productos seleccionados'}
                  </p>
                </div>
              </div>

              {totalItemCount > 0 && (
                <button
                  onClick={onResetCart}
                  className="text-xs text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded px-2 py-1"
                >
                  <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Vaciar canasta</span>
                </button>
              )}
            </div>

            {/* List of items available */}
            <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
              {PRODUCTS_DATA.map((product) => {
                const cartEntry = cart.find((c) => c.productId === product.id);
                const qty = cartEntry ? cartEntry.quantity : 0;

                return (
                  <div
                    key={product.id}
                    className={`p-4 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                      qty > 0
                        ? 'bg-slate-900 border-emerald-500/40 shadow-sm'
                        : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white truncate">
                          {product.name}
                        </h4>
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30 shrink-0">
                          -{product.savingsPercentage}%
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="text-emerald-400 font-semibold tabular-nums">
                          {formatCurrency(product.memberPrice)}
                        </span>
                        <span>vs</span>
                        <span className="line-through tabular-nums">
                          {formatCurrency(product.competitorPrice)}
                        </span>
                        <span>({product.competitorBrand})</span>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(product.id, -1)}
                        disabled={qty === 0}
                        aria-label={`Reducir cantidad de ${product.name}`}
                        className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      >
                        <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>

                      <span className="w-6 text-center text-sm font-bold text-white tabular-nums">
                        {qty}
                      </span>

                      <button
                        onClick={() => onUpdateQuantity(product.id, 1)}
                        aria-label={`Aumentar cantidad de ${product.name}`}
                        className="w-8 h-8 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      >
                        <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Savings Metric Breakdown Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/40 p-6 sm:p-8 space-y-6 shadow-2xl shadow-emerald-950/30">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                Resumen de tu Economía Familiar
              </span>
              <h3 className="text-2xl font-bold text-white">
                Tu Ahorro Anual Proyectado
              </h3>
            </div>

            {/* Giant Big Number */}
            <div className="p-6 rounded-xl bg-slate-950/90 border border-emerald-500/30 text-center space-y-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider block">
                Ahorro Anual en Productos
              </span>
              <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 tabular-nums">
                {formatCurrency(savings.totalYearlySavings)}
              </p>
              <p className="text-xs text-emerald-400 font-medium">
                Equivale a un ahorro del {savings.percentageSaved}% en tu presupuesto
              </p>
            </div>

            {/* Breakdown lines */}
            <div className="space-y-3 text-sm pt-2">
              <div className="flex items-center justify-between text-slate-300">
                <span>Gasto mensual en marcas habituales:</span>
                <span className="font-semibold line-through text-slate-400 tabular-nums">
                  {formatCurrency(savings.totalRetail)} /mes
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>Gasto mensual con membresía LiveGood:</span>
                <span className="font-bold text-emerald-400 tabular-nums">
                  {formatCurrency(savings.totalMember)} /mes
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-300 pt-2 border-t border-slate-800">
                <span className="font-semibold text-white">Tu ahorro mensual limpio:</span>
                <span className="text-lg font-bold text-emerald-400 tabular-nums">
                  +{formatCurrency(savings.totalMonthlySavings)} /mes
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>Ahorro neto tras pagar membresía anual ($99.95/año):</span>
                </div>
                <p className="text-emerald-300 pl-5.5 text-sm font-extrabold tabular-nums">
                  {formatCurrency(savings.netAnnualSavingsWithMembership)} netos en tu bolsillo
                </p>
              </div>
            </div>

            {/* Conversion CTA */}
            <button
              onClick={onOpenRegister}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 rounded-xl shadow-lg shadow-emerald-500/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span>Asegurar este Ahorro y Unirme</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <p className="text-[11px] text-center text-slate-400">
              Sin permanencia. Cancela tu suscripción en 1 clic en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
