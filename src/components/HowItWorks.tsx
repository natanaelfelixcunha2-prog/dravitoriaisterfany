import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/expertData';
import { WhatsAppButton } from './WhatsAppButton';
import { CalendarCheck, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFE6] text-[#8C6D45] text-xs font-semibold mb-3">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Passo a Passo Simples</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Como funciona a sua primeira consulta?
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Sem burocracia e sem complicação. Em 3 etapas você garante o seu horário no consultório.
          </p>
        </div>

        {/* 3 Passos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Número do Passo Editorial */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C5A880]">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 bg-white px-2.5 py-1 rounded-full border border-stone-200/60">
                    {step.tag}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-stone-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < 2 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-stone-300 items-center justify-center text-stone-400">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reforço de gratuidade e sem compromisso */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F5EFE6]/60 border border-[#E8D8C8] text-center max-w-xl mx-auto">
          <p className="text-sm font-semibold text-stone-800">
            Lembrando: A consulta é 100% gratuita e sem nenhum compromisso.
          </p>
          <p className="text-xs text-stone-600 mt-1">
            Você tem total liberdade para tirar dúvidas e decidir apenas quando se sentir segura.
          </p>
        </div>

        {/* Botão */}
        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            label="Garantir meu horário no WhatsApp"
            subtext="Resposta rápida • Sem compromisso"
            size="large"
            variant="emerald"
          />
        </div>

      </div>
    </section>
  );
};
