import React from 'react';
import { EXPERT_INFO } from '../data/expertData';
import { WhatsAppButton } from './WhatsAppButton';
import { MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20 bg-gradient-to-b from-[#F5EFE6] via-[#FAF8F5] to-[#FAF8F5]">
      {/* Subtle luxury ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8D8C8]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Top Badge */}
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-white/80 border border-stone-200/80 shadow-xs text-xs font-medium text-stone-700">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="font-semibold text-stone-900">Atendimento Exclusivo</span>
            <span className="text-stone-300">|</span>
            <span className="flex items-center gap-1 text-stone-600">
              <MapPin className="w-3 h-3 text-[#C5A880]" /> Tianguá - CE
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Content Column (Mobile-first copy) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Headline em 1ª Pessoa */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15] text-balance">
              Eu sou a <span className="text-[#A48259]">Dra. Vitoria Isterfany</span>, especialista em Harmonização Orofacial e Odontologia Estética.
            </h1>

            {/* Subheadline orientada a benefício e segurança */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-xl text-balance">
              Realce a sua beleza natural com harmonia, elegância e a total segurança de um planejamento facial 100% individualizado. <strong className="font-semibold text-stone-800">Sem exageros e sem tratamentos padronizados.</strong>
            </p>

            {/* Quick Proof highlights */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Avaliação detalhada sem custo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Atendimento direto comigo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Produtos de padrão ouro</span>
              </div>
            </div>

            {/* FOTO NO MOBILE (Visível antes do CTA no celular para gerar conexão imediata com o olhar do expert) */}
            <div className="lg:hidden w-full max-w-sm my-6">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 border-4 border-white bg-stone-100 aspect-[4/5]">
                <img
                  src={EXPERT_INFO.photos.hero}
                  alt="Dra. Vitoria Isterfany - Harmonização Orofacial"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex flex-col justify-end p-4 text-left">
                  <p className="text-white font-serif text-lg font-bold">{EXPERT_INFO.name}</p>
                  <p className="text-white/80 text-xs">{EXPERT_INFO.title}</p>
                </div>
              </div>
            </div>

            {/* Botão Principal de CTA */}
            <div className="mt-6 sm:mt-8 w-full flex flex-col items-center lg:items-start">
              <WhatsAppButton
                label="Agendar primeira consulta gratuita no WhatsApp"
                subtext="Resposta rápida • Sem compromisso"
                size="large"
                variant="emerald"
                className="w-full"
              />
            </div>

            <p className="mt-4 text-xs text-stone-400">
              Atendimento presencial no Centro de Tianguá • Vagas semanais limitadas para garantir atenção exclusiva
            </p>
          </div>

          {/* Desktop Expert Photo Column */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative">
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C5A880]/30 to-[#E8D8C8]/40 blur-lg transform -rotate-1" />
              
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-stone-900/15 bg-stone-100 aspect-[3/4]">
                <img
                  src={EXPERT_INFO.photos.hero}
                  alt="Dra. Vitoria Isterfany - Harmonização Orofacial em Tianguá"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Floating card on Desktop */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-stone-100 shadow-lg text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif font-bold text-stone-900 text-base">{EXPERT_INFO.name}</p>
                      <p className="text-xs text-stone-500 font-medium">{EXPERT_INFO.title}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-[#F5EFE6] text-[#8C6D45] rounded-full">
                        Tianguá - CE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
