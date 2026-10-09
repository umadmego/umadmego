import type { StaticImageData } from 'next/image';
import cartaz2027 from '@/assets/edicoes/2027/cartaz.webp';
import camiseta2027 from '@/assets/edicoes/2027/camiseta-divulgacao.webp';
import arteTema2027 from '@/assets/edicoes/2027/arte-tema.webp';

/**
 * Dados da edição atual do congresso.
 * Para virar o ano, troque os valores abaixo (e as imagens em src/assets/edicoes/<ano>/)
 * e acrescente a edição anterior no topo de `edicoesAnteriores`.
 */
export type Edicao = {
  ano: number;
  numero: string;
  tema: string;
  datas: string;
  datasCurtas: string;
  status: string;
  local: { nome: string; endereco: string };
  /** Cor de destaque da edição. Precisa ter contraste com texto branco (≥ 4,5:1). */
  cor: string;
  cartaz: StaticImageData;
  cartazAlt: string;
  /** Explicação do tema. Some do site quando não estiver definida. */
  conceito?: {
    referencia: string;
    paragrafos: string[];
    mensagem: string;
    arte?: StaticImageData;
    arteAlt?: string;
  };
  /** Produto divulgado na seção do tema (exige `conceito`). Some do site quando não estiver definido. */
  loja?: {
    titulo: string;
    descricao: string;
    preco: string;
    imagem: StaticImageData;
    imagemAlt: string;
    link: string;
    chamada: string;
  };
};

export const edicao: Edicao = {
  ano: 2027,
  numero: '24º',
  tema: 'El Rói — O Deus que me vê',
  datas: '6 a 10 de fevereiro de 2027',
  datasCurtas: '6 a 10 fev 2027',
  status: 'Próxima edição',
  local: {
    nome: 'IEAD Missão — Sede',
    endereco: 'Rua 208, nº 930, Setor Leste Vila Nova, Goiânia – GO',
  },
  cor: '#D42A20',
  cartaz: cartaz2027,
  cartazAlt: 'Cartaz do Congresso UMADMEGO 2027 — El Rói, o Deus que me vê — 6 a 10 de fevereiro de 2027',
  conceito: {
    referencia: 'Gênesis 16.13-16',
    paragrafos: [
      'Na Bíblia, Agar estava rejeitada e fugindo para o deserto, sentindo-se a pessoa mais esquecida do mundo. O Anjo do Senhor a encontra e ela percebe que não é invisível.',
      'Hoje, o maior deserto da nossa juventude não é um lugar de terra e areia, mas sim a cidade lotada. É a dor de estar no meio da multidão, conectado o tempo todo, e ainda assim se sentir completamente sozinho e não notado por ninguém.',
    ],
    mensagem:
      'O nosso maior deserto hoje não é um lugar vazio. É estar cercado por milhares de pessoas e, ainda assim, se sentir completamente invisível. É ser apenas mais um rosto borrado no meio da multidão. Agar estava sozinha e sem futuro, mas o Criador parou o universo para olhar para ela. Não importa quantas pessoas passem por você sem te notar. No meio do caos, Ele encontra você. EL RÓI. O Deus que me vê.',
    arte: arteTema2027,
    arteAlt: 'Arte do tema El Rói: multidão desenhada em vermelho com dois rostos destacados por marcações de foco e a citação de Gênesis 16.13-16',
  },
  loja: {
    titulo: 'Camiseta oficial',
    descricao: 'A mensagem do El Rói estampada na frente e nas costas. Vista o tema e leve essa mensagem para a sua cidade. Pedidos pelo link na bio do Instagram.',
    preco: 'R$ 55,00',
    imagem: camiseta2027,
    imagemAlt: 'Camiseta oficial El Rói: frente com a frase “O Deus que me vê” e costas com a arte do tema. Peça a sua pelo link da bio, R$ 55,00',
    link: 'https://www.instagram.com/umadmego/',
    chamada: 'Peça a sua no Instagram',
  },
};

export type EdicaoAnterior = {
  ano: number;
  tema?: string;
  /** Playlist do YouTube (link de embed) com as ministrações da edição. */
  playlist?: string;
};

export const edicoesAnteriores: EdicaoAnterior[] = [
  { ano: 2026, tema: 'Persistência' },
  {
    ano: 2025,
    tema: 'Eis que cedo venho',
    playlist: 'https://www.youtube.com/embed/videoseries?list=PLtkZK7cmglg5KwTf3Mhwe-MgGbzJa6Fyi',
  },
  {
    ano: 2024,
    playlist: 'https://www.youtube.com/embed/videoseries?list=PLtkZK7cmglg72U_LEHRJdxbxaaCCvh_Vi',
  },
];
