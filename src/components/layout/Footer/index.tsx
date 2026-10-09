import Link from 'next/link';
import React from 'react';
import Redes from '@/components/ui/Redes';
import Wordmark from '@/components/ui/Wordmark';
import { navegacao, site } from '@/content/site';

function Footer() {
  return (
    <footer className='bg-carvao text-linha'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pt-16 pb-8 sm:px-8'>
        <div className='flex flex-wrap justify-between gap-12'>
          <div className='flex flex-[1_1_280px] flex-col gap-4'>
            <Wordmark />
            <p className='max-w-xs text-[15px] leading-relaxed'>{site.nomeCompleto}.</p>
          </div>

          <nav aria-label='Rodapé' className='flex flex-[1_1_200px] flex-col gap-1 text-[15px]'>
            <p className='rotulo mb-2 text-xs! text-fosco'>Navegação</p>
            {navegacao.slice(1).map((item) => (
              <Link key={item.destino} href={item.destino} className='py-1.5 hover:text-papel'>
                {item.titulo}
              </Link>
            ))}
          </nav>

          <div className='flex flex-[1_1_280px] flex-col gap-2.5 text-[15px] leading-normal'>
            <p className='rotulo mb-2 text-xs! text-fosco'>Fale conosco</p>
            <p>{site.endereco}</p>
            <a href={`mailto:${site.email}`} className='hover:text-papel'>
              {site.email}
            </a>
            <div className='mt-2'>
              <Redes />
            </div>
          </div>
        </div>

        <p className='border-t border-borda-escura pt-6 text-[13px] text-fosco'>
          © {site.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
