import type { StaticImageData } from 'next/image';
import cartaz2027 from '@/assets/edicoes/2027/cartaz.webp';
import camiseta2027 from '@/assets/edicoes/2027/camiseta.webp';

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
  loja: {
    titulo: 'Camiseta oficial',
    descricao: 'Estampa do tema El Rói, frente e costas. Pedidos pelo link na bio do Instagram.',
    preco: 'R$ 55,00',
    imagem: camiseta2027,
    imagemAlt: 'Camiseta oficial El Rói, frente e costas',
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
