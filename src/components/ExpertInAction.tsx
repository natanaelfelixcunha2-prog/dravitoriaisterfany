import React from 'react';
import { EXPERT_INFO } from '../data/expertData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const ExpertInAction: React.FC = () => {
  const photos = [
    {
      url: EXPERT_INFO.photos.hero,
      tag: "Atendimento Personalizado",
      title: "Cuidado Individualizado",
      caption: "Cada paciente recebe um plano exclusivo respeitando sua anatomia única."
    },
    {
      url: EXPERT_INFO.photos.about,
      tag: "Precisão & Técnica",
      title: "Rigor nos Mínimos Detalhes",
      caption: "Aplicação milimétrica para resultados simétricos e de extrema naturalidade."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C8]/60 text-[#735232] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Presença & Bastidores</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Autoridade e Cuidado em Cada Etapa
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Aqui você encontra um ambiente reservado, tecnologia de ponta e uma profissional inteiramente dedicada ao seu bem-estar.
          </p>
        </div>

        {/* Grid com as Fotos do Expert e Legendas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-md flex flex-col"
            >
              <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
                <img
                  src={item.url}
                  alt={`${EXPERT_INFO.name} - ${item.title}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-stone-950/70 backdrop-blur-md text-white rounded-full text-xs font-medium">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                  {item.caption}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-[#8C6D45]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <span>Dra. Vitoria Isterfany • Tianguá/CE</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
