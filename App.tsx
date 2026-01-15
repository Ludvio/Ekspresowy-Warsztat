
import React, { useState } from 'react';
import { Settings2, FileText, Eye, Map, Palette, Hammer, Phone, MapPin, Clock, Anchor, Hash, ChevronRight, HelpCircle, Box } from 'lucide-react';
import { CustomerJourney } from './components/CustomerJourney';
import { VisualIdentity } from './components/VisualIdentity';
import { AuditAnalysis } from './components/AuditAnalysis';
import { HeroMockup } from './components/HeroMockup';
import { JuraService } from './components/JuraService';
import { NivonaService } from './components/NivonaService';
import { SaecoService } from './components/SaecoService';
import { PhilipsService } from './components/PhilipsService';

type Section = 'main' | 'journey' | 'audit' | 'visual' | 'jura' | 'nivona' | 'saeco' | 'philips';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('main');

  const scrollToId = (id: string) => {
    if (activeSection !== 'main' && activeSection !== 'jura' && activeSection !== 'nivona' && activeSection !== 'saeco' && activeSection !== 'philips') {
      setActiveSection('main');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen py-8 md:py-16 px-2 md:px-8 lg:px-12 relative bg-[#5C4B3F]">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-5%] left-[-5%] w-[70%] h-[70%] bg-[#F9EBC8] opacity-[0.05] rounded-full blur-[140px]"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto paper-sheet relative border border-[#3E2F26]/10 flex flex-col md:flex-row shadow-[0_40px_100px_rgba(0,0,0,0.3)] min-h-[90vh]">
        
        {/* Smaczki: Harmonijne Narożniki (Brass Clips/Corners) */}
        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#B59473]/40 z-50 pointer-events-none"></div>
        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#B59473]/40 z-50 pointer-events-none"></div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#B59473]/40 z-50 pointer-events-none"></div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#B59473]/40 z-50 pointer-events-none"></div>

        {/* GLOBAL COMMAND (Sidebar) */}
        <aside className="w-full md:w-80 md:sticky md:top-0 md:h-screen border-b md:border-b-0 md:border-r border-[#3E2F26]/10 p-8 md:p-10 space-y-10 shrink-0 bg-[#F9F7F5] z-30 flex flex-col no-scrollbar overflow-y-auto">
          
          {/* Brand Identity */}
          <div className="space-y-6">
             <div className="w-16 h-16 bg-[#3E2F26] flex items-center justify-center rounded-sm rotate-1 shadow-[4px_4px_0px_0px_rgba(181,148,115,0.4)] cursor-pointer" onClick={() => setActiveSection('main')}>
               <Settings2 className="w-8 h-8 text-[#B59473]" />
             </div>
             <div>
               <h1 className="text-2xl md:text-3xl font-bold font-['Cormorant_Garamond'] leading-[0.9] uppercase tracking-tighter text-[#3E2F26]">
                 EKSPRESOWY <br/>
                 <span className="text-lg opacity-60 italic font-['Old_Standard_TT'] tracking-normal text-[#3E2F26]">Warsztat s.c.</span>
               </h1>
               <div className="h-0.5 w-12 bg-[#B59473] mt-4"></div>
             </div>
          </div>

          {/* Navigation: CLIENT FRONT (SEO Links) */}
          <div className="space-y-4">
            <p className="font-technical text-[9px] font-bold opacity-40 tracking-[0.2em] uppercase border-b border-[#3E2F26]/10 pb-2">
              NAWIGACJA (FRONT)
            </p>
            <nav className="space-y-1">
              <NavButton label="Start / Wizytówka" onClick={() => { setActiveSection('main'); scrollToId('hero'); }} active={activeSection === 'main'} />
              <NavButton label="Odzyskaj Poranek" onClick={() => { setActiveSection('main'); scrollToId('ritual'); }} active={activeSection === 'main'} />
              <NavButton label="Etyka Kosztów" onClick={() => { setActiveSection('main'); scrollToId('pricing'); }} active={activeSection === 'main'} />
              <NavButton label="Proces Diagnostyki" onClick={() => { setActiveSection('main'); scrollToId('process'); }} active={activeSection === 'main'} />
              <NavButton label="Warsztat Krzysztofa" onClick={() => { setActiveSection('main'); scrollToId('workshop'); }} active={activeSection === 'main'} />
              <NavButton label="Objawy / Baza Wiedzy" onClick={() => { setActiveSection('main'); scrollToId('symptoms'); }} active={activeSection === 'main'} />
              <NavButton label="Druga Młodość" onClick={() => { setActiveSection('main'); scrollToId('youth'); }} active={activeSection === 'main'} />
              <NavButton label="Częste Pytania" onClick={() => { setActiveSection('main'); scrollToId('faq'); }} active={activeSection === 'main'} />
            </nav>
          </div>

          {/* Navigation: SPECIALIZED REGISTRY (SEO Brands) */}
          <div className="space-y-4 pt-4">
             <p className="font-technical text-[9px] font-bold opacity-40 tracking-[0.2em] uppercase border-b border-[#3E2F26]/10 pb-2">
              REJESTR MAREK (SEO)
            </p>
            <nav className="space-y-0.5">
              <SEOButton label="Serwis Jura" onClick={() => setActiveSection('jura')} active={activeSection === 'jura'} />
              <SEOButton label="Serwis Nivona" onClick={() => setActiveSection('nivona')} active={activeSection === 'nivona'} />
              {/* Ukryte zgodnie z instrukcją (nie usuwać) */}
              {/* 
              <SEOButton label="Serwis Saeco" onClick={() => setActiveSection('saeco')} active={activeSection === 'saeco'} />
              <SEOButton label="Serwis Philips" onClick={() => setActiveSection('philips')} active={activeSection === 'philips'} />
              <SEOButton label="Serwis DeLonghi" />
              <SEOButton label="Serwis Krups" />
              <SEOButton label="Serwis Miele" />
              <SEOButton label="Serwis Siemens" />
              <SEOButton label="Serwis Bosch" />
              <SEOButton label="Serwis Gaggia" /> 
              */}
            </nav>
          </div>

          {/* Logistics Status */}
          <div className="mt-auto pt-8 border-t border-[#3E2F26]/10">
             <div className="font-technical text-[10px] font-bold text-[#F4F1EA] bg-[#3E2F26] p-4 relative group cursor-help shadow-lg">
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#B59473] rounded-full animate-pulse"></div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#B59473]">
                    <Phone size={12} /> <span>881 531 113</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-70">
                    <MapPin size={12} /> <span>PUŻAKA 27, KRK</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-70">
                     <Clock size={12} /> <span>WT: ZAMKNIĘTE</span>
                  </div>
                </div>
             </div>
          </div>
        </aside>

        {/* Main Content Pane */}
        <main className="flex-1 relative flex flex-col min-h-screen bg-[#F4F1EA]">
          <div className="p-0 relative z-10 flex-1">
            {activeSection === 'main' && <HeroMockup />}
            {activeSection === 'jura' && <JuraService />}
            {activeSection === 'nivona' && <NivonaService />}
            {activeSection === 'saeco' && <SaecoService />}
            {activeSection === 'philips' && <PhilipsService />}
            
            <div className="p-8 md:p-16">
              {activeSection === 'audit' && <AuditAnalysis />}
              {activeSection === 'journey' && <CustomerJourney />}
              {activeSection === 'visual' && <VisualIdentity />}
            </div>
          </div>
        </main>
      </div>

      {/* Footer Copyright */}
      <div className="max-w-7xl mx-auto mt-6 px-4 flex justify-between items-center opacity-30">
         <p className="font-technical text-[8px] uppercase tracking-[0.3em] font-bold text-[#F4F1EA]">
           © 2024 OFFICINA MECHANICA
         </p>
         <p className="font-technical text-[8px] uppercase tracking-[0.3em] font-bold text-[#F4F1EA]">
           ARCHIVVM v.PROD.1.1
         </p>
      </div>
    </div>
  );
};

const NavButton = ({ label, onClick, active }: any) => (
  <button 
    onClick={onClick}
    className={`w-full text-left py-2 px-3 flex items-center justify-between group transition-colors rounded-sm ${active ? 'bg-[#3E2F26]/10' : 'hover:bg-[#3E2F26]/5'}`}
  >
    <span className="font-['Old_Standard_TT'] font-bold text-[#3E2F26] text-sm tracking-wide">{label}</span>
    <ChevronRight size={14} className={`text-[#B59473] transition-all transform ${active ? 'opacity-100 translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'}`} />
  </button>
);

const SEOButton = ({ label, onClick, active }: { label: string, onClick?: () => void, active?: boolean }) => (
  <button 
    onClick={onClick}
    className={`w-full text-left py-1.5 px-3 flex items-center justify-between group transition-colors rounded-sm ${active ? 'bg-[#B59473]/10' : 'hover:bg-[#B59473]/5'}`}
  >
    <span className={`font-technical text-[9px] uppercase tracking-widest transition-colors ${active ? 'text-[#3E2F26] font-bold' : 'text-[#3E2F26]/60 group-hover:text-[#3E2F26]'}`}>{label}</span>
    <ChevronRight size={10} className={`text-[#B59473] transition-opacity ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
  </button>
);

export default App;
