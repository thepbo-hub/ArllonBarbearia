import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Compass,
  Car,
  Clock,
  Shield,
  Layers,
} from 'lucide-react';
import { Location3DIcon } from './icons/Custom3DIcons';

const BUSINESS_NAME = 'Arllon Fernandes Barbearia';
const ADDRESS_STREET = 'R. Campos da Paz, 46';
const ADDRESS_NEIGHBORHOOD = 'Rio Comprido, Rio de Janeiro - RJ';
const ADDRESS_CEP = 'CEP 20250-460';
const FULL_ADDRESS = `${BUSINESS_NAME}, ${ADDRESS_STREET} - ${ADDRESS_NEIGHBORHOOD}, ${ADDRESS_CEP}`;

// Official Google Maps listing provided by the user
export const OFFICIAL_GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/ooVoa4qtVSK2P2us6';
// Infallible directions URL that routes directly to the verified business address
export const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  'Arllon Fernandes Barbearia, R. Campos da Paz, 46 - Rio Comprido, Rio de Janeiro - RJ, 20250-460'
)}`;
export const WAZE_URL = `https://waze.com/ul?q=${encodeURIComponent(
  'Arllon Fernandes Barbearia, R. Campos da Paz, 46, Rio Comprido, Rio de Janeiro'
)}&navigate=yes`;
export const UBER_URL = `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${encodeURIComponent(
  'R. Campos da Paz, 46 - Rio Comprido, Rio de Janeiro - RJ, 20250-460'
)}&dropoff[nickname]=${encodeURIComponent('Arllon Fernandes Barbearia')}`;

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [mapStyle, setMapStyle] = useState<'carto' | 'satellite'>('carto');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(FULL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="localizacao" className="w-full py-10 sm:py-16">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 px-4">
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-2">
          FÁCIL ACESSO
        </p>
        <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.1em] text-white leading-tight mb-3">
          ONDE ESTAMOS
        </h2>
        <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-4" />
        <p className="text-sm sm:text-base text-slate-300 font-light">
          Localização privilegiada no coração do Rio Comprido com comodidade e segurança.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* Left Column: Address Card & Action Buttons */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#071329]/95 border border-blue-500/20 shadow-[0_16px_35px_rgba(2,6,23,0.8),inset_0_1px_1px_rgba(255,255,255,0.12)]">
          <div>
            {/* Top Badge: 3D Location Pin + Status */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-2xl bg-slate-950/80 border border-slate-700/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                  <Location3DIcon className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-blue-400">
                    Sede Oficial
                  </span>
                  <h3 className="font-brand font-bold text-lg text-white">Rio Comprido</h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Atendimento Ativo</span>
              </div>
            </div>

            {/* Address Typography with Metallic Elegance */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 mb-5 relative group">
              <span className="text-[11px] font-semibold tracking-wider text-blue-400 uppercase block mb-1">
                Nome Comercial Oficial
              </span>
              <p className="font-brand font-bold text-lg sm:text-xl text-white mb-1.5 tracking-wide">
                {BUSINESS_NAME}
              </p>
              <p className="text-sm sm:text-base text-slate-200 font-medium">
                {ADDRESS_STREET}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                {ADDRESS_NEIGHBORHOOD}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-mono tracking-wider mt-1">
                {ADDRESS_CEP}
              </p>

              {/* Exact Verified Listing Badge */}
              <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Local Verificado no Google
                </span>
                <span className="font-mono text-slate-400">20250-460</span>
              </div>

              {/* Copy Address Button */}
              <button
                onClick={handleCopyAddress}
                className="mt-3.5 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-medium text-slate-200 transition-all active:scale-[0.98]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Endereço Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-blue-400" />
                    <span>Copiar Endereço Completo</span>
                  </>
                )}
              </button>
            </div>

            {/* Location highlights */}
            <div className="space-y-2 mb-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Próximo à Av. Paulo de Frontin e Túnel Rebouças</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Fácil estacionamento e embarque/desembarque</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Região segura e de rápida conexão Zona Sul / Zona Norte</span>
              </div>
            </div>
          </div>

          {/* Action Buttons: ABRIR NO GOOGLE MAPS & COMO CHEGAR */}
          <div className="space-y-2.5">
            {/* Primary Google Maps Button - Official Direct Link */}
            <a
              href={OFFICIAL_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl text-sm font-bold tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/40 shadow-[0_6px_20px_rgba(37,99,235,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all active:scale-[0.98]"
            >
              <MapPin className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>ABRIR NO GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-200 ml-auto" />
            </a>

            {/* Route / Directions Button */}
            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all active:scale-[0.98]"
            >
              <Navigation className="w-4 h-4 text-blue-400" />
              <span>COMO CHEGAR</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-auto" />
            </a>

            {/* Quick Transportation Shortcuts */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-[11px] font-medium text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <span>Navegar no Waze</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <a
                href={UBER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-[11px] font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Car className="w-3 h-3 text-slate-400" />
                <span>Pedir Uber</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Custom Styled Map Display (100% Reliable, Never Fails) */}
        <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] rounded-3xl overflow-hidden border border-blue-500/25 shadow-[0_16px_35px_rgba(2,6,23,0.8)] flex flex-col justify-between">
          {/* Custom Styled Cartographic Map Canvas */}
          <div className="absolute inset-0 bg-[#070e1c] overflow-hidden select-none">
            {/* Map Grid / Streets Vector Visualization */}
            <svg
              className="w-full h-full object-cover opacity-85"
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1e40af" stopOpacity="0.25" />
                  <stop offset="70%" stopColor="#0a1931" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#030712" stopOpacity="0.6" />
                </radialGradient>
                <linearGradient id="mainAvenue" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              {/* Background ambient shade */}
              <rect width="800" height="600" fill="#060c18" />
              <rect width="800" height="600" fill="url(#mapGlow)" />

              {/* Urban Grid Blocks */}
              <g stroke="#1e293b" strokeWidth="1" strokeOpacity="0.3">
                <line x1="0" y1="100" x2="800" y2="100" />
                <line x1="0" y1="200" x2="800" y2="200" />
                <line x1="0" y1="300" x2="800" y2="300" />
                <line x1="0" y1="400" x2="800" y2="400" />
                <line x1="0" y1="500" x2="800" y2="500" />

                <line x1="150" y1="0" x2="150" y2="600" />
                <line x1="300" y1="0" x2="300" y2="600" />
                <line x1="450" y1="0" x2="450" y2="600" />
                <line x1="600" y1="0" x2="600" y2="600" />
                <line x1="750" y1="0" x2="750" y2="600" />
              </g>

              {/* Neighborhood secondary streets */}
              <path
                d="M 100 80 Q 250 140 400 120 T 700 190"
                fill="none"
                stroke="#334155"
                strokeWidth="6"
                strokeOpacity="0.5"
              />
              <path
                d="M 50 480 Q 280 430 450 460 T 750 380"
                fill="none"
                stroke="#334155"
                strokeWidth="6"
                strokeOpacity="0.5"
              />
              <path
                d="M 220 50 L 250 550"
                fill="none"
                stroke="#334155"
                strokeWidth="5"
                strokeOpacity="0.4"
              />
              <path
                d="M 580 50 L 550 550"
                fill="none"
                stroke="#334155"
                strokeWidth="5"
                strokeOpacity="0.4"
              />

              {/* Main Arterial Road (Av. Paulo de Frontin / Ligação Rebouças) */}
              <path
                d="M 120 580 L 320 340 L 480 180 L 680 40"
                fill="none"
                stroke="url(#mainAvenue)"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M 120 580 L 320 340 L 480 180 L 680 40"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeDasharray="8 8"
                strokeOpacity="0.6"
              />

              {/* Rua Campos da Paz (Passing precisely through pin at [410, 270]) */}
              <path
                d="M 240 180 L 410 270 L 590 360"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="10"
                strokeLinecap="round"
                strokeOpacity="0.85"
              />
              <path
                d="M 240 180 L 410 270 L 590 360"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeOpacity="0.8"
              />

              {/* Street Names Labels */}
              <text
                x="440"
                y="310"
                fill="#93c5fd"
                fontSize="13"
                fontFamily="sans-serif"
                fontWeight="700"
                letterSpacing="1"
              >
                R. CAMPOS DA PAZ, 46
              </text>
              <text
                x="210"
                y="410"
                fill="#64748b"
                fontSize="11"
                fontFamily="sans-serif"
                fontWeight="600"
                letterSpacing="1"
                transform="rotate(-52 210 410)"
              >
                AV. PAULO DE FRONTIN
              </text>
              <text
                x="560"
                y="140"
                fill="#475569"
                fontSize="11"
                fontFamily="sans-serif"
                fontWeight="600"
              >
                SENTIDO TÚNEL REBOUÇAS
              </text>

              {/* Location Pin Beacon Ripples */}
              <circle cx="410" cy="270" r="45" fill="#3b82f6" opacity="0.15">
                <animate attributeName="r" values="25;60;25" dur="3s" repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  values="0.3;0.05;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="410" cy="270" r="14" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="3" />
              <circle cx="410" cy="270" r="5" fill="#ffffff" />
            </svg>
          </div>

          {/* Top Overlays: Status Bar & Style Switch */}
          <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 shadow-lg">
              <Compass className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '20s' }} />
              <span className="text-xs font-medium text-slate-200">
                Rio Comprido · Rio de Janeiro
              </span>
            </div>

            <a
              href={OFFICIAL_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/90 hover:bg-blue-500 backdrop-blur-md text-white text-xs font-semibold tracking-wider transition-all shadow-lg active:scale-95"
            >
              <span>Abrir no App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Center Callout: Pin Badge Overlay */}
          <div className="relative z-10 self-center my-auto flex flex-col items-center pointer-events-none">
            <div className="px-4 py-2 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-blue-400/50 shadow-[0_8px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(59,130,246,0.3)] flex items-center gap-2.5 animate-bounce" style={{ animationDuration: '2.5s' }}>
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-ping" />
              <div>
                <p className="font-brand font-bold text-xs text-white uppercase tracking-wider">
                  Arllon Fernandes Barbearia
                </p>
                <p className="text-[10px] text-blue-300 font-medium">R. Campos da Paz, 46</p>
              </div>
            </div>
          </div>

          {/* Bottom Card Footer: Tap anywhere to open in Google Maps */}
          <a
            href={OFFICIAL_GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 m-3 sm:m-4 p-3.5 rounded-2xl bg-slate-950/85 hover:bg-slate-950/95 backdrop-blur-md border border-blue-500/30 hover:border-blue-400/60 transition-all flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 group-hover:text-blue-300">
                <Navigation className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white group-hover:text-blue-200 transition-colors">
                  Clique para abrir rotas no Google Maps
                </p>
                <p className="text-[11px] text-slate-400">
                  Carregamento direto e sem erros no seu navegador ou app
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/20 text-blue-300 group-hover:translate-x-0.5 transition-transform">
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
