
import React from 'react';
// Import ClipboardCheck from lucide-react to resolve the missing name error.
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
  FileText, 
  Anchor, 
  Settings, 
  Zap, 
  Snowflake, 
  Activity,
  Box,
  Truck,
  Briefcase,
  Search,
  Settings2,
  Link as LinkIcon,
  Phone,
  ClipboardCheck
} from 'lucide-react';

export const JuraService: React.FC = () => {
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
          MODULE 1: JURA HERO (SEO: Serwis Jura Kraków - Technologia Z10)
      ========================================================================================= */}
      <section className="relative p-8 md:p-16 lg:p-24 overflow-hidden min-h-[85vh] flex flex-col justify-center border-b border-[#3E2F26]/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B59473]/10 rounded-full blur-[150px] -z-10"></div>
        <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-[#B59473]/40"></div>
        <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-[#B59473]/40"></div>

        <div className="relative z-10 max-w-5xl">
           <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#B59473]"></div>
              <span className="font-technical text-[9px] uppercase tracking-[0.5em] font-bold text-[#B59473]">SWISS ENGINEERING PROTOCOL: KRK/JURA/2025</span>
           </div>

           <h1 className="text-7xl md:text-9xl font-bold font-['Cormorant_Garamond'] leading-[0.8] mb-10 tracking-tighter">
             Szwajcarski <br/>
             <span className="text-[#B59473] italic">Mechanizm.</span>
           </h1>

           <p className="text-2xl md:text-3xl font-['Old_Standard_TT'] italic leading-relaxed max-w-3xl border-l-8 border-[#3E2F26] pl-10 py-4 opacity-95">
             Obsługujemy najbardziej zaawansowane jednostki Jura w Krakowie. Od klasycznego P.E.P.® po rewolucyjny <span className="text-[#B59473] font-bold">Cold Extraction Process</span>. Przywracamy precyzję tam, gdzie inni widzą tylko kody błędów.
           </p>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mt-16 border border-[#3E2F26]/10 bg-[#3E2F26]/5 p-1 shadow-2xl">
              <DataBox label="MODEL ARCHIVE" value="Z10 / E8 / ENA / GIGA" />
              <DataBox label="PRESSURE UNIT" value="STATIC MAX 19.2 BAR" />
              <DataBox label="HYDRAULICS" value="EPDM / NSF-H1 LOGIC" />
              <DataBox label="LOGISTICS" value="KRAKÓW / 24H REACTION" />
           </div>
        </div>
      </section>

      {/* =========================================================================================
          MODULE 2: JURA MODEL INDEX (Classification & Intelligence)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#EBE7DE] border-b border-[#3E2F26]/10 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
             <div className="space-y-4">
                <span className="font-technical text-[9px] uppercase tracking-[0.4em] font-bold text-[#B59473]">OFFICIAL CLASSIFICATION REGISTRY</span>
                <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Jura Model Index</h2>
             </div>
             <div className="font-technical text-[9px] uppercase tracking-[0.3em] opacity-40 text-right">
                CATALOGUE REV. 2025.A <br/> KRAKÓW SERVICE HUB
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModelSeriesCard 
              series="SERIA Z"
              tag="ULTRA PREMIUM"
              models="Z10, Z8, Z6"
              tech="Cold Extraction, P.E.P, Ceramic Valve"
              onScroll={scrollToDiagnostics}
              diagInfo="Focus: Kalibracja zaworu ceramicznego i logiki chłodzenia Peltiera."
            />
            <ModelSeriesCard 
              series="SERIA E"
              tag="PREMIUM BESTSELLER"
              models="E8, E6, E4, E80"
              tech="P.E.P, Aroma G3, Claris Smart"
              onScroll={scrollToDiagnostics}
              diagInfo="Focus: Regeneracja Brew Unit i uszczelnienie układu wysokiego ciśnienia."
            />
            <ModelSeriesCard 
              series="SERIA ENA"
              tag="COMPACT PREMIUM"
              models="ENA 8, ENA 4, ENA Micro"
              tech="Small Footprint, I.W.S, RFID Logic"
              onScroll={scrollToDiagnostics}
              diagInfo="Focus: Serwis modułu RFID i odkamienianie termobloków o małym przekroju."
            />
            <ModelSeriesCard 
              series="SERIA X"
              tag="OFFICE SOLUTIONS"
              models="X10, X8, X6, WE8"
              tech="High Capacity, 5L Water Tank"
              onScroll={scrollToDiagnostics}
              diagInfo="Focus: Wymiana pomp o wysokim przepływie i czyszczenie wylewek Dual Spout."
            />
            <ModelSeriesCard 
              series="SERIA GIGA"
              tag="PROFESSIONAL PRO"
              models="GIGA 10, GIGA 6, GIGA 5"
              tech="Dual Grinder, PLC Control"
              onScroll={scrollToDiagnostics}
              diagInfo="Focus: Synchronizacja młynków Aroma G3 i logika procesorów sterujących."
            />
            <ModelSeriesCard 
              series="SERIA S"
              tag="MID-RANGE LUXE"
              models="S8, S80"
              tech="Touch Screen, Professional Foam"
              onScroll={scrollToDiagnostics}
              diagInfo="Focus: Serwis panelu dotykowego i kalibracja dyszy spieniającej CX3."
            />
          </div>

          {/* CTA: TEL LINE */}
          <div className="bg-[#3E2F26] text-[#F4F1EA] p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl mt-12">
             <div className="flex items-center gap-6">
                <Phone size={32} className="text-[#B59473]" />
                <div className="space-y-1">
                   <p className="font-technical text-[9px] uppercase tracking-[0.4em] text-[#B59473] font-bold">KONSULTACJA TECHNICZNA</p>
                   <p className="font-['Old_Standard_TT'] text-xl italic leading-none">Masz problem z konkretnym modelem? Zadzwoń bezpośrednio do inżyniera.</p>
                </div>
             </div>
             <a href="tel:881531113" className="border-2 border-[#B59473] px-10 py-5 font-technical text-[14px] font-bold uppercase tracking-[0.5em] hover:bg-[#B59473] hover:text-[#3E2F26] transition-all">
               881 531 113
             </a>
          </div>
        </div>
      </section>

      {/* =========================================================================================
          MODULE 3: TECHNOLOGY DEEP DIVE (P.E.P & COLD EXTRACTION)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#F4F1EA] border-b border-[#3E2F26]/10">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.4em] font-bold">ENGINEERING CORE: EXTRACTION LOGIC</span>
                  <h2 className="text-5xl md:text-7xl font-bold font-['Cormorant_Garamond'] tracking-tighter leading-none">Inżynieria <br/><span className="text-[#B59473] italic">Ekstrakcji.</span></h2>
               </div>
               <p className="font-['Old_Standard_TT'] text-xl leading-relaxed text-[#3E2F26]/85 max-w-xl">
                  Jura to nie tylko ekspres, to komputer sterujący hydrodynamiką. Specjalizujemy się w naprawach kluczowych systemów, których inni nie odważą się dotknąć.
               </p>
               
               <div className="grid gap-10">
                  <TechAdvantage 
                    icon={<Zap size={20} />}
                    title="P.E.P.® Pulsation Tuning"
                    desc="Kalibrujemy czas pulsacji pompy (Pulse Extraction Process) dla wydobycia pełnego body w espresso 15-45ml."
                  />
                  <TechAdvantage 
                    icon={<Snowflake size={20} />}
                    title="Cold Extraction Calibration"
                    desc="Naprawa modułów chłodzenia i zaworów bypass w Z10. Przywracamy rytm parzenia na zimno bez przegrzewania układu."
                  />
                  <TechAdvantage 
                    icon={<Settings2 size={20} />}
                    title="Ceramic Valve Mastery"
                    desc="Regeneracja wielodrożnych zaworów ceramicznych sterujących przepływem między kawą, mlekiem a parą."
                  />
               </div>
            </div>

            <div className="relative group">
               <div className="bg-[#3E2F26] p-1 shadow-2xl -rotate-1 transition-transform group-hover:rotate-0 duration-700">
                  <div className="bg-[#EBE7DE] p-8 space-y-8">
                     <div className="flex justify-between items-center border-b border-[#3E2F26]/10 pb-4">
                        <span className="font-technical text-[9px] font-bold text-[#B59473] uppercase tracking-widest">DIAGRAM: BREW UNIT X7</span>
                        <Search size={16} className="text-[#3E2F26]/30" />
                     </div>
                     <div className="aspect-square bg-white border border-[#3E2F26]/10 p-4 relative overflow-hidden grayscale contrast-125 brightness-95 opacity-80">
                        <img 
                          src="https://images.unsplash.com/photo-1552691021-7043334e0b51?q=80&w=1000&auto=format&fit=crop" 
                          alt="Wnętrze bloku Jura" 
                          className="w-full h-full object-cover mix-blend-multiply"
                        />
                        <div className="absolute inset-0 bg-[#B59473]/5 mix-blend-color"></div>
                     </div>
                     <p className="font-['Old_Standard_TT'] text-sm italic opacity-60 leading-relaxed text-center">
                        "Precyzyjne ustawienie szczelin młynka Aroma G3 połączone z idealnym ciśnieniem 15.2 bar."
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 4: DIAGNOSTICS REGISTRY (Error Codes Deep Dive)
      ========================================================================================= */}
      <section id="diagnostics" className="py-32 px-8 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
               <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.5em] font-bold">REJESTR BŁĘDÓW: PROTOKOŁY SEKCYJNE</span>
               <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter">Diagnostyka Inżynieryjna</h2>
            </div>
            <div className="font-technical text-[9px] uppercase tracking-[0.3em] opacity-40 text-right">
               JURA SERVICE MANUAL <br/> REV. 2025.01 / KRK HUB
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FaultDetailed 
               code="ERROR 08" 
               title="Brew Unit Positioning" 
               procedure="Kluczowa usterka mechaniczna. Procedura: Całkowity demontaż napędu bloku zaparzającego. Weryfikacja stanu kół zębatych przekładni oraz styków microswitchy krańcowych (kod: 1024/BU). Czyszczenie mosiężnych sit w myjce ultradźwiękowej, smarowanie uszczelki wargowej tłoka dolnego smarem silikonowym NSF-H1. Kalibracja pozycji zerowej w trybie serwisowym."
               icon={<Settings size={22} />}
               components={["Brew Unit", "Gearbox Motor", "Encoder Wheel"]}
            />
            <FaultDetailed 
               code="ERROR 02" 
               title="NTC Temperature Sensor" 
               procedure="Błąd odczytu termicznego. Procedura: Pomiar rezystancji czujnika NTC (norma: ~10k ohm przy 25°C). Sprawdzenie ciągłości wiązki przewodów pod termoblokiem (narażonej na utlenianie). Częsta przyczyna: upływność triaka na płycie logicznej sterującej grzałką 1450W. Wymaga sekcji modułu mocy."
               icon={<Thermometer size={22} />}
               components={["NTC Thermistor", "Heater Logic PCB", "Thermal Fuse"]}
            />
            <FaultDetailed 
               code="FILL SYSTEM" 
               title="Flowmeter / Fluidic Logic" 
               procedure="Zablokowany przepływ cieczy. Procedura: Sekcja impulsatora (przepływomierza). Czyszczenie dyszy wlotowej 1.2mm z osadów wapiennych. Sprawdzenie drożności filtra wlotowego pompy wysokiego ciśnienia. Odpowietrzenie układu zaworem ceramicznym CX3. Weryfikacja ciśnienia statycznego (min. 15 bar)."
               icon={<Droplet size={22} />}
               components={["Impulse Flowmeter", "High Pressure Pump", "Intake Filter"]}
            />
            <FaultDetailed 
               code="ERROR 11" 
               title="Cold Brew Logic (Z10)" 
               procedure="Awaria systemu ekstrakcji na zimno. Procedura: Test ogniwa Peltiera odpowiedzialnego za chłodzenie wody w locie. Kalibracja czasu pulsacji pompy dla profilu Cold Extraction. Sprawdzenie szczelności zaworu bypass odpowiedzialnego za omijanie termobloku. Weryfikacja logiki PLC modułu Cold Extraction."
               icon={<Snowflake size={22} />}
               components={["Peltier Module", "Ceramic Bypass Valve", "Cooling Fan"]}
            />
            <FaultDetailed 
               code="ERROR 05" 
               title="Thermoblock Malfunction" 
               procedure="Awaria grzejnika głównego. Procedura: Pomiar ciągłości grzałki ceramicznej. Weryfikacja bezpieczników termicznych TCO (184°C). Sprawdzenie drożności kanałów wodnych termobloku pod kątem zatorów wapiennych. Kontrola pasty termoprzewodzącej pod czujnikami bezpieczeństwa."
               icon={<Zap size={22} />}
               components={["Thermoblock 1450W", "Thermal Cut-off", "Heater Relay"]}
            />
            <FaultDetailed 
               code="EMPTY TRAY" 
               title="Tray Sensor Oxidation" 
               procedure="Błąd fałszywej obecności wody. Procedura: Dekontaminacja mosiężnych styków tacki ociekowej. Usunięcie nalotu tlenkowego metodą chemiczną (kontakt-cleaner). Weryfikacja sprężystości styków wewnątrz korpusu ekspresu. Sprawdzenie mikropęknięć obudowy tacki powodujących zwarcie."
               icon={<AlertCircle size={22} />}
               components={["Tray Contacts", "Base Sensor Plate", "Chassis Housing"]}
            />
         </div>
      </section>

      {/* =========================================================================================
          MODULE 5: COMPONENT CROSS-REFERENCE (Archeologia Systemowa)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#EBE7DE] border-y border-[#3E2F26]/10 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/graphy.png" alt="Grid pattern" />
         </div>
         <div className="max-w-7xl mx-auto space-y-16 relative z-10">
            <div className="flex items-center gap-4">
               <div className="h-px w-12 bg-[#B59473]"></div>
               <span className="font-technical text-[10px] uppercase tracking-[0.5em] font-bold text-[#B59473]">INDEX COMPONENTVM: TABELA POWIĄZAŃ</span>
            </div>
            
            <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Component Cross-Reference</h2>
            
            <div className="grid lg:grid-cols-3 gap-10">
               <CrossReferenceItem 
                  component="Brew Unit (Zaparzacz)" 
                  errorCode="ERROR 08" 
                  procedure="Sekcja pozycjonowania i mechaniki przesuwu." 
                  icon={<Settings size={20} />}
               />
               <CrossReferenceItem 
                  component="Thermoblock (Grzałka)" 
                  errorCode="ERROR 02 / 05" 
                  procedure="Weryfikacja oporności i czujników NTC." 
                  icon={<Zap size={20} />}
               />
               <CrossReferenceItem 
                  component="High Pressure Pump (Pompa)" 
                  errorCode="FILL SYSTEM" 
                  procedure="Pomiar ciśnienia statycznego i drożności." 
                  icon={<Droplet size={20} />}
               />
               <CrossReferenceItem 
                  component="Cold Extraction Module" 
                  errorCode="ERROR 11" 
                  procedure="Kalibracja chłodzenia i zaworu bypass." 
                  icon={<Snowflake size={20} />}
               />
               <CrossReferenceItem 
                  component="Flowmeter (Impulsator)" 
                  errorCode="FILL SYSTEM" 
                  procedure="Czyszczenie dyszy i analiza impulsów logiki." 
                  icon={<Activity size={20} />}
               />
               <CrossReferenceItem 
                  component="Chassis Contacts (Styki)" 
                  errorCode="EMPTY TRAY" 
                  procedure="Dekontaminacja utlenionych powierzchni." 
                  icon={<AlertCircle size={20} />}
               />
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 6: LOGISTYKA B2B & MOBILNY SERWIS (SEO: Kraków Offices)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#F4F1EA] border-b border-[#3E2F26]/10">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.4em] font-bold">MOBILITY & CORPORATE ARCHIVE</span>
                  <h2 className="text-5xl md:text-7xl font-bold font-['Cormorant_Garamond'] tracking-tighter">Serwis Mobilny <br/><span className="text-[#B59473] italic">dla Biur.</span></h2>
               </div>
               <p className="font-['Old_Standard_TT'] text-xl leading-relaxed text-[#3E2F26]/85 max-w-xl">
                  Rozumiemy, że w biurze ekspres to serce operacyjne. Obsługujemy krakowskie firmy w modelu <span className="font-bold">Next Business Day</span>. Odbieramy sprzęt, zostawiamy zastępczy klasy X8/GIGA.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex gap-4 items-center border-l-2 border-[#B59473] pl-6">
                     <Truck className="text-[#B59473]" size={28} />
                     <div className="flex flex-col">
                        <span className="font-technical text-[10px] font-bold uppercase tracking-widest text-[#3E2F26]">Odbiór do 24H</span>
                        <span className="font-['Old_Standard_TT'] text-sm opacity-60">Kraków i aglomeracja.</span>
                     </div>
                  </div>
                  <div className="flex gap-4 items-center border-l-2 border-[#B59473] pl-6">
                     <Briefcase className="text-[#B59473]" size={28} />
                     <div className="flex flex-col">
                        <span className="font-technical text-[10px] font-bold uppercase tracking-widest text-[#3E2F26]">B2B Priority</span>
                        <span className="font-['Old_Standard_TT'] text-sm opacity-60">Faktury VAT, termin płatności.</span>
                     </div>
                  </div>
               </div>
               
               <div className="pt-8">
                  <a href="tel:881531113" className="bg-[#3E2F26] text-[#F4F1EA] px-12 py-6 font-technical text-[14px] font-bold uppercase tracking-[0.5em] shadow-xl hover:bg-[#B59473] transition-all inline-block">
                    UMÓW SERWIS BIUROWY
                  </a>
               </div>
            </div>

            <div className="bg-[#EBE7DE] border border-[#3E2F26]/10 p-12 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-[#B59473]"></div>
               <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-start">
                     <h3 className="text-3xl font-bold font-['Cormorant_Garamond'] tracking-tight">Program Opieki X-Series</h3>
                     <ClipboardCheck size={24} className="text-[#B59473]" />
                  </div>
                  <ul className="space-y-6">
                     <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 bg-[#B59473] rounded-full mt-2 shrink-0"></div>
                        <p className="font-['Old_Standard_TT'] text-base italic opacity-80 leading-relaxed">
                           Priorytetowa regeneracja bloku Jura X8 / X10 – diagnoza w 4h.
                        </p>
                     </li>
                     <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 bg-[#B59473] rounded-full mt-2 shrink-0"></div>
                        <p className="font-['Old_Standard_TT'] text-base italic opacity-80 leading-relaxed">
                           Czyszczenie systemów Professional Fine Foam – usuwanie osadów biologicznych.
                        </p>
                     </li>
                     <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 bg-[#B59473] rounded-full mt-2 shrink-0"></div>
                        <p className="font-['Old_Standard_TT'] text-base italic opacity-80 leading-relaxed">
                           Audyt twardości wody i konfiguracja filtrów CLARIS Pro Smart Maxi.
                        </p>
                     </li>
                  </ul>
                  <div className="pt-6 border-t border-[#3E2F26]/10">
                     <span className="font-technical text-[10px] font-bold uppercase tracking-widest text-[#B59473]">STATUS: ACTIVE SERVICE NODE KRK</span>
                  </div>
               </div>
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#B59473]/5 rounded-full blur-3xl group-hover:bg-[#B59473]/10 transition-colors"></div>
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 7: PRZEGLĄD GŁĘBOKI (Ethics & Maintenance)
      ========================================================================================= */}
      <section className="bg-[#3E2F26] text-[#F4F1EA] py-32 relative overflow-hidden border-y border-[#B59473]/20">
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#B59473_1px,transparent_1px)] [background-size:32px_32px]"></div>
         </div>

         <div className="max-w-6xl mx-auto px-8 relative z-10">
            <div className="grid lg:grid-cols-3 gap-16 items-start">
               <div className="lg:col-span-1 space-y-10">
                  <div className="space-y-4">
                     <span className="font-technical text-[9px] uppercase tracking-[0.5em] font-bold text-[#B59473]">TECHNICAL AUDIT: JURA OVERHAUL</span>
                     <h2 className="text-5xl md:text-6xl font-bold font-['Cormorant_Garamond'] tracking-tighter leading-none">Przegląd <br/><span className="text-[#B59473] italic">Głęboki.</span></h2>
                  </div>
                  <p className="font-['Old_Standard_TT'] text-lg italic opacity-80 leading-relaxed text-[#F4F1EA]">
                    Jura to system zamknięty, który wymaga inżynierskiego podejścia. Nasz serwis przeprowadza pełną dekontaminację mechaniczną układów, których użytkownik nie jest w stanie wyczyścić samodzielnie.
                  </p>
                  <div className="pt-8 border-t border-[#F4F1EA]/10">
                    <div className="flex items-center gap-4">
                       <Shield size={32} className="text-[#B59473]" />
                       <div className="flex flex-col">
                          <span className="font-technical text-[10px] font-bold uppercase tracking-widest text-[#F4F1EA]">GWARANCJA JAKOŚCI</span>
                          <span className="font-['Old_Standard_TT'] text-xs opacity-60">12 Miesięcy na piśmie.</span>
                       </div>
                    </div>
                  </div>
               </div>

               <div className="lg:col-span-2 grid gap-8">
                  <ClinicalStep 
                    num="01" 
                    title="Sekcja Brew Unit (Z10 / E-Series)" 
                    desc="Zaparzacz Jura jest zablokowany wewnątrz. Demontujemy go całkowicie, czyścimy mosiężne sita w myjce ultradźwiękowej, wymieniamy uszczelki tłoka na oryginalne EPDM i kalibrujemy mechanizm przesuwu."
                  />
                  <ClinicalStep 
                    num="02" 
                    title="Dekontaminacja Mleczna HP3 / CX3" 
                    desc="System Fine Foam to siedlisko biofilmu. Przeprowadzamy mechaniczną rewitalizację dysz spieniających i konektorów mlecznych metodą ciśnieniową, przywracając idealną mikro-piankę."
                  />
                  <ClinicalStep 
                    num="03" 
                    title="Kalibracja Młynka Aroma G3" 
                    desc="Ustawiamy zerowy punkt mielenia. Czyścimy żarna ceramiczne z pyłu kawowego i olejów. Weryfikujemy czas mielenia dla porcji 16g, zapewniając optymalny opór ekstrakcji."
                  />
                  <ClinicalStep 
                    num="04" 
                    title="Aktualizacja Firmware Logic" 
                    desc="Weryfikacja wersji oprogramowania PLC dla poprawy efektywności systemu I.W.S. (Intelligent Water System) oraz czasu reakcji panelu TFT w modelach premium."
                  />
               </div>
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 8: KATALOG DETALU OEM (Stock Inventory)
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#F4F1EA]">
         <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16 border-b border-[#3E2F26]/10 pb-8">
               <div className="space-y-4">
                  <span className="font-technical text-[10px] uppercase tracking-[0.5em] font-bold text-[#B59473]">JURA GENUINE PARTS (OEM STOCK)</span>
                  <h2 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter">Archiwum <span className="text-[#B59473] italic">Kruszcu.</span></h2>
               </div>
               <div className="hidden md:block text-right">
                  <p className="font-technical text-[9px] uppercase tracking-[0.3em] opacity-40">AVAILABILITY: 98%</p>
                  <p className="font-technical text-[9px] uppercase tracking-[0.3em] text-[#B59473] font-bold">READY FOR DISPATCH</p>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
               <PartPlaque id="#71707" name="CLARIS Smart+" desc="Filtr RFID uniwersalny" />
               <PartPlaque id="#71715" name="Brew Unit Seal" desc="Uszczelka bloku (EPDM)" />
               <PartPlaque id="#71720" name="Aroma G3 Grinder" desc="Żarna ceramiczne OEM" />
               <PartPlaque id="#71725" name="Fine Foam Spout" desc="Dysza spieniająca Pro" />
               <PartPlaque id="#71730" name="Cleaning Tablet" desc="Oryginalna chemia Jura" />
            </div>

            <div className="mt-16 bg-[#3E2F26] text-[#F4F1EA] p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
               <div className="flex items-center gap-6">
                  <Box size={40} className="text-[#B59473]" />
                  <div className="space-y-1">
                     <p className="font-technical text-[9px] uppercase tracking-[0.4em] text-[#B59473] font-bold">OEM LOGISTICS STATUS</p>
                     <p className="font-['Old_Standard_TT'] text-xl italic text-[#F4F1EA]">Posiadamy większość części eksploatacyjnych Jura na stanie w Krakowie.</p>
                  </div>
               </div>
               <div className="w-full md:w-px h-px md:h-12 bg-[#F4F1EA]/10"></div>
               <div className="text-center md:text-right">
                  <p className="font-technical text-[12px] font-bold uppercase tracking-widest text-[#B59473]">INTERWENCJA: OD RĘKI</p>
               </div>
            </div>
         </div>
      </section>

      {/* =========================================================================================
          MODULE 9: FINAL GUARANTEE & SIGNATURE
      ========================================================================================= */}
      <section className="py-32 px-8 bg-[#F4F1EA] border-t border-[#3E2F26]/10">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
               <div className="space-y-4">
                  <span className="font-technical text-[#B59473] text-[10px] uppercase tracking-[0.4em] font-bold">MODEL COVERAGE REPORT</span>
                  <h3 className="text-5xl font-bold font-['Cormorant_Garamond'] tracking-tighter text-[#3E2F26]">Kompetencje Archiwalne</h3>
               </div>
               <div className="grid grid-cols-2 gap-y-6 font-technical text-[9px] uppercase tracking-[0.3em] font-bold text-[#3E2F26]/70">
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> Jura Z10 / Z6 / Z8</div>
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> Jura GIGA 10 / 6</div>
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> Jura E8 / E6 / ENA</div>
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> Jura S8 / S80</div>
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> Jura WE8 / WE6</div>
                  <div className="flex items-center gap-3"><Settings size={12} className="text-[#B59473]"/> Jura X8 / X10</div>
               </div>
               
               <div className="mt-20 p-12 bg-[#3E2F26] text-[#F4F1EA] relative shadow-2xl overflow-hidden group">
                  <Anchor className="absolute -bottom-10 -right-10 text-[#B59473] opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" size={200} />
                  <p className="font-['Old_Standard_TT'] italic text-2xl leading-relaxed mb-12 relative z-10 border-l-2 border-[#B59473] pl-8">
                    "Instrukcja obsługi Jura kończy się tam, gdzie zaczyna się nasza pasja do mechaniki szwajcarskiej. Nie tylko naprawiamy – kalibrujemy Twoje poranki."
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
                  <p className="font-['Old_Standard_TT'] text-xl italic opacity-80 leading-relaxed text-[#3E2F26]">Każda interwencja w systemie Jura objęta jest 12-miesięczną gwarancją na piśmie. Używamy wyłącznie oryginalnych szwajcarskich uszczelek EPDM i komponentów JURA.</p>
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
         <h4 className="font-bold font-['Cormorant_Garamond'] text-2xl uppercase tracking-tighter text-[#3E2F26] leading-none">{title}</h4>
         <p className="text-base font-['Old_Standard_TT'] italic opacity-70 leading-relaxed text-[#3E2F26]">{desc}</p>
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

const ClinicalStep = ({ num, title, desc }: any) => (
   <div className="flex gap-8 group">
      <div className="shrink-0 font-technical text-4xl font-bold text-[#B59473] opacity-20 group-hover:opacity-100 transition-opacity duration-700">{num}</div>
      <div className="space-y-2">
         <h4 className="text-2xl font-bold font-['Cormorant_Garamond'] text-[#F4F1EA] tracking-tight group-hover:text-[#B59473] transition-colors">{title}</h4>
         <p className="font-['Old_Standard_TT'] text-base opacity-60 leading-relaxed italic">{desc}</p>
      </div>
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
