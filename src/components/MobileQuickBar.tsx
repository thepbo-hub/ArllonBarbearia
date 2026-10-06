import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, MessageCircle } from 'lucide-react';
import { APPOINTMENT_URL } from './AppointmentButton';
import { WHATSAPP_URL } from './SocialCards';
import { Calendar3DIcon } from './icons/Custom3DIcons';

export const MobileQuickBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past 350px (after the Hero CTA)
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Ações rápidas"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-2.5 bg-[#030712]/92 backdrop-blur-md border-t border-slate-800/80 shadow-[0_-8px_20px_rgba(0,0,0,0.7)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* WhatsApp Quick Touch */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center justify-center w-12 h-11 rounded-xl bg-slate-900 border border-slate-700/80 text-emerald-400 active:scale-95 transition-transform"
          aria-label="Abrir WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Primary Schedule 1-tap CTA */}
        <a
          href={APPOINTMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-11 flex items-center justify-between px-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 border border-blue-400/40 text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_12px_rgba(37,99,235,0.4)] active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-2">
            <Calendar3DIcon className="w-6 h-6 shrink-0" />
            <span className="font-brand tracking-wider">AGENDAR HORÁRIO</span>
          </div>
          <ChevronRight className="w-4 h-4 text-blue-200" />
        </a>
      </div>
    </aside>
  );
};
