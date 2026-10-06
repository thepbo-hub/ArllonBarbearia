import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onScheduleClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScheduleClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#030712]/80 backdrop-blur-md border-b border-slate-800/80 transition-all duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-brand text-sm sm:text-base tracking-[0.16em] font-bold text-white hover:text-blue-400 transition-colors whitespace-nowrap"
          title="Arllon Fernandes Barbearia"
        >
          ARLLON FERNANDES
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden sm:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-slate-300">
          <a href="#agendamento" className="hover:text-white transition-colors">
            Agendamento
          </a>
          <a href="#cuidados" className="hover:text-white transition-colors">
            Cuidados
          </a>
          <a href="#localizacao" className="hover:text-white transition-colors">
            Onde Estamos
          </a>
          <a href="#contato" className="hover:text-white transition-colors">
            Canais
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2">
          <button
            onClick={onScheduleClick}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white bg-blue-600/90 hover:bg-blue-600 border border-blue-400/30 rounded-lg shadow-[0_2px_10px_rgba(37,99,235,0.3)] transition-all active:scale-[0.98] whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-blue-200" />
            <span>Agendar</span>
            <ArrowUpRight className="w-3 h-3 text-blue-300" />
          </button>
        </div>
      </div>
    </header>
  );
};
