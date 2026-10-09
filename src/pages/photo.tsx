import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import AppLayout from '@/components/layout/AppLayout';
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
            {albuns.map(({ day, link, preview }) => (
              <li key={link}>
                <a href={link} target='_blank' rel='noopener noreferrer' className='group flex flex-col gap-3'>
                  <Image
                    src={preview}
                    alt=''
                    sizes='(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw'
                    className='aspect-[4/3] w-full object-cover transition-opacity group-hover:opacity-90'
                  />
                  <span className='flex items-center justify-between gap-4 border-t border-linha pt-3 font-semibold'>
                    {day}
                    <FiArrowUpRight size={18} aria-hidden='true' className='shrink-0' />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </AppLayout>
  );
};

export default PhotoPage;
