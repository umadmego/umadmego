import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import Botao from '@/components/ui/Botao';
import { Container } from '@/components/ui/Secao';
import { site } from '@/content/site';

function ChamadaInstagram() {
  return (
    <section className='bg-tinta text-papel'>
      <Container className='flex flex-wrap items-center justify-between gap-8 py-14 sm:py-22'>
        <div className='flex flex-[1_1_480px] flex-col gap-3.5'>
          <p className='rotulo text-cinza'>@umadmego</p>
          <h2 className='titulo text-[40px] sm:text-[56px]'>Siga no Instagram</h2>
          <p className='text-lg leading-relaxed text-linha'>Bastidores, avisos e novidades em tempo real.</p>
        </div>
        <Botao href={site.redes.instagram} variante='papel'>
          <FiInstagram size={20} aria-hidden='true' />
          Ver perfil
        </Botao>
      </Container>
    </section>
  );
}

export default ChamadaInstagram;
