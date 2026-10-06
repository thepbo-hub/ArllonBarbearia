import React from 'react';
import { ArrowUpRight, MessageCircle, ExternalLink } from 'lucide-react';
import { Instagram3DIcon, WhatsApp3DIcon } from './icons/Custom3DIcons';

export const INSTAGRAM_URL =
  'https://www.instagram.com/arllonfernandesbarbearia?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==';

export const WHATSAPP_URL = 'https://wa.link/b6b88i';

export const SocialCards: React.FC = () => {
  return (
    <section id="contato" className="w-full py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {/* Instagram Premium Card */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#071329]/95 border border-slate-700/60 hover:border-pink-500/40 shadow-[0_8px_20px_rgba(2,6,23,0.7),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_16px_32px_rgba(225,48,108,0.22),inset_0_1px_2px_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.985] overflow-hidden"
        >
          {/* Subtle Pink/Purple Radial Backlight */}
          <div className="pointer-events-none absolute -right-8 -top-8 w-32 h-32 bg-pink-600/10 rounded-full blur-2xl group-hover:bg-pink-600/20 transition-all duration-500" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/20 group-hover:via-pink-400/40 to-transparent" />

          <div className="relative flex items-center justify-between gap-3.5 z-10">
            <div className="flex items-center gap-3.5 min-w-0">
              {/* 3D Instagram Icon Box */}
              <div className="shrink-0 flex items-center justify-center p-1 rounded-xl bg-slate-950/70 border border-slate-700/50 group-hover:border-pink-500/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-all duration-300">
                <Instagram3DIcon className="w-10 h-10 sm:w-11 sm:h-11" />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="font-brand font-bold text-base sm:text-lg text-white group-hover:text-pink-100 transition-colors tracking-wide leading-tight">
                  Instagram
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 font-normal tracking-normal truncate">
                  Siga nosso trabalho
                </p>
              </div>
            </div>

            {/* Micro Badge Link */}
            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800/80 group-hover:bg-pink-900/40 border border-slate-700/50 group-hover:border-pink-400/40 text-slate-300 group-hover:text-pink-200 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </a>

        {/* WhatsApp Premium Card */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#071927]/95 border border-slate-700/60 hover:border-emerald-500/40 shadow-[0_8px_20px_rgba(2,6,23,0.7),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_16px_32px_rgba(37,211,102,0.22),inset_0_1px_2px_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.985] overflow-hidden"
        >
          {/* Subtle Emerald Radial Backlight */}
          <div className="pointer-events-none absolute -right-8 -top-8 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl group-hover:bg-emerald-600/20 transition-all duration-500" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/20 group-hover:via-emerald-400/40 to-transparent" />

          <div className="relative flex items-center justify-between gap-3.5 z-10">
            <div className="flex items-center gap-3.5 min-w-0">
              {/* 3D WhatsApp Icon Box */}
              <div className="shrink-0 flex items-center justify-center p-1 rounded-xl bg-slate-950/70 border border-slate-700/50 group-hover:border-emerald-500/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-all duration-300">
                <WhatsApp3DIcon className="w-10 h-10 sm:w-11 sm:h-11" />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="font-brand font-bold text-base sm:text-lg text-white group-hover:text-emerald-100 transition-colors tracking-wide leading-tight">
                  WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 font-normal tracking-normal truncate">
                  Entre em contato conosco
                </p>
              </div>
            </div>

            {/* Micro Badge Link */}
            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800/80 group-hover:bg-emerald-900/40 border border-slate-700/50 group-hover:border-emerald-400/40 text-slate-300 group-hover:text-emerald-200 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
