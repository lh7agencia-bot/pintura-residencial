export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  context: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: 'Pinturas Prediais E Residênciais Régis Gross',
  shortName: 'Régis Gross',
  slogan: 'Pincelada que muda tudo',
  niche: 'Pintor Predial e Residencial',
  address: 'Rua Vereador Alfredo vassai N° : 802 - Camping, Rio Grande - RS, 96200-270',
  cityState: 'Rio Grande - RS',
  neighborhood: 'Camping',
  phoneDisplay: '(53) 99112-3073',
  phoneDigits: '5553991123073',
  whatsappBaseUrl: 'https://wa.me/5553991123073',
  defaultWhatsappText: 'Olá! Gostaria de solicitar um orçamento com Pinturas Prediais E Residênciais Régis Gross.',
  emailRecipient: 'contato@regisgrosspinturas.com.br',
} as const;

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'foto-1',
    src: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcWqvECVeKZqe-gS61ZQjDXOKkPtkXCZhMk7tWfe9XqX6XLPIHPUsRR-j1wHlKTCiO0JHm9vX-4eJbvEqGTvALIh8tRdUVY2EMHRkauJvBbL__AOjHMPsQ2tbTzqxrTfJYpDIx0Mw=s4800-w1024',
    alt: 'Acabamento de pintura executado por Pinturas Prediais E Residênciais Régis Gross',
    title: 'Acabamento e Cobertura Uniforme',
    category: 'Residencial e Predial',
  },
  {
    id: 'foto-2',
    src: 'https://lh3.googleusercontent.com/grass-cs/AABkmLfRIkIcXJoGoE-KCVOCo32bursYexSAKCsF1nGQTZt-Xm6BNjtWjfxdUn8B3vWOfybj0ogBuJxBUIJBY3sDx_HiA4UFnWLJBW9hl767Eg77BOo2LvvIc73fSk1EsXzBznqoNkF6DlE-_Iri=s4800-w1024',
    alt: 'Projeto de pintura finalizado em Rio Grande - RS pela equipe Régis Gross',
    title: 'Renovação Completa de Superfícies',
    category: 'Pintura Profissional',
  },
  {
    id: 'foto-3',
    src: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdKXWNAAphi2el8mPK8IzSJ7cKxMctF76z0buee2FOyHrZdlnWUsOy5-I20WkC79MD8H2P_6He-oCUNIaNe0BLuTj9pwkJKiV4E9ezVaSGcu35Auwsm5g6HSGsdkbgH4VXedZU1yrHoE28=s4800-w1024',
    alt: 'Trabalho detalhado em pintura predial e residencial realizado por Régis Gross',
    title: 'Precisão nos Detalhes e Recortes',
    category: 'Ambientes e Fachadas',
  },
  {
    id: 'foto-4',
    src: 'https://lh3.googleusercontent.com/grass-cs/AABkmLeyjFpkrptvAryLUY7jK49iT3UTr6Dbnh9znZl4w4ZHBYv2knF6aVYvr-HedJsf8NzhRHWT-hrBo88FhnvF5SwoV6U0mtAh-sqm7_jeipLEO0KjyqLkZbFhQA27fhL7g5bkPKY=s4800-w1024',
    alt: 'Obra atendida por Pinturas Prediais E Residênciais Régis Gross em Rio Grande',
    title: 'Proteção e Durabilidade',
    category: 'Execução Técnica',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01.',
    title: 'Pintura Residencial Interna e Externa',
    description:
      'Renovação completa de casas e apartamentos com proteção rigorosa de pisos, móveis e esquadrias, garantindo recorte preciso e acabamento liso.',
    highlights: ['Tinta acrílica, fosca ou acetinada', 'Proteção integral do mobiliário', 'Limpeza ao final de cada etapa'],
  },
  {
    number: '02.',
    title: 'Pintura Predial e de Fachadas',
    description:
      'Atendimento especializado para edifícios, condomínios e imóveis comerciais em Rio Grande, utilizando tintas de alta resistência ao clima litorâneo.',
    highlights: ['Tratamento contra maresia e umidade', 'Reparo de fissuras e trincas', 'Cronograma organizado por etapas'],
  },
  {
    number: '03.',
    title: 'Preparação, Massa Corrida e Nivelamento',
    description:
      'Uma pintura duradoura começa na base. Realizamos lixamento técnico, aplicação de massa corrida ou acrílica e selador adequado para cada parede.',
    highlights: ['Correção de imperfeições', 'Massa PVA e massa acrílica', 'Aplicação de fundo preparador'],
  },
  {
    number: '04.',
    title: 'Texturas, Impermeabilização e Esmaltes',
    description:
      'Aplicação de texturas decorativas, vernizes e esmaltes em portas, janelas, portões e muros para unir proteção contra intempéries e estética apurada.',
    highlights: ['Esmalte sintético e base água', 'Tratamento antimofo e selantes', 'Muros, gradis e madeiramentos'],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dep-1',
    name: 'Marcelo Silveira',
    context: 'Pintura residencial interna · Rio Grande - RS',
    rating: 5,
    text: 'Contratamos o Régis Gross para pintar todo o apartamento antes da mudança. Cumpriram o prazo combinado à risca, cuidaram de cada recorte no teto e entregaram o imóvel limpo e sem respingos.',
  },
  {
    id: 'dep-2',
    name: 'Carla Mendes',
    context: 'Fachada e áreas comuns · Condomínio em Rio Grande',
    rating: 5,
    text: 'Nossa fachada sofria muito com a umidade e a maresia. A equipe fez todo o tratamento das paredes antes de aplicar a tinta acrílica. O prédio ganhou cara nova e o resultado ficou impecável.',
  },
  {
    id: 'dep-3',
    name: 'Roberto Tavares',
    context: 'Pintura externa e esquadrias · Bairro Camping',
    rating: 5,
    text: 'Trabalho sério, orçamento transparente e capricho do início ao fim. Além das paredes externas, renovaram portões e portas de madeira com acabamento uniforme. Recomendo sem pensar duas vezes.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona o orçamento e vocês fazem visita técnica?',
    answer:
      'Sim. Após o primeiro contato pelo WhatsApp ou formulário, agendamos uma visita no local em Rio Grande e região para avaliar a metragem, o estado das paredes e o tipo de tinta ideal, entregando um orçamento claro e sem surpresas.',
  },
  {
    id: 'faq-2',
    question: 'O material (tintas, massas e lonas) está incluído ou é por conta do cliente?',
    answer:
      'Trabalhamos das duas formas conforme a preferência do cliente. Podemos fornecer a lista exata de materiais e rendimentos para você comprar ou apresentar uma proposta completa já contemplando tintas de primeira linha e insumos de preparação.',
  },
  {
    id: 'faq-3',
    question: 'Como vocês protegem móveis, pisos e objetos durante a pintura?',
    answer:
      'Antes de abrir qualquer lata de tinta, forramos pisos com papelão ou lona resistente, isolamos rodapés, interruptores e esquadrias com fita automotiva/crepe de qualidade e cobrimos móveis com plástico protetor.',
  },
  {
    id: 'faq-4',
    question: 'Quais tipos de tinta são recomendados para o clima de Rio Grande?',
    answer:
      'Por conta da umidade e proximidade com o mar, recomendamos tintas acrílicas premium com ação antimofo para áreas internas e tintas acrílicas emborrachadas ou de alta resistência às intempéries para fachadas e muros externos.',
  },
  {
    id: 'faq-5',
    question: 'Qual é o prazo médio para concluir a pintura de uma casa ou prédio?',
    answer:
      'Apartamentos ou residências padrão costumam levar de 3 a 7 dias úteis, variando conforme a necessidade de massa corrida e secagem entre demãos. Obras prediais recebem um cronograma detalhado por etapa antes do início.',
  },
];
