import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Globe } from 'lucide-react';
import { AFFILIATE_LINK } from '../data/landingData';

export const PureFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-800/80 pb-8">
          <Logo size="md" />
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Envíos a 200+ países
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Certificación cGMP en EE.UU.
            </span>
          </div>
        </div>

        {/* FDA & Medical Disclaimer */}
        <div className="space-y-2 text-[11px] text-slate-400 leading-relaxed border-b border-slate-800/80 pb-8">
          <p>
            <strong>Aviso de la FDA y Declaración Médica:</strong> Las afirmaciones sobre los productos presentados en este sitio no han sido evaluadas por la Administración de Alimentos y Medicamentos de EE. UU. (FDA). Estos productos no están destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Consulte siempre a su médico antes de comenzar cualquier régimen de suplementación o cambio en su dieta.
          </p>
          <p>
            <strong>Descargo de Responsabilidad de Ingresos:</strong> Los resultados en el plan de afiliados varían según el esfuerzo personal, dedicación, habilidades y constancia. LiveGood no garantiza ningún nivel específico de ingresos o éxito financiero.
          </p>
          <p>
            <strong>Página Informativa de Afiliado Independiente:</strong> Este sitio web es promovido por un Afiliado Independiente de LiveGood con fines de orientación y difusión del modelo de membresía. Todas las transacciones se realizan directamente en los servidores oficiales de LiveGood en <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">livegood.com/JILSZO</a>.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs text-center sm:text-left">
          <p>© {new Date().getFullYear()} LiveGood Inc. Todos los derechos reservados.</p>
          <p className="text-slate-400">
            Enlace oficial de activación:{' '}
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">
              livegood.com/JILSZO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
