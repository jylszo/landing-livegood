import React, { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const chapters = [
    { title: '01. La crisis de precios en la salud', time: '0:00' },
    { title: '02. El modelo club tipo Costco', time: '1:15' },
    { title: '03. Demostración de productos y ahorro', time: '2:30' },
    { title: '04. Sistema Powerline y cómo empezar', time: '4:10' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 id="video-modal-title" className="text-sm font-bold text-white">
              Presentación Oficial: El Modelo Disruptivo de LiveGood
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar video"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Video Area Container */}
        <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden group">
          {/* Simulated Video Frame with rich visuals */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950/40" />

          {/* Video Poster Image Background */}
          <img
            src="/src/assets/images/livegood_wellness_hero_1794174245259.jpg"
            alt="Presentación de video LiveGood"
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isPlaying ? 'opacity-30' : 'opacity-60'
            }`}
          />

          {/* Central Animated Content in Video */}
          <div className="relative z-10 text-center px-6 max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs font-semibold text-emerald-400">
              <span>Capítulo activo: {chapters[activeChapter].title}</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ¿Cómo ahorra un 75% un miembro de LiveGood?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Eliminamos a los intermediarios costosos. Directo de laboratorios cGMP en EE.UU. a tu hogar.
            </p>

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full bg-emerald-400 text-slate-950 hover:bg-emerald-300 flex items-center justify-center shadow-lg shadow-emerald-500/40 transition-transform active:scale-95"
                aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-current" aria-hidden="true" />
                ) : (
                  <Play className="w-6 h-6 fill-current ml-0.5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Video Control Bar at bottom of screen */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-between text-xs text-white z-20">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-emerald-400"
                aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current" />
                )}
              </button>
              <span className="font-mono text-slate-300 text-[11px]">
                {isPlaying ? '02:45 / 05:20' : '00:00 / 05:20'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-slate-300" aria-hidden="true" />
              <span className="text-[11px] text-slate-400 hidden sm:inline">Audio HD</span>
            </div>
          </div>
        </div>

        {/* Chapters & Takeaways */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {chapters.map((chap, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-2.5 rounded-lg text-left text-xs transition-all ${
                  activeChapter === idx
                    ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-semibold'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="block truncate">{chap.title}</span>
                <span className="text-[10px] text-slate-500 font-mono">{chap.time}</span>
              </button>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Garantía de 90 días con botella vacía para cada producto.</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Asegurar Mi Posición Ahora</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
