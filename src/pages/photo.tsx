import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import CartaoAlbum from '@/components/ui/CartaoAlbum';
import { CabecalhoPagina, Container } from '@/components/ui/Secao';
import albuns from '@/content/albuns';

const PhotoPage = () => {
  return (
    <AppLayout title='Fotos'>
      <CabecalhoPagina rotulo='Galeria' titulo='Fotos'>
        <p className='max-w-2xl text-lg leading-relaxed text-linha'>
          Os melhores momentos de cada culto e evento. Cada álbum abre no Google Fotos.
        </p>
      </CabecalhoPagina>

      <section>
        <Container className='py-12 sm:py-20'>
          <ul className='grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
            {albuns.map((album) => (
              <li key={album.link}>
                <CartaoAlbum album={album} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </AppLayout>
  );
};

export default PhotoPage;
