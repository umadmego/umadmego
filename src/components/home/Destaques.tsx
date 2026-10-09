import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, TituloSecao } from '@/components/ui/Secao';
import destaque1 from '@/assets/images/destaques/destaque-12.jpg';
import destaque2 from '@/assets/images/destaques/destaque-13.jpg';
import destaque3 from '@/assets/images/destaques/destaque-16.jpg';
import destaque4 from '@/assets/images/destaques/destaque-14.jpg';

const fotos = [
  { src: destaque1, alt: 'Jovens abraçados durante o culto' },
  { src: destaque2, alt: 'Momento de oração' },
  { src: destaque3, alt: 'Momento de adoração' },
  { src: destaque4, alt: 'Jovens em adoração' },
];

function Destaques() {
  return (
    <section className='bg-areia'>
      <Container className='flex flex-col gap-8 py-12 sm:gap-10 sm:py-24'>
        <div className='flex flex-wrap items-end justify-between gap-5'>
          <TituloSecao rotulo='Fotos' titulo='Destaques da última edição' />
          <Link href='/photo' className='border-b-2 border-tinta py-3 font-semibold hover:opacity-80'>
            Ver galeria completa →
          </Link>
        </div>
        <div className='grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4'>
          {fotos.map((foto) => (
            <Image
              key={foto.alt}
              src={foto.src}
              alt={foto.alt}
              sizes='(min-width: 1024px) 300px, 50vw'
              className='aspect-[4/5] w-full object-cover'
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Destaques;
