import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import MenuIcon from '@/assets/svgs/layout/menu.svg';
import Image from 'next/image';
import Link from 'next/link';
import links from './links';

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className='relative'>
        <button
          type='button'
          aria-label='Abrir menu'
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className='flex items-center'
        >
          <Image src={MenuIcon} alt='' />
        </button>
        {open && (
          <nav
            aria-label='Menu principal'
            className='absolute right-0 top-14 z-30 w-40 rounded-sm bg-white shadow-[12px_12px_24px_rgba(0,0,0,0.1)]'
          >
            <ul className='flex flex-col'>
              {links.map((item) => (
                <li key={item.destination}>
                  <Link
                    href={item.destination}
                    onClick={() => setOpen(false)}
                    className='block px-5 py-3 text-sm text-black'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default MobileMenu;
