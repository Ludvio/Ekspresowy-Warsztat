
import React from 'react';
import { 
  ArrowRight, 
  Wrench, 
  Shield, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  Thermometer, 
  Droplet, 
  Star, 
  Anchor, 
  Settings, 
  Zap, 
  Snowflake, 
  Box, 
  Truck, 
  Briefcase, 
  ClipboardCheck, 
  Search, 
  Gauge, 
  HardDrive, 
  Link as LinkIcon, 
  Phone, 
  Settings2,
  Activity,
  PenTool
} from 'lucide-react';

export const NivonaService: React.FC = () => {
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
          MODULE 1: NIVONA HERO (SEO: Serwis Nivona Kraków - CafeRomatica)
      ========================================================================================= */}
      <section className="relative p-8 md:p-16 lg:p-24 overflow-hidden min-h-[85vh] flex flex-col justify-center border-b border-[#3E2F26]/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B59473]/10 rounded-full blur-[150px] -z-10"></div>
        
        {/* Smaczki: Harmonijne Narożniki Inżynieryjne */}
        <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-[#B59473]/40"></div>
        <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-[#B59473]/40"></div>

        <div className="relative z-10 max-w-5xl">
           <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#B59473]"></div>
              <span className="font-technical text-[9px] uppercase tracking-[0.5em] font-bold text-[#B59473]">NIVONA VERTRIEBS PROTOCOL: REV.2025/NV</span>
           </div>

           <h1 className="text-7xl md:text-9xl font-bold font-['Cormorant_Garamond'] leading-[0.8] mb-10 tracking-tighter">
             Niemiecka <br/>
             <span className="text-[#B59473] italic">Solidarność.</span>
           </h1>

           <p className="text-2xl md:text-3xl font-['Old_Standard_TT'] italic leading-relaxed max-w-3xl border-l-8 border-[#3E2F26] pl-10 py-4 opacity-95">
             Obsługujemy serię CafeRomatica z dbałością o każdy niuans systemu <span className="text-[#B59473] font-bold">Aroma Balance System</span>. Od budżetowej serii 500 po ultra-premium 800. Przywracamy autentyczny smak kawy w Krakowie.
           </p>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mt-16 border border-[#3E2F26]/10 bg-[#3E2F26]/5 p-1 shadow-2xl">
              <DataBox label="SERIES ARCHIVE" value="800 / 700 / 600 / 500" />
              <DataBox label="EXTRACTION" value="9 BAR CONSTANT" />
              <DataBox label="CLEANING" value="ONE-TOUCH SPUMATORE" />
              <DataBox label="LOCATION" value="KRAKÓW SERVICE HUB" />
           </div>
        </div>

        {/* Smaczek: Manometr Nivona */}
        <div className="absolute bottom-10 right-10 hidden lg:block group">
          <div className="w-32 h-32 border-2 border-[#3E2F26]/20 rounded-full flex items-center justify-center relative bg-[#F4F1EA]">
             <div className="absolute w-0.5 h-12 bg-[#B59473] origin-bottom -rotate-[35deg] bottom-1/2 left-1/2 transition-transform duration-1000 group-hover:rotate-[20deg]"></div>
             <div className="w-1.5 h-1.5 bg-[#3E2F26] rounded-full z-10"></div>
             <span className="absolute top-6 font-technical text-[7px] tracking-widest uppercase text-[#B59473] font-bold">Extraction</span>
             <span className="absolute bottom-6 font-technical text-[7px] tracking-widest uppercase text-[#3E2F26]">Optimum 95°C</span>
             {[0, 2, 4, 6, 8, 10, 12, 14, 16].map((tick, i) => (
               <div key={tick} className="absolute inset-2" style={{ transform: `rotate(${(i * 22.5) - 90}deg)` }}>
                 <div className="w-1.5 h-[1px] bg-[#3E2F26]/40"></div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* =========================================================================================
          MODULE 2: NIVONA MODEL INDEX (SEO: Serie 800, 700, 600, 500)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#EBE7DE] border-b border-[#3E2F26]/10 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
             <div className="space-y-4">
                <span className="font-technical text-[9px] uppercase tracking-[0.4em] font-bold text-[#B59473]">NIVONA CLASSIFICATION REGISTRY</span>
                <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Indeks Modeli CafeRomatica</h2>
             </div>
             <div className="font-technical text-[9px] uppercase tracking-[0.3em] opacity-40 text-right">
                CATALOGUE REV. 2025.B <br/> NIVONA SPECIALIST KRK
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModelSeriesCard 
              series="SERIA 800"
              tag="ULTRA PREMIUM CLASS"
              models="890, 870, 840, 830, 820"
              tech="TFT Touch, One Touch Spumatore Duo, 15 bar"
              onScroll={scrollToDiagnostics}
              diagInfo="Focus: Kalibracja elektroniki TFT i regeneracja systemów spieniających Pro."
            />
            <ModelSeriesCard 
              series="SERIA 700"
              tag="PREMIUM CORE"
              models="790, 770, 765, 750, 740"
              tech="Aroma Balance System, Brita Filtration"
              onScroll={scrollToDiagnostics}
              diagInfo="Focus: Uszczelnienie układów hydraulicznych i serwis impulsatorów."
            />
            <ModelSeriesCard 
              series="SERIA 600"
              tag="MID-RANGE CLASS"
              models="690, 680, 670, 660"
              tech="One Touch Basic, Aroma Profiles"
              onScroll={scrollToDiagnostics}
              diagInfo="Focus: Serwis młynków i czyszczenie systemów mlecznych."
            />
            <ModelSeriesCard 
              series="SERIA 500"
              tag="ECONOMIC CLASS"
              models="590, 580, 570, 560"
              tech="Base Automation, Compact Design"
              onScroll={scrollToDiagnostics}
              diagInfo="Focus: Wymiana uszczelek tłoka i odkamienianie termobloków."
            />
            <ModelSeriesCard 
              series="SERIA NICOTRA"
              tag="PORTAFILTER SEMI-PRO"
              models="720, 710, 700"
              tech="Manual Extraction, Metal Group"
              onScroll={scrollToDiagnostics}
              diagInfo="Focus: Kalibracja ciśnienia 9 bar i serwis grzałek termicznych."
            />
            {/* CTA CARD */}
            <div className="bg-[#3E2F26] p-10 flex flex-col justify-center items-center text-center space-y-6 relative overflow-hidden group">
               <Anchor className="absolute -bottom-10 -right-10 text-[#B59473] opacity-5 group-hover:rotate-12 transition-transform duration-700" size={150} />
               <h4 className="text-2xl font-bold font-['Cormorant_Garamond'] text-[#F4F1EA] uppercase tracking-tight">Potrzebujesz Naprawy?</h4>
               <p className="font-['Old_Standard_TT'] text-sm italic text-[#F4F1EA]/60">Szybka diagnoza Twojej Nivony w 24h.</p>
               <a href="tel:881531113" className="w-full border border-[#B59473] py-4 font-technical text-[10px] font-bold uppercase tracking-widest text-[#B59473] hover:bg-[#B59473] hover:text-[#3E2F26] transition-all">
                  ZADZWOŃ: 881 531 113
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================================
          MODULE 3: NIVONA DIAGNOSTICS (Error Codes Deep Dive)
      ========================================================================================= */}
      <section id="diagnostics" className="py-32 px-8 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
               <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.5em] font-bold">PROTOKÓŁ BŁĘDÓW: NIVONA CAFEROMATICA</span>
               <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Diagnostyka i Kody Błędów</h2>
            </div>
            <div className="font-technical text-[9px] uppercase tracking-[0.3em] opacity-40 text-right">
               SERVICE MANUAL NV.V1 <br/> KRAKÓW DIAGNOSTIC CENTER
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FaultDetailed 
               code="E04 / E09" 
               title="Hydraulic & Flow Malfunction" 
               procedure="Błąd przepływu lub awaria pompy. Procedura: Weryfikacja drożności filtra Brita System. Pomiar ciśnienia pompy (norma 15 bar). Sprawdzenie impulsatora (przepływomierza) pod kątem osadów wapiennych. Wymiana uszczelek układu wysokiego ciśnienia."
               icon={<Droplet size={22} />}
               components={["Vibration Pump", "Flowmeter", "Brita Filter"]}
            />
            <FaultDetailed 
               code="E05" 
               title="Thermal Block Timeout" 
               procedure="Problem z nagrzewaniem. Procedura: Pomiar rezystancji termobloku (1450W). Kontrola bezpieczników termicznych. Weryfikacja czujnika NTC. Częsta przyczyna: zakamienienie kanałów wodnych uniemożliwiające swobodny przepływ i przegrzewanie elementu."
               icon={<Thermometer size={22} />}
               components={["Thermoblock", "NTC Sensor", "Thermal Fuse"]}
            />
            <FaultDetailed 
               code="E08" 
               title="Logic Board Error" 
               procedure="Błąd elektroniki głównej. Procedura: Diagnostyka szyny danych między panelem TFT a modułem mocy. Sprawdzenie stabilności napięć. Często powiązane z przepięciami w sieci lub wilgocią wewnątrz obudowy. Wymaga sekcji modułu PLC."
               icon={<Cpu size={22} />}
               components={["Main PCB", "TFT Interface", "Power Supply Unit"]}
            />
            <FaultDetailed 
               code="E02 / TRAY" 
               title="Tray Sensor Logic" 
               procedure="Błąd tacki ociekowej. Procedura: Czyszczenie i dekontaminacja styków tacki. Usunięcie tlenków mosiądzu. Weryfikacja mikrostyków wewnątrz korpusu. Sprawdzenie szczelności zaworu spustowego, który może zalewać sensory."
               icon={<AlertCircle size={22} />}
               components={["Tray Contacts", "Microswitches", "Drain Valve"]}
            />
         </div>
         
         {/* CTA: DIAGNOSTICS */}
         <div className="mt-16 p-1 bg-[#3E2F26] shadow-2xl">
            <div className="bg-[#F4F1EA] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 border border-[#3E2F26]/10">
               <div className="space-y-2 text-center md:text-left">
                  <p className="font-technical text-[10px] font-bold text-[#B59473] uppercase tracking-[0.4em]">DIAGNOSTIC PRIORITY</p>
                  <h3 className="text-3xl font-bold font-['Cormorant_Garamond'] text-[#3E2F26]">Twoja Nivona wyświetla inny błąd?</h3>
                  <p className="font-['Old_Standard_TT'] italic opacity-70">Zadzwoń do nas. Opisz objawy, a mi podamy wstępną wycenę przez telefon.</p>
               </div>
               <a href="tel:881531113" className="bg-[#3E2F26] text-[#F4F1EA] px-10 py-5 font-technical text-[11px] font-bold uppercase tracking-[0.5em] hover:bg-[#B59473] transition-all flex items-center gap-4">
                  LINIA TECHNICZNA <Phone size={14} />
               </a>
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 4: TECHNOLOGY DEEP DIVE (SEO: Aroma Balance System)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#3E2F26] text-[#F4F1EA] relative overflow-hidden border-y border-[#B59473]/20">
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#B59473_1px,transparent_1px)] [background-size:32px_32px]"></div>
         </div>

         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="space-y-12">
               <div className="space-y-4">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.4em] font-bold">ENGINEERING CORE: AROMA BALANCE</span>
                  <h2 className="text-5xl md:text-7xl font-bold font-['Cormorant_Garamond'] tracking-tighter leading-none">Logika <br/><span className="text-[#B59473] italic">Aromatu.</span></h2>
               </div>
               <p className="font-['Old_Standard_TT'] text-xl leading-relaxed text-[#F4F1EA]/80 max-w-xl">
                  Nivona wyróżnia się unikalnym podejściem do ciśnienia parzenia. Rozumiemy system <span className="font-bold">Aroma Balance</span> od podszewki – kalibrujemy profil przepływu, by uzyskać idealną równowagę między kwasowością a goryczką.
               </p>
               
               <div className="grid gap-10">
                  <TechAdvantage 
                    icon={<Activity size={20} />}
                    title="Profile Tuning (Dynamic/Constant/Intense)"
                    desc="Kalibrujemy oprogramowanie sterujące ciśnieniem parzenia, aby profile smakowe odpowiadały fabrycznym specyfikacjom Nivona."
                  />
                  <TechAdvantage 
                    icon={<Zap size={20} />}
                    title="One Touch Spumatore Duo"
                    desc="Naprawa i sterylizacja głowic spieniających. Przywracamy mikro-piankę w systemach dwudyszowych (seria 800)."
                  />
                  <TechAdvantage 
                    icon={<Settings2 size={20} />}
                    title="Grinder Resonance Calibration"
                    desc="Ustawiamy żarna stalowe i ceramiczne. Usuwamy rezonanse obudowy i wibracje młynka Aroma G3."
                  />
               </div>
            </div>

            <div className="relative group">
               <div className="bg-[#F4F1EA] p-1 shadow-2xl rotate-2 transition-transform group-hover:rotate-0 duration-700">
                  <div className="bg-[#EBE7DE] p-8 space-y-8 border border-[#3E2F26]/10">
                     <div className="flex justify-between items-center border-b border-[#3E2F26]/10 pb-4">
                        <span className="font-technical text-[9px] font-bold text-[#B59473] uppercase tracking-widest">DIAGRAM: NV BREW CORE</span>
                        <Settings size={16} className="text-[#3E2F26]/30" />
                     </div>
                     <div className="aspect-[4/3] bg-white border border-[#3E2F26]/10 p-4 relative overflow-hidden grayscale contrast-125 brightness-95 opacity-80">
                        {/* Autentyczne zdjęcie mechanizmu Nivona */}
                        <img 
                          src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=1000&auto=format&fit=crop" 
                          alt="Wnętrze bloku Nivona" 
                          className="w-full h-full object-cover mix-blend-multiply"
                        />
                        <div className="absolute inset-0 bg-[#B59473]/10 mix-blend-color"></div>
                     </div>
                     <p className="font-['Old_Standard_TT'] text-sm italic opacity-60 leading-relaxed text-center text-[#3E2F26]">
                        "Regeneracja bloku zaparzającego Nivona przywraca optymalne 15 bar ciśnienia wstępnego."
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 5: COMPONENT CROSS-REFERENCE (Archeologia Systemowa)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#EBE7DE] border-y border-[#3E2F26]/10 relative overflow-hidden">
         <div className="max-w-7xl mx-auto space-y-16 relative z-10">
            <div className="flex items-center gap-4">
               <div className="h-px w-12 bg-[#B59473]"></div>
               <span className="font-technical text-[10px] uppercase tracking-[0.5em] font-bold text-[#B59473]">SYSTEMVM NIVONA: POWIĄZANIA</span>
            </div>
            
            <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Component Cross-Reference</h2>
            
            <div className="grid lg:grid-cols-3 gap-10">
               <CrossReferenceItem 
                  component="CafeRomatica Brew Unit" 
                  errorCode="ERROR 08 / E08" 
                  procedure="Kompletna regeneracja mechaniczna bloku (uszczelki EPDM)." 
                  icon={<Settings size={20} />}
               />
               <CrossReferenceItem 
                  component="One Touch Spumatore" 
                  errorCode="POOR FOAM / E06" 
                  procedure="Dekontaminacja dysz i kalibracja zaworu pary." 
                  icon={<Zap size={20} />}
               />
               <CrossReferenceItem 
                  component="Ceramic/Steel Grinder" 
                  errorCode="E03 / NO BEANS" 
                  procedure="Wymiana żaren i kalibracja sensora obecności ziarna." 
                  icon={<Activity size={20} />}
               />
               <CrossReferenceItem 
                  component="TFT Logic Controller" 
                  errorCode="DISPLAY BLACK / E08" 
                  procedure="Weryfikacja szyny danych i aktualizacja firmware." 
                  icon={<Cpu size={20} />}
               />
               <CrossReferenceItem 
                  component="High Pressure Pump" 
                  errorCode="E04 / FILL SYSTEM" 
                  procedure="Mierzymy wibracje i ciśnienie statyczne (norma 15 bar)." 
                  icon={<Droplet size={20} />}
               />
               <CrossReferenceItem 
                  component="Brita Filter Logic" 
                  errorCode="E01 / FILTER ALERT" 
                  procedure="Resetowanie logiki I.W.S i wymiana wkładów Brita." 
                  icon={<Snowflake size={20} />}
               />
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 6: KATALOG DETALU OEM (Nivona Stock)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#F4F1EA]">
         <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16 border-b border-[#3E2F26]/10 pb-8">
               <div className="space-y-4">
                  <span className="font-technical text-[10px] uppercase tracking-[0.5em] font-bold text-[#B59473]">NIVONA GENUINE PARTS (OEM STOCK)</span>
                  <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Archiwum <span className="text-[#B59473] italic">Części.</span></h2>
               </div>
               <div className="hidden md:block text-right">
                  <p className="font-technical text-[9px] uppercase tracking-[0.3em] opacity-40">NIVONA STOCK: 95%</p>
                  <p className="font-technical text-[9px] uppercase tracking-[0.3em] text-[#B59473] font-bold">READY FOR DISPATCH</p>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
               <PartPlaque id="NV9011" name="Brita Intenza+" desc="Filtr wody uniwersalny" />
               <PartPlaque id="NV9012" name="Group Gasket" desc="Uszczelka bloku (EPDM)" />
               <PartPlaque id="NV9013" name="Ceramic Grinder" desc="Żarna ceramiczne Pro" />
               <PartPlaque id="NV9014" name="Spumatore Nozzle" desc="Dysza spieniająca kpl." />
               <PartPlaque id="NV9015" name="Nivona Descaler" desc="Oryginalna chemia NV" />
            </div>

            <div className="mt-16 bg-[#3E2F26] text-[#F4F1EA] p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative group overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-[#B59473]"></div>
               <div className="flex items-center gap-6 relative z-10">
                  <Box size={40} className="text-[#B59473]" />
                  <div className="space-y-1">
                     <p className="font-technical text-[9px] uppercase tracking-[0.4em] text-[#B59473] font-bold">OEM LOGISTICS NIVONA</p>
                     <p className="font-['Old_Standard_TT'] text-xl italic text-[#F4F1EA]">Używamy wyłącznie oryginalnych części zamiennych Nivona.</p>
                  </div>
               </div>
               <div className="w-full md:w-px h-px md:h-12 bg-[#F4F1EA]/10 relative z-10"></div>
               <div className="text-center md:text-right relative z-10">
                  <p className="font-technical text-[12px] font-bold uppercase tracking-widest text-[#B59473]">SERWIS: OD RĘKI</p>
               </div>
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 7: FINAL GUARANTEE & SIGNATURE
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#F4F1EA] border-t border-[#3E2F26]/10">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
               <div className="space-y-4">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.4em] font-bold">MAINTENANCE REPORT</span>
                  <h3 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Standard Inżynieryjny</h3>
               </div>
               <div className="grid grid-cols-2 gap-y-6 font-technical text-[9px] uppercase tracking-[0.3em] font-bold text-[#3E2F26]/70">
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> Nivona Seria 800</div>
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> Nivona Seria 700</div>
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> Nivona Seria 600</div>
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> Nivona Seria 500</div>
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> Nivona Nicotra</div>
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> B2B Service Support</div>
               </div>
               
               <div className="mt-20 p-12 bg-[#3E2F26] text-[#F4F1EA] relative shadow-2xl overflow-hidden group">
                  <Anchor className="absolute -bottom-10 -right-10 text-[#B59473] opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" size={200} />
                  <p className="font-['Old_Standard_TT'] italic text-2xl leading-relaxed mb-12 relative z-10 border-l-2 border-[#B59473] pl-8">
                    "Mechanika Nivony to dowód na to, że niemiecka myśl techniczna potrafi być szlachetna. Nie tylko naprawiamy – przywracamy Twoje poranne rytuały do stanu pierwotnego."
                  </p>
                  <div className="text-right border-t border-[#F4F1EA]/10 pt-8 relative z-10">
                     <p className="font-handwritten text-4xl text-[#B59473] mb-2 rotate-[-1deg]">Krzysztof Jabłoński</p>
                     <p className="font-technical text-[9px] uppercase tracking-widest opacity-40 font-bold text-[#F4F1EA]">MSTR. INŻYNIER MECHANIK | EKSPRESOWY WARSZTAT</p>
                  </div>
               </div>
            </div>

            <div className="bg-[#EBE7DE] p-16 flex flex-col justify-center items-center text-center space-y-12 border border-[#3E2F26]/10 relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#B59473]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
               <div className="w-24 h-24 bg-[#3E2F26] flex items-center justify-center rounded-sm rotate-6 shadow-2xl transition-transform group-hover:rotate-0 duration-700 relative z-10">
                  <Shield className="text-[#B59473] w-12 h-12" />
               </div>
               <div className="space-y-6 relative z-10">
                  <h3 className="text-5xl font-bold font-['Cormorant_Garamond'] uppercase tracking-tighter text-[#3E2F26]">Pakt Gwarancyjny</h3>
                  <p className="font-['Old_Standard_TT'] text-xl italic opacity-80 leading-relaxed text-[#3E2F26]">Każda interwencja w systemie Nivona objęta jest 12-miesięczną gwarancją na piśmie. Używamy wyłącznie oryginalnych części zamiennych i technologii NIVONA.</p>
               </div>
               <a href="tel:881531113" className="w-full relative z-10 bg-[#3E2F26] text-[#F4F1EA] py-8 px-12 font-technical text-[14px] font-bold uppercase tracking-[0.5em] hover:bg-[#B59473] transition-all shadow-[20px_20px_0_0_rgba(181,148,115,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  REZERWACJA TERMINU: 881 531 113
               </a>
            </div>
         </div>
      </section>

    </div>
  );
};

/* --- SUBCOMPONENTS --- */

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

const TechAdvantage = ({ icon, title, desc }: any) => (
   <div className="flex gap-6 group">
      <div className="shrink-0 w-14 h-14 bg-[#3E2F26] text-[#B59473] flex items-center justify-center shadow-lg group-hover:bg-[#B59473] group-hover:text-[#3E2F26] transition-all duration-500 rounded-sm">
         {icon}
      </div>
      <div className="space-y-2 pt-1">
         <h4 className="font-bold font-['Cormorant_Garamond'] text-2xl uppercase tracking-tighter text-[#F4F1EA] leading-none">{title}</h4>
         <p className="text-base font-['Old_Standard_TT'] italic opacity-70 leading-relaxed text-[#F4F1EA]/80">{desc}</p>
      </div>
   </div>
);

const CrossReferenceItem = ({ component, errorCode, procedure, icon }: any) => (
   <div className="p-8 border border-[#3E2F26]/10 bg-white shadow-sm hover:shadow-md transition-shadow group flex flex-col">
      <div className="flex items-center justify-between mb-4">
         <div className="text-[#B59473] group-hover:scale-110 transition-transform">{icon}</div>
         <span className="font-technical text-[8px] font-bold text-[#3E2F26]/40 uppercase tracking-widest">VERIFIED COMPONENT</span>
      </div>
      <h4 className="font-bold font-['Cormorant_Garamond'] text-2xl mb-2 text-[#3E2F26]">{component}</h4>
      <div className="space-y-3 mt-auto pt-4 border-t border-[#3E2F26]/5">
         <div className="flex items-center gap-2">
            <LinkIcon size={12} className="text-[#B59473]" />
            <span className="font-technical text-[9px] font-bold text-[#B59473] uppercase tracking-widest">KOD: {errorCode}</span>
         </div>
         <p className="font-['Old_Standard_TT'] text-sm italic opacity-60 leading-tight">{procedure}</p>
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
            <span className="font-technical text-[8px] uppercase tracking-[0.3em] text-[#B59473] font-bold block mb-2 text-[#B59473]">PROTOKÓŁ OPERACYJNY:</span>
            <p className="font-['Old_Standard_TT'] text-base leading-relaxed opacity-70 italic text-[#3E2F26]">{procedure}</p>
         </div>
         <div className="pt-6 border-t border-dashed border-[#3E2F26]/10">
            <span className="font-technical text-[8px] uppercase tracking-[0.3em] text-[#B59473] font-bold block mb-3 text-[#B59473]">KOMPONENTY DOCELOWE:</span>
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
