import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Globe, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              LiveGood es la empresa de nutrición y bienestar de más rápido crecimiento en el mundo.
              Nuestra misión es ayudar a las personas a estar saludables y mantenerse saludables sin tener que gastar una fortuna en productos sobrevalorados.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                Presencia en más de 200 países
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                Certificación cGMP en EE.UU.
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#modelo" className="hover:text-emerald-400 transition-colors">
                  El Modelo Disruptivo
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-emerald-400 transition-colors">
                  Comparativa de Precios
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-emerald-400 transition-colors">
                  Calculadora de Ahorro
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-emerald-400 transition-colors">
                  Beneficios y Calidad
                </a>
              </li>
              <li>
                <a href="#oportunidad" className="hover:text-emerald-400 transition-colors">
                  Plan de Afiliados
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Guarantee & Transparency (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Garantía de Frasco Vacío
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Prueba cualquier producto durante 90 días completos. Si por cualquier motivo no estás 100% satisfecho, simplemente envía la botella vacía y te devolveremos el 100% de tu dinero.
            </p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              Soporte al cliente oficial disponible en múltiples idiomas: support@livegood.com
            </div>
          </div>
        </div>

        {/* FDA & Medical Disclaimer */}
        <div className="py-8 border-b border-slate-800/80 space-y-2 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong>Aviso de la FDA y Declaración Médica:</strong> Las afirmaciones sobre los productos presentados en este sitio no han sido evaluadas por la Administración de Alimentos y Medicamentos de EE. UU. (FDA). Estos productos no están destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Consulte siempre a su médico antes de comenzar cualquier régimen de suplementación o cambio en su dieta.
          </p>
          <p>
            <strong>Descargo de Responsabilidad de Ingresos:</strong> Los resultados en el plan de afiliados varían según el esfuerzo personal, dedicación, habilidades y constancia. LiveGood no garantiza ningún nivel específico de ingresos o éxito financiero.
          </p>
        </div>

        {/* Copyright & Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} LiveGood Inc. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Términos de Servicio
            </span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Política de Privacidad
            </span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Certificados de Análisis (COA)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
