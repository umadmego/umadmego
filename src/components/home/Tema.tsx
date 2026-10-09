import Image from 'next/image';
import React from 'react';
import { Container } from '@/components/ui/Secao';
import { edicao } from '@/content/edicao';

/** Explicação do tema da edição: conceito, referência bíblica e mensagem. */
function Tema() {
  const conceito = edicao.conceito;
  if (!conceito) return null;

  return (
    <section id='tema' aria-labelledby='tema-titulo' className='bg-tinta text-papel'>
      <Container className='flex flex-col gap-12 py-14 sm:gap-20 sm:py-24'>
        <div className='flex flex-wrap items-center gap-10 sm:gap-16'>
          <div className='flex min-w-0 flex-[1_1_480px] flex-col gap-6'>
            <p className='rotulo flex items-center gap-2 text-cinza'>
              <span className='block size-2 bg-edicao' />
              O tema · {edicao.ano}
            </p>
            <h2 id='tema-titulo' className='titulo text-[48px] sm:text-[80px] leading-[0.9]'>
              {edicao.tema}
            </h2>
            <p className='rotulo text-cinza'>{conceito.referencia}</p>
            <div className='flex flex-col gap-5 border-t border-grafite pt-6 text-lg leading-relaxed text-linha'>
              {conceito.paragrafos.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </div>
          </div>
          {conceito.arte && (
            <Image
              src={conceito.arte}
              alt={conceito.arteAlt ?? ''}
              sizes='(min-width: 1024px) 440px, 100vw'
              className='w-full max-w-md min-w-0 flex-[1_1_320px] object-contain'
            />
          )}
        </div>

        <figure className='flex flex-col gap-5 border-t-2 border-edicao pt-8'>
          <figcaption className='rotulo text-cinza'>A mensagem</figcaption>
          <blockquote className='text-2xl leading-snug font-semibold sm:text-[34px] sm:leading-tight'>
            “{conceito.mensagem}”
          </blockquote>
        </figure>
      </Container>
    </section>
  );
}

export default Tema;
