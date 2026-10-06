import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Calendar3DIcon } from './icons/Custom3DIcons';

export const APPOINTMENT_URL =
  'https://sites.appbarber.com.br/arllonfernandesbarbeariao?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAachB_VDveTB78O-0_afcGQUGfpLSDUB7o7S-JQQWVRN1X78SdbSwG5JyTt0GQ_aem_lbWSWM9Xk6IuavenbLUKEA';

interface AppointmentButtonProps {
  className?: string;
  variant?: 'hero' | 'floating' | 'card';
}

export const AppointmentButton: React.FC<AppointmentButtonProps> = ({
  className = '',
  variant = 'hero',
}) => {
  return (
    <a
      href={APPOINTMENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      id="cta-agendar-principal"
      className={`group relative block w-full select-none overflow-hidden rounded-2xl transition-all duration-300 active:scale-[0.985] ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 35%, #1e3a8a 70%, #0f172a 100%)',
        boxShadow:
          '0 14px 35px -6px rgba(37, 99, 235, 0.45), 0 6px 12px -3px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.35)',
        border: '1px solid rgba(147, 197, 253, 0.35)',
      }}
    >
      {/* Ambient Radial Glow behind the button */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-sky-400/25 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Sweeping metallic specular shine line */}
      <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 animate-shimmer" />

      {/* Button Interior */}
      <div className="relative flex items-center justify-between p-4 sm:p-5 gap-3.5 z-10">
        {/* Left: 3D Metallic Calendar Icon */}
        <div className="relative shrink-0 flex items-center justify-center p-1.5 rounded-xl bg-gradient-to-b from-blue-900/60 to-slate-900/80 border border-blue-400/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)] group-hover:scale-105 group-hover:border-blue-300/50 transition-all duration-300">
          <Calendar3DIcon className="w-11 h-11 sm:w-12 sm:h-12" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse shadow-[0_0_8px_#34d399]" />
        </div>

        {/* Center: Text hierarchy */}
        <div className="flex-1 text-left min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="font-brand font-bold text-lg sm:text-xl text-white tracking-wider group-hover:text-blue-100 transition-colors uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              AGENDAR HORÁRIO
            </span>
            <Sparkles className="w-4 h-4 text-amber-300/90 shrink-0 hidden sm:inline-block" />
          </div>
          <p className="text-xs sm:text-sm text-blue-200/90 font-medium tracking-wide truncate">
            Agende seu horário online
          </p>
        </div>

        {/* Right: Chevron Action Cue in 3D badge */}
        <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/35 border border-blue-300/30 group-hover:border-blue-200/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:translate-x-0.5">
          <ChevronRight className="w-5 h-5 text-white group-hover:text-blue-100 transition-colors" />
        </div>
      </div>

      {/* Bottom metallic rim reflex */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
    </a>
  );
};
