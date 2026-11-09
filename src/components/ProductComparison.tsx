import React, { useState } from 'react';
import { PRODUCTS_DATA, Product } from '../data/products';
import { Check, Plus, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { formatCurrency } from '../utils/calculator';

interface ProductComparisonProps {
  onAddToCart: (product: Product) => void;
  onOpenRegister: () => void;
}

export const ProductComparison: React.FC<ProductComparisonProps> = ({
  onAddToCart,
  onOpenRegister,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Productos' },
    { id: 'superalimentos', label: 'Superalimentos & Inmunidad' },
    { id: 'salud-diaria', label: 'Salud Diaria & Vitalidad' },
    { id: 'rendimiento', label: 'Sueño & Rendimiento' },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'superalimentos') {
      return (
        product.category.includes('Superalimentos') ||
        product.category.includes('Cardiovascular')
      );
    }
    if (selectedCategory === 'salud-diaria') {
      return (
        product.category.includes('Salud Diaria') ||
        product.category.includes('Celular') ||
        product.category.includes('Energía')
      );
    }
    if (selectedCategory === 'rendimiento') {
      return (
        product.category.includes('Sueño') ||
        product.category.includes('Equilibrio') ||
        product.category.includes('Rendimiento')
      );
    }
    return true;
  });

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <section id="productos" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="text-xs font-semibold tracking-wide text-emerald-400">
            TRANSPARENCIA TOTAL DE PRECIOS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Compara los precios de LiveGood frente a las marcas líderes
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Misma pureza biológica, mismos ingredientes patentados, pero sin los sobreprecios de marketing y cadenas de distribución.
          </p>
        </div>

        {/* Filter Controls (Segmented Control conforming to §1.A) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between p-6 relative group"
              >
                {/* Header of card: Unboxed Kicker + Badge */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="truncate">{product.category}</span>
                    <span className="font-bold text-emerald-400 text-[11px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      -{product.savingsPercentage}%
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Ingredients unboxed list */}
                  <div className="mb-6 pt-3 border-t border-slate-800/80">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Ingredientes Clave
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-300">
                      {product.highlightIngredients.map((ing, i) => (
                        <span key={i} className="text-slate-300">
                          {ing}
                          {i < product.highlightIngredients.length - 1 && (
                            <span className="text-slate-600 ml-2">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price Comparison Container */}
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">{product.competitorBrand}:</span>
                      <span className="text-slate-400 line-through tabular-nums font-semibold">
                        {formatCurrency(product.competitorPrice)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400">
                        Miembro LiveGood:
                      </span>
                      <span className="text-xl font-black text-emerald-400 tabular-nums">
                        {formatCurrency(product.memberPrice)}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Button to simulate in basket */}
                  <button
                    onClick={() => handleAdd(product)}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                      isAdded
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/60'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" aria-hidden="true" />
                        <span>¡Agregado a la Calculadora!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" aria-hidden="true" />
                        <span>Simular mi Ahorro</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Banner & Guarantee Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Garantía de Satisfacción 100% de 90 Días con Frasco Vacío
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Pruébalo durante 3 meses enteros. Si no quedas fascinado con los resultados, envías el frasco vacío y te reembolsamos tu dinero.
              </p>
            </div>
          </div>

          <a
            href="#calculadora"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Ver Calculadora de Ahorro</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
