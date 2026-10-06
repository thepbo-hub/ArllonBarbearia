import React, { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import { AppointmentButton } from './AppointmentButton';

export const OFFICIAL_LOGO_URL =
  'https://i.postimg.cc/9f9gyfcT/Emblema-Azul-com-Navalha-Branca.png';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative w-full pt-6 pb-10 sm:pt-10 sm:pb-14 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Delicate Ambient Blue Illumination behind Logo */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] bg-blue-600/12 rounded-full blur-[90px] -z-10" />
      <div className="pointer-events-none absolute top-28 left-1/2 -translate-x-1/2 w-[180px] sm:w-[260px] h-[180px] sm:h-[260px] bg-sky-400/8 rounded-full blur-[60px] -z-10" />

      {/* 1. Official Logo Container - Large, Centered, Dominant */}
      <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
        {/* Soft Radial Aura ring */}
        <div className="absolute inset-0 rounded-full scale-110 bg-gradient-to-b from-blue-500/15 via-transparent to-transparent blur-md pointer-events-none" />

        {/* Logo Image */}
        <div
          className={`relative transition-all duration-1000 transform ${
            imageLoaded ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-3'
          }`}
        >
          <img
            src={OFFICIAL_LOGO_URL}
            alt="Emblema Oficial Arllon Fernandes Barbearia"
            width={280}
            height={280}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain drop-shadow-[0_12px_28px_rgba(2,6,23,0.85)] filter contrast-[1.03]"
            style={{
              filter: 'drop-shadow(0 14px 28px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 22px rgba(37, 99, 235, 0.22))',
            }}
          />
        </div>
      </div>

      {/* 2. Brand Name - Strong, Modern, Elegant */}
      <h1 className="font-brand text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white leading-tight max-w-2xl px-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        ARLLON FERNANDES{' '}
        <span className="block sm:inline text-blue-400 font-bold tracking-[0.2em] sm:tracking-[0.18em]">
          BARBEARIA
        </span>
      </h1>

      {/* Subtle metallic hairline underline */}
      <div className="w-28 sm:w-36 h-0.5 my-3.5 sm:my-4 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

      {/* 3. Institutional Phrase - Lighter, refined typography */}
      <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light tracking-wide max-w-lg px-4 mb-7 sm:mb-9 text-balance">
        &ldquo;Tradição, cuidado e estilo em cada detalhe.&rdquo;
      </p>

      {/* 4. Primary Appointment CTA */}
      <div className="w-full max-w-md px-4 sm:px-0 mb-8 sm:mb-10">
        <AppointmentButton />
      </div>

      {/* 5. Delicate Visual Scroll Cue */}
      <a
        href="#destaque"
        className="group flex flex-col items-center gap-1.5 text-slate-400 hover:text-blue-300 transition-colors pt-2 cursor-pointer select-none"
        aria-label="Rolar para mais detalhes"
      >
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-medium text-slate-400/90 group-hover:text-slate-200 transition-colors">
          Deslize para explorar
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-700/80 group-hover:border-blue-400/50 flex items-start justify-center p-1 transition-colors">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
