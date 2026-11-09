import React, { useState } from 'react';
import {
  LeadFormData,
  validateLeadForm,
  ValidationResult,
} from '../utils/calculator';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Download,
  Lock,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface LeadCaptureSectionProps {
  onSuccessSubmit?: (data: LeadFormData) => void;
}

export const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({
  onSuccessSubmit,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    whatsapp: '',
    country: 'España',
    interest: 'both',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  const countries = [
    'España',
    'Estados Unidos',
    'México',
    'Colombia',
    'Perú',
    'Argentina',
    'Chile',
    'Ecuador',
    'Guatemala',
    'República Dominicana',
    'Costa Rica',
    'Panamá',
    'Bolivia',
    'Otro País (Envíos a 200+ países)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation: ValidationResult = validateLeadForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate instant secure processing
    setTimeout(() => {
      const code = `LG-${Math.floor(100000 + Math.random() * 900000)}`;
      setReservationCode(code);
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccessSubmit) {
        onSuccessSubmit(formData);
      }
    }, 600);
  };

  return (
    <section id="registro" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Glow effect */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!submitted ? (
          <div className="rounded-3xl bg-slate-900/80 border border-emerald-500/30 p-8 sm:p-12 shadow-2xl shadow-emerald-950/40">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-emerald-400">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>ACCESO EXCLUSIVO & PRERREGISTRO GRATIS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Asegura tu posición y recibe la guía completa de LiveGood
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Ingresa tus datos a continuación para reservar tu lugar en la Powerline global
                y descargar el catálogo completo de productos con precios mayoristas.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="Ej. Carlos Mendoza"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all ${
                      errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-400">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="tu-correo@ejemplo.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all ${
                      errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400">{errors.email}</p>
                  )}
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="block text-xs font-semibold text-slate-300">
                    WhatsApp con Código de País *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => {
                      setFormData({ ...formData, whatsapp: e.target.value });
                      if (errors.whatsapp) setErrors({ ...errors, whatsapp: '' });
                    }}
                    placeholder="+34 600 000 000 / +57 300 000 0000"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all ${
                      errors.whatsapp ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.whatsapp && (
                    <p className="text-xs text-rose-400">{errors.whatsapp}</p>
                  )}
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <label htmlFor="country" className="block text-xs font-semibold text-slate-300">
                    País de Residencia *
                  </label>
                  <select
                    id="country"
                    value={formData.country}
                    onChange={(e) => {
                      setFormData({ ...formData, country: e.target.value });
                      if (errors.country) setErrors({ ...errors, country: '' });
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                  >
                    {countries.map((c, i) => (
                      <option key={i} value={c} className="bg-slate-950 text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="text-xs text-rose-400">{errors.country}</p>
                  )}
                </div>
              </div>

              {/* Interest Selector */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-semibold text-slate-300">
                  ¿Cuál es tu objetivo principal con LiveGood?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, interest: 'products' })}
                    className={`p-3.5 rounded-xl border text-left text-xs transition-all ${
                      formData.interest === 'products'
                        ? 'bg-emerald-950/60 border-emerald-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold block text-sm mb-1">Ahorrar en Salud</span>
                    <span className="text-slate-400 text-[11px] block">
                      Consumir suplementos prémium a costo de fábrica.
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, interest: 'business' })}
                    className={`p-3.5 rounded-xl border text-left text-xs transition-all ${
                      formData.interest === 'business'
                        ? 'bg-emerald-950/60 border-emerald-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold block text-sm mb-1">Crear Negocio</span>
                    <span className="text-slate-400 text-[11px] block">
                      Generar ingresos mensuales con el plan de afiliados.
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, interest: 'both' })}
                    className={`p-3.5 rounded-xl border text-left text-xs transition-all ${
                      formData.interest === 'both'
                        ? 'bg-emerald-950/60 border-emerald-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold block text-sm mb-1">Ambos (Recomendado)</span>
                    <span className="text-slate-400 text-[11px] block">
                      Cuidar mi salud y generar ingresos recurrentes.
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-4 px-8 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 disabled:opacity-50 rounded-xl shadow-xl shadow-emerald-500/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                {isSubmitting ? (
                  <span>Procesando tu Reserva...</span>
                ) : (
                  <>
                    <span>Bloquear Mi Posición Gratis & Recibir Guía</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 text-center">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  Tus datos están 100% protegidos y seguros.
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  Prerregistro inmediato sin compromiso de pago.
                </span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State / Digital Reservation Pass */
          <div className="rounded-3xl bg-slate-900 border border-emerald-400 p-8 sm:p-12 text-center space-y-6 shadow-2xl shadow-emerald-950/50 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                ¡RESERVA CONFIRMADA EN LA POWERLINE GLOBAL!
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Bienvenido, {formData.fullName}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                Tu posición temporal ha sido bloqueada satisfactoriamente. Te hemos enviado un correo de confirmación a <strong>{formData.email}</strong> y un mensaje a tu WhatsApp con los accesos directos.
              </p>
            </div>

            {/* Digital Pass Box */}
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400">Código de Reserva:</span>
                <span className="text-sm font-mono font-bold text-emerald-400 tracking-wider">
                  {reservationCode}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Estado de la posición:</span>
                <span className="font-semibold text-emerald-300">Pre-inscrito Activo</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">País registrado:</span>
                <span className="font-semibold text-white">{formData.country}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Próximo corte de línea:</span>
                <span className="font-semibold text-amber-400">Jueves a Medianoche (EST)</span>
              </div>
            </div>

            {/* Actions for User */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="https://www.livegoodtour.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md"
              >
                <span>Acceder a Mi Oficina Virtual Temporal</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    whatsapp: '',
                    country: 'España',
                    interest: 'both',
                  });
                }}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-700"
              >
                Registrar a otra persona
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
