import React from 'react';
import { EXPERT_INFO } from '../data/expertData';
import { Sparkles, HeartHandshake, ShieldCheck, Award } from 'lucide-react';

export const AboutExpert: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-y border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Coluna da Imagem */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#F5EFE6] shadow-xl shadow-stone-900/5 aspect-[3/4] bg-stone-100">
                <img
                  src={EXPERT_INFO.photos.about}
                  alt="Dra. Vitoria Isterfany no consultório"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Tag de autoridade elegante */}
              <div className="mt-4 text-center">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  Harmonização Orofacial & Estética Dental • Tianguá/CE
                </span>
              </div>
            </div>
          </div>

          {/* Coluna de Texto em 1ª Pessoa */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFE6] text-[#8C6D45] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Autoridade e Cuidado Humano</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
              Acredito que a verdadeira harmonização não muda quem você é — ela apenas revela a sua melhor versão.
            </h2>

            <div className="mt-5 space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              <p>
                Olá, eu sou a <strong className="text-stone-900 font-semibold">Dra. Vitoria Isterfany</strong>. Muitas pessoas chegam até mim com receio de perderem a sua identidade, com medo de ficarem com lábios inflados ou expressões congeladas por procedimentos exagerados que viram na internet.
              </p>
              <p>
                O meu compromisso com você é o exato oposto. No meu consultório em Tianguá, você não é mais um número nem passa por um atendimento frio e apressado. Cada traço do seu rosto, a curvatura do seu sorriso e a sua anatomia são analisados com respeito e sutileza.
              </p>
              <p>
                Eu planejo e executo pessoalmente cada etapa do seu tratamento, combinando técnicas avançadas de harmonização orofacial com odontologia estética para entregar equilíbrio e elegância discreta.
              </p>
            </div>

            {/* Bullets com Diferenciais */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/70">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white text-[#A48259] shadow-xs shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 text-sm">Atendimento 100% Pessoal</h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Você conversa e realiza tudo diretamente comigo, do diagnóstico ao acompanhamento.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/70">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white text-[#A48259] shadow-xs shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 text-sm">Naturalidade como Regra</h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Resultados finos, elegantes e harmônicos que valorizam você sem chamar atenção negativa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/70">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white text-[#A48259] shadow-xs shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 text-sm">Planejamento Seguro</h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Análise facial anatômica precisa antes de qualquer agulha ou produto.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/70">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white text-[#A48259] shadow-xs shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 text-sm">Materiais Padrão Ouro</h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Somente produtos homologados pela ANVISA com máxima biocompatibilidade.
                    </p>
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
