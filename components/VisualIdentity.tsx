import React from 'react';
import { Palette, Type, Layers, Droplet, Sun, PenTool } from 'lucide-react';

export const VisualIdentity: React.FC = () => {
  return (
    <div className="space-y-20">
      
      {/* Header */}
      <div className="border-b-2 border-[#3E2F26] pb-8">
        <div className="flex items-center gap-3 mb-2">
           <Palette size={16} className="text-[#B59473]" />
           <span className="font-technical text-[10px] text-[#B59473] uppercase tracking-widest">Dokumentacja Wewnętrzna</span>
        </div>
        <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] text-[#3E2F26] mb-4">Brand Guardian Guide</h2>
        <p className="text-xl font-['Old_Standard_TT'] italic text-[#3E2F26]/70 max-w-2xl">
          "Nie jesteśmy stroną internetową. Jesteśmy fizycznym artefaktem – archiwalnym planem inżynieryjnym leżącym na dębowym biurku."
        </p>
      </div>

      {/* Principle 1: Color Palette */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#B59473] flex items-center justify-center text-[#F4F1EA] font-bold font-technical text-xs">01</div>
          <h3 className="text-2xl font-bold font-['Cormorant_Garamond'] text-[#3E2F26]">
            Zasada: Zero Szarości
          </h3>
        </div>
        <p className="font-['Old_Standard_TT'] text-[#3E2F26]/80 max-w-3xl leading-relaxed">
          Nigdy nie używamy standardowych szarości cyfrowych (gray-500). Wszystkie barwy muszą być "ciepłe", organiczne i nawiązywać do materiałów warsztatowych: drewna, papieru, smaru i metalu.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           <ColorSwatch 
             color="#5C4B3F" 
             name="Background" 
             code="Ciepły Kasztan" 
             desc="Główne tło aplikacji. Głębokie drewno." 
             darkText={false}
           />
           <ColorSwatch 
             color="#F4F1EA" 
             name="Surface" 
             code="Kremowy Pergamin" 
             desc="Kolor papieru technicznego. Tło kart." 
             darkText={true}
           />
           <ColorSwatch 
             color="#3E2F26" 
             name="Ink" 
             code="Głęboki Brąz" 
             desc="Główny tekst. Zamiast czerni." 
             darkText={false}
           />
           <ColorSwatch 
             color="#B59473" 
             name="Accent" 
             code="Mosiądz / Brąz" 
             desc="Elementy wyróżnione. Plakiety, linie." 
             darkText={false}
           />
        </div>
      </section>

      {/* Principle 2: Typography */}
      <section className="space-y-8 border-t border-[#3E2F26]/10 pt-12">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#3E2F26] flex items-center justify-center text-[#F4F1EA] font-bold font-technical text-xs">02</div>
          <h3 className="text-2xl font-bold font-['Cormorant_Garamond'] text-[#3E2F26]">
            System Typograficzny
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TypeCard 
            title="Narracja (Headlines)" 
            font="Cormorant Garamond" 
            example="Przywracamy rytm."
            role="Nagłówki, Hasła. Dramatyczny, szlachetny szeryf."
          />
          <TypeCard 
            title="Dokumentacja (Body)" 
            font="Old Standard TT" 
            example="Naprawa, nie tylko wymiana modułów."
            role="Treść główna. Styl starej encyklopedii."
          />
          <TypeCard 
            title="Dane Techniczne (CAT)" 
            font="JetBrains Mono" 
            example="TEL: 881 531 113"
            role="Metadane. Uppercase, Tracking 0.3em, Bold."
          />
        </div>
      </section>

      {/* Principle 3: Texture & Ambience */}
      <section className="space-y-8 border-t border-[#3E2F26]/10 pt-12">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#B59473] flex items-center justify-center text-[#F4F1EA] font-bold font-technical text-xs">03</div>
          <h3 className="text-2xl font-bold font-['Cormorant_Garamond'] text-[#3E2F26]">
            Fizyczność i Tekstura
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <Layers size={20} className="text-[#B59473]" />
                 <h4 className="font-technical text-xs font-bold uppercase tracking-widest">Grain Overlay</h4>
              </div>
              <p className="text-sm font-['Old_Standard_TT'] text-[#3E2F26]/70">
                Zawsze utrzymujemy subtelną warstwę ziarna (SVG fractal noise) o kryciu 0.05. Ma to imitować strukturę papieru czerpanego, a nie "płaski" ekran cyfrowy.
              </p>
           </div>
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <Sun size={20} className="text-[#B59473]" />
                 <h4 className="font-technical text-xs font-bold uppercase tracking-widest">Winieta (Vignette)</h4>
              </div>
              <p className="text-sm font-['Old_Standard_TT'] text-[#3E2F26]/70">
                Brzegi ekranu są przyciemnione ciepłym gradientem. Tworzy to efekt skupionego światła lampy warsztatowej na środku dokumentu (Focal Point).
              </p>
           </div>
        </div>
      </section>

      {/* Principle 4: Tone of Voice */}
      <section className="bg-[#3E2F26] text-[#F4F1EA] p-10 relative overflow-hidden mt-8">
         <PenTool className="absolute top-4 right-4 w-24 h-24 text-[#F4F1EA] opacity-5 rotate-12" />
         <h3 className="text-2xl font-bold font-['Cormorant_Garamond'] mb-6 relative z-10">
           Ton Komunikacji: "Inżynier, nie Sprzedawca"
         </h3>
         <div className="grid md:grid-cols-2 gap-8 relative z-10 font-['Old_Standard_TT']">
            <div>
               <p className="font-technical text-[9px] uppercase tracking-widest text-[#B59473] mb-2">ZABRONIONE</p>
               <ul className="space-y-2 opacity-70 text-sm line-through decoration-[#B59473]/50">
                  <li>"User-friendly"</li>
                  <li>"Nowoczesny design"</li>
                  <li>"Kompleksowe rozwiązania"</li>
                  <li>"Tania naprawa"</li>
               </ul>
            </div>
            <div>
               <p className="font-technical text-[9px] uppercase tracking-widest text-[#B59473] mb-2">ZALECANE</p>
               <ul className="space-y-2 font-bold text-sm">
                  <li>"Intuicyjna mechanika"</li>
                  <li>"Szlachetna estetyka"</li>
                  <li>"Precyzyjny proces"</li>
                  <li>"Rewitalizacja materii"</li>
               </ul>
            </div>
         </div>
      </section>

    </div>
  );
};

const ColorSwatch = ({ color, name, code, desc, darkText }: any) => (
  <div className="group cursor-pointer">
    <div className="h-32 w-full shadow-lg relative border border-[#3E2F26]/10 mb-4 transition-transform group-hover:-translate-y-1" style={{ backgroundColor: color }}>
       <div className={`absolute bottom-2 left-2 font-technical text-[9px] font-bold uppercase tracking-widest ${darkText ? 'text-[#3E2F26]' : 'text-[#F4F1EA] opacity-50'}`}>
         {color}
       </div>
    </div>
    <h4 className="font-technical text-xs font-bold uppercase tracking-widest text-[#3E2F26] mb-1">{name}</h4>
    <p className="text-xs font-bold text-[#B59473] mb-2">{code}</p>
    <p className="text-xs font-['Old_Standard_TT'] italic text-[#3E2F26]/60 leading-tight">{desc}</p>
  </div>
);

const TypeCard = ({ title, font, example, role }: any) => (
  <div className="border border-[#3E2F26]/10 p-6 bg-[#F9F7F5]">
     <h4 className="font-technical text-[9px] font-bold uppercase tracking-widest text-[#B59473] mb-4">{title}</h4>
     <p className="text-3xl mb-4 text-[#3E2F26]" style={{ fontFamily: font }}>Aa</p>
     <p className="text-lg mb-4 text-[#3E2F26] border-b border-[#3E2F26]/10 pb-4" style={{ fontFamily: font }}>{example}</p>
     <p className="text-xs font-['Old_Standard_TT'] text-[#3E2F26]/60 italic leading-relaxed">{role}</p>
  </div>
);