import React from 'react';
import { Hero } from './components/Hero';
import { AboutExpert } from './components/AboutExpert';
import { ResultsGallery } from './components/ResultsGallery';
import { WhyTrustMe } from './components/WhyTrustMe';
import { MidCTA } from './components/MidCTA';
import { HowItWorks } from './components/HowItWorks';
import { ExpertInAction } from './components/ExpertInAction';
import { FaqSection } from './components/FaqSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#E8D8C8] selection:text-[#3B2818]">
      {/* 
        ESTRUTURA OBRIGATÓRIA (sem menu, sem distrações para máxima conversão no WhatsApp):
        1. Hero (Primeira Dobra)
        2. Bloco "Quem Sou Eu" (Autoridade pessoal em 1ª pessoa)
        3. Bloco "Resultados Reais" (Galeria com 17 fotos de prova visual + Lightbox)
        4. Bloco "Por Que Confiar em Mim?" (6 cards com diferenciais)
        5. CTA Intermediário (Quebra de objeção + WhatsApp)
        6. Bloco "Como Funciona a Primeira Consulta" (3 passos simples)
        7. Bloco "Mais Provas" (Expert e bastidores)
        8. FAQ (Respostas às maiores dúvidas das pacientes)
        9. CTA Final (Decisão)
        10. Rodapé Simples
      */}
      <main className="flex-1">
        <Hero />
        <AboutExpert />
        <ResultsGallery />
        <WhyTrustMe />
        <MidCTA />
        <HowItWorks />
        <ExpertInAction />
        <FaqSection />
        <FinalCTA />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
