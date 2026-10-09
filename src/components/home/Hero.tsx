import Image from 'next/image';
import React from 'react';
import Botao from '@/components/ui/Botao';
import { Container } from '@/components/ui/Secao';
import { edicao } from '@/content/edicao';
import { site } from '@/content/site';

function Hero() {
  return (
    <section className='bg-tinta text-papel'>
      <Container className='flex flex-wrap items-center gap-10 pt-8 pb-12 sm:gap-16 sm:pt-16 sm:pb-24'>
        <div className='flex min-w-0 flex-[1_1_520px] flex-col gap-6 sm:gap-7'>
          <p className='rotulo text-[11px]! text-cinza sm:text-[13px]!'>
            União de Mocidade das Assembleias de Deus · Missão em Goiás
          </p>
          <h1 className='titulo text-[56px] leading-[0.92] sm:text-[clamp(64px,8vw,112px)]'>
            Juventude reunida para adorar.
          </h1>
          <p className='hidden max-w-xl text-[19px] leading-relaxed text-linha sm:block'>
            Todo ano, jovens de Goiás se encontram no Congresso {site.nome} para dias de culto, palavra e comunhão.
            Acompanhe a edição atual, reveja as anteriores e fique por dentro das novidades.
          </p>
          <div className='hidden flex-wrap gap-3 sm:flex'>
            <Botao href='/live' variante='edicao'>
              Conheça o congresso {edicao.ano}
            </Botao>
            <Botao href='/photo' variante='contorno-claro'>
              Ver fotos
            </Botao>
          </div>
        </div>

        <figure className='flex min-w-0 flex-[1_1_400px] flex-col gap-3.5'>
          <div className='rotulo flex items-center justify-between text-[11px]! text-cinza sm:text-xs!'>
            <span className='flex items-center gap-2'>
              <span className='block size-2 bg-edicao' />
              Edição atual
            </span>
            <span>{edicao.numero} congresso</span>
          </div>
          <Image
            src={edicao.cartaz}
            alt={edicao.cartazAlt}
            priority
            sizes='(min-width: 1024px) 560px, 100vw'
            className='aspect-[4/5] w-full object-cover'
          />
        </figure>

        <div className='flex w-full flex-col gap-3 sm:hidden'>
          <Botao href='/live' variante='edicao'>
            Conheça o congresso {edicao.ano}
          </Botao>
          <Botao href='/photo' variante='contorno-claro'>
            Ver fotos
          </Botao>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
