import React, { useEffect, useCallback } from 'react';
import { GalleryItem } from '../data/expertData';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  const currentIndex = item ? items.findIndex(i => i.id === item.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(items[currentIndex - 1]);
    } else {
      onNavigate(items[items.length - 1]);
    }
  }, [currentIndex, items, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(items[currentIndex + 1]);
    } else {
      onNavigate(items[0]);
    }
  }, [currentIndex, items, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, handlePrev, handleNext, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 backdrop-blur-md p-3 sm:p-6 transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Botão Fechar */}
      <button
        onClick={onClose}
        aria-label="Fechar tela cheia"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Botão Anterior */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Foto anterior"
        className="absolute left-2 sm:left-4 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Conteúdo Central */}
      <div
        className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-stone-900 border border-white/10 flex items-center justify-center max-h-[80vh]">
          <img
            src={item.url}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain select-none"
          />
        </div>

        {/* Informações da foto */}
        <div className="mt-3 text-center text-white px-4">
          <p className="font-serif font-bold text-lg text-[#F5EFE6]">{item.title}</p>
          {item.caption && (
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5">{item.caption}</p>
          )}
          <p className="text-[11px] text-stone-400 mt-1">
            Foto {currentIndex + 1} de {items.length} • Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </div>

      {/* Botão Próximo */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Próxima foto"
        className="absolute right-2 sm:right-4 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
