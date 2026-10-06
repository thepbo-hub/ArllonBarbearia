import React from 'react';
import {
  RazorIcon,
  ScissorsIcon,
  ClipperIcon,
  CombIcon,
  ShavingBrushIcon,
} from './icons/BarberToolsIcons';

interface CareItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const CARE_ITEMS: CareItem[] = [
  {
    id: 'navalha',
    title: 'Navalha Tradicional',
    description: 'Lâmina afiada em aço cirúrgico para linhas limpas, contorno cirúrgico e acabamento impecável.',
    icon: <RazorIcon className="w-8 h-8" />,
    tag: 'Precisão Clássica',
  },
  {
    id: 'tesoura',
    title: 'Tesoura de Fio Laser',
    description: 'Corte artesanal milimétrico, texturização fluida e caimento natural respeitando a anatomia facial.',
    icon: <ScissorsIcon className="w-8 h-8" />,
    tag: 'Caimento Exclusivo',
  },
  {
    id: 'maquina',
    title: 'Máquinas de Precisão',
    description: 'Graduações suaves, fade milimétrico e transição em degradê de alta definição.',
    icon: <ClipperIcon className="w-8 h-8" />,
    tag: 'Alta Performance',
  },
  {
    id: 'pente',
    title: 'Pente de Alinhamento',
    description: 'Estruturação geométrica dos fios e direcionamento estratégico para fácil estilização diária.',
    icon: <CombIcon className="w-8 h-8" />,
    tag: 'Estrutura & Forma',
  },
  {
    id: 'barboterapia',
    title: 'Barboterapia & Toalha Quente',
    description: 'Ritual clássico com abertura de poros, espuma densa hidratante e massagem relaxante.',
    icon: <ShavingBrushIcon className="w-8 h-8" />,
    tag: 'Ritual Relaxante',
  },
];

export const CareDetails: React.FC = () => {
  return (
    <section id="cuidados" className="w-full py-10 sm:py-14">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12 px-4">
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-2">
          ARTE DA BARBEARIA
        </p>
        <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.1em] text-white leading-tight mb-3">
          CUIDADO EM CADA DETALHE
        </h2>
        <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-4" />
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          &ldquo;Um atendimento pensado para valorizar seu estilo, sua personalidade e sua imagem.&rdquo;
        </p>
      </div>

      {/* Grid of Minimalist Sophisticated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5">
        {CARE_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className={`group relative p-5 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#071329]/80 border border-slate-800/80 hover:border-blue-500/35 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(2,6,23,0.6)] ${
              index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Ambient Blue corner sheen on hover */}
            <div className="pointer-events-none absolute inset-0 bg-radial-at-t from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

            <div className="relative flex flex-col h-full justify-between gap-3">
              <div className="flex items-start justify-between gap-3">
                {/* 3D / Metallic Icon Plate */}
                <div className="shrink-0 flex items-center justify-center w-13 h-13 rounded-xl bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_10px_rgba(0,0,0,0.5)] group-hover:border-blue-400/40 group-hover:scale-105 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Quiet unboxed text tag (zero-pill discipline) */}
                <span className="text-[11px] font-medium tracking-wider uppercase text-blue-300/80 pt-1">
                  {item.tag}
                </span>
              </div>

              <div>
                <h3 className="font-brand font-bold text-base sm:text-lg text-white group-hover:text-blue-100 transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Hairline metallic base line */}
              <div className="w-full h-px bg-slate-800/60 group-hover:bg-blue-500/30 transition-colors mt-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
