# UMADMEGO — Site

Site oficial da UMADMEGO, feito com Next.js (Pages Router) e exportado como site estático.

## Stack

- [Next.js](https://nextjs.org) 16 + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4 (tema definido em `src/styles/globals.css`)
- [react-icons](https://react-icons.github.io/react-icons/) (ícones Feather)

O site é totalmente estático: **não há API, banco de dados nem chaves/variáveis de ambiente**.

## Identidade visual

A identidade é neutra e permanente — **tinta, papel e uma cor por edição**:

- Fixo: logotipo em texto, cores tinta/papel/areia/pedra, tipografia (Archivo condensada nos títulos, Archivo no texto, IBM Plex Mono nos rótulos), componentes e navegação.
- Por edição: cartaz, tema, datas, local, camiseta e a cor de destaque (`bg-edicao`, `text-edicao`), todos em `src/content/edicao.ts`.

## Como rodar

```bash
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento em http://localhost:3000
npm run build      # gera o site estático na pasta out/
npm run typecheck  # verifica os tipos (rode após dev/build, que geram next-env.d.ts)
```

A pasta `out/` é gerada pelo build e **não é versionada** (está no `.gitignore`). Para visualizar o resultado localmente:

```bash
python3 -m http.server --directory out 8080
```

## Estrutura de pastas

```
src/
  content/               conteúdo editável: edição atual, edições anteriores, contatos, álbuns de fotos
  pages/                 rotas: / , /live, /photo, /umadmidia, /about, /contact e 404
  components/
    home/                seções da página inicial
    layout/              Navbar, Footer, AppLayout, HeadElement (título/meta tags)
    ui/                  peças reutilizáveis (Botao, Wordmark, Redes, títulos de seção)
    umadmidia/           embed do Instagram da página Umadmídia
  assets/                imagens importadas pelos componentes (edicoes/<ano>/, destaques/, fotos dos álbuns)
  styles/globals.css     Tailwind, tokens de cor e fonte, utilitários `titulo` e `rotulo`
```

## Como virar o ano

1. Coloque o cartaz e a camiseta da nova edição em `src/assets/edicoes/<ano>/`.
2. Em `src/content/edicao.ts`, mova a edição atual para o topo de `edicoesAnteriores` (com a playlist do YouTube, se houver) e preencha `edicao` com os dados novos: ano, número, tema, explicação do tema (`conceito`), datas, local, cor de destaque e imagens. Para esconder a seção do tema ou da loja, apague `conceito` ou `loja`.
3. A cor de destaque precisa ter contraste com texto branco (≥ 4,5:1).

## Onde editar o resto

| O que | Onde |
| --- | --- |
| Menu, e-mail, endereço e redes sociais | `src/content/site.ts` |
| Álbuns da página de fotos | `src/content/albuns.ts` |
| Fotos em destaque da home | `src/components/home/Destaques.tsx` |
| Posts do Instagram da Umadmídia | `src/components/umadmidia/FeedInstagram.tsx` |
| Cores e fontes | bloco `@theme` em `src/styles/globals.css` |
