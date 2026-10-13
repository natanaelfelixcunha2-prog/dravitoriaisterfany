export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'harmonizacao' | 'labios' | 'odonto' | 'todos';
  caption?: string;
}

export const EXPERT_INFO = {
  name: "Dra. Vitoria Isterfany",
  title: "Harmonização Orofacial & Odontologia Estética",
  cro: "CRO-CE", // Disponível para preenchimento se houver número específico
  city: "Tianguá - CE",
  address: "Av. Pref. Jaques Nunes, 1241 - Em cima da loja Osmar dos plásticos - Sl 01 - Centro, Tianguá - CE, 62320-000",
  addressShort: "Av. Pref. Jaques Nunes, 1241, Sl 01 - Centro, Tianguá - CE",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=5588982217088&text=Ol%C3%A1%2C+tenho+interesse+em+agendar+uma+consulta+com+a+Dra.+Vit%C3%B3ria+Isterfany+&type=phone_number&app_absent=0",
  whatsappNumber: "(88) 98221-7088",
  instagramUrl: "https://www.instagram.com/dra.vitoriaisterfany/",
  instagramHandle: "@dra.vitoriaisterfany",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Pref.+Jaques+Nunes,+1241+-+Centro,+Tiangu%C3%A1+-+CE,+62320-000",
  
  // Fotos principais do Expert
  photos: {
    hero: "https://i.imgur.com/OsoUJuv.jpeg",
    about: "https://i.imgur.com/qUpMgJP.jpeg",
    action1: "https://i.imgur.com/OsoUJuv.jpeg",
    action2: "https://i.imgur.com/qUpMgJP.jpeg",
  }
};

/**
 * GALERIA DE RESULTADOS / ANTES E DEPOIS
 * Para adicionar mais fotos, basta duplicar uma linha abaixo e colar o novo link!
 */
export const RESULTS_GALLERY: GalleryItem[] = [
  {
    id: "res-1",
    url: "https://i.imgur.com/pkdf2WU.jpeg",
    title: "Harmonização Orofacial",
    category: "harmonizacao",
    caption: "Definição harmônica e natural dos contornos faciais."
  },
  {
    id: "res-2",
    url: "https://i.imgur.com/99KlYpt.jpeg",
    title: "Escultura Labial",
    category: "labios",
    caption: "Hidratação profunda, volume delicado e desenho natural."
  },
  {
    id: "res-3",
    url: "https://i.imgur.com/yoN6CBU.jpeg",
    title: "Odontologia Estética",
    category: "odonto",
    caption: "Alinhamento estético e luminosidade do sorriso."
  },
  {
    id: "res-4",
    url: "https://i.imgur.com/cuQihqE.jpeg",
    title: "Harmonização Facial",
    category: "harmonizacao",
    caption: "Atenuação de linhas e rejuvenescimento sutil."
  },
  {
    id: "res-5",
    url: "https://i.imgur.com/F5o4mwK.jpeg",
    title: "Preenchimento Labial",
    category: "labios",
    caption: "Proporção áurea respeitando o formato original dos lábios."
  },
  {
    id: "res-6",
    url: "https://i.imgur.com/DkDaIl7.jpeg",
    title: "Transformação do Sorriso",
    category: "odonto",
    caption: "Harmonia perfeita entre dentes, gengiva e face."
  },
  {
    id: "res-7",
    url: "https://i.imgur.com/55icL6F.jpeg",
    title: "Definição de Mandíbula e Mento",
    category: "harmonizacao",
    caption: "Perfil equilibrado e angularidade refinada."
  },
  {
    id: "res-8",
    url: "https://i.imgur.com/soGAdJt.jpeg",
    title: "Revitalização e Preenchimento",
    category: "labios",
    caption: "Simetria labial com toque de elegância."
  },
  {
    id: "res-9",
    url: "https://i.imgur.com/Wxw1TdA.jpeg",
    title: "Estética Orofacial",
    category: "harmonizacao",
    caption: "Sutileza e rejuvenescimento sem mudar os traços essenciais."
  },
  {
    id: "res-10",
    url: "https://i.imgur.com/oFEE2xJ.jpeg",
    title: "Design de Lábios",
    category: "labios",
    caption: "Acabamento natural com técnica personalizada."
  },
  {
    id: "res-11",
    url: "https://i.imgur.com/VjZgX7z.jpeg",
    title: "Reabilitação Estética Dental",
    category: "odonto",
    caption: "Correção de proporções e clareamento visual."
  },
  {
    id: "res-12",
    url: "https://i.imgur.com/FM2MMBt.jpeg",
    title: "Arquitetura Facial",
    category: "harmonizacao",
    caption: "Sustentação e luminosidade dos pontos estratégicos da face."
  },
  {
    id: "res-13",
    url: "https://i.imgur.com/xH3z6oa.jpeg",
    title: "Preenchimento e Contorno",
    category: "labios",
    caption: "Arco do cupido desenhado com precisão milimétrica."
  },
  {
    id: "res-14",
    url: "https://i.imgur.com/JPBcYkc.jpeg",
    title: "Harmonia do Sorriso",
    category: "odonto",
    caption: "Resultado expressivo e natural."
  },
  {
    id: "res-15",
    url: "https://i.imgur.com/S7GCnu9.jpeg",
    title: "Bioestimulador & Firmeza",
    category: "harmonizacao",
    caption: "Qualidade de pele aprimorada e estímulo de colágeno."
  },
  {
    id: "res-16",
    url: "https://i.imgur.com/dvr1YH9.jpeg",
    title: "Lábios Esculpidos",
    category: "labios",
    caption: "Volume sob medida, sem aspecto inflado ou artificial."
  },
  {
    id: "res-17",
    url: "https://i.imgur.com/gLzuIJp.jpeg",
    title: "Resultado Estético Integrado",
    category: "harmonizacao",
    caption: "Expressão leve, jovial e sofisticada."
  }
];

export const TRUST_CARDS = [
  {
    icon: "ShieldCheck",
    title: "Avaliação 100% Honesta",
    description: "Você nunca será empurrada para procedimentos desnecessários. Eu só indico o que realmente valoriza seus traços com bom senso e ética."
  },
  {
    icon: "UserCheck",
    title: "Atendimento Feito por Mim",
    description: "Do diagnóstico inicial e aplicação até o acompanhamento pós-procedimento, é comigo que você conversa e é quem cuida de você."
  },
  {
    icon: "Sparkles",
    title: "Naturalidade Absoluta",
    description: "Chega de medo de ficar com rosto engessado ou lábios exagerados. Minha filosofia é que as pessoas notem que você está linda, sem saber o que você fez."
  },
  {
    icon: "Award",
    title: "Produtos de Padrão Ouro",
    description: "Utilizo exclusivamente substâncias certificadas pela ANVISA, marcas biocompatíveis de alta pureza e durabilidade comprovada."
  },
  {
    icon: "HeartHandshake",
    title: "Acompanhamento Próximo",
    description: "Você não sai do consultório desamparada. Tenho canal direto no WhatsApp para tirar dúvidas e acompanhar sua cicatrização."
  },
  {
    icon: "MapPin",
    title: "Localização Privilegiada em Tianguá",
    description: "Consultório discreto e acolhedor no Centro de Tianguá, projetado para o seu máximo conforto, privacidade e bem-estar."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Toque no WhatsApp",
    description: "Envie uma mensagem rápida dizendo que quer agendar sua avaliação. Vamos responder com toda a atenção.",
    tag: "Em menos de 2 minutos"
  },
  {
    step: "02",
    title: "Escolha o melhor dia e horário",
    description: "Encontramos o horário ideal para a sua rotina no nosso consultório no Centro de Tianguá.",
    tag: "Flexibilidade na sua agenda"
  },
  {
    step: "03",
    title: "Avaliação Gratuita Presencial",
    description: "Sentamos com calma, eu analiso sua face e dentes, entendo suas vontades e explico o plano ideal — sem nenhum custo e sem pressão.",
    tag: "100% Gratuita e Sem Compromisso"
  }
];

export const FAQS = [
  {
    question: "A primeira consulta é realmente gratuita?",
    answer: "Sim! A primeira consulta é 100% gratuita e sem nenhum compromisso. É o momento em que avalio a anatomia do seu rosto ou sorriso, ouço o que te incomoda e apresento as melhores opções com clareza, para você decidir com tranquilidade."
  },
  {
    question: "Tenho medo de ficar com o rosto artificial ou exagerado. O que você faz a respeito?",
    answer: "Essa é a preocupação mais comum e compreensível de todas as minhas pacientes. Minha marca registrada é a naturalidade. Trabalho com doses calculadas e foco em harmonizar proporções, respeitando a sua identidade para você continuar sendo você mesma, apenas mais descansada e radiante."
  },
  {
    question: "Os procedimentos de harmonização doem?",
    answer: "O desconforto é mínimo! Utilizamos anestésicos tópicos potentes e produtos modernos que já contêm anestésico na própria fórmula. O processo é rápido, tranquilo e muito bem tolerado."
  },
  {
    question: "Quanto tempo dura o resultado dos procedimentos?",
    answer: "Varia conforme o procedimento escolhido: toxina botulínica geralmente dura de 4 a 6 meses; preenchedores com ácido hialurônico duram de 12 a 18 meses; e tratamentos de odontologia estética proporcionam durabilidade prolongada com os devidos cuidados."
  },
  {
    question: "Como funciona se eu ainda não sei o que preciso fazer?",
    answer: "Você não precisa saber de antemão! É exatamente para isso que serve a primeira consulta gratuita. Eu faço uma análise facial completa e explico onde pequenos ajustes trarão os maiores benefícios para a sua autoestima."
  }
];
