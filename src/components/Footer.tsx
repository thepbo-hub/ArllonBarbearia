import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { APPOINTMENT_URL } from './AppointmentButton';
import { INSTAGRAM_URL, WHATSAPP_URL } from './SocialCards';
import { OFFICIAL_GOOGLE_MAPS_URL } from './LocationSection';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-12 pt-10 pb-20 sm:pb-12 border-t border-slate-800/80 bg-[#02050c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand Wordmark & Location */}
          <div className="text-center sm:text-left">
            <h2 className="font-brand font-bold text-lg sm:text-xl tracking-[0.16em] text-white">
              ARLLON FERNANDES
            </h2>
            <p className="text-xs text-blue-400 font-medium tracking-wider uppercase mt-0.5">
              Barbearia de Alto Padrão
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-400 mt-2">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>R. Campos da Paz, 46 · Rio Comprido, Rio de Janeiro - RJ</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-5 text-xs font-medium text-slate-300">
            <a
              href={APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Agendar
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={OFFICIAL_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Google Maps
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-all active:scale-95"
            aria-label="Voltar ao início da página"
          >
            <span>Início</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Arllon Fernandes Barbearia. Todos os direitos reservados.</p>
          <p className="font-light">Tradição, cuidado e estilo em cada detalhe.</p>
        </div>
      </div>
    </footer>
  );
};
