import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Botao from '@/components/ui/Botao';
import { Container } from '@/components/ui/Secao';

const NotFoundPage = () => {
  return (
    <AppLayout title='Página não encontrada'>
      <section>
        <Container className='flex min-h-[60vh] flex-col items-start justify-center gap-6 py-20'>
          <p className='rotulo text-pedra'>Erro 404</p>
          <h1 className='titulo text-[56px] sm:text-[96px]'>Ops, esta página não existe!</h1>
          <Botao href='/'>Voltar ao início</Botao>
        </Container>
      </section>
    </AppLayout>
  );
};

export default NotFoundPage;
