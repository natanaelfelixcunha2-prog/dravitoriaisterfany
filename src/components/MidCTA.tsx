import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { MessageSquareHeart, Check } from 'lucide-react';

export const MidCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#1C1917] text-white relative overflow-hidden">
      {/* Subtle luxury light accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#E8D8C8] text-xs font-medium mb-4 backdrop-blur-xs">
          <MessageSquareHeart className="w-4 h-4 text-[#C5A880]" />
          <span>Primeira Consulta 100% Gratuita e Sem Compromisso</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
          Ainda em dúvida se a harmonização é ideal para você?
        </h2>

        <p className="mt-4 text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Você não precisa fechar nada de imediato. Na primeira conversa, eu avalio a harmonia do seu rosto com carinho, mostro as possibilidades reais e respondo cada uma das suas perguntas.
        </p>

        {/* 3 Garantias Rápidas */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-stone-300">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" /> Sem pressão de venda
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" /> Diagnóstico sincero e anatômico
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" /> Atendimento direto no WhatsApp
          </span>
        </div>

        {/* Botão de WhatsApp de Alta Conversão */}
        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            label="Conversar comigo no WhatsApp agora"
            subtext="Resposta rápida • Sem compromisso"
            size="large"
            variant="emerald"
          />
        </div>

      </div>
    </section>
  );
};
