import React from 'react';
import { Search, Pen, Cog, ShieldCheck, Thermometer, Droplet, CheckCircle } from 'lucide-react';

export const CustomerJourney: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end border-b-2 border-[#332F2B] pb-4">
        <div>
          <div className="font-technical text-[10px] text-[#8C7B6A] mb-1">DOKUMENT NR: CJ-2024-ALPHA</div>
          <h2 className="text-3xl font-bold">Logika Wyprawy Klienta</h2>
        </div>
        <div className="text-right font-technical text-[10px] text-[#8C7B6A]">
          STATUS: ZWERYFIKOWANO <br/>
          METODA: ANALIZA BEHAWIORALNA
        </div>
      </div>

      <div className="grid gap-12">
        {/* Step 1 */}
        <JourneyStep 
          num="01"
          title="Usterka Mechaniczna"
          context="Dźwięk pompy odbiega od normy o 15%. Wyciek na uszczelce grupy."
          internalMonologue="To nie jest błąd oprogramowania. To zmęczenie materiału. Kto mi to uszczelni profesjonalnie?"
          uxRequirement="Natychmiastowy kontakt techniczny, nie biurokracja."
        />

        {/* Step 2 */}
        <JourneyStep 
          num="02"
          title="Weryfikacja Warsztatu"
          context="Klient trafia na Twoją stronę. Nie szuka kawy, szuka narzędzi."
          internalMonologue="Te schematy na stronie sugerują, że gość rozumie hydraulikę tych maszyn. To nie jest kolejny sklep z kapsułkami."
          uxRequirement="Zdjęcia detali, schematy, brak 'stockowych' ludzi."
        />

        {/* Step 3 */}
        <JourneyStep 
          num="03"
          title="Analiza Doświadczenia"
          context="Klient sprawdza 'O mnie' i historię serwisu."
          internalMonologue="50 lat życia, rzemieślnicze podejście. To brzmi jak człowiek, który naprawiał maszyny, gdy świat był jeszcze analogowy."
          uxRequirement="Autentyczny copy o rzemiośle i inżynierii."
        />

        {/* Step 4 */}
        <JourneyStep 
          num="04"
          title="Protokół Przekazania"
          context="Logistyka: Kraków - Czernichów. Moment separacji."
          internalMonologue="Oddaję mu moje 8kg stali i mosiądzu. Dostałem kwit serwisowy. Wygląda porządnie."
          uxRequirement="Jasna mapa dojazdu i potwierdzenie przyjęcia."
        />

        {/* Step 5 */}
        <JourneyStep 
          num="05"
          title="Punkt Rozkoszy: Rewitalizacja"
          context="Odbiór. Maszyna nie tylko działa, ale jest 'dopieszczona'."
          internalMonologue="Pracuje ciszej niż po zakupie. Widzę, że odkamienienie było totalne. To jest ta jakość, której szukałem."
          uxRequirement="Raport z wykonanych prac - co wymieniono, co skalibrowano."
        />
      </div>

      {/* Grand Finale */}
      <div className="mt-16 bg-[#EBE7DE] border border-[#332F2B]/10 p-8 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F4F1EA] px-4 py-1 border border-[#332F2B]/20 font-technical text-[10px]">
          WYNIK KOŃCOWY
        </div>
        <p className="font-technical text-sm text-[#332F2B] mb-4">
          KONWERSJA: 98% SZANS NA STAŁEGO KLIENTA
        </p>
        <p className="italic text-lg">
          "Klient wraca do swojego rytuału z poczuciem, że jego maszyna jest w lepszej formie niż kiedykolwiek. 
          Staje się Twoim ewangelistą w środowisku ludzi, którzy cenią konkret."
        </p>
      </div>
    </div>
  );
};

const JourneyStep = ({ num, title, context, internalMonologue, uxRequirement }: any) => (
  <div className="flex flex-col md:flex-row gap-8 items-start relative pb-12 last:pb-0">
    {/* Line */}
    <div className="hidden md:block absolute left-[27px] top-14 bottom-0 w-px bg-[#332F2B]/10"></div>
    
    <div className="shrink-0 flex items-center justify-center w-14 h-14 border-2 border-[#332F2B] font-technical font-bold text-xl bg-white shadow-sm z-10">
      {num}
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 w-full border-b border-[#332F2B]/5 pb-12">
      <div className="space-y-2">
        <h4 className="font-bold text-lg uppercase tracking-tighter">{title}</h4>
        <p className="text-sm text-[#8C7B6A] leading-relaxed">{context}</p>
      </div>
      
      <div className="bg-[#FAF9F6] p-4 border border-[#332F2B]/10 relative">
        <div className="absolute -top-2 left-4 px-2 bg-[#FAF9F6] text-[8px] font-technical uppercase">Myśli Klienta</div>
        <p className="italic text-sm text-[#332F2B]">"{internalMonologue}"</p>
      </div>

      <div className="flex items-center">
        <div className="flex gap-2 items-center text-[#8C7B6A] text-xs font-technical uppercase">
          <CheckCircle size={14} />
          <span>Wymóg UX: {uxRequirement}</span>
        </div>
      </div>
    </div>
  </div>
);