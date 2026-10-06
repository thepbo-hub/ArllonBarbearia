import React from 'react';
import { Clock, Coffee, Wifi, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface ScheduleDay {
  day: string;
  hours: string;
  status: string;
}

const SCHEDULE: ScheduleDay[] = [
  { day: 'Terça-feira', hours: '09:00 – 20:00', status: 'Atendimento' },
  { day: 'Quarta-feira', hours: '09:00 – 20:00', status: 'Atendimento' },
  { day: 'Quinta-feira', hours: '09:00 – 20:00', status: 'Atendimento' },
  { day: 'Sexta-feira', hours: '09:00 – 20:00', status: 'Atendimento' },
  { day: 'Sábado', hours: '09:00 – 19:00', status: 'Atendimento' },
  { day: 'Domingo & Segunda', hours: 'Descanso Semanal', status: 'Fechado' },
];

const PERKS = [
  {
    icon: <Coffee className="w-5 h-5 text-blue-400" />,
    title: 'Café & Cerveja Gelada',
    desc: 'Bebidas de cortesia para tornar seu momento ainda mais agradável.',
  },
  {
    icon: <Sparkles className="w-5 h-5 text-blue-400" />,
    title: 'Ambiente Climatizado',
    desc: 'Espaço higienizado, confortável e com iluminação planejada.',
  },
  {
    icon: <Wifi className="w-5 h-5 text-blue-400" />,
    title: 'Wi-Fi & Som Ambiente',
    desc: 'Conexão de alta velocidade e trilha sonora selecionada.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    title: 'Biossegurança Total',
    desc: 'Instrumentos esterilizados em autoclave e lâminas descartáveis.',
  },
];

export const HoursAndPerks: React.FC = () => {
  // Current time check for Rio de Janeiro
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday, 2-6 is Tue-Sat
  const hour = now.getHours();

  const isOpenToday = dayOfWeek >= 2 && dayOfWeek <= 6 && hour >= 9 && hour < 20;

  return (
    <section className="w-full py-10 sm:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Left: Schedule Table */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-slate-900/85 to-[#071329]/95 border border-slate-800/80 shadow-[0_12px_30px_rgba(2,6,23,0.7)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-brand font-bold text-lg text-white">Horário de Atendimento</h3>
                  <p className="text-xs text-slate-400">Planeje sua visita com comodidade</p>
                </div>
              </div>

              {/* Dynamic open/closed badge */}
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                  isOpenToday
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300'
                }`}
              >
                {isOpenToday ? '● Aberto agora' : 'Agendamento 24h'}
              </span>
            </div>

            <div className="divide-y divide-slate-800/80 mt-4">
              {SCHEDULE.map((item) => (
                <div key={item.day} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300 font-medium">{item.day}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-slate-200 tabular-nums">{item.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-slate-400 mt-5 pt-3 border-t border-slate-800/70">
            * Agendamentos realizados preferencialmente pelo aplicativo AppBarber com confirmação imediata.
          </p>
        </div>

        {/* Right: Amenities / Perks Grid */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-slate-900/85 to-[#071329]/95 border border-slate-800/80 shadow-[0_12px_30px_rgba(2,6,23,0.7)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-brand font-bold text-lg text-white">Experiência & Estrutura</h3>
                <p className="text-xs text-slate-400">Cada detalhe desenhado para seu bem-estar</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PERKS.map((perk, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/70 flex items-start gap-3"
                >
                  <div className="shrink-0 p-1.5 rounded-lg bg-blue-950/70 border border-blue-500/20">
                    {perk.icon}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                      {perk.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
            <span>Atendimento pontual e personalizado</span>
            <span className="text-blue-400 font-medium">Rio Comprido · RJ</span>
          </div>
        </div>
      </div>
    </section>
  );
};
