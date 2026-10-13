import React from 'react';
import { EXPERT_INFO } from '../data/expertData';
import { WhatsAppButton } from './WhatsAppButton';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F5EFE6]/60 to-[#FAF8F5] relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C8]/60 text-[#735232] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Sua Autoestima Merece Esse Cuidado</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight max-w-2xl mx-auto text-balance">
          Pronta para realçar o que você tem de mais belo, com naturalidade e segurança?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-stone-600 max-w-xl mx-auto leading-relaxed text-balance">
          Agende sua primeira avaliação presencial comigo no Centro de Tianguá. É 100% gratuita, humanizada e sem qualquer compromisso.
        </p>

        {/* Informações da Expert em destaque */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <img
            src={EXPERT_INFO.photos.hero}
            alt={EXPERT_INFO.name}
            referrerPolicy="no-referrer"
            className="w-12 h-12 rounded-full object-cover object-top border-2 border-white shadow-sm"
          />
          <div className="text-left">
            <p className="font-serif font-bold text-stone-900 text-sm leading-tight">{EXPERT_INFO.name}</p>
            <p className="text-xs text-stone-500">{EXPERT_INFO.title}</p>
          </div>
        </div>

        {/* Botão de WhatsApp Final */}
        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            label="Agendar primeira consulta gratuita no WhatsApp"
            subtext="Resposta rápida • Sem compromisso"
            size="large"
            variant="emerald"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-stone-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Atendimento individual • Sigilo absoluto • Ambiente acolhedor</span>
        </div>

      </div>
    </section>
  );
};
