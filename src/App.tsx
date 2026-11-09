/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ConversionHeader } from './components/ConversionHeader';
import { HeroSection } from './components/HeroSection';
import { OfferDescriptionSection } from './components/OfferDescriptionSection';
import { ForWhomSection } from './components/ForWhomSection';
import { HowItWorksOfferSection } from './components/HowItWorksOfferSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { PureFooter } from './components/PureFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white antialiased">
      {/* Top Header: Pure branding, NO navigation menu or distracting tabs */}
      <ConversionHeader />

      <main className="flex-1">
        {/* SECCIÓN 1: HERO SECTION (Visible on first screen without scroll) */}
        <HeroSection />

        {/* SECCIÓN 2: DESCRIPCIÓN DE LA OFERTA Y BENEFICIOS */}
        <OfferDescriptionSection />

        {/* SECCIÓN 3: ¿PARA QUIÉN ES ESTO? (Checklist visual rápido) */}
        <ForWhomSection />

        {/* SECCIÓN 4: CÓMO FUNCIONA / LA OFERTA IRRESISTIBLE (Urgencia & Corte Semanal) */}
        <HowItWorksOfferSection />

        {/* SECCIÓN 5: BLOQUE DE PRUEBA SOCIAL (Historias reales de transformación) */}
        <SocialProofSection />

        {/* SECCIÓN 6: PREGUNTAS FRECUENTES (FAQ Acordeón) */}
        <FaqSection />

        {/* SECCIÓN 7: LLAMADO A LA ACCIÓN FINAL (Cierre contundente) */}
        <FinalCtaSection />
      </main>

      {/* FOOTER: Avisos legales y descargo de responsabilidad */}
      <PureFooter />
    </div>
  );
}
