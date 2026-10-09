import React from 'react';

/** Contêiner padrão das seções: largura máxima, margens laterais e espaçamento vertical. */
export function Container({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-8 ${className}`}>{children}</div>;
}

/** Rótulo em mono + título condensado, usado no topo das seções. */
export function TituloSecao({
  rotulo,
  titulo,
  escuro = false,
  as: Tag = 'h2',
}: {
  rotulo: string;
  titulo: string;
  escuro?: boolean;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className='flex flex-col gap-3'>
      <p className={`rotulo ${escuro ? 'text-cinza' : 'text-pedra'}`}>{rotulo}</p>
      <Tag className='titulo text-[40px] sm:text-[56px]'>{titulo}</Tag>
    </div>
  );
}

/** Cabeçalho escuro das páginas internas. */
export function CabecalhoPagina({ rotulo, titulo, children }: { rotulo: string; titulo: string; children?: React.ReactNode }) {
  return (
    <header className='bg-tinta text-papel'>
      <Container className='flex flex-col gap-6 pt-12 pb-16 sm:pt-16 sm:pb-20'>
        <p className='rotulo text-cinza'>{rotulo}</p>
        <h1 className='titulo text-[56px] sm:text-[96px] leading-[0.9]'>{titulo}</h1>
        {children}
      </Container>
    </header>
  );
}
