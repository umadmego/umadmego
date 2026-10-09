import Image from 'next/image';
import React from 'react';
import { FiYoutube } from 'react-icons/fi';
import AppLayout from '@/components/layout/AppLayout';
import Botao from '@/components/ui/Botao';
import { CabecalhoPagina, Container, TituloSecao } from '@/components/ui/Secao';
import { edicao, edicoesAnteriores } from '@/content/edicao';
import { site } from '@/content/site';

function Live() {
  const comVideos = edicoesAnteriores.filter((anterior) => anterior.playlist);

  return (
    <AppLayout title='Ao vivo'>
      <CabecalhoPagina rotulo='Transmissões' titulo='Ao vivo'>
        <p className='max-w-2xl text-lg leading-relaxed text-linha'>
          Os cultos do congresso são transmitidos no canal da {site.nome} no YouTube.
        </p>
        <div>
          <Botao href={site.redes.youtube} variante='papel'>
            <FiYoutube size={20} aria-hidden='true' />
            Abrir canal no YouTube
          </Botao>
        </div>
      </CabecalhoPagina>

      <section className='border-b border-linha'>
        <Container className='flex flex-wrap items-center gap-10 py-12 sm:gap-16 sm:py-20'>
          <Image
            src={edicao.cartaz}
            alt={edicao.cartazAlt}
            sizes='(min-width: 1024px) 400px, 100vw'
            className='aspect-[4/5] w-full max-w-sm object-cover'
          />
          <div className='flex min-w-0 flex-[1_1_400px] flex-col gap-5'>
            <p className='rotulo flex items-center gap-2 text-pedra'>
              <span className='block size-2 bg-edicao' />
              {edicao.status} · {edicao.numero} congresso
            </p>
            <h2 className='titulo text-[40px] sm:text-[64px]'>{edicao.tema}</h2>
            <dl className='grid gap-4 border-t border-linha pt-5 sm:grid-cols-2'>
              <div className='flex flex-col gap-1'>
                <dt className='rotulo text-pedra'>Datas</dt>
                <dd className='text-xl font-bold'>{edicao.datas}</dd>
              </div>
              <div className='flex flex-col gap-1'>
                <dt className='rotulo text-pedra'>Local</dt>
                <dd className='text-xl font-bold'>{edicao.local.nome}</dd>
                <dd className='text-grafite'>{edicao.local.endereco}</dd>
              </div>
            </dl>
            <p className='text-lg leading-relaxed text-grafite'>
              A transmissão aparece no canal durante os cultos. Ative as notificações para ser avisado quando começar.
            </p>
          </div>
        </Container>
      </section>

      {comVideos.length > 0 && (
        <section>
          <Container className='flex flex-col gap-10 py-12 sm:py-20'>
            <TituloSecao rotulo='Edições anteriores' titulo='Reveja os congressos' />
            <div className='grid gap-10 lg:grid-cols-2'>
              {comVideos.map((anterior) => (
                <article key={anterior.ano} className='flex flex-col gap-4'>
                  <div className='flex items-baseline gap-4 border-t-2 border-tinta pt-4'>
                    <span className='titulo text-[40px]'>{anterior.ano}</span>
                    <span className='font-semibold text-grafite'>{anterior.tema ?? `Congresso ${anterior.ano}`}</span>
                  </div>
                  <iframe
                    src={anterior.playlist}
                    title={`Vídeos do congresso UMADMEGO ${anterior.ano}`}
                    className='aspect-video w-full bg-tinta'
                    loading='lazy'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                  />
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}
    </AppLayout>
  );
}

export default Live;
