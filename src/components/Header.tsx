import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-slate-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single element Brand Zone */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
            aria-label="LiveGood - Inicio"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
            aria-label="Navegación principal"
          >
            <a
              href="#modelo"
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              El Modelo
            </a>
            <a
              href="#productos"
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Comparativa
            </a>
            <a
              href="#calculadora"
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Calculadora
            </a>
            <a
              href="#beneficios"
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Beneficios
            </a>
            <a
              href="#oportunidad"
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Oportunidad
            </a>
            <a
              href="#faq"
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Preguntas
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-lg shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span>Únete Ahora</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-300">
            <a
              href="#modelo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-emerald-400 transition-colors"
            >
              El Modelo Disruptivo
            </a>
            <a
              href="#productos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-emerald-400 transition-colors"
            >
              Comparativa de Precios
            </a>
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-emerald-400 transition-colors"
            >
              Calculadora de Ahorro
            </a>
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-emerald-400 transition-colors"
            >
              Beneficios Clave
            </a>
            <a
              href="#oportunidad"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-emerald-400 transition-colors"
            >
              Plan de Afiliados
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-emerald-400 transition-colors"
            >
              Preguntas Frecuentes
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md transition-colors"
            >
              <span>Asegurar Mi Posición Gratis</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
