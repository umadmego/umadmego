import type { StaticImageData } from 'next/image';
import cartaz2027 from '@/assets/edicoes/2027/cartaz.webp';
import camiseta2027 from '@/assets/edicoes/2027/camiseta-divulgacao.webp';
import arteTema2027 from '@/assets/edicoes/2027/arte-tema.webp';
import cartaz2026 from '@/assets/edicoes/2026/cartaz.webp';
import cartaz2025 from '@/assets/edicoes/2025/cartaz.webp';
import cartaz2024 from '@/assets/edicoes/2024/cartaz.webp';
import cartaz2023 from '@/assets/edicoes/2023/cartaz.webp';

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
    /** Contatos para compra; o primeiro vira o botão principal. */
    contatos: { canal: 'whatsapp' | 'instagram'; rotulo: string; link: string }[];
    observacao?: string;
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
    descricao: 'A mensagem do El Rói estampada na frente e nas costas. Vista o tema e leve essa mensagem para a sua cidade. Pedidos pelo WhatsApp ou pelo Instagram.',
    preco: 'R$ 60,00',
    imagem: camiseta2027,
    imagemAlt: 'Camiseta oficial El Rói: frente com a frase “O Deus que me vê” e costas com a arte do tema. Peça a sua pelo link da bio, R$ 60,00',
    contatos: [
      {
        canal: 'whatsapp',
        rotulo: 'Peça pelo WhatsApp',
        link: 'https://wa.me/5562992960677?text=' + encodeURIComponent('Olá! Quero comprar a camiseta oficial El Rói.'),
      },
      { canal: 'instagram', rotulo: 'Peça pelo Instagram', link: 'https://www.instagram.com/umadmego/' },
    ],
    observacao: 'WhatsApp: (62) 99296-0677',
  },
};

/**
 * Edição que já passou. Cada uma ganha a página /edicoes/<ano>, que mostra só o que estiver preenchido.
 * Os álbuns de fotos entram sozinhos: são os de `src/content/albuns.ts` com `edicao: <ano>`.
 */
export type EdicaoAnterior = {
  ano: number;
  numero?: string;
  tema?: string;
  datas?: string;
  local?: { nome: string; endereco?: string };
  /** Cor de destaque da edição na página dela. Sem ela, vale a cor da edição atual. */
  cor?: string;
  cartaz?: StaticImageData;
  cartazAlt?: string;
  /** Texto bíblico base do tema (só a referência), mostrado no topo da página. Sem ele, vale o de `conceito`. */
  referencia?: string;
  /** Frase curta sobre a edição (o versículo, por exemplo), mostrada no topo da página. */
  chamada?: string;
  /** Preletores e cantores convidados. */
  convidados?: string[];
  /** Explicação completa do tema, na mesma seção usada na home. */
  conceito?: Edicao['conceito'];
  /** Playlist do YouTube (link de embed) com as ministrações da edição. */
  playlist?: string;
};

const sede = {
  nome: 'IEAD Missão — Sede',
  endereco: 'Rua 208, nº 930, Setor Leste Vila Nova, Goiânia – GO',
};

export const edicoesAnteriores: EdicaoAnterior[] = [
  {
    ano: 2026,
    numero: '23º',
    tema: 'Persistência',
    datas: '14 a 17 de fevereiro de 2026',
    local: sede,
    cor: '#94622F',
    cartaz: cartaz2026,
    cartazAlt: 'Cartaz do 23º Congresso UMADMEGO 2026 — Persistência — 14 a 17 de fevereiro, com André Onasci, Bruno Almeida e Nerildo Accioly',
    referencia: 'Gálatas 6.9',
    chamada: '“E não nos cansemos de fazer o bem, pois no tempo próprio colheremos, se não desanimarmos.”',
    convidados: ['André Onasci', 'Bruno Almeida', 'Nerildo Accioly'],
    conceito: {
      referencia: 'Gálatas 6.9',
      paragrafos: [
        'Paulo escreveu aos gálatas para uma igreja cansada, dividida entre a graça que tinha recebido e a pressão de voltar atrás. No fim da carta, ele não pede um grande feito. Pede constância: não parar de fazer o bem.',
        'Persistir é isso. Não é a força de um dia, é a fidelidade de todos os dias: orar quando parece que nada muda, servir quando ninguém vê, continuar quando seria mais fácil desistir. A colheita é certa, mas tem o seu tempo.',
      ],
      mensagem:
        'Persistir é continuar mesmo sem vontade. É confiar mesmo sem ver. É fé em ação. O cansaço vai chegar, mas a promessa não muda: no tempo certo, quem não desanimar vai colher. Não pare agora. PERSISTÊNCIA.',
    },
  },
  {
    ano: 2025,
    numero: '22º',
    tema: 'Ele vem',
    datas: '1 a 4 de março de 2025',
    local: sede,
    cor: '#3F55E8',
    cartaz: cartaz2025,
    cartazAlt: 'Cartaz do 22º Congresso UMADMEGO 2025 — Ele vem — Apocalipse 22.20 — 1 a 4 de março, com os convidados da edição',
    referencia: 'Apocalipse 22.20',
    chamada: '“Aquele que testifica estas coisas diz: Certamente, cedo venho. Amém! Ora, vem, Senhor Jesus!”',
    convidados: [
      'Pr. Anselmo Dantas (SP)',
      'Pr. Jackson Marques (MG)',
      'Pr. Jailson Oliveira (RJ)',
      'Pr. Bruno Andrade (EUA)',
      'Jéssica Curione (RJ)',
      'Rayslane Lima (GO)',
    ],
    conceito: {
      referencia: 'Apocalipse 22.20',
      paragrafos: [
        'Apocalipse 22.20 traz as últimas palavras de Jesus na Bíblia: uma promessa curta e firme, “Certamente, cedo venho”. E a resposta de João é a oração que fecha as Escrituras: “Amém! Ora, vem, Senhor Jesus!”',
        'A volta de Jesus não é uma ideia para dar medo. É a esperança que dá sentido ao presente. Quem espera o Rei vive de outro jeito: vigia, guarda o coração, anuncia o evangelho e não se acomoda com este mundo.',
      ],
      mensagem:
        'A história não termina no caos que a gente vê nas notícias. Ela termina com o Rei voltando. Ele prometeu, e Ele cumpre. Até lá, a nossa resposta é a mesma de João: Amém! Ora, vem, Senhor Jesus! ELE VEM.',
    },
    playlist: 'https://www.youtube.com/embed/videoseries?list=PLtkZK7cmglg5KwTf3Mhwe-MgGbzJa6Fyi',
  },
  {
    ano: 2024,
    numero: '21º',
    tema: 'Tempo de Romper',
    datas: '10 a 13 de fevereiro de 2024',
    local: sede,
    cor: '#008268',
    cartaz: cartaz2024,
    cartazAlt: 'Cartaz do 21º Congresso UMADMEGO 2024 — Tempo de Romper — Isaías 61 — 10 a 13 de fevereiro, com os convidados da edição',
    referencia: 'Isaías 61',
    chamada: 'Transformação · Renovação · Coragem · Superação · Liberdade · Resistir',
    convidados: ['Pr. Anselmo Dantas', 'Pr. Josué Martins', 'Pr. Alan Campos', 'Pr. Bruno Andrade (EUA)', 'Amanda Sousa'],
    conceito: {
      referencia: 'Isaías 61.1-3',
      paragrafos: [
        'Em Isaías 61, o profeta anuncia o Ungido do Senhor, enviado para levar boas-novas aos humildes, curar os quebrantados de coração e proclamar liberdade aos cativos. Séculos depois, Jesus leu esse texto na sinagoga de Nazaré e declarou: “Hoje se cumpriu esta Escritura” (Lucas 4.21).',
        'É o ano aceitável do Senhor: tempo de trocar cinza por coroa, pranto por alegria, espírito angustiado por veste de louvor. Transformação, renovação, coragem, superação, liberdade e resistência, não como esforço nosso, mas como obra do Espírito em quem se rende a Ele.',
      ],
      mensagem:
        'Tem prisão que não tem grade: vício, medo, culpa, a vida no automático. Mas o Espírito do Senhor está sobre Jesus, e o que Ele veio fazer ainda está valendo. Hoje é tempo de romper com o que te prende e viver a liberdade que Ele conquistou. TEMPO DE ROMPER.',
    },
    playlist: 'https://www.youtube.com/embed/videoseries?list=PLtkZK7cmglg72U_LEHRJdxbxaaCCvh_Vi',
  },
  {
    ano: 2023,
    tema: 'Santificação',
    datas: '18 a 21 de fevereiro de 2023',
    local: sede,
    cor: '#1F5FBF',
    cartaz: cartaz2023,
    cartazAlt: 'Cartaz do Congresso UMADMEGO 2023 — Santificação — Hebreus 12.14, com os convidados da edição',
    referencia: 'Hebreus 12.14',
    chamada: '“Segui a paz com todos, e a santificação, sem a qual ninguém verá o Senhor.”',
    convidados: ['Pr. Sérgio Araújo', 'Pr. Alan Campos', 'Pr. David Ferreira', 'Pr. Welder Xavier', 'Miss. Emanuelly Ribeiro'],
    conceito: {
      referencia: 'Hebreus 12.14',
      paragrafos: [
        'Hebreus 12 compara a vida cristã a uma corrida: deixar todo peso e o pecado que nos cerca e correr com perseverança, olhando para Jesus. No meio desse chamado, o autor dá duas direções: seguir a paz com todos e a santificação.',
        'Santificação é ser separado para Deus. Não é aparência nem lista de regras. É uma vida que vai sendo moldada por Ele, nas escolhas, nas palavras e nos relacionamentos. E não é opcional: sem ela, diz o texto, ninguém verá o Senhor.',
      ],
      mensagem:
        'O mundo empurra a gente para ser igual a todo mundo. Deus chama para ser diferente: não melhor que os outros, mas d’Ele. Siga a paz, largue o peso, corra olhando para Jesus. SANTIFICAÇÃO.',
    },
  },
];
