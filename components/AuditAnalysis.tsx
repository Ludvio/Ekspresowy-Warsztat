import React from 'react';
import { Ruler, Activity, CheckSquare, Search, BookOpen, Fingerprint } from 'lucide-react';

export const AuditAnalysis: React.FC = () => {
  return (
    <div className="space-y-16">
      
      {/* Avatar Section */}
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="relative">
          <div className="absolute -top-10 -left-10 text-[100px] font-bold text-[#A67C52]/5 font-['Cormorant_Garamond'] pointer-events-none">01</div>
          <div className="font-technical text-[10px] text-[#A67C52] mb-4">[ ANALIZA PSYCHOLOGICZNA: REF. INVENTOR ]</div>
          <h3 className="text-4xl font-bold mb-6 font-['Cormorant_Garamond']">Dla kogo budujemy?</h3>
          <p className="text-lg leading-relaxed mb-6 font-['Old_Standard_TT']">
            Twój klient to **Odkrywca-Tradycjonalista**. On nie ufa plastikowym przyciskom. On ufa oporowi dźwigni. 
            On nie chce pić kawy z maszyny, która wygląda jak mikrofalówka. On chce maszyny, która wygląda jak silnik statku parowego.
          </p>
          <div className="p-8 bg-[#EBE7DE] border-2 border-[#2D241E] relative">
            <Fingerprint className="absolute bottom-4 right-4 w-12 h-12 text-[#2D241E]/10" />
            <p className="italic text-lg font-['Old_Standard_TT']">
              "Kiedy widzę te stare schematy na Pana stronie, wiem, że nie będzie Pan zgadywał. 
              Wiem, że Pan tę maszynę po prostu rozumie. Od pierwszej śrubki do ostatniego manometru."
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="font-technical text-xs font-bold border-b-2 border-[#2D241E] pb-2 uppercase tracking-widest">
            Rejestr Lęków i Potrzeb (Deep Registry)
          </h4>
          <PainItem 
            title="Lęk przed 'Elektroniką'" 
            desc="Obawia się, że jeden spalony chip unieruchomi maszynę za 10k. Szuka mechaniki, która jest naprawialna." 
          />
          <PainItem 
            title="Głód Autentyczności" 
            desc="Czuje się oszukany przez nowoczesny marketing. Szuka zapachu smaru, dźwięku metalu i konkretu inżyniera." 
          />
          <PainItem 
            title="Estetyczny Niepokój" 
            desc="Wstydzi się brzydkich, plastikowych ekspresów w swojej kuchni. Szuka przedmiotu, który jest dumą i symbolem klasy." 
          />
        </div>
      </div>

      {/* Methodology */}
      <div className="border-4 border-[#2D241E] p-1 shadow-xl">
        <div className="border border-[#2D241E] p-8 bg-white space-y-8">
           <h4 className="font-technical text-xs font-bold mb-6 uppercase tracking-widest text-center text-[#A67C52]">
            Nasza Metodologia: "Rzemiosło Odwrócone"
          </h4>
           <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 border-2 border-[#2D241E] rounded-full mx-auto flex items-center justify-center font-bold">I</div>
                <h5 className="font-bold uppercase text-xs">Diagnoza Analogowa</h5>
                <p className="text-xs text-[#2D241E]/60 italic">Słuchamy, mierzymy, obserwujemy. Żadnych uniwersalnych testerów OBD.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 border-2 border-[#2D241E] rounded-full mx-auto flex items-center justify-center font-bold">II</div>
                <h5 className="font-bold uppercase text-xs">Rewitalizacja Kruszcu</h5>
                <p className="text-xs text-[#2D241E]/60 italic">Czyszczenie mosiądzu i miedzi do połysku pierwotnego. Polerowanie mechaniczne.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 border-2 border-[#2D241E] rounded-full mx-auto flex items-center justify-center font-bold">III</div>
                <h5 className="font-bold uppercase text-xs">Kalibracja Sensoryczna</h5>
                <p className="text-xs text-[#2D241E]/60 italic">Ustawienie ekspresu pod konkretne ziarno i preferencje smakowe klienta.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const PainItem = ({ title, desc }: any) => (
  <div className="flex gap-4 group">
    <div className="mt-1">
      <div className="w-4 h-4 border border-[#2D241E] bg-white group-hover:bg-[#A67C52] transition-colors"></div>
    </div>
    <div>
      <h5 className="font-bold text-sm uppercase font-['Cormorant_Garamond']">{title}</h5>
      <p className="text-sm text-[#2D241E]/60 leading-relaxed italic">{desc}</p>
    </div>
  </div>
);