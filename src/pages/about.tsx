import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Botao from '@/components/ui/Botao';
import { CabecalhoPagina, Container } from '@/components/ui/Secao';
import { edicao } from '@/content/edicao';
import { site } from '@/content/site';

function About() {
  return (
    <AppLayout title='Sobre'>
      <CabecalhoPagina rotulo='Sobre nós' titulo={site.nome}>
        <p className='max-w-3xl text-lg leading-relaxed text-linha sm:text-xl'>{site.nomeCompleto}</p>
      </CabecalhoPagina>

      <section>
        <Container className='flex flex-wrap gap-10 py-12 sm:gap-16 sm:py-20'>
          <div className='flex-[1_1_240px]'>
            <p className='rotulo text-pedra'>Nossa história</p>
          </div>
          <div className='flex min-w-0 flex-[3_1_560px] flex-col gap-6 text-lg leading-relaxed'>
            <p className='text-2xl leading-snug font-semibold sm:text-[28px]'>
              Há mais de duas décadas, a {site.nome} é um canal de bênçãos para a juventude cristã de Goiás,
              promovendo transformação espiritual e crescimento pessoal.
            </p>
            <p>
              O Congresso Geral é o ponto alto do ano: reúne milhares de jovens em dias de louvor, ensino da Palavra e
              comunhão. Cada edição tem um tema próprio — em {edicao.ano}, o {edicao.numero} congresso traz{' '}
              <strong>{edicao.tema}</strong>.
            </p>
            <p>
              Durante o congresso compartilhamos mensagens, louvores e testemunhos que transformam vidas. Convidamos
              você a estar conosco, presencialmente ou pela transmissão on-line, e a compartilhar os conteúdos com
              amigos e familiares.
            </p>
            <div className='flex flex-wrap gap-3 pt-2'>
              <Botao href='/live' variante='edicao'>
                Congresso {edicao.ano}
              </Botao>
              <Botao href={site.redes.instagram} variante='contorno'>
                Acompanhe no Instagram
              </Botao>
            </div>
          </div>
        </Container>
      </section>
    </AppLayout>
  );
}

export default About;
