
import React from 'react';
import { 
  ArrowRight, 
  Wrench, 
  Shield, 
  AlertCircle, 
  Cpu, 
  Thermometer, 
  Droplet, 
  Anchor, 
  Settings, 
  Zap, 
  Box, 
  Truck, 
  Briefcase, 
  ClipboardCheck, 
  Search, 
  Gauge, 
  Link as LinkIcon, 
  Phone, 
  Activity,
  PenTool,
  CheckCircle2,
  ChevronRight,
  Coffee,
  HardDrive,
  ChevronDown
} from 'lucide-react';

export const PhilipsService: React.FC = () => {
  const scrollToDiagnostics = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('diagnostics');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0 text-[#3E2F26] animate-in fade-in duration-1000 bg-[#F4F1EA] relative">
      
      {/* =========================================================================================
          WINIETA GŁÓWNA (SEO: Serwis Philips Kraków - LatteGo)
      ========================================================================================= */}
      <section className="relative p-8 md:p-16 lg:p-24 overflow-hidden min-h-[85vh] flex flex-col justify-center border-b border-[#3E2F26]/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B59473]/10 rounded-full blur-[150px] -z-10"></div>
        
        {/* Narożniki Inżynieryjne */}
        <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-[#B59473]/40"></div>
        <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-[#B59473]/40"></div>

        <div className="relative z-10 max-w-5xl">
           <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#B59473]"></div>
              <span className="font-technical text-[9px] uppercase tracking-[0.5em] font-bold text-[#B59473]">REJESTR TECHNICZNY PHILIPS: KRK/PH/2025</span>
           </div>

           <h1 className="text-7xl md:text-9xl font-bold font-['Cormorant_Garamond'] leading-[0.8] mb-10 tracking-tighter text-[#3E2F26]">
             Logika <br/>
             <span className="text-[#B59473] italic">Codzienności.</span>
           </h1>

           <p className="text-2xl md:text-3xl font-['Old_Standard_TT'] italic leading-relaxed max-w-3xl border-l-8 border-[#3E2F26] pl-10 py-4 opacity-95">
             Skuteczna naprawa i rewitalizacja systemów <span className="text-[#B59473] font-bold">Philips LatteGo</span>. Od popularnej serii 2200 po flagowe jednostki 5400. Przywracamy szlachetną kulturę pracy najczęściej wybieranym ekspresom w Krakowie.
           </p>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mt-16 border border-[#3E2F26]/10 bg-[#3E2F26]/5 p-1 shadow-2xl">
              <DataBox label="REJESTR SERII" value="LATTEGO 5400 / 4300 / 3200 / 2200" />
              <DataBox label="SYSTEM MLEKA" value="BEZPRZEWODOWY LATTEGO" />
              <DataBox label="ŻARNA" value="100% CERAMICZNE" />
              <DataBox label="STREFA" value="SERWIS KRAKÓW I OKOLICE" />
           </div>
        </div>

        {/* Manometr Inżynieryjny */}
        <div className="absolute bottom-10 right-10 hidden lg:block group">
          <div className="w-32 h-32 border-2 border-[#3E2F26]/20 rounded-full flex items-center justify-center relative bg-[#F4F1EA]">
             <div className="absolute w-0.5 h-12 bg-[#B59473] origin-bottom -rotate-[35deg] bottom-1/2 left-1/2 transition-transform duration-1000 group-hover:rotate-[20deg]"></div>
             <div className="w-1.5 h-1.5 bg-[#3E2F26] rounded-full z-10"></div>
             <span className="absolute top-6 font-technical text-[7px] tracking-widest uppercase text-[#B59473] font-bold">Ekstrakcja</span>
             <span className="absolute bottom-6 font-technical text-[7px] tracking-widest uppercase text-[#3E2F26]">Optimum 15 BAR</span>
             {[0, 2, 4, 6, 8, 10, 12, 14, 16].map((tick, i) => (
               <div key={tick} className="absolute inset-2" style={{ transform: `rotate(${(i * 22.5) - 90}deg)` }}>
                 <div className="w-1.5 h-[1px] bg-[#3E2F26]/40"></div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* =========================================================================================
          MODUŁ 2: INDEKS MODELI PHILIPS (SEO: Seria 5400, 3200, 2200)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#EBE7DE] border-b border-[#3E2F26]/10 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
             <div className="space-y-4">
                <span className="font-technical text-[9px] uppercase tracking-[0.4em] font-bold text-[#B59473]">OFFICIAL PHILIPS CLASSIFICATION ARCHIVE</span>
                <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Indeks Aparatury Philips</h2>
             </div>
             <div className="font-technical text-[9px] uppercase tracking-[0.3em] opacity-40 text-right">
                REJESTR 2025.B <br/> EKSPRESOWY WARSZTAT KRK
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModelSeriesCard 
              series="SERIA 5400 / 5500"
              tag="NAJWYŻSZA KLASA"
              models="EP5441, EP5444, EP5546"
              tech="LatteGo, CoffeeEqualizer, Ceramic"
              diagInfo="Serwis elektroniki sterującej, kalibracja młynka i regeneracja bloku zaparzającego."
              onScroll={scrollToDiagnostics}
            />
            <ModelSeriesCard 
              series="SERIA 4300"
              tag="WYŻSZA ŚREDNIA"
              models="EP4347, EP4356, EP4321"
              tech="LatteGo Basic, TFT Display"
              diagInfo="Optymalizacja układu wysokiego ciśnienia i czyszczenie systemów spieniających."
              onScroll={scrollToDiagnostics}
            />
            <ModelSeriesCard 
              series="SERIA 3200 / 3300"
              tag="KLASA ŚREDNIA"
              models="EP3246, EP3220, EP3343"
              tech="LatteGo, Silent Brew, AquaClean"
              diagInfo="Konserwacja młynka ceramicznego i eliminacja nieszczelności bojlera."
              onScroll={scrollToDiagnostics}
            />
            <ModelSeriesCard 
              series="SERIA 2200 / 2300"
              tag="KLASA EKONOMICZNA"
              models="EP2220, EP2231, EP2331"
              tech="AquaClean Logic, Compact Design"
              diagInfo="Podstawowe przeglądy uszczelnień i usuwanie zatorów wapiennych."
              onScroll={scrollToDiagnostics}
            />
            <ModelSeriesCard 
              series="SERIA 1200 / 800"
              tag="KLASA PODSTAWOWA"
              models="HD8824, HD8829, EP0820"
              tech="Minimalist Automation"
              diagInfo="Wymiana uszczelek tłoka i odkamienianie termobloków."
              onScroll={scrollToDiagnostics}
            />
            <div className="bg-[#3E2F26] p-10 flex flex-col justify-center items-center text-center space-y-6 relative overflow-hidden group">
               <Anchor className="absolute -bottom-10 -right-10 text-[#B59473] opacity-5 group-hover:rotate-12 transition-transform duration-700" size={150} />
               <h4 className="text-2xl font-bold font-['Cormorant_Garamond'] text-[#F4F1EA] uppercase tracking-tight">Potrzebujesz Pomocy?</h4>
               <p className="font-['Old_Standard_TT'] text-sm italic text-[#F4F1EA]/60">Szybka diagnoza Twojego Philipsa w 24h.</p>
               <a href="tel:881531113" className="w-full border border-[#B59473] py-4 font-technical text-[10px] font-bold uppercase tracking-widest text-[#B59473] hover:bg-[#B59473] hover:text-[#3E2F26] transition-all">
                  881 531 113
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================================
          MODUŁ 3: PROTOKÓŁ NAPRAWCZY (SEO: Naprawa Philips Kraków)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#F4F1EA] border-b border-[#3E2F26]/10">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.4em] font-bold">LOGIKA SERWISOWA: ŚCIEŻKA PHILIPS</span>
                  <h2 className="text-5xl md:text-7xl font-bold font-['Cormorant_Garamond'] tracking-tighter leading-none">Skuteczna <br/><span className="text-[#B59473] italic">Interwencja.</span></h2>
               </div>
               <p className="font-['Old_Standard_TT'] text-xl leading-relaxed text-[#3E2F26]/85 max-w-xl">
                  Twój Philips LatteGo stracił ciśnienie lub przestał spieniać mleko? W Krakowie oferujemy pełen cykl rewitalizacji najpopularniejszych automatów Philips. Od precyzyjnej diagnozy po końcowe testy sensoryczne.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-10">
                  <RepairStep num="01" title="Diagnostyka Błędów" desc="Analiza kodów E01-E06 i weryfikacja logiki PCB." />
                  <RepairStep num="02" title="Pełna Rozbiórka" desc="Sekcja urządzenia i czyszczenie wewnętrzne." />
                  <RepairStep num="03" title="Rewitalizacja Bloku" desc="Wymiana uszczelnień i smarowanie atestowane." />
                  <RepairStep num="04" title="Serwis Młynka" desc="Regulacja żaren ceramicznych do poziomu zero." />
                  <RepairStep num="05" title="Odkamienianie" desc="Chemiczna dekontaminacja termobloku." />
                  <RepairStep num="06" title="Testy LatteGo" desc="Weryfikacja jakości spieniania mikro-pianki." />
               </div>
            </div>

            <div className="relative group">
               <div className="bg-[#3E2F26] p-1 shadow-2xl rotate-1 transition-transform group-hover:rotate-0 duration-700">
                  <div className="bg-[#EBE7DE] p-8 space-y-8 border border-[#3E2F26]/10">
                     <div className="flex justify-between items-center border-b border-[#3E2F26]/10 pb-4">
                        <span className="font-technical text-[9px] font-bold text-[#B59473] uppercase tracking-widest">DIAGRAM: PHILIPS BREW UNIT</span>
                        <Search size={16} className="text-[#3E2F26]/30" />
                     </div>
                     <div className="aspect-[4/3] bg-white border border-[#3E2F26]/10 p-4 relative overflow-hidden grayscale contrast-125 brightness-95 opacity-80">
                        <img 
                          src="https://images.unsplash.com/photo-1552691021-7043334e0b51?q=80&w=1000&auto=format&fit=crop" 
                          alt="Zaparzacz Philips po regeneracji" 
                          className="w-full h-full object-cover mix-blend-multiply"
                        />
                        <div className="absolute inset-0 bg-[#B59473]/10 mix-blend-color"></div>
                     </div>
                     <p className="font-['Old_Standard_TT'] text-sm italic opacity-60 leading-relaxed text-center text-[#3E2F26]">
                        "Zaparzacz Philips wymaga systematycznej konserwacji smarem spożywczym co 500 kaw."
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODUŁ 4: REJESTR BŁĘDÓW PHILIPS (Szczegółowe procedury)
      ========================================================================================= */}
      <section id="diagnostics" className="py-32 px-8 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
               <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.5em] font-bold">PROTOKÓŁ OPERACYJNY: PHILIPS ERROR LOG</span>
               <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Diagnostyka Aparatury</h2>
            </div>
            <div className="font-technical text-[9px] uppercase tracking-[0.3em] opacity-40 text-right">
               SPEC: LATTEGO 5400 / 3200 / 2200 <br/> KRAKÓW HUB SERWISOWY
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FaultDetailed 
               code="ERROR 01" 
               title="Młynek Zablokowany" 
               procedure="Żarna ceramiczne unieruchomione przez ciało obce lub nadmiar pyłu. Procedura: Demontaż młynka, czyszczenie mechaniczne, weryfikacja czujnika Halla. Ponowna kalibracja stopnia mielenia."
               icon={<Settings size={22} />}
               components={["Młynek Ceramiczny", "Sensor Halla", "Motor 230V"]}
            />
            <FaultDetailed 
               code="ERROR 03 / 04" 
               title="Pozycjonowanie Bloku" 
               procedure="Problem z ruchem zaparzacza. Procedura: Smarowanie prowadnic ramy, wymiana uszczelki tłoka, weryfikacja mikrostyków krańcowych. Kontrola przekładni napędowej."
               icon={<Activity size={22} />}
               components={["Brew Unit", "Przekładnia", "Mikrostyk"]}
            />
            <FaultDetailed 
               code="ERROR 05 / 06" 
               title="Błąd Termiczny / Grzanie" 
               procedure="Timeout nagrzewania bojlera. Procedura: Pomiar rezystancji termobloku (norma 1450W), weryfikacja czujnika NTC i bezpieczników termicznych. Częsta przyczyna: zator wapienny."
               icon={<Thermometer size={22} />}
               components={["Termoblok Inox", "Czujnik NTC", "Triak Mocy"]}
            />
            <FaultDetailed 
               code="POOR FOAM" 
               title="Brak Spieniania LatteGo" 
               procedure="Problem z mikro-pianką w systemie LatteGo. Procedura: Dekontaminacja ciśnieniowa wylewki, sprawdzenie szczelności uszczelki zbiornika, weryfikacja ciśnienia pary (elektrozawór)."
               icon={<Droplet size={22} />}
               components={["Zbiornik LatteGo", "Elektrozawór Pary", "Wylewka"]}
            />
         </div>
      </section>

      {/* =========================================================================================
          MODUŁ 5: KATALOG DETALU OEM (Philips Stock)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#EBE7DE] border-y border-[#3E2F26]/10">
         <div className="max-w-7xl mx-auto space-y-20">
            <div className="flex justify-between items-end">
               <div className="space-y-4">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.5em] font-bold">INWENTARZ CZĘŚCI ZAMIENNYCH PHILIPS</span>
                  <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Katalog Detalu</h2>
               </div>
               <div className="hidden md:block font-technical text-[9px] uppercase tracking-[0.3em] opacity-40 text-right">
                  STATUS MAGAZYNOWY: <span className="text-green-600 font-bold">DOSTĘPNE</span>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
               <PartPlaque id="PH-222" name="AquaClean Filter" desc="Filtr wapienny RFID" />
               <PartPlaque id="PH-540" name="LatteGo Cup" desc="Pojemnik na mleko kpl." />
               <PartPlaque id="PH-301" name="Ceramic Burr" desc="Żarna młynka (kpl)" />
               <PartPlaque id="PH-415" name="Group Seal" desc="Uszczelka tłoka EPDM" />
               <PartPlaque id="PH-520" name="Display Unit" desc="Panel TFT (Seria 5400)" />
               <PartPlaque id="PH-999" name="Cleaning Kit" desc="Zestaw smarów i chemii" />
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODUŁ 6: KONSERWACJA I ODKAMIENIANIE
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#F4F1EA]">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
            <div className="space-y-8">
               <div className="space-y-2">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.4em] font-bold">DŁUGA ŻYWOTNOŚĆ APARATURY</span>
                  <h2 className="text-4xl font-bold font-['Cormorant_Garamond'] text-[#3E2F26]">Rytuał <br/><span className="italic text-[#B59473]">Konserwacji.</span></h2>
               </div>
               <p className="font-['Old_Standard_TT'] text-lg italic opacity-80 leading-relaxed text-[#3E2F26]">
                  System AquaClean znacząco wydłuża interwały odwapniania, jednak nie zwalnia z dbałości o blok zaparzający. W krakowskim warsztacie przywracamy blask i higienę każdemu elementowi Philipsa.
               </p>
               <div className="pt-8">
                  <div className="flex items-center gap-4 border-l-2 border-[#B59473] pl-6 py-2">
                     <Droplet size={24} className="text-[#B59473]" />
                     <div className="flex flex-col">
                        <span className="font-technical text-[9px] font-bold uppercase tracking-widest text-[#3E2F26]">ANALIZA TWARDOŚCI</span>
                        <span className="font-['Old_Standard_TT'] text-xs opacity-60 italic text-[#3E2F26]">Konfiguracja logiczna filtrów.</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
               <ServiceFeature 
                  title="Serwis LatteGo" 
                  desc="Dekontaminacja bezprzewodowego systemu mlecznego. Usuwanie biofilmu z najmniejszych szczelin."
                  icon={<Zap size={20} />}
               />
               <ServiceFeature 
                  title="Rewitalizacja Bloku" 
                  desc="Mycie ultradźwiękowe sit bloku i smarowanie prowadnic. Klucz do cichej pracy Philipsa."
                  icon={<Settings size={20} />}
               />
               <ServiceFeature 
                  title="Kalibracja Młynka" 
                  desc="Ustawienie fabrycznej granulacji mielenia. Maksymalizacja ekstrakcji aromatów."
                  icon={<Activity size={20} />}
               />
               <ServiceFeature 
                  title="Wsparcie B2B" 
                  desc="Stała opieka nad flotami Philips w krakowskich biurach. Przeglądy okresowe i faktura VAT."
                  icon={<Briefcase size={20} />}
               />
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODUŁ 7: FINAL GUARANTEE & SIGNATURE
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#3E2F26] text-[#F4F1EA] border-t border-[#B59473]/20 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <Shield size={300} />
         </div>
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 relative z-10">
               <div className="space-y-4">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.4em] font-bold">PAKT GWARANCYJNY WARSZTATU</span>
                  <h3 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter">Gwarancja Rzemieślnicza</h3>
               </div>
               
               <p className="font-['Old_Standard_TT'] text-xl italic opacity-80 leading-relaxed">
                  Każda naprawa Philips v naszym krakowskim warsztacie jest objęta <span className="text-[#B59473] font-bold">12-miesięcznym paktem gwarancyjnym</span>. Używamy wyłącznie oryginalnych części zamiennych. Twoja kawa ma smakować tak, jak zaplanowali to konstruktorzy Philipsa.
               </p>

               <div className="grid grid-cols-2 gap-y-6 font-technical text-[9px] uppercase tracking-[0.3em] font-bold text-[#F4F1EA]/70">
                  <div className="flex items-center gap-3"><CheckCircle2 size={12} className="text-[#B59473]"/> Gwarancja Pisemna</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={12} className="text-[#B59473]"/> Oryginały OEM</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={12} className="text-[#B59473]"/> Testy Sanitarne</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={12} className="text-[#B59473]"/> Faktura VAT 23%</div>
               </div>
            </div>

            <div className="p-12 bg-[#F4F1EA] text-[#3E2F26] relative shadow-2xl overflow-hidden group">
               <Anchor className="absolute -bottom-10 -right-10 text-[#B59473] opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" size={200} />
               {/* Motto rzemieślnicze */}
               <div className="bg-[#B59473]/5 border-l-2 border-[#B59473] p-8 mb-12">
                  <p className="font-['Old_Standard_TT'] italic text-2xl leading-relaxed relative z-10 text-[#3E2F26]">
                    "Philips LatteGo to triumf intuicji nad technologią. My dbamy o to, by ta intuicja nigdy nie zawiodła Twojego poranka. Rzetelny serwis to fundament smaku."
                  </p>
               </div>
               
               {/* Podpis Własny */}
               <div className="text-right pt-8 relative z-10">
                  <p className="font-handwritten text-4xl text-[#B59473] mb-2 rotate-[-2deg]">Krzysztof Jabłoński</p>
                  <p className="font-technical text-[9px] uppercase tracking-widest opacity-40 font-bold uppercase text-[#3E2F26]">Mstr. Inżynier Mechanik | Kraków, Pużaka 27</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

/* --- SUBKOMPONENTY --- */

const DataBox = ({ label, value }: { label: string, value: string }) => (
   <div className="bg-[#F4F1EA] p-8 border border-[#3E2F26]/10 flex flex-col justify-center items-center text-center group hover:bg-[#B59473]/5 transition-colors">
      <p className="font-technical text-[9px] uppercase tracking-[0.4em] text-[#B59473] mb-3 font-bold">{label}</p>
      <p className="font-technical text-xs font-bold uppercase text-[#3E2F26] tracking-widest">{value}</p>
   </div>
);

const ModelSeriesCard = ({ series, tag, models, tech, diagInfo, onScroll }: any) => (
  <div className="bg-white border border-[#3E2F26]/10 p-10 hover:shadow-2xl transition-all duration-500 group relative flex flex-col">
     <div className="absolute top-0 left-0 w-1.5 h-full bg-[#B59473]/30 group-hover:bg-[#B59473] transition-all"></div>
     <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
           <span className="font-technical text-[9px] uppercase tracking-[0.3em] font-bold text-[#B59473]">{tag}</span>
           <h4 className="font-bold font-['Cormorant_Garamond'] text-4xl text-[#3E2F26] leading-none">{series}</h4>
        </div>
        <Anchor size={20} className="text-[#3E2F26]/10 group-hover:text-[#B59473] transition-colors" />
     </div>
     
     <div className="space-y-4 flex-1">
        <p className="font-['Old_Standard_TT'] text-lg font-bold text-[#3E2F26]">Modele: {models}</p>
        <p className="text-xs font-technical uppercase tracking-widest opacity-60 text-[#3E2F26]">Tech: {tech}</p>
        <div className="pt-6 border-t border-dashed border-[#3E2F26]/10">
           <p className="font-['Old_Standard_TT'] text-sm italic opacity-80 leading-relaxed text-[#3E2F26]">{diagInfo}</p>
        </div>
     </div>
     
     <div className="mt-8">
        <button 
          onClick={onScroll} 
          className="inline-flex items-center gap-2 font-technical text-[9px] font-bold uppercase tracking-widest text-[#B59473] hover:translate-x-1 transition-transform"
        >
           ZOBACZ PROTOKÓŁ BŁĘDÓW <ArrowRight size={12} />
        </button>
     </div>
  </div>
);

const RepairStep = ({ num, title, desc }: any) => (
   <div className="flex gap-6 group">
      <div className="shrink-0 font-technical text-3xl font-bold text-[#B59473] opacity-20 group-hover:opacity-100 transition-opacity">{num}</div>
      <div className="space-y-1">
         <h4 className="font-bold font-['Cormorant_Garamond'] text-xl text-[#3E2F26] leading-none">{title}</h4>
         <p className="text-sm font-['Old_Standard_TT'] italic opacity-60 leading-tight text-[#3E2F26]">{desc}</p>
      </div>
   </div>
);

const FaultDetailed = ({ code, title, procedure, icon, components }: any) => (
   <div className="border border-[#3E2F26]/10 p-10 bg-white hover:shadow-[0_40px_80px_rgba(181,148,115,0.15)] transition-all duration-700 group relative overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 p-4 bg-[#3E2F26]/5 font-technical text-[9px] tracking-[0.3em] font-bold opacity-30 group-hover:opacity-100 group-hover:text-[#B59473] transition-all uppercase">{code}</div>
      <div className="text-[#B59473] mb-8 transform group-hover:scale-110 transition-transform duration-700">{icon}</div>
      <h4 className="font-bold font-['Cormorant_Garamond'] text-3xl mb-6 tracking-tight text-[#3E2F26]">{title}</h4>
      <div className="space-y-6 flex-1">
         <div>
            <span className="font-technical text-[8px] uppercase tracking-[0.3em] text-[#B59473] font-bold block mb-2 text-[#B59473]">PROCEDURA OPERACYJNA:</span>
            <p className="font-['Old_Standard_TT'] text-base leading-relaxed opacity-70 italic text-[#3E2F26]">{procedure}</p>
         </div>
         <div className="pt-6 border-t border-dashed border-[#3E2F26]/10">
            <span className="font-technical text-[8px] uppercase tracking-[0.3em] text-[#B59473] font-bold block mb-3 text-[#B59473]">LISTA KONTROLNA:</span>
            <div className="flex flex-wrap gap-2">
               {components.map((c: string) => (
                  <span key={c} className="font-technical text-[8px] border border-[#3E2F26]/20 px-2 py-1 uppercase tracking-widest text-[#3E2F26]">{c}</span>
               ))}
            </div>
         </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#B59473] transition-all duration-1000 group-hover:w-full"></div>
   </div>
);

const ServiceFeature = ({ title, desc, icon }: any) => (
   <div className="bg-[#EBE7DE] border border-[#3E2F26]/5 p-8 shadow-sm hover:shadow-xl transition-all group">
      <div className="text-[#B59473] mb-6 transform group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="font-bold font-['Cormorant_Garamond'] text-2xl text-[#3E2F26] mb-4 tracking-tight">{title}</h4>
      <p className="font-['Old_Standard_TT'] text-sm italic opacity-60 leading-relaxed text-[#3E2F26]">{desc}</p>
   </div>
);

const PartPlaque = ({ id, name, desc }: any) => (
  <div className="bg-white border border-[#3E2F26]/5 p-6 hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl group">
     <div className="flex justify-between items-center mb-4">
        <span className="font-technical text-[7px] font-bold text-[#B59473] tracking-[0.3em] uppercase">{id}</span>
        <Box size={14} className="opacity-10 group-hover:opacity-100 group-hover:text-[#B59473] transition-all" />
     </div>
     <h5 className="font-bold font-['Cormorant_Garamond'] text-xl text-[#3E2F26] mb-1 leading-tight">{name}</h5>
     <p className="font-['Old_Standard_TT'] text-[10px] opacity-60 italic leading-tight text-[#3E2F26]">{desc}</p>
  </div>
);
