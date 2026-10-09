import Image from 'next/image';
import React from 'react';
import Botao from '@/components/ui/Botao';
import { Container } from '@/components/ui/Secao';
import { edicao } from '@/content/edicao';

/** Produto da edição (camiseta). Some do site quando `edicao.loja` não estiver definida. */
function Loja() {
  const loja = edicao.loja;
  if (!loja) return null;

  return (
    <section>
      <Container className='flex flex-wrap items-center gap-6 py-12 sm:gap-14 sm:py-24'>
        <div className='flex min-w-0 flex-[1_1_340px] flex-col gap-4 sm:gap-5'>
          <p className='rotulo text-pedra'>Loja da edição</p>
          <h2 className='titulo text-[40px] sm:text-[56px]'>{loja.titulo}</h2>
          <p className='text-lg leading-relaxed text-grafite'>{loja.descricao}</p>
          <p className='text-[32px] font-extrabold [font-stretch:75%] sm:text-[40px]'>{loja.preco}</p>
          <Botao href={loja.link} className='self-start'>
            {loja.chamada}
          </Botao>
        </div>
        <Image
          src={loja.imagem}
          alt={loja.imagemAlt}
          sizes='(min-width: 1024px) 800px, 100vw'
          className='aspect-[16/10] w-full min-w-0 flex-[2_1_560px] object-cover'
        />
      </Container>
    </section>
  );
}

export default Loja;
