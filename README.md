# UMADMEGO — Site

Site oficial da UMADMEGO, feito com Next.js (Pages Router) e exportado como site estático.

## Stack

- [Next.js](https://nextjs.org) 16 + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4 (tema definido em `src/styles/globals.css`)
- [Swiper](https://swiperjs.com) e [Framer Motion](https://www.framer.com/motion/) para carrosséis e animações
- [react-icons](https://react-icons.github.io/react-icons/)

O site é totalmente estático: **não há API, banco de dados nem chaves/variáveis de ambiente**.

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
public/                  arquivos servidos como estão (favicon, images/home/slider)
src/
  pages/                 rotas: / , /live, /photo, /umadmidia, /partner, /about, /contact e 404
  components/
    homepage/            seções da página inicial (slider, destaques, Instagram...)
    layout/              Navbar, Footer, AppLayout, HeadElement (título/meta tags)
    livePage/ photoPage/ umadmidiaPage/ partnerPage/ aboutPage/ contactPage/
                         componentes de cada página
  assets/                imagens e SVGs importados pelos componentes
  styles/
    globals.css          Tailwind, tema (cores, fontes) e ajustes globais
    backgrounds.css      imagens de fundo dos cabeçalhos das páginas
```

## Onde editar o conteúdo

| O que | Onde |
| --- | --- |
| Menu de navegação | `src/components/layout/Navbar/links.ts` |
| Links do rodapé e redes sociais | `src/components/layout/Footer/` |
| Slides do topo da home (título, datas, botões) | `src/components/homepage/HeroSlider/index.tsx` |
| Fotos em destaque da home | `src/components/homepage/PhotoHighlights/index.tsx` (imagens em `public/images/home/slider/`) |
| Galeria de fotos | `src/components/photoPage/photoLinks.ts` |
| Playlists/transmissão ao vivo | `src/components/livePage/` e `src/pages/live.tsx` |
| Posts do Instagram | `src/components/homepage/InstagramFeed/` e `src/components/umadmidiaPage/InstagramFeed.tsx` |
| Cores e fontes | bloco `@theme` em `src/styles/globals.css` |
| Título e descrição do site | `src/components/layout/HeadElement/index.tsx` |
