import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import type { Album } from '@/content/albuns';

/** Capa e nome de um álbum; abre o álbum no Google Fotos. */
function CartaoAlbum({ album }: { album: Album }) {
  return (
    <a href={album.link} target='_blank' rel='noopener noreferrer' className='group flex flex-col gap-3'>
      <Image
        src={album.preview}
        alt=''
        sizes='(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw'
        className='aspect-[4/3] w-full object-cover transition-opacity group-hover:opacity-90'
      />
      <span className='flex items-center justify-between gap-4 border-t border-linha pt-3 font-semibold'>
        {album.day}
        <FiArrowUpRight size={18} aria-hidden='true' className='shrink-0' />
      </span>
    </a>
  );
}

export default CartaoAlbum;
