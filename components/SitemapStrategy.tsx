import React from 'react';
import { ArrowRight, Box, CheckCircle } from 'lucide-react';

export const SitemapStrategy: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Architektura Strony Sprzedażowej</h2>
      <p className="text-stone-400 mb-8 max-w-3xl">
        Strona ma być narzędziem selekcji i konwersji. Ma od razu mówić: "Naprawiam TE marki, w TYM rejonie, w TAKI sposób". 
        Struktura One-Page z podziałem na sekcje dla Klienta Indywidualnego i Biznesowego.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Structure Visualization */}
        <div className="space-y-4">
          <SiteSection 
            number="01" 
            name="Hero Section (Obietnica)" 
            details="Nagłówek: 'Profesjonalny Serwis Ekspresów Ciśnieniowych'. Podtytuł: 'Specjalizacja: Jura, Nivona, Saeco'. CTA: 'Umów Naprawę'." 
          />
          <SiteSection 
            number="02" 
            name="Problem & Rozwiązanie" 
            details="Krótka lista problemów: 'Słaba kawa?', 'Wyciek?', 'Błąd systemu?'. Odpowiedź: 'Diagnozuję i naprawiam w 48h'." 
          />
          <SiteSection 
            number="03" 
            name="Strefa B2B (Dla Firm)" 
            details="Dedykowany blok dla biur. 'Stała obsługa = brak przestojów w kawie'. Info o fakturach i ekspresach zastępczych." 
          />
          <SiteSection 
            number="04" 
            name="Standard Higieny (Zaufanie)" 
            details="Pokazanie procesu czyszczenia. 'Twój ekspres wraca sterylny'. To kluczowy wyróżnik dla Awatara Konesera." 
          />
          <SiteSection 
            number="05" 
            name="Kontakt & Lokalizacja" 
            details="Wyraźna mapa zasięgu (Kraków + okolice). Formularz 'Szybka Wycena'. Telefon klikalny." 
          />
        </div>

        {/* Business Goals Alignment */}
        <div className="bg-stone-800/20 p-8 rounded-2xl border border-stone-700/30">
          <h3 className="text-xl font-bold text-white mb-6">Jak to realizuje cele Awatarów?</h3>
          <ul className="space-y-6">
            <BusinessGoal 
              goal="Dla Managera Biura (Kasia)"
              solution="Widzi sekcję 'B2B', widzi 'Faktura VAT', widzi 'Szybki Dojazd'. Czuje, że to bezpieczny wybór dla firmy."
            />
            <BusinessGoal 
              goal="Dla Konesera Domowego (Marek)"
              solution="Widzi marki premium (Jura/Nivona). Widzi dbałość o detale i higienę. Wie, że oddaje sprzęt ekspertowi, nie 'złotej rączce'."
            />
            <BusinessGoal 
              goal="Dla Ciebie (Właściciela)"
              solution="Strona filtruje klientów szukających 'naprawy za 50 zł'. Wygląd premium sugeruje usługę premium. Mniej telefonów od 'tanioszków'."
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

const SiteSection = ({ number, name, details }: { number: string, name: string, details: string }) => (
  <div className="flex gap-4 items-start group">
    <span className="font-mono text-orange-500/50 text-xl font-bold group-hover:text-orange-500 transition-colors">
      {number}
    </span>
    <div className="bg-stone-900 p-4 rounded-lg border border-stone-800 w-full group-hover:border-stone-700 transition-all">
      <h4 className="font-bold text-stone-200">{name}</h4>
      <p className="text-sm text-stone-400 mt-2 leading-relaxed">{details}</p>
    </div>
  </div>
);

const BusinessGoal = ({ goal, solution }: { goal: string, solution: string }) => (
  <li className="flex gap-3">
    <CheckCircle className="text-green-500 shrink-0 w-5 h-5 mt-0.5" />
    <div>
      <strong className="block text-stone-200 mb-1">{goal}</strong>
      <span className="text-stone-400 text-sm block">{solution}</span>
    </div>
  </li>
);