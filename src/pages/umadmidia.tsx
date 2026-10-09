import Image from 'next/image';
import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import AppLayout from '@/components/layout/AppLayout';
import Botao from '@/components/ui/Botao';
import { CabecalhoPagina, Container, TituloSecao } from '@/components/ui/Secao';
import FeedInstagram from '@/components/umadmidia/FeedInstagram';
import { site } from '@/content/site';
import equipe from '@/assets/images/photo/equipe-umadmidia.png';

const frentes = [
  { titulo: 'Fotos', texto: 'Cada culto registrado e publicado em álbuns.' },
  { titulo: 'Stories em tempo real', texto: 'Levando você para dentro do evento.' },
  { titulo: 'Vídeos', texto: 'Edições que mostram o que Deus fez em cada noite.' },
  { titulo: 'Bastidores', texto: 'O cuidado e a dedicação por trás das câmeras.' },
];

function Umadmidia() {
  return (
    <AppLayout title='Umadmídia'>
      <CabecalhoPagina rotulo='Equipe de mídia' titulo='Umadmídia'>
        <div>
          <Botao href={site.redes.umadmidia} variante='papel'>
            <FiInstagram size={20} aria-hidden='true' />
            @umadmidia
          </Botao>
        </div>
      </CabecalhoPagina>

      <section className='border-b border-linha'>
        <Container className='flex flex-wrap items-start gap-10 py-12 sm:gap-16 sm:py-20'>
          <Image
            src={equipe}
            alt='Equipe Umadmídia reunida em evento'
            sizes='(min-width: 1024px) 420px, 100vw'
            className='aspect-[4/5] w-full max-w-md object-cover'
          />
          <div className='flex min-w-0 flex-[1_1_420px] flex-col gap-6'>
            <p className='text-xl leading-relaxed sm:text-2xl'>
              Os olhos por trás de cada registro. Somos a equipe oficial de mídia da {site.nome}, dedicada a registrar
              e compartilhar cada momento de fé e comunhão.
            </p>
            <ul className='border-t-2 border-tinta'>
              {frentes.map((frente) => (
                <li key={frente.titulo} className='flex flex-col gap-1 border-b border-linha py-4'>
                  <span className='font-bold'>{frente.titulo}</span>
                  <span className='text-grafite'>{frente.texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className='bg-areia'>
        <Container className='flex flex-col gap-10 py-12 sm:py-20'>
          <TituloSecao rotulo='Instagram' titulo='Últimas publicações' />
          <FeedInstagram />
        </Container>
      </section>
    </AppLayout>
  );
}

export default Umadmidia;
