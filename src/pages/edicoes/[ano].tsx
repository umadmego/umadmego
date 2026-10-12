import type { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tema from '@/components/home/Tema';
import AppLayout from '@/components/layout/AppLayout';
import CartaoAlbum from '@/components/ui/CartaoAlbum';
import { CabecalhoPagina, Container, TituloSecao } from '@/components/ui/Secao';
import albuns from '@/content/albuns';
import { edicoesAnteriores } from '@/content/edicao';

type Props = { ano: number };

/** Página de uma edição que já passou: tema, cartaz, dados, vídeos e fotos — só o que estiver preenchido. */
function PaginaEdicao({ ano }: Props) {
  const edicao = edicoesAnteriores.find((anterior) => anterior.ano === ano)!;
  const titulo = edicao.tema ?? `Congresso ${ano}`;
  const fotos = albuns.filter((album) => album.edicao === ano);
  const outras = edicoesAnteriores.filter((anterior) => anterior.ano !== ano);
  const temDados = edicao.cartaz || edicao.datas || edicao.local || edicao.convidados;
  const referencia = edicao.referencia ?? edicao.conceito?.referencia;
  const descricao = [
    `${edicao.numero ? `${edicao.numero} Congresso` : 'Congresso'} da UMADMEGO ${ano}: ${titulo}.`,
    edicao.datas && `De ${edicao.datas}.`,
    fotos.length > 0 || edicao.playlist ? 'Reveja as fotos e os vídeos.' : undefined,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <AppLayout title={`${titulo} · ${ano}`} description={descricao}>
      {/* A cor da edição, quando definida, substitui a da edição atual nesta página. */}
      <div style={edicao.cor ? ({ '--color-edicao': edicao.cor } as React.CSSProperties) : undefined}>
        <CabecalhoPagina
          rotulo={edicao.numero ? `Arquivo · ${edicao.numero} congresso · ${ano}` : `Arquivo · Congresso ${ano}`}
          titulo={titulo}
        >
          {referencia && <p className='rotulo text-cinza'>{referencia}</p>}
          {edicao.chamada && <p className='max-w-2xl text-lg leading-relaxed text-linha'>{edicao.chamada}</p>}
        </CabecalhoPagina>
        <div aria-hidden='true' className='h-2 bg-edicao' />

        {temDados && (
          <section className='border-b border-linha'>
            <Container className='flex flex-wrap items-center gap-10 py-12 sm:gap-16 sm:py-20'>
              {edicao.cartaz && (
                <Image
                  src={edicao.cartaz}
                  alt={edicao.cartazAlt ?? `Cartaz do Congresso UMADMEGO ${ano}`}
                  sizes='(min-width: 1024px) 400px, 100vw'
                  className='h-auto w-full max-w-sm'
                />
              )}
              <dl className='grid min-w-0 flex-[1_1_400px] gap-6 sm:grid-cols-2'>
                {edicao.datas && (
                  <div className='flex flex-col gap-1 border-t border-linha pt-5'>
                    <dt className='rotulo text-pedra'>Datas</dt>
                    <dd className='text-xl font-bold'>{edicao.datas}</dd>
                  </div>
                )}
                {edicao.local && (
                  <div className='flex flex-col gap-1 border-t border-linha pt-5'>
                    <dt className='rotulo text-pedra'>Local</dt>
                    <dd className='text-xl font-bold'>{edicao.local.nome}</dd>
                    {edicao.local.endereco && <dd className='text-grafite'>{edicao.local.endereco}</dd>}
                  </div>
                )}
                {edicao.convidados && (
                  <div className='flex flex-col gap-2 border-t border-linha pt-5 sm:col-span-2'>
                    <dt className='rotulo text-pedra'>Convidados</dt>
                    <dd>
                      <ul className='flex flex-col gap-1 text-lg font-semibold'>
                        {edicao.convidados.map((convidado) => (
                          <li key={convidado}>{convidado}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
              </dl>
            </Container>
          </section>
        )}

        <Tema edicao={{ ano, tema: titulo, conceito: edicao.conceito }} />

        {edicao.playlist && (
          <section className='border-b border-linha'>
            <Container className='flex flex-col gap-10 py-12 sm:py-20'>
              <TituloSecao rotulo='Vídeos' titulo='Reveja os cultos' />
              <iframe
                src={edicao.playlist}
                title={`Vídeos do congresso UMADMEGO ${ano}`}
                className='aspect-video w-full bg-tinta'
                loading='lazy'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </Container>
          </section>
        )}

        {fotos.length > 0 && (
          <section className='border-b border-linha'>
            <Container className='flex flex-col gap-10 py-12 sm:py-20'>
              <TituloSecao rotulo='Fotos' titulo='Álbuns' />
              <ul className='grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
                {fotos.map((album) => (
                  <li key={album.link}>
                    <CartaoAlbum album={album} />
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        )}

        {outras.length > 0 && (
          <nav aria-label='Outras edições'>
            <Container className='flex flex-col gap-6 py-12 sm:py-16'>
              <p className='rotulo text-pedra'>Outras edições</p>
              <ul className='flex flex-wrap gap-x-10 gap-y-4'>
                {outras.map((outra) => (
                  <li key={outra.ano}>
                    <Link href={`/edicoes/${outra.ano}`} className='flex items-baseline gap-3 hover:opacity-80'>
                      <span className='titulo text-[32px]'>{outra.ano}</span>
                      <span className='font-semibold'>{outra.tema ?? `Congresso ${outra.ano}`} →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </nav>
        )}
      </div>
    </AppLayout>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: edicoesAnteriores.map((anterior) => ({ params: { ano: String(anterior.ano) } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = ({ params }) => ({
  props: { ano: Number(params?.ano) },
});

export default PaginaEdicao;
