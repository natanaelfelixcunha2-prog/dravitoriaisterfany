import React from 'react';
import { TRUST_CARDS } from '../data/expertData';
import { ShieldCheck, UserCheck, Sparkles, Award, HeartHandshake, MapPin } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#A48259]" />,
  UserCheck: <UserCheck className="w-6 h-6 text-[#A48259]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#A48259]" />,
  Award: <Award className="w-6 h-6 text-[#A48259]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#A48259]" />,
  MapPin: <MapPin className="w-6 h-6 text-[#A48259]" />
};

export const WhyTrustMe: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFE6] text-[#8C6D45] text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Segurança & Compromisso</span>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Por que confiar o seu rosto e sorriso a mim?
          </h2>
          
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Seu rosto é sua identidade. É por isso que cada detalhe do meu atendimento foi pensado para lhe entregar total tranquilidade.
          </p>
        </div>

        {/* 6 Cards com Diferenciais */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 hover:border-stone-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-stone-200/70 shadow-xs flex items-center justify-center mb-4">
                  {iconMap[card.icon] || <Sparkles className="w-6 h-6 text-[#A48259]" />}
                </div>

                <h3 className="font-serif font-bold text-lg text-stone-900">
                  {card.title}
                </h3>

                <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/40 flex items-center gap-1.5 text-xs text-[#8C6D45] font-medium">
                <span>Diferencial garantido</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
