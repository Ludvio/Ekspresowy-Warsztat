
import React from 'react';
import { ArrowRight, Wrench, Star, Thermometer, Droplet, Cpu, Mic2, MapPin, Clock, CheckCircle2, Shield, Heart, Coffee, HelpCircle, ChevronDown } from 'lucide-react';

export const HeroMockup: React.FC = () => {
  return (
    <div className="space-y-0 text-[#3E2F26]">
      
      {/* =========================================================================================
          MODULE 1: HERO SECTION ("Przywracanie Rytmu")
      ========================================================================================= */}
      <section id="hero" className="relative p-8 md:p-16 lg:p-24 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[#F4F1EA] opacity-50 z-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#B59473]/30 to-transparent rounded-full blur-[100px] z-0 mix-blend-multiply"></div>

        {/* Smaczek: Manometr / Wskaźnik Ciśnienia */}
        <div className="absolute top-10 right-10 hidden lg:block">
          <div className="w-24 h-24 border-2 border-[#3E2F26]/20 rounded-full flex items-center justify-center relative">
             <div className="absolute w-0.5 h-10 bg-[#3E2F26] origin-bottom -rotate-[45deg] bottom-1/2 left-1/2"></div>
             <div className="w-1 h-1 bg-[#B59473] rounded-full z-10"></div>
             <span className="absolute bottom-2 font-technical text-[6px] tracking-widest uppercase">BAR</span>
             {[0, 2, 4, 6, 8, 10, 12, 14, 16].map((tick, i) => (
               <div key={tick} className="absolute inset-1" style={{ transform: `rotate(${(i * 22.5) - 90}deg)` }}>
                 <div className="w-1 h-[1px] bg-[#3E2F26]/40"></div>
               </div>
             ))}
          </div>
          <div className="mt-2 text-center">
             <p className="font-technical text-[8px] font-bold text-[#B59473] uppercase tracking-[0.2em]">Pressure Status</p>
             <p className="font-technical text-[7px] text-[#3E2F26]/50">CALIBRATED: 9.0 BAR</p>
          </div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-3 border border-[#3E2F26]/20 px-4 py-2 bg-[#F4F1EA] shadow-[4px_4px_0px_0px_rgba(62,47,38,0.1)]">
               <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-[#B59473] fill-[#B59473]" />)}
               </div>
               <span className="font-technical text-[10px] uppercase tracking-[0.2em] font-bold text-[#3E2F26]">
                 Google Rating: 5.0 (100+ Opinii)
               </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-['Cormorant_Garamond'] leading-[0.9] text-[#3E2F26] drop-shadow-sm">
              Precyzja,<br/>
              która przywraca <br/>
              <span className="text-[#B59473] italic font-['Old_Standard_TT']">smak życia.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-['Old_Standard_TT'] leading-relaxed text-[#3E2F26] max-w-xl border-l-4 border-[#B59473] pl-6 opacity-90">
              Serwis ekspresów ciśnieniowych. Specjalizacja: <strong>Jura, Nivona, Saeco</strong>. 
              Nie wymieniamy na ślepo. Diagnozujemy inżyniersko.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a href="tel:881531113" className="bg-[#3E2F26] text-[#F4F1EA] px-10 py-5 flex items-center justify-center gap-4 hover:bg-[#B59473] transition-all group shadow-[8px_8px_0_0_rgba(181,148,115,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                <span className="font-technical text-[11px] font-bold uppercase tracking-[0.3em]">Zgłoś Awarię (Tel)</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex flex-col justify-center px-4 border-l border-[#3E2F26]/10">
                 <p className="font-technical text-[9px] uppercase tracking-widest opacity-60 font-bold">Lokalizacja Bazy:</p>
                 <p className="font-['Old_Standard_TT'] font-bold text-lg">Kraków, ul. Pużaka 27</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
             <div className="relative aspect-[3/4] md:aspect-square transform rotate-2 transition-transform duration-700 group-hover:rotate-0">
                <div className="absolute inset-4 bg-[#F4F1EA] shadow-[20px_20px_60px_rgba(0,0,0,0.2)] border p-3 border-[#3E2F26]/10">
                   <div className="w-full h-full overflow-hidden relative grayscale-[0.2] sepia-[0.3] contrast-125">
                      <img 
                        src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?q=80&w=1000&auto=format&fit=crop" 
                        alt="Serce Systemu - Mechanizm Ekspresu" 
                        className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-[#5C4B3F] mix-blend-color opacity-20 pointer-events-none"></div>
                   </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#B59473] rounded-full mix-blend-multiply opacity-80 blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 -left-10 bg-[#F4F1EA] border border-[#3E2F26] p-4 shadow-xl -rotate-3 max-w-[180px] z-20">
                   <p className="font-technical text-[8px] uppercase tracking-widest mb-1 text-[#B59473] font-bold">Ref. 1920</p>
                   <p className="font-['Old_Standard_TT'] text-lg leading-none italic">"Serce musi być z miedzi."</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================================================================
          MODULE 2: SENSORY HOOK
      ========================================================================================= */}
      <section id="ritual" className="bg-[#F9F7F5] py-24 border-b border-[#3E2F26]/10 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
               <div className="bg-white p-4 shadow-2xl border border-[#3E2F26]/5 rotate-2">
                  <div className="aspect-video overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop" 
                        alt="Idealny poranek z kawą" 
                        className="w-full h-full object-cover grayscale-[0.1] sepia-[0.1] brightness-105"
                     />
                  </div>
                  <div className="mt-4 font-handwritten text-xl text-[#3E2F26]/80 px-2">
                    "Tego zapachu nie da się podrobić..."
                  </div>
               </div>
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#B59473]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
               <div className="space-y-2">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.3em] font-bold">Zmysły i Mechanika</span>
                  <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] leading-tight">Poranek, na który <br/><span className="italic text-[#B59473]">naprawdę czekasz.</span></h2>
               </div>
               <p className="font-['Old_Standard_TT'] text-xl leading-relaxed text-[#3E2F26]/80">
                  Zepsuty ekspres to nie tylko problem techniczny. To popsuty rytuał. Krzysztof Jabłoński przywraca sprawność maszynie, byś Ty mógł odzyskać swoje poranne święto.
               </p>
               
               <div className="grid sm:grid-cols-3 gap-8 pt-4">
                  <div className="space-y-3">
                     <div className="w-10 h-10 bg-[#3E2F26] flex items-center justify-center text-[#B59473] shadow-lg">
                        <Coffee size={20} />
                     </div>
                     <h4 className="font-bold font-['Cormorant_Garamond'] text-lg uppercase tracking-tight">Gęsta Crema</h4>
                     <p className="text-xs font-['Old_Standard_TT'] opacity-70">Tekstura, która świadczy o idealnym ciśnieniu parzenia.</p>
                  </div>
                  <div className="space-y-3">
                     <div className="w-10 h-10 bg-[#3E2F26] flex items-center justify-center text-[#B59473] shadow-lg">
                        <Thermometer size={20} />
                     </div>
                     <h4 className="font-bold font-['Cormorant_Garamond'] text-lg uppercase tracking-tight">Ciepło Filiżanki</h4>
                     <p className="text-xs font-['Old_Standard_TT'] opacity-70">Kalibracja termobloku gwarantuje temperaturę bez spalonego ziarna.</p>
                  </div>
                  <div className="space-y-3">
                     <div className="w-10 h-10 bg-[#3E2F26] flex items-center justify-center text-[#B59473] shadow-lg">
                        <Droplet size={20} />
                     </div>
                     <h4 className="font-bold font-['Cormorant_Garamond'] text-lg uppercase tracking-tight">Czysty Aromat</h4>
                     <p className="text-xs font-['Old_Standard_TT'] opacity-70">Brak osadów i zapachu plastiku. Tylko czyste ziarno.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 3: ETHICS & PRICING
      ========================================================================================= */}
      <section id="pricing" className="bg-[#EBE7DE] py-24 border-y border-[#3E2F26]/10 relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
        <div className="max-w-6xl mx-auto px-8 relative z-10">
           <div className="text-center mb-16">
              <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.3em] font-bold">Transparentność Finansowa</span>
              <h2 className="text-4xl md:text-5xl font-bold font-['Cormorant_Garamond'] mt-4">Etyka, która oszczędza Twój portfel.</h2>
           </div>
           <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="bg-[#D8D3CC] p-8 shadow-inner border border-[#3E2F26]/10 opacity-70 grayscale relative rotate-[-1deg] backdrop-blur-sm">
                 <div className="absolute -top-3 -left-3 bg-[#5C4B3F] text-[#F4F1EA] px-3 py-1 font-technical text-[9px] uppercase tracking-widest">Inne Serwisy</div>
                 <h3 className="font-['Old_Standard_TT'] font-bold text-xl mb-4 border-b border-[#3E2F26]/20 pb-2">Wycena Autoryzowana</h3>
                 <div className="space-y-4 font-technical text-xs text-[#3E2F26]/70">
                    <div className="flex justify-between">
                       <span>DIAGNOZA:</span>
                       <span>WYMIANA MODUŁU</span>
                    </div>
                    <div className="flex justify-between">
                       <span>CZĘŚCI:</span>
                       <span>NOWE (OEM)</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-4 border-t border-dashed border-[#3E2F26]/30">
                       <span>SUMA:</span>
                       <span className="line-through decoration-[#B59473]">840.00 PLN</span>
                    </div>
                 </div>
              </div>
              <div className="bg-[#F4F1EA] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#B59473]/30 relative rotate-[1deg] scale-105 z-10">
                 <div className="absolute -top-4 -right-4 bg-[#B59473] text-[#F4F1EA] px-4 py-2 font-technical text-[10px] uppercase tracking-widest shadow-md">Ekspresowy Warsztat</div>
                 <h3 className="font-['Cormorant_Garamond'] font-bold text-3xl mb-2 text-[#3E2F26]">Nasza Wycena</h3>
                 <p className="font-['Old_Standard_TT'] italic text-sm mb-6 opacity-70">Opieramy się na regeneracji, nie tylko wymianie.</p>
                 <div className="space-y-4 font-technical text-sm text-[#3E2F26]">
                    <div className="flex justify-between items-center bg-[#B59473]/10 p-2 rounded-sm border-l-2 border-[#B59473]">
                       <span className="font-bold">DIAGNOZA:</span>
                       <span>REGENERACJA (+ CZYSZCZENIE)</span>
                    </div>
                    <div className="flex justify-between items-center p-2">
                       <span className="font-bold">METODA:</span>
                       <span>NAPRAWA ELEMENTU</span>
                    </div>
                    <div className="flex justify-between items-center text-2xl font-bold pt-6 border-t-2 border-[#3E2F26] text-[#B59473]">
                       <span>SUMA:</span>
                       <span>450.00 PLN</span>
                    </div>
                 </div>
                 <div className="mt-8 pt-6 border-t border-[#3E2F26]/10">
                    <div className="flex gap-2 text-[#B59473] mb-2">
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" />
                    </div>
                    <p className="font-['Old_Standard_TT'] italic text-sm leading-relaxed">
                      "Naprawili mi Krupsa za 450 zł gdzie wycena w 'autoryzowanym' serwisie była na 840 zł. Rzeczowa rozmowa, naprawiają jeśli się da zamiast od razu wymieniać."
                    </p>
                    <p className="text-right font-technical text-[9px] font-bold uppercase mt-2 opacity-50">— Sebastian Czarny Ł.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* =========================================================================================
          MODULE 4: DIAGNOSTICS PROCESS
      ========================================================================================= */}
      <section id="process" className="bg-[#231E1A] text-[#EBE7DE] py-24 relative overflow-hidden border-b border-[#B59473]/20">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay">
            <img 
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2000&auto=format&fit=crop" 
                alt="Technical Schematics" 
                className="w-full h-full object-cover grayscale invert"
            />
        </div>
        <div className="absolute inset-0 bg-[#3E2F26] opacity-40 mix-blend-color z-0"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                 <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.3em] font-bold">Standard Operacyjny</span>
                 <h2 className="text-4xl md:text-5xl font-bold font-['Cormorant_Garamond'] mt-4 text-[#F4F1EA]">Trajektoria Naprawy</h2>
              </div>
              <div className="hidden md:block w-32 h-px bg-[#B59473]/30"></div>
           </div>

           <div className="grid md:grid-cols-3 gap-12">
              <div className="group border-l border-[#B59473]/20 pl-8 hover:border-[#B59473] transition-colors duration-500">
                 <div className="flex items-center gap-4 mb-6">
                    <span className="font-technical font-bold text-3xl text-[#B59473] opacity-50 group-hover:opacity-100 transition-opacity">01</span>
                    <h3 className="font-bold font-['Cormorant_Garamond'] text-2xl">Triage</h3>
                 </div>
                 <p className="font-['Old_Standard_TT'] text-lg opacity-60 leading-relaxed mb-6">
                   Wstępna diagnoza zdalna. Szanujemy Twój czas. Często już po dźwięku pompy wiemy, co jest grane.
                 </p>
                 <div className="bg-[#F4F1EA]/5 p-4 relative text-sm italic opacity-80 border-l border-[#B59473]">
                    "Pan ma łeb na karku... Spojrzał i naprawił."
                 </div>
              </div>
              <div className="group border-l border-[#B59473]/20 pl-8 hover:border-[#B59473] transition-colors duration-500">
                 <div className="flex items-center gap-4 mb-6">
                    <span className="font-technical font-bold text-3xl text-[#B59473] opacity-50 group-hover:opacity-100 transition-opacity">02</span>
                    <h3 className="font-bold font-['Cormorant_Garamond'] text-2xl">Interwencja</h3>
                 </div>
                 <p className="font-['Old_Standard_TT'] text-lg opacity-60 leading-relaxed mb-6">
                   Rozbieramy ekspres na czynniki pierwsze. We wtorki zamykamy serwis dla klientów, by skupić się na najtrudniejszej elektronice.
                 </p>
                 <div className="flex gap-2 text-[#B59473] font-technical text-[10px] uppercase tracking-widest items-center opacity-80">
                    <Wrench size={12} /> <span>Precyzyjne Narzędzia</span>
                 </div>
              </div>
              <div className="group border-l border-[#B59473]/20 pl-8 hover:border-[#B59473] transition-colors duration-500">
                 <div className="flex items-center gap-4 mb-6">
                    <span className="font-technical font-bold text-3xl text-[#B59473] opacity-50 group-hover:opacity-100 transition-opacity">03</span>
                    <h3 className="font-bold font-['Cormorant_Garamond'] text-2xl">Sterylizacja</h3>
                 </div>
                 <p className="font-['Old_Standard_TT'] text-lg opacity-60 leading-relaxed mb-6">
                   Ekspres wraca czystszy niż w dniu zakupu. Usuwamy osady biologiczne i kamień z najgłębszych rurek.
                 </p>
                 <div className="bg-[#F4F1EA]/5 p-4 relative text-sm italic opacity-80 border-l border-[#B59473]">
                    "Wygląda i parzy jak nowy."
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* =========================================================================================
          MODULE: WARSZTAT KRZYSZTOFA JABŁOŃSKIEGO
      ========================================================================================= */}
      <section id="workshop" className="py-24 px-8 bg-[#F4F1EA] border-b border-[#3E2F26]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative group">
              <div className="bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-[#3E2F26]/5 rotate-[-2deg] transition-transform group-hover:rotate-0 duration-500">
                 <div className="aspect-[4/3] overflow-hidden grayscale-[0.3] sepia-[0.2] contrast-110">
                    {/* Zmienione na autentyczne zdjęcie rzemieślnicze / narzędziowe */}
                    <img 
                      src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=1000&auto=format&fit=crop" 
                      alt="Elementy techniczne ekspresu i narzędzia warsztatowe" 
                      className="w-full h-full object-cover"
                    />
                 </div>
                 <div className="mt-6 font-handwritten text-xl text-[#3E2F26] opacity-90 pb-2">
                    "Szanuję twoją maszynę"
                 </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-[#B59473] text-[#F4F1EA] p-4 shadow-xl z-20">
                 <Heart size={24} className="animate-pulse" />
              </div>
           </div>

           <div className="space-y-8">
              <div className="space-y-2">
                 <p className="font-technical text-[9px] font-bold uppercase tracking-[0.3em] text-[#B59473]">
                    OFFICINA: KRZYSZTOF JABŁOŃSKI
                 </p>
                 <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] text-[#3E2F26]">
                    Rzetelność, nie <br/><span className="italic text-[#B59473]">automatyzm.</span>
                 </h2>
              </div>
              
              <div className="font-['Old_Standard_TT'] text-xl italic text-[#3E2F26] leading-relaxed border-l-4 border-[#B59473] pl-8 relative">
                "W moim warsztacie nie ma miejsca na wymienianie części 'na ślepo'. Rozbieram, mierzę, sprawdzam. Szanuję Twoją maszynę, bo wiem, że dla Ciebie to coś więcej niż AGD – to element Twojego domu i poranka. Jeśli uszczelka za 10 zł przywróci sprawność, nie zaproponuję modułu za 1000 zł. Uczciwość inżynierska to mój jedyny standard."
                
                {/* Smaczek: Własny podpis */}
                <div className="mt-6 text-right">
                   <p className="font-handwritten text-2xl text-[#3E2F26] rotate-[-3deg]">Krzysztof Jabłoński</p>
                   <p className="font-technical text-[8px] uppercase tracking-widest opacity-40">Mstr. Inżynier Mechanik</p>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                 <div className="flex items-center gap-4">
                    <CheckCircle2 size={18} className="text-[#B59473]" />
                    <span className="font-technical text-[10px] uppercase tracking-widest font-bold">Indywidualna Karta Diagnostyczna</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <CheckCircle2 size={18} className="text-[#B59473]" />
                    <span className="font-technical text-[10px] uppercase tracking-widest font-bold">Bezpośredni Kontakt z Inżynierem</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* =========================================================================================
          MODULE 5: CLINICAL SYMPTOMS
      ========================================================================================= */}
      <section id="symptoms" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.3em] font-bold">Katalog Usterek</span>
           <h2 className="text-4xl md:text-5xl font-bold font-['Cormorant_Garamond'] mt-4 text-[#3E2F26]">Co dolega Twojej maszynie?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           <SymptomCard 
             icon={<Droplet size={32} />} 
             title="Wyciek Wody" 
             desc="Kałuża pod ekspresem? Uszczelka tłoka czy pęknięty wężyk? Diagnozujemy szczelność układu."
             link="Naprawa Hydrauliki"
           />
           <SymptomCard 
             icon={<Thermometer size={32} />} 
             title="Zimna Kawa" 
             desc="Kawa jest letnia? Awaria grzałki, czujnika NTC lub zakamieniony termoblok."
             link="Kalibracja Temperatury"
           />
           <SymptomCard 
             icon={<Mic2 size={32} />} 
             title="Głośna Praca" 
             desc="Młynek rzęzi? Prawdopodobnie zużyte żarna lub ciało obce. Regenerujemy napęd."
             link="Serwis Młynka"
           />
           <SymptomCard 
             icon={<Cpu size={32} />} 
             title="Błędy Systemu" 
             desc="Komunikaty Error 8, Error 2? Problemy z elektroniką sterującą lub pozycjonowaniem bloku."
             link="Diagnostyka Cyfrowa"
           />
        </div>
      </section>

      {/* =========================================================================================
          MODULE 6: TRANSFORMATION (Druga Młodość)
      ========================================================================================= */}
      <section id="youth" className="bg-[#3E2F26] text-[#F4F1EA] py-24 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <Shield size={400} />
         </div>
         <div className="max-w-6xl mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1">
               <h2 className="text-5xl md:text-6xl font-bold font-['Cormorant_Garamond'] leading-none">
                 Druga <span className="text-[#B59473] italic">Młodość.</span>
               </h2>
               
               {/* Smaczek: Motto / Credo */}
               <div className="bg-[#B59473]/10 border-l-2 border-[#B59473] p-6 italic font-['Old_Standard_TT'] text-2xl leading-tight">
                 "Materia nie umiera. Materia potrzebuje jedynie kalibracji."
               </div>

               <p className="text-xl font-['Old_Standard_TT'] opacity-80 leading-relaxed">
                 "Twoja maszyna nie jest stara. Jest po prostu zaniedbana." 
               </p>
               <div className="h-px w-24 bg-[#B59473]/50"></div>
               <p className="text-lg font-['Old_Standard_TT'] opacity-80 leading-relaxed">
                 Klienci często odbierają sprzęt i dzwonią z pytaniem: "Co zrobiliście, że kawa smakuje lepiej niż w dniu zakupu?". 
               </p>

               {/* Smaczek: Katalog Detalu (Metryka Części) */}
               <div className="grid grid-cols-3 gap-2 mt-8 opacity-40">
                  <div className="border border-[#F4F1EA]/20 p-2 text-center">
                    <p className="font-technical text-[6px] uppercase tracking-widest">O-RING PRO</p>
                    <div className="h-4 w-4 rounded-full border border-[#F4F1EA]/40 mx-auto mt-1"></div>
                  </div>
                  <div className="border border-[#F4F1EA]/20 p-2 text-center">
                    <p className="font-technical text-[6px] uppercase tracking-widest">VALVE V2</p>
                    <div className="w-4 h-0.5 bg-[#F4F1EA]/40 mx-auto mt-3"></div>
                  </div>
                  <div className="border border-[#F4F1EA]/20 p-2 text-center">
                    <p className="font-technical text-[6px] uppercase tracking-widest">PUMP UNIT</p>
                    <div className="w-3 h-3 border-l border-b border-[#F4F1EA]/40 mx-auto mt-2"></div>
                  </div>
               </div>

               <div className="bg-[#F4F1EA]/10 p-6 backdrop-blur-sm border border-[#F4F1EA]/20 mt-8">
                  <div className="flex gap-1 text-[#B59473] mb-3">
                     {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="italic font-['Old_Standard_TT'] text-lg">
                    "Ekspres nie działał tak nawet jak był nowy! Zdecydowanie polecam!"
                  </p>
                  <p className="font-technical text-[10px] uppercase tracking-widest mt-4 text-[#B59473]">
                    — Szymon Szlachta
                  </p>
               </div>
            </div>
            <div className="relative h-[600px] order-1 md:order-2 flex justify-center items-end">
               <div className="relative w-full h-full max-w-md mx-auto">
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#B59473] blur-[100px] opacity-20"></div>
                   {/* Poprawiony link do zdjęcia (Druga Młodość) */}
                   <img 
                    src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1000&auto=format&fit=crop" 
                    alt="Zbliżenie na precyzyjny detal odrestaurowanego ekspresu" 
                    className="w-full h-full object-contain drop-shadow-2xl grayscale-[0.2] contrast-110 brightness-90"
                   />
                   <div className="absolute bottom-10 -right-4 bg-[#231E1A] border border-[#B59473] p-3 shadow-lg flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-technical text-[9px] uppercase tracking-widest text-[#F4F1EA]">UKŁAD: BIOLOGICZNIE CZYSTY</span>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 7: FAQ SECTION
      ========================================================================================= */}
      <section id="faq" className="py-24 px-8 bg-[#F4F1EA] border-b border-[#3E2F26]/10">
         <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
               <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.3em] font-bold">Archiwum Wiedzy</span>
               <h2 className="text-4xl font-bold font-['Cormorant_Garamond'] mt-4 text-[#3E2F26]">Częste Pytania</h2>
            </div>
            <div className="space-y-4">
               <FAQItem 
                 question="Czy warto naprawiać 10-letni ekspres?" 
                 answer="Zdecydowanie tak. Starsze modele Jury czy Nivony mają często solidniejszą, w pełni naprawialną hydraulikę niż dzisiejsze budżetowe konstrukcje. Po rewitalizacji potrafią służyć kolejne lata."
               />
               <FAQItem 
                 question="Ile trwa standardowa rewitalizacja?" 
                 answer="Zazwyczaj od 3 do 5 dni roboczych. We wtorki serwis jest zamknięty dla klientów – to czas 'pracy głębokiej', gdzie skupiam się wyłącznie na najbardziej skomplikowanych naprawach elektroniki."
               />
               <FAQItem 
                 question="Czy muszę przywozić ekspres osobiście?" 
                 answer="Najlepiej tak – pozwala to na wstępny triage przy odbiorze. Jeśli jednak nie masz takiej możliwości, skontaktuj się ze mną telefonicznie, ustalimy bezpieczną formę dostarczenia sprzętu."
               />
               <FAQItem 
                 question="Co obejmuje 6-miesięczny pakt gwarancyjny?" 
                 answer="Gwarancja obejmuje wszystkie wykonane przeze mnie usługi oraz wymienione podzespoły. Moim celem jest Twój spokój i sprawność maszyny, dlatego biorę pełną odpowiedzialność za moją pracę."
               />
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 8: FOOTER LOGISTICS
      ========================================================================================= */}
      <section id="contact" className="py-16 px-8 max-w-7xl mx-auto">
         <div className="border border-[#3E2F26] p-8 md:p-12 relative bg-[#F9F7F5]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E2F26] text-[#F4F1EA] px-6 py-2 shadow-lg">
               <span className="font-technical text-[10px] uppercase tracking-[0.3em] font-bold">Officina Mechanica</span>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
               <div className="space-y-4">
                  <div className="flex justify-center md:justify-start items-center gap-3">
                     <MapPin className="text-[#B59473]" />
                     <h4 className="font-bold font-['Cormorant_Garamond'] text-xl">Baza Operacyjna</h4>
                  </div>
                  <p className="font-['Old_Standard_TT'] text-lg">
                    ul. Kazimierza Pużaka 27<br/>
                    31-316 Kraków
                  </p>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-center md:justify-start items-center gap-3">
                     <Clock className="text-[#B59473]" />
                     <h4 className="font-bold font-['Cormorant_Garamond'] text-xl">Harmonogram</h4>
                  </div>
                  <div className="font-technical text-xs space-y-2">
                     <div className="flex justify-between md:justify-start md:gap-8">
                        <span className="opacity-50">PN-PT:</span>
                        <span className="font-bold">09:00 - 17:00</span>
                     </div>
                     <div className="text-[#B59473]">WTOREK: PRACA GŁĘBOKA</div>
                  </div>
               </div>
               <div className="flex flex-col justify-center items-center md:items-end">
                  <a href="tel:881531113" className="block text-3xl font-bold font-['Cormorant_Garamond'] hover:text-[#B59473] transition-colors mb-2">
                    881 531 113
                  </a>
                  <span className="font-technical text-[9px] uppercase tracking-[0.3em] opacity-50">Linia Techniczna</span>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

const SymptomCard = ({ icon, title, desc, link }: any) => (
  <div className="bg-[#F4F1EA] border border-[#3E2F26]/10 p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(62,47,38,0.15)] group relative">
     <div className="text-[#B59473] mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
     <h3 className="font-bold font-['Cormorant_Garamond'] text-2xl mb-3 text-[#3E2F26]">{title}</h3>
     <p className="font-['Old_Standard_TT'] text-sm leading-relaxed opacity-70 mb-6 text-[#3E2F26]">{desc}</p>
     <div className="flex items-center gap-2 text-[#B59473] font-technical text-[9px] uppercase tracking-widest font-bold">
        <span>{link}</span>
        <ArrowRight size={12} />
     </div>
     <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-[#B59473] opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
);

const FAQItem = ({ question, answer }: any) => {
   const [isOpen, setIsOpen] = React.useState(false);
   return (
      <div className="border border-[#3E2F26]/10 bg-white shadow-sm overflow-hidden">
         <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-left p-6 flex justify-between items-center group hover:bg-[#B59473]/5 transition-colors"
         >
            <span className="font-bold font-['Cormorant_Garamond'] text-xl text-[#3E2F26]">{question}</span>
            <ChevronDown className={`text-[#B59473] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
         </button>
         <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'}`}>
            <p className="font-['Old_Standard_TT'] text-sm leading-relaxed text-[#3E2F26]/70 italic">
               {answer}
            </p>
         </div>
      </div>
   );
};
