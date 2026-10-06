import React from 'react';

// Straight Razor (Navalha Clássica em Aço Cirúrgico)
export const RazorIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="razorBlade" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="35%" stopColor="#cbd5e1" />
        <stop offset="70%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
      <linearGradient id="razorHandle" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="50%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
    </defs>
    {/* Handle */}
    <path
      d="M8 38C12 42 24 40 32 30L26 24L8 38Z"
      fill="url(#razorHandle)"
      stroke="#64748b"
      strokeWidth="1.2"
    />
    <circle cx="26" cy="24" r="2" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
    {/* Blade Spine & Cutting Edge */}
    <path
      d="M26 24L38 12C41 9 44 10 44 13L40 24C36 27 30 27 26 24Z"
      fill="url(#razorBlade)"
      stroke="#e2e8f0"
      strokeWidth="1.2"
    />
    {/* Razor Edge Specular Line */}
    <path d="M42 12L39 23" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Scissors (Tesoura de Corte Fino)
export const ScissorsIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="steelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>
    </defs>
    {/* Finger Loop Left */}
    <circle cx="13" cy="35" r="6" stroke="url(#steelGrad)" strokeWidth="2.5" />
    {/* Finger Loop Right */}
    <circle cx="35" cy="35" r="6" stroke="url(#steelGrad)" strokeWidth="2.5" />
    {/* Blade 1 */}
    <path d="M17 31L32 10" stroke="url(#steelGrad)" strokeWidth="2.5" strokeLinecap="round" />
    {/* Blade 2 */}
    <path d="M31 31L16 10" stroke="url(#steelGrad)" strokeWidth="2.5" strokeLinecap="round" />
    {/* Pivot screw */}
    <circle cx="24" cy="22" r="2.5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1" />
  </svg>
);

// Hair Clipper (Máquina de Corte & Acabamento)
export const ClipperIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="clipperBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a8a" />
        <stop offset="60%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="clipperTeeth" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
    </defs>
    {/* Clipper Teeth / Head */}
    <path
      d="M17 7H31V12H17V7Z"
      fill="url(#clipperTeeth)"
      stroke="#64748b"
      strokeWidth="1"
    />
    <path d="M19 7V12M22 7V12M25 7V12M28 7V12" stroke="#475569" strokeWidth="1" />
    {/* Ergonomic Body */}
    <path
      d="M16 13C16 13 15 22 17 34C18 39 21 42 24 42C27 42 30 39 31 34C33 22 32 13 32 13H16Z"
      fill="url(#clipperBody)"
      stroke="#3b82f6"
      strokeWidth="1.2"
    />
    {/* Grip Inlay Accent */}
    <rect x="22" y="22" width="4" height="10" rx="2" fill="#38bdf8" opacity="0.8" />
    <circle cx="24" cy="37" r="1.5" fill="#60a5fa" />
  </svg>
);

// Barber Comb (Pente Profissional de Alinhamento)
export const CombIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="combGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f1f5f9" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
    </defs>
    {/* Comb Spine */}
    <rect x="8" y="14" width="32" height="6" rx="2" fill="url(#combGrad)" stroke="#cbd5e1" strokeWidth="0.8" />
    {/* Fine & Medium Teeth */}
    <g stroke="url(#combGrad)" strokeWidth="1.6" strokeLinecap="round">
      <line x1="11" y1="20" x2="11" y2="34" />
      <line x1="14" y1="20" x2="14" y2="34" />
      <line x1="17" y1="20" x2="17" y2="34" />
      <line x1="20" y1="20" x2="20" y2="34" />
      <line x1="23" y1="20" x2="23" y2="34" />
      <line x1="26" y1="20" x2="26" y2="34" />
      <line x1="29" y1="20" x2="29" y2="34" />
      <line x1="32" y1="20" x2="32" y2="34" />
      <line x1="35" y1="20" x2="35" y2="34" />
      <line x1="38" y1="20" x2="38" y2="34" />
    </g>
  </svg>
);

// Shaving Brush / Barboterapia (Toalha Quente & Barbeador)
export const ShavingBrushIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="brushBristles" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="40%" stopColor="#334155" />
        <stop offset="80%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
      <linearGradient id="brushHandle" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a8a" />
        <stop offset="50%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
    </defs>
    {/* Bristles Fan */}
    <path
      d="M16 23C14 16 17 8 24 8C31 8 34 16 32 23H16Z"
      fill="url(#brushBristles)"
      stroke="#cbd5e1"
      strokeWidth="1"
    />
    {/* Metallic Ferrule Ring */}
    <rect x="15" y="23" width="18" height="4" rx="1.5" fill="#e2e8f0" stroke="#64748b" strokeWidth="0.8" />
    {/* Handle Base */}
    <path
      d="M17 27C17 27 15 32 17 38C19 41 21 42 24 42C27 42 29 41 31 38C33 32 31 27 31 27H17Z"
      fill="url(#brushHandle)"
      stroke="#3b82f6"
      strokeWidth="1.2"
    />
    <circle cx="24" cy="35" r="2.5" fill="#38bdf8" opacity="0.6" />
  </svg>
);
