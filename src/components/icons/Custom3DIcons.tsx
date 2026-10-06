import React from 'react';

// 3D Metallic Calendar Icon with relief, bezel, and blue jewel accents
export const Calendar3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_8px_16px_rgba(37,99,235,0.4)]`}
  >
    <defs>
      {/* Outer metallic chrome gradient */}
      <linearGradient id="calBezelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="25%" stopColor="#94a3b8" />
        <stop offset="50%" stopColor="#e2e8f0" />
        <stop offset="75%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>

      {/* Deep blue metallic body gradient */}
      <linearGradient id="calBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a8a" />
        <stop offset="40%" stopColor="#1e40af" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>

      {/* Header bar rich cobalt gradient */}
      <linearGradient id="calHeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>

      {/* Ring silver metallic */}
      <linearGradient id="calRingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="40%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>

      {/* Date grid glow */}
      <linearGradient id="calGridGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>

    {/* Drop shadow plate */}
    <rect x="6" y="10" width="52" height="48" rx="14" fill="#020617" opacity="0.6" />

    {/* Metallic Bezel */}
    <rect x="6" y="9" width="52" height="48" rx="13" fill="url(#calBezelGrad)" />

    {/* Inner Body with 3D Depth */}
    <rect x="8" y="11" width="48" height="44" rx="11" fill="url(#calBodyGrad)" />

    {/* Calendar Top Banner */}
    <path
      d="M8 20C8 14.4772 12.4772 11 18 11H46C51.5228 11 56 14.4772 56 20V23H8V20Z"
      fill="url(#calHeaderGrad)"
    />

    {/* Top specular highlight edge */}
    <path
      d="M18 11H46C51 11 55 14 55.8 18H8.2C9 14 13 11 18 11Z"
      fill="#ffffff"
      opacity="0.35"
    />

    {/* Metallic Binding Rings */}
    <g>
      {/* Left Ring */}
      <rect x="18" y="4" width="5" height="12" rx="2.5" fill="url(#calRingGrad)" />
      <rect x="19" y="5" width="2" height="10" rx="1" fill="#ffffff" opacity="0.8" />
      
      {/* Center Ring */}
      <rect x="29.5" y="4" width="5" height="12" rx="2.5" fill="url(#calRingGrad)" />
      <rect x="30.5" y="5" width="2" height="10" rx="1" fill="#ffffff" opacity="0.8" />

      {/* Right Ring */}
      <rect x="41" y="4" width="5" height="12" rx="2.5" fill="url(#calRingGrad)" />
      <rect x="42" y="5" width="2" height="10" rx="1" fill="#ffffff" opacity="0.8" />
    </g>

    {/* Calendar Date Dots / Grid Cells in Embossed 3D */}
    <g opacity="0.95">
      {/* Row 1 */}
      <circle cx="18" cy="30" r="2.8" fill="#94a3b8" />
      <circle cx="27" cy="30" r="2.8" fill="#94a3b8" />
      <circle cx="36" cy="30" r="2.8" fill="#94a3b8" />
      <circle cx="45" cy="30" r="2.8" fill="#94a3b8" />

      {/* Row 2 */}
      <circle cx="18" cy="38" r="2.8" fill="#94a3b8" />
      <circle cx="27" cy="38" r="2.8" fill="#94a3b8" />
      <circle cx="36" cy="38" r="3.4" fill="url(#calGridGlow)" stroke="#ffffff" strokeWidth="1" />
      <circle cx="45" cy="38" r="2.8" fill="#94a3b8" />

      {/* Row 3 */}
      <circle cx="18" cy="46" r="2.8" fill="#94a3b8" />
      <circle cx="27" cy="46" r="2.8" fill="#94a3b8" />
      <circle cx="36" cy="46" r="2.8" fill="#94a3b8" />
      <circle cx="45" cy="46" r="2.8" fill="#94a3b8" />
    </g>

    {/* Embossed inner bevel shadow */}
    <rect
      x="8"
      y="11"
      width="48"
      height="44"
      rx="11"
      stroke="#ffffff"
      strokeWidth="1"
      strokeOpacity="0.25"
      fill="none"
    />
  </svg>
);

// 3D Official Instagram Icon with metallic bevel and vibrant gloss
export const Instagram3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_8px_16px_rgba(225,48,108,0.35)]`}
  >
    <defs>
      {/* Outer chrome metallic border */}
      <linearGradient id="igBezelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="30%" stopColor="#cbd5e1" />
        <stop offset="70%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>

      {/* Official Instagram gradient with luxurious saturation */}
      <radialGradient id="igRadialGrad" cx="20%" cy="100%" r="120%">
        <stop offset="0%" stopColor="#ffdc80" />
        <stop offset="25%" stopColor="#f77737" />
        <stop offset="50%" stopColor="#f56040" />
        <stop offset="75%" stopColor="#fd1d1d" />
        <stop offset="85%" stopColor="#e1306c" />
        <stop offset="95%" stopColor="#c13584" />
        <stop offset="100%" stopColor="#833ab4" />
      </radialGradient>

      {/* Embossed inner symbol metallic gradient */}
      <linearGradient id="igGlyphGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
    </defs>

    {/* Shadow */}
    <rect x="7" y="9" width="50" height="50" rx="15" fill="#020617" opacity="0.6" />

    {/* Outer metallic rim */}
    <rect x="7" y="7" width="50" height="50" rx="15" fill="url(#igBezelGrad)" />

    {/* Inner vibrant body */}
    <rect x="9" y="9" width="46" height="46" rx="13" fill="url(#igRadialGrad)" />

    {/* 3D Glass shine reflection */}
    <path
      d="M10 20C10 14 14 10 20 10H44C47 10 49.5 11.2 51.5 13.2L12.5 52C10.9 49.7 10 46.8 10 43.5V20Z"
      fill="#ffffff"
      opacity="0.18"
    />

    {/* Camera outer rounded frame */}
    <rect
      x="19"
      y="19"
      width="26"
      height="26"
      rx="7.5"
      stroke="url(#igGlyphGrad)"
      strokeWidth="3.2"
      filter="drop-shadow(0 2px 3px rgba(0,0,0,0.35))"
    />

    {/* Lens circle */}
    <circle
      cx="32"
      cy="32"
      r="6.5"
      stroke="url(#igGlyphGrad)"
      strokeWidth="3.2"
      filter="drop-shadow(0 2px 3px rgba(0,0,0,0.35))"
    />

    {/* Flash dot */}
    <circle
      cx="39.5"
      cy="24.5"
      r="1.8"
      fill="url(#igGlyphGrad)"
      filter="drop-shadow(0 1px 2px rgba(0,0,0,0.35))"
    />

    {/* Rim inner highlight */}
    <rect
      x="9"
      y="9"
      width="46"
      height="46"
      rx="13"
      stroke="#ffffff"
      strokeWidth="1"
      strokeOpacity="0.4"
      fill="none"
    />
  </svg>
);

// 3D Official WhatsApp Icon with metallic bevel and luminous depth
export const WhatsApp3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_8px_16px_rgba(37,211,102,0.35)]`}
  >
    <defs>
      {/* Metallic chrome outer bezel */}
      <linearGradient id="waBezelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="30%" stopColor="#cbd5e1" />
        <stop offset="70%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>

      {/* WhatsApp rich green emerald gradient */}
      <linearGradient id="waBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#25D366" />
        <stop offset="40%" stopColor="#20ba5a" />
        <stop offset="100%" stopColor="#128C7E" />
      </linearGradient>

      {/* Glyph embossed gradient */}
      <linearGradient id="waGlyphGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
    </defs>

    {/* Shadow */}
    <circle cx="32" cy="34" r="25" fill="#020617" opacity="0.6" />

    {/* Outer metallic rim */}
    <circle cx="32" cy="32" r="25" fill="url(#waBezelGrad)" />

    {/* Inner green body */}
    <circle cx="32" cy="32" r="23" fill="url(#waBodyGrad)" />

    {/* Glass shine reflection */}
    <path
      d="M32 9C20 9 10 18.5 9.1 30.5L38 10.5C36 9.5 34 9 32 9Z"
      fill="#ffffff"
      opacity="0.3"
    />

    {/* WhatsApp Speech Bubble & Phone Receiver */}
    <g filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))">
      <path
        d="M32 17C23.7 17 17 23.7 17 32C17 34.8 17.8 37.4 19.1 39.7L17.5 45.5L23.6 43.9C26 45.4 28.9 46.2 32 46.2C40.3 46.2 47 39.5 47 31.2C47 22.9 40.3 17 32 17Z"
        fill="#ffffff"
        opacity="0.15"
      />
      {/* Crisp White Phone Handle */}
      <path
        d="M40.5 36.3C39.9 36.1 37.1 34.7 36.6 34.5C36.1 34.3 35.7 34.2 35.4 34.7C35.0 35.3 34.0 36.5 33.7 36.8C33.4 37.2 33.0 37.2 32.5 36.9C31.9 36.7 30.1 36.1 27.9 34.1C26.2 32.6 25.1 30.7 24.8 30.1C24.5 29.6 24.8 29.3 25.0 29.1C25.2 28.9 25.5 28.5 25.8 28.2C26.0 27.9 26.1 27.6 26.3 27.3C26.5 26.9 26.4 26.6 26.3 26.3C26.1 26.1 25.0 23.4 24.5 22.3C24.1 21.2 23.6 21.3 23.2 21.3C22.9 21.3 22.5 21.3 22.1 21.3C21.7 21.3 21.1 21.4 20.6 22.0C20.0 22.6 18.5 24.0 18.5 27.0C18.5 29.9 20.7 32.8 21.0 33.2C21.3 33.6 25.3 39.7 31.4 42.4C32.9 43.0 34.0 43.4 34.9 43.7C36.4 44.2 37.8 44.1 38.9 43.9C40.1 43.7 42.6 42.4 43.1 40.9C43.7 39.5 43.7 38.2 43.5 37.9C43.3 37.7 43.0 37.6 42.4 37.3L40.5 36.3Z"
        fill="url(#waGlyphGrad)"
      />
    </g>

    {/* Inner edge bevel */}
    <circle
      cx="32"
      cy="32"
      r="23"
      stroke="#ffffff"
      strokeWidth="1"
      strokeOpacity="0.35"
      fill="none"
    />
  </svg>
);

// 3D Metallic Location Pin Icon
export const Location3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_8px_16px_rgba(59,130,246,0.45)]`}
  >
    <defs>
      <linearGradient id="pinChrome" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="25%" stopColor="#cbd5e1" />
        <stop offset="50%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>

      <linearGradient id="pinBlueBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="40%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
    </defs>

    {/* Shadow base ellipse */}
    <ellipse cx="32" cy="56" rx="14" ry="4" fill="#020617" opacity="0.7" />

    {/* Metallic Outer Pin */}
    <path
      d="M32 6C20.9 6 12 14.9 12 26C12 39 30 54 32 55.5C34 54 52 39 52 26C52 14.9 43.1 6 32 6Z"
      fill="url(#pinChrome)"
    />

    {/* Inner Blue Jewel Body */}
    <path
      d="M32 8.5C22.3 8.5 14.5 16.3 14.5 26C14.5 37.2 30.5 50.8 32 52.1C33.5 50.8 49.5 37.2 49.5 26C49.5 16.3 41.7 8.5 32 8.5Z"
      fill="url(#pinBlueBody)"
    />

    {/* Core Center Cavity with Chrome Ring */}
    <circle cx="32" cy="25" r="8" fill="url(#pinChrome)" />
    <circle cx="32" cy="25" r="5.5" fill="#0b1727" />
    <circle cx="32" cy="25" r="2.5" fill="#60a5fa" />

    {/* Top Glass Sheen */}
    <path
      d="M32 9C23.5 9 16.5 15.5 15.2 24C17.5 16.5 24 11 32 11C40 11 46.5 16.5 48.8 24C47.5 15.5 40.5 9 32 9Z"
      fill="#ffffff"
      opacity="0.5"
    />
  </svg>
);
