import React, { useState } from 'react';
import { RESULTS_GALLERY, GalleryItem } from '../data/expertData';
import { LightboxModal } from './LightboxModal';
import { WhatsAppButton } from './WhatsAppButton';
import { Sparkles, Maximize2, ShieldAlert } from 'lucide-react';

export const ResultsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const filteredItems = RESULTS_GALLERY.filter(item => {
    if (selectedCategory === 'todos') return true;
    return item.category === selectedCategory;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <section id="resultados" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C8]/60 text-[#735232] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Casos e Provas Visuais</span>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Resultados Reais de Pacientes
          </h2>
          
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Veja como a harmonia e o cuidado com as proporções faciais ressaltam a elegância de cada traço sem exageros artificiais.
          </p>
        </div>

        {/* Filtros Funcionais em Segmented Control */}
        <div className="mt-8 flex items-center justify-center">
          <div className="inline-flex p-1 rounded-2xl bg-white border border-stone-200/80 shadow-xs max-w-full overflow-x-auto">
            <button
              onClick={() => { setSelectedCategory('todos'); setVisibleCount(8); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'todos'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Todos ({RESULTS_GALLERY.length})
            </button>
            <button
              onClick={() => { setSelectedCategory('harmonizacao'); setVisibleCount(8); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'harmonizacao'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Harmonização Facial
            </button>
            <button
              onClick={() => { setSelectedCategory('labios'); setVisibleCount(8); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'labios'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Lábios & Contorno
            </button>
            <button
              onClick={() => { setSelectedCategory('odonto'); setVisibleCount(8); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'odonto'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Odontologia Estética
            </button>
          </div>
        </div>

        {/* Grid de Imagens */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-xs cursor-pointer aspect-square transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Overlay suave com ícone de expansão */}
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3 text-white">
                <div className="self-end p-1.5 rounded-lg bg-white/20 backdrop-blur-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold leading-tight line-clamp-1">{item.title}</p>
                  <p className="text-[10px] text-stone-200 mt-0.5">Toque para ampliar</p>
                </div>
              </div>

              {/* Badge discreto visível no mobile */}
              <div className="md:hidden absolute bottom-2 left-2 right-2 px-2 py-1 bg-stone-950/65 backdrop-blur-xs rounded-lg text-[10px] text-white truncate text-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Botão Ver Mais Fotos */}
        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="px-6 py-2.5 rounded-xl bg-white border border-stone-300 hover:border-stone-400 text-stone-800 text-sm font-semibold shadow-xs hover:bg-stone-50 transition-colors cursor-pointer"
            >
              Carregar mais resultados ({filteredItems.length - visibleCount} restantes)
            </button>
          </div>
        )}

        {/* Aviso Ético Obrigatório e Discreto */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-stone-500 max-w-xl mx-auto">
          <ShieldAlert className="w-4 h-4 text-stone-400 shrink-0" />
          <span>
            Resultados podem variar de pessoa para pessoa. Cada anatomia facial é única e demanda planejamento individualizado.
          </span>
        </div>

        {/* CTA Intermediário pós-resultados */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-sm text-center max-w-2xl mx-auto">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
            Deseja um resultado como esses para o seu rosto ou sorriso?
          </h3>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Dê o primeiro passo agendando uma avaliação 100% gratuita. Eu mesma vou analisar suas proporções e indicar o procedimento ideal.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton
              label="Agendar primeira consulta gratuita no WhatsApp"
              subtext="Resposta rápida • Sem compromisso"
              size="normal"
              variant="emerald"
            />
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        items={filteredItems}
        onClose={() => setActiveItem(null)}
        onNavigate={(newItem) => setActiveItem(newItem)}
      />
    </section>
  );
};
