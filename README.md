# UMADMEGO — Site

Site oficial da UMADMEGO (União de Mocidade das Assembleias de Deus Missão em Goiás), feito com Next.js e exportado como site estático.

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Cartaz da edição atual, dados do congresso, o tema com a camiseta oficial, fotos em destaque, arquivo de edições e Instagram |
| `/live` | Transmissão no YouTube, dados da edição atual e vídeos das edições anteriores |
| `/photo` | Álbuns de fotos (abrem no Google Fotos) |
| `/umadmidia` | Equipe de mídia e posts do Instagram |
| `/about` | História da UMADMEGO |
| `/contact` | Endereço, e-mail e redes sociais |

## Stack

- [Next.js](https://nextjs.org) 16 (Pages Router, `output: 'export'`) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4 — tema em `src/styles/globals.css`
- [react-icons](https://react-icons.github.io/react-icons/) (ícones Feather)

O site é totalmente estático: **não há API, banco de dados nem chaves ou variáveis de ambiente**.

## Como rodar

Requer Node.js 20.9 ou mais recente.

```bash
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento em http://localhost:3000
npm run build      # gera o site estático na pasta out/
npm run typecheck  # verifica os tipos (rode depois de dev ou build, que geram o next-env.d.ts)
```

## Publicação

`npm run build` gera a pasta `out/` com o site pronto. Publique o conteúdo dessa pasta na hospedagem. A pasta **não é versionada** (está no `.gitignore`), então gere de novo a cada atualização.

Para conferir o resultado localmente:

```bash
python3 -m http.server --directory out 8080
```

## Identidade visual

A identidade é neutra e permanente — **tinta, papel e uma cor por edição**:

- **Fixo:** logotipo em texto, cores (tinta, papel, areia, pedra), tipografia (Archivo condensada nos títulos, Archivo no texto, IBM Plex Mono nos rótulos), componentes e navegação.
- **Por edição:** cartaz, tema, explicação do tema, datas, local, camiseta e a cor de destaque (`bg-edicao`, `text-edicao`), tudo em `src/content/edicao.ts`.

## Como virar o ano

1. Crie `src/assets/edicoes/<ano>/` com o cartaz, a arte do tema e a imagem de divulgação da camiseta.
2. Em `src/content/edicao.ts`:
   - mova a edição atual para o topo de `edicoesAnteriores` (com a playlist do YouTube, se houver);
   - preencha `edicao` com os dados novos: ano, número, tema, datas, local, cor de destaque, cartaz, `conceito` (explicação do tema) e `loja` (camiseta).
3. A cor de destaque precisa ter contraste com texto branco (≥ 4,5:1).
4. Atualize as fotos em destaque da home (`src/components/home/Destaques.tsx`) quando houver fotos da última edição.

Para esconder a seção do tema, apague `conceito`. Para esconder a camiseta, apague `loja` (ela aparece dentro da seção do tema).

## Onde editar o resto

| O que | Onde |
| --- | --- |
| Menu, e-mail, endereço e redes sociais | `src/content/site.ts` |
| Álbuns da página de fotos | `src/content/albuns.ts` |
| Fotos em destaque da home | `src/components/home/Destaques.tsx` |
| Texto da página Sobre | `src/pages/about.tsx` |
| Posts do Instagram da Umadmídia | `src/components/umadmidia/FeedInstagram.tsx` |
| Cores e fontes | bloco `@theme` em `src/styles/globals.css` |

## Estrutura de pastas

```
public/                  favicon
src/
  content/               conteúdo editável: edição atual e anteriores, contatos e redes, álbuns de fotos
  pages/                 rotas do site e 404
  components/
    home/                seções da página inicial (Hero, FaixaEdicao, Tema, Destaques, Edicoes, ChamadaInstagram)
    layout/              Navbar, Footer, AppLayout, HeadElement (título e meta tags)
    ui/                  peças reutilizáveis (Botao, Wordmark, Redes, títulos de seção)
    umadmidia/           embed do Instagram da página Umadmídia
  assets/                imagens importadas pelos componentes (edicoes/<ano>/, destaques/, fotos dos álbuns)
  styles/globals.css     Tailwind, cores e fontes, utilitários `titulo` e `rotulo`
```
