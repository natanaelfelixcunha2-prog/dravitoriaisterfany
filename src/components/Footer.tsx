import React from 'react';
import { EXPERT_INFO } from '../data/expertData';
import { MapPin, Instagram, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 sm:py-16 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-stone-800">
          
          {/* Identidade do Expert */}
          <div className="md:col-span-6">
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              {EXPERT_INFO.name}
            </h3>
            <p className="text-sm text-[#C5A880] font-medium mt-1">
              {EXPERT_INFO.title}
            </p>
            <p className="mt-4 text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
              Atendimento exclusivo em Harmonização Orofacial e Odontologia Estética com foco em naturalidade, segurança anatômica e valorização dos seus traços únicos.
            </p>

            {/* Redes Sociais */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={EXPERT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold transition-colors"
                aria-label="Instagram da Dra. Vitoria Isterfany"
              >
                <Instagram className="w-4 h-4 text-[#E8D8C8]" />
                <span>{EXPERT_INFO.instagramHandle}</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>

              <a
                href={EXPERT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-400 text-xs font-semibold transition-colors"
                aria-label="WhatsApp da Dra. Vitoria Isterfany"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Localização e Endereço */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-400 mb-3">
                Localização do Consultório
              </h4>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{EXPERT_INFO.addressShort}</p>
                  <p className="text-stone-400 text-xs mt-0.5">
                    Av. Pref. Jaques Nunes, 1241 - Em cima da loja Osmar dos plásticos - Sl 01 em - Centro, Tianguá - CE, 62320-000
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={EXPERT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8D8C8] hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Ver rota no Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé inferior / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {EXPERT_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-stone-500">
            Harmonização Orofacial e Odontologia Estética • Tianguá - Ceará
          </p>
        </div>

      </div>
    </footer>
  );
};
