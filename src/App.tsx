import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialCards } from './components/SocialCards';
import { InstitutionalPhrase } from './components/InstitutionalPhrase';
import { CareDetails } from './components/CareDetails';
import { LocationSection } from './components/LocationSection';
import { HoursAndPerks } from './components/HoursAndPerks';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { APPOINTMENT_URL } from './components/AppointmentButton';

export default function App() {
  const handleScheduleClick = () => {
    window.open(APPOINTMENT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-blue-600/40 selection:text-white">
      {/* Subtle Background Lighting & Radial Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        {/* Top ambient glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-900/18 rounded-full blur-[130px]" />
        {/* Mid ambient glow */}
        <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-indigo-950/15 rounded-full blur-[140px]" />
        {/* Bottom ambient glow */}
        <div className="absolute bottom-[10%] left-[-150px] w-[600px] h-[600px] bg-blue-950/15 rounded-full blur-[160px]" />
      </div>

      {/* Top Navigation Bar */}
      <Navbar onScheduleClick={handleScheduleClick} />

      {/* Main Single-Page Vertical Content (Traditional, fluid, mobile-first) */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Section 1: Hero (Logo, Name, Subtitle, Main CTA, Scroll Indicator) */}
        <Hero />

        {/* Section 2: Social Channels (Instagram & WhatsApp 3D Cards) */}
        <div id="agendamento" className="w-full">
          <SocialCards />
        </div>

        {/* Section 3: Institutional Phrase ("Sua imagem, nosso compromisso.") */}
        <InstitutionalPhrase />

        {/* Section 4: Barber Crafts & Care ("CUIDADO EM CADA DETALHE") */}
        <CareDetails />

        {/* Section 5: Location & Maps ("ONDE ESTAMOS") */}
        <LocationSection />

        {/* Section 6: Hours & Perks */}
        <HoursAndPerks />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Mobile Sticky Quick Bar (Visible after scrolling past hero) */}
      <MobileQuickBar />
    </div>
  );
}
