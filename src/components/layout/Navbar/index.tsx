import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { FiMenu, FiX } from 'react-icons/fi';
import Wordmark from '@/components/ui/Wordmark';
import { navegacao } from '@/content/site';

function LinkAoVivo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href='/live'
      onClick={onClick}
      className='inline-flex min-h-11 items-center justify-center gap-2 bg-papel px-4 py-3 font-semibold text-tinta hover:opacity-85'
    >
      <span className='block size-2 rounded-full bg-edicao' />
      Assistir ao vivo
    </Link>
  );
}

function Navbar() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <ClickAwayListener onClickAway={fechar}>
      <header className='relative z-30 bg-tinta text-papel'>
        <div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-8 lg:py-5'>
          <Wordmark />

          <nav aria-label='Principal' className='hidden items-center gap-7 text-[15px] font-medium lg:flex'>
            {navegacao.map((item) => (
              <Link
                key={item.destino}
                href={item.destino}
                aria-current={pathname === item.destino ? 'page' : undefined}
                className={`border-b-2 py-3 hover:opacity-80 ${
                  pathname === item.destino ? 'border-edicao' : 'border-transparent'
                }`}
              >
                {item.titulo}
              </Link>
            ))}
            <LinkAoVivo />
          </nav>

          <button
            type='button'
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
            aria-controls='menu-celular'
            onClick={() => setAberto((valor) => !valor)}
            className='flex size-11 items-center justify-center border border-grafite lg:hidden'
          >
            {aberto ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {aberto && (
          <nav
            id='menu-celular'
            aria-label='Menu principal'
            className='absolute inset-x-0 top-full border-t border-grafite bg-tinta px-4 pb-6 lg:hidden'
          >
            <ul className='flex flex-col'>
              {navegacao.map((item) => (
                <li key={item.destino} className='border-b border-grafite'>
                  <Link
                    href={item.destino}
                    onClick={fechar}
                    aria-current={pathname === item.destino ? 'page' : undefined}
                    className='flex items-center gap-3 py-4 text-lg font-medium'
                  >
                    {pathname === item.destino && <span className='block size-2 bg-edicao' />}
                    {item.titulo}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='mt-6 flex'>
              <LinkAoVivo onClick={fechar} />
            </div>
          </nav>
        )}
      </header>
    </ClickAwayListener>
  );
}

export default Navbar;
