import Link from 'next/link';
import React from 'react';

/** Logotipo em texto, permanente. Troque por um símbolo institucional quando houver. */
function Wordmark({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <Link href='/' className='flex items-center gap-3 text-papel' aria-label='UMADMEGO — página inicial'>
      <span className={`block bg-papel ${size === 'lg' ? 'size-4' : 'size-3.5'}`} />
      <span
        className={`font-extrabold tracking-[0.02em] [font-stretch:75%] ${size === 'lg' ? 'text-3xl' : 'text-[26px]'}`}
      >
        UMADMEGO
      </span>
    </Link>
  );
}

export default Wordmark;
