import React from 'react';
import { Award } from 'lucide-react';

export const InstitutionalPhrase: React.FC = () => {
  return (
    <section id="destaque" className="relative w-full py-12 sm:py-16 my-4 overflow-hidden rounded-3xl">
      {/* Deep Dark Blue Background Container with Depth & Metallic Border */}
      <div
        className="relative p-7 sm:p-12 text-center rounded-3xl border border-blue-500/25 overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(29, 78, 216, 0.22) 0%, rgba(8, 18, 38, 0.95) 60%, #030712 100%)',
          boxShadow:
            '0 20px 45px -10px rgba(2, 6, 23, 0.9), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 2px 0 rgba(30, 58, 138, 0.3)',
        }}
      >
        {/* Soft Ambient Light Beam */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/15 rounded-full blur-3xl" />

        {/* Top Decorative Metallic Element */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent via-slate-400 to-blue-400" />
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-950/90 border border-blue-400/40 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.4)]">
            <Award className="w-3.5 h-3.5 text-blue-300" />
          </div>
          <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent via-slate-400 to-blue-400" />
        </div>

        {/* Small Eyebrow Label */}
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-blue-300/80 mb-3">
          PROPÓSITO & EXCELÊNCIA
        </p>

        {/* Big Striking Phrase */}
        <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-[0.08em] sm:tracking-[0.12em] text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] max-w-2xl mx-auto">
          &ldquo;Sua imagem,{' '}
          <span className="metallic-text block sm:inline font-extrabold">
            nosso compromisso.&rdquo;
          </span>
        </h2>

        {/* Bottom Decorative Metallic Line */}
        <div className="w-32 sm:w-48 h-0.5 mx-auto mt-6 mb-4 bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

        <p className="text-xs sm:text-sm text-slate-300/90 max-w-md mx-auto font-light leading-relaxed">
          Mais que um corte de cabelo ou barba: uma experiência de valorização da sua autoestima e identidade.
        </p>
      </div>
    </section>
  );
};
