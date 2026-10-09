import Link from 'next/link';
import React from 'react';
import { Container, TituloSecao } from '@/components/ui/Secao';
import { edicao, edicoesAnteriores } from '@/content/edicao';

/** Arquivo das edições: a atual em destaque e as anteriores logo abaixo. */
function Edicoes() {
  return (
    <section>
      <Container className='flex flex-col gap-8 py-12 sm:gap-10 sm:py-24'>
        <TituloSecao rotulo='Arquivo' titulo='Edições' />
        <ul className='border-t-2 border-tinta'>
          <li className='flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-linha py-4 sm:py-6'>
            <span className='titulo w-[72px] text-[32px] sm:w-[120px] sm:text-[44px]'>{edicao.ano}</span>
            <span className='flex-[1_1_160px] font-semibold sm:text-[22px]'>{edicao.tema}</span>
            <span className='bg-edicao px-2.5 py-1.5 font-mono text-xs text-white sm:text-[13px]'>{edicao.status}</span>
            <Link href='/live' className='hidden py-3 font-semibold hover:opacity-80 sm:block'>
              Ao vivo →
            </Link>
          </li>
          {edicoesAnteriores.map((anterior) => (
            <li key={anterior.ano} className='border-b border-linha'>
              <Link
                href='/live'
                className='flex flex-wrap items-center gap-x-6 gap-y-2 py-4 hover:opacity-80 sm:py-6'
              >
                <span className='titulo w-[72px] text-[32px] sm:w-[120px] sm:text-[44px]'>{anterior.ano}</span>
                <span className='flex-[1_1_160px] font-semibold sm:text-[22px]'>
                  {anterior.tema ?? `Congresso ${anterior.ano}`}
                </span>
                <span className='hidden border border-cinza px-2.5 py-1 font-mono text-[13px] text-grafite sm:block'>
                  {anterior.playlist ? 'Vídeos' : 'Fotos'}
                </span>
                <span className='py-3 font-semibold'>Rever →</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Edicoes;
