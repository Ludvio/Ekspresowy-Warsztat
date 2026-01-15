
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
  CheckCircle2
} from 'lucide-react';

export const SaecoService: React.FC = () => {
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
          WINIETA GŁÓWNA (SEO: Serwis Saeco Kraków - Dziedzictwo Włoskiej Kawy)
      ========================================================================================= */}
      <section className="relative p-8 md:p-16 lg:p-24 overflow-hidden min-h-[85vh] flex flex-col justify-center border-b border-[#3E2F26]/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B59473]/10 rounded-full blur-[150px] -z-10"></div>
        
        {/* Smaczki: Harmonijne Narożniki */}
        <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-[#B59473]/40"></div>
        <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-[#B59473]/40"></div>

        <div className="relative z-10 max-w-5xl">
           <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#B59473]"></div>
              <span className="font-technical text-[9px] uppercase tracking-[0.5em] font-bold text-[#B59473]">OFFICINA MECCANICA DI SAECO: REV.2025/KRK</span>
           </div>

           <h1 className="text-7xl md:text-9xl font-bold font-['Cormorant_Garamond'] leading-[0.8] mb-10 tracking-tighter text-[#3E2F26]">
             Włoska <br/>
             <span className="text-[#B59473] italic">Precyzja.</span>
           </h1>

           <p className="text-2xl md:text-3xl font-['Old_Standard_TT'] italic leading-relaxed max-w-3xl border-l-8 border-[#3E2F26] pl-10 py-4 opacity-95">
             Obsługujemy legendarne automaty <span className="text-[#B59473] font-bold">Saeco</span> w Krakowie. Od domowych jednostek PicoBaristo po biurowe maszyny Royal. Przywracamy autentyczny smak włoskiej ekstrakcji 15 bar.
           </p>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mt-16 border border-[#3E2F26]/10 bg-[#3E2F26]/5 p-1 shadow-2xl">
              <DataBox label="REJESTR SERII" value="XELSIS / PICOBARISTO / ROYAL" />
              <DataBox label="MECHANIKA BLOKU" value="REMOVABLE BREW UNIT" />
              <DataBox label="ŻARNA" value="CERAMIC GRINDERS" />
              <DataBox label="LOGISTYKA" value="KRAKÓW / 24H DIAGNOZA" />
           </div>
        </div>

        {/* Smaczek: Manometr Inżynieryjny */}
        <div className="absolute bottom-10 right-10 hidden lg:block group">
          <div className="w-32 h-32 border-2 border-[#3E2F26]/20 rounded-full flex items-center justify-center relative bg-[#F4F1EA]">
             <div className="absolute w-0.5 h-12 bg-[#B59473] origin-bottom -rotate-[35deg] bottom-1/2 left-1/2 transition-transform duration-1000 group-hover:rotate-[15deg]"></div>
             <div className="w-1.5 h-1.5 bg-[#3E2F26] rounded-full z-10"></div>
             <span className="absolute top-6 font-technical text-[7px] tracking-widest uppercase text-[#B59473] font-bold">Pressione</span>
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
          MODUŁ 2: REJESTR MODELI SAECO (SEO: Xelsis, PicoBaristo, Moltio)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#EBE7DE] border-b border-[#3E2F26]/10 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
             <div className="space-y-4">
                <span className="font-technical text-[9px] uppercase tracking-[0.4em] font-bold text-[#B59473]">SAECO MODEL INDEX & CLASSIFICATION</span>
                <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Indeks Aparatury Saeco</h2>
             </div>
             <div className="font-technical text-[9px] uppercase tracking-[0.3em] opacity-40 text-right">
                REJESTR 2025.A <br/> SERWIS KRAKÓW PUŻAKA
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModelSeriesCard 
              series="XELSIS"
              tag="ULTRA LUXURY"
              models="SM7685, SM7580, SM7781"
              tech="CoffeeEqualizer, HygieSteam, Ceramic"
              diagInfo="Serwis panelu dotykowego i kalibracja zaworów ceramicznych wielodrożnych."
              onScroll={scrollToDiagnostics}
            />
            <ModelSeriesCard 
              series="PICOBARISTO"
              tag="PREMIUM CORE"
              models="SM5470, SM5473, HD8927"
              tech="AquaClean Logic, Quick Heat Boiler"
              diagInfo="Regeneracja bloku zaparzającego i uszczelnienie bojlera ze stali nierdzewnej."
              onScroll={scrollToDiagnostics}
            />
            <ModelSeriesCard 
              series="ROYAL / LIRIKA"
              tag="OFFICE WORKHORSE"
              models="One Touch Cappuccino, Gran Crema"
              tech="High Capacity, High Pressure Pump"
              diagInfo="Serwis jednostek o wysokim przebiegu, wymiana kół zębatych napędu bloku."
              onScroll={scrollToDiagnostics}
            />
            <ModelSeriesCard 
              series="INCANTO / MOLTIO"
              tag="CLASSIC DESIGN"
              models="HD8917, HD8911, HD8769"
              tech="Removable Brew Group, 5-Step Grinder"
              diagInfo="Usuwanie wycieków z zaworu drenażowego i kalibracja młynka."
              onScroll={scrollToDiagnostics}
            />
            <ModelSeriesCard 
              series="MINUTO / INTUITA"
              tag="BUDGET RELIABLE"
              models="HD8763, HD8750, HD8831"
              tech="Base Automation, Compact Boiler"
              diagInfo="Podstawowe przeglądy uszczelnień i czyszczenie wylewki kawy."
              onScroll={scrollToDiagnostics}
            />
            <div className="bg-[#3E2F26] p-10 flex flex-col justify-center items-center text-center space-y-6 relative overflow-hidden group">
               <Anchor className="absolute -bottom-10 -right-10 text-[#B59473] opacity-5 group-hover:rotate-12 transition-transform duration-700" size={150} />
               <h4 className="text-2xl font-bold font-['Cormorant_Garamond'] text-[#F4F1EA] uppercase tracking-tight">Potrzebujesz Pomocy?</h4>
               <p className="font-['Old_Standard_TT'] text-sm italic text-[#F4F1EA]/60">Szybka diagnoza Twojego Saeco w 24h.</p>
               <a href="tel:881531113" className="w-full border border-[#B59473] py-4 font-technical text-[10px] font-bold uppercase tracking-widest text-[#B59473] hover:bg-[#B59473] hover:text-[#3E2F26] transition-all">
                  881 531 113
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================================
          MODUŁ 3: PROTOKÓŁ NAPRAWCZY (SEO: Naprawa Saeco Kraków)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#F4F1EA] border-b border-[#3E2F26]/10">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.4em] font-bold">LOGIKA SERWISOWA: ŚCIEŻKA SAECO</span>
                  <h2 className="text-5xl md:text-7xl font-bold font-['Cormorant_Garamond'] tracking-tighter leading-none">Skuteczna <br/><span className="text-[#B59473] italic">Interwencja.</span></h2>
               </div>
               <p className="font-['Old_Standard_TT'] text-xl leading-relaxed text-[#3E2F26]/85 max-w-xl">
                  Twoje Saeco straciło dawną moc? W Krakowie oferujemy pełen cykl odtworzeniowy, od precyzyjnej diagnozy po końcowe testy higieniczne. Nie tylko wymieniamy części – przywracamy duszę włoskiej kawie.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-10">
                  <RepairStep num="01" title="Diagnostyka Błędów" desc="Analiza kodów E01-E15 i weryfikacja logiki PCB." />
                  <RepairStep num="02" title="Pełna Rozbiórka" desc="Sekcja urządzenia do poziomu ramy nośnej." />
                  <RepairStep num="03" title="Rewitalizacja Bloku" desc="Wymiana uszczelnień EPDM i smarowanie NSF-H1." />
                  <RepairStep num="04" title="Kalibracja Młynka" desc="Regulacja żaren ceramicznych do poziomu zero." />
                  <RepairStep num="05" title="Odkamienianie" desc="Chemiczna dekontaminacja bojlera i rurek." />
                  <RepairStep num="06" title="Testy Ciśnieniowe" desc="Weryfikacja szczelności przy 15 barach." />
               </div>
            </div>

            <div className="relative group">
               <div className="bg-[#3E2F26] p-1 shadow-2xl rotate-1 transition-transform group-hover:rotate-0 duration-500">
                  <div className="bg-[#EBE7DE] p-8 space-y-8 border border-[#3E2F26]/10">
                     <div className="flex justify-between items-center border-b border-[#3E2F26]/10 pb-4">
                        <span className="font-technical text-[9px] font-bold text-[#B59473] uppercase tracking-widest">DIAGRAM: SAECO BREW CORE</span>
                        <Search size={16} className="text-[#3E2F26]/30" />
                     </div>
                     <div className="aspect-[4/3] bg-white border border-[#3E2F26]/10 p-4 relative overflow-hidden grayscale contrast-125 brightness-95 opacity-80">
                        {/* ZDJĘCIE BLOKU SAECO - SEO FIRST */}
                        <img 
                          src="https://images.unsplash.com/photo-1552691021-7043334e0b51?q=80&w=1000&auto=format&fit=crop" 
                          alt="Zaparzacz Saeco po regeneracji" 
                          className="w-full h-full object-cover mix-blend-multiply"
                        />
                        <div className="absolute inset-0 bg-[#B59473]/10 mix-blend-color"></div>
                     </div>
                     <p className="font-['Old_Standard_TT'] text-sm italic opacity-60 leading-relaxed text-center text-[#3E2F26]">
                        "Wymiana uszczelek wargowych w bloku Saeco eliminuje 90% problemów z przeciekami."
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODUŁ 4: REJESTR BŁĘDÓW SAECO (Szczegółowe procedury)
      ========================================================================================= */}
      <section id="diagnostics" className="py-32 px-8 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
               <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.5em] font-bold">PROTOKÓŁ OPERACYJNY: SAECO ERROR LOG</span>
               <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Diagnostyka Aparatury</h2>
            </div>
            <div className="font-technical text-[9px] uppercase tracking-[0.3em] opacity-40 text-right">
               SPEC: XELSIS / ROYAL / LIRIKA <br/> KRAKÓW HUB SERWISOWY
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FaultDetailed 
               code="ERROR 01" 
               title="Blokada Młynka" 
               procedure="Żarna ceramiczne zablokowane ciałem obcym lub pyłem kawowym. Procedura: Demontaż młynka, czyszczenie mechaniczne, weryfikacja bezpiecznika na płycie głównej. Kalibracja stopnia mielenia."
               icon={<Activity size={22} />}
               components={["Młynek Ceramiczny", "Motor 230V", "Sensor Halla"]}
            />
            <FaultDetailed 
               code="ERROR 03 / 04" 
               title="Problem z Blokiem" 
               procedure="Błąd pozycjonowania zaparzacza. Procedura: Smarowanie prowadnic, wymiana uszczelki tłoka, weryfikacja mikroswitchy pozycjonujących. Kontrola kół zębatych napędu głównego."
               icon={<Settings size={22} />}
               components={["Brew Unit", "Drive Motor", "Microswitches"]}
            />
            <FaultDetailed 
               code="ERROR 05" 
               title="Zapowietrzenie Układu" 
               procedure="Błąd przepływu wody. Procedura: Weryfikacja pompy Ulka EX5, czyszczenie impulsatora (przepływomierza), odpowietrzenie bojlera. Sprawdzenie drożności filtra wlotowego."
               icon={<Droplet size={22} />}
               components={["Pompa Wibracyjna", "Przepływomierz", "Bojler SS"]}
            />
            <FaultDetailed 
               code="RED WRENCH / E15" 
               title="Błąd Grzania" 
               procedure="Timeout nagrzewania bojlera. Procedura: Pomiar ciągłości grzałki, weryfikacja czujnika temperatury NTC, sprawdzenie bezpieczników termicznych 184°C. Kontrola triaka na PCB."
               icon={<Zap size={22} />}
               components={["Bojler Inox", "Termostat", "Czujnik NTC"]}
            />
         </div>
      </section>

      {/* =========================================================================================
          MODUŁ 5: KATALOG DETALU OEM (Saeco Stock)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#EBE7DE] border-y border-[#3E2F26]/10">
         <div className="max-w-7xl mx-auto space-y-20">
            <div className="flex justify-between items-end">
               <div className="space-y-4">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.5em] font-bold">INWENTARZ CZĘŚCI ZAMIENNYCH SAECO</span>
                  <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Katalog Detalu</h2>
               </div>
               <div className="hidden md:block font-technical text-[9px] uppercase tracking-[0.3em] opacity-40 text-right">
                  STATUS MAGAZYNOWY: <span className="text-green-600 font-bold">WYSOKI</span>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
               <PartPlaque id="S-1100" name="Brew Unit Seal" desc="Uszczelka bloku (EPDM)" />
               <PartPlaque id="S-2045" name="Boiler Gasket" desc="Uszczelka bojlera (Red)" />
               <PartPlaque id="S-3001" name="Ceramic Burr" desc="Żarna ceramiczne (kpl)" />
               <PartPlaque id="S-4015" name="Valve Pin" desc="Trzpień zaworu pary" />
               <PartPlaque id="S-5020" name="Display Unit" desc="Panel TFT Xelsis" />
               <PartPlaque id="S-9999" name="Clean Tablet" desc="Oryginalna chemia Saeco" />
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
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.4em] font-bold">KONSERWACJA OKRESOWA</span>
                  <h2 className="text-4xl font-bold font-['Cormorant_Garamond'] text-[#3E2F26]">Długa Żywotność <br/><span className="italic text-[#B59473]">Saeco.</span></h2>
               </div>
               <p className="font-['Old_Standard_TT'] text-lg italic opacity-80 leading-relaxed text-[#3E2F26]">
                  Woda w Krakowie to wyzwanie dla aparatury Saeco. Regularny serwis chroni bojlery przed nieodwracalnym zakamienieniem. W Warsztacie używamy wyłącznie profesjonalnej chemii odwapniającej.
               </p>
               <div className="pt-8">
                  <div className="flex items-center gap-4 border-l-2 border-[#B59473] pl-6 py-2">
                     <Droplet size={24} className="text-[#B59473]" />
                     <div className="flex flex-col">
                        <span className="font-technical text-[9px] font-bold uppercase tracking-widest text-[#3E2F26]">ANALIZA TWARDOŚCI</span>
                        <span className="font-['Old_Standard_TT'] text-xs opacity-60 italic text-[#3E2F26]">Dobór filtrów AquaClean.</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
               <ServiceFeature 
                  title="Czyszczenie Codzienne" 
                  desc="Płukanie systemu mlecznego HygieSteam i opróżnianie tacki ociekowej. Zapobiega biosyfom."
                  icon={<Zap size={20} />}
               />
               <ServiceFeature 
                  title="Serwis Tygodniowy" 
                  desc="Płukanie wyjmowanego bloku zaparzającego pod bieżącą wodą. Klucz do higieny Saeco."
                  icon={<Settings size={20} />}
               />
               <ServiceFeature 
                  title="Przegląd Miesięczny" 
                  desc="Odtłuszczanie układu tabletkami Saeco i czyszczenie młynka ceramicznego z olejów."
                  icon={<Activity size={20} />}
               />
               <ServiceFeature 
                  title="Serwis Roczny" 
                  desc="Pełna rewitalizacja w Ekspresowym Warsztacie. Wymiana uszczelek i kalibracja ciśnienia."
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
                  Każda naprawa Saeco w naszym krakowskim warsztacie jest objęta <span className="text-[#B59473] font-bold">12-miesięcznym paktem gwarancyjnym</span>. Używamy wyłącznie oryginalnych części zamiennych. Twoja kawa ma smakować tak, jak zaplanowali to włoscy inżynierowie.
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
                    "Materia nie umiera. Materia potrzebuje jedynie kalibracji. Saeco to szlachetna maszyna, która zasługuje na rzemieślniczy konkret, a nie plastikową naprawę."
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
