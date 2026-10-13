import React, { useState } from 'react';
import { FAQS } from '../data/expertData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFE6] text-[#8C6D45] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Tire suas dúvidas antes de agendar
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Respostas transparentes para as perguntas mais comuns de nossas pacientes.
          </p>
        </div>

        {/* Acordeom */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200/80 bg-[#FAF8F5] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm sm:text-base cursor-pointer hover:bg-stone-100/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-stone-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-stone-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-4 pt-1 text-stone-600 text-sm leading-relaxed border-t border-stone-200/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
