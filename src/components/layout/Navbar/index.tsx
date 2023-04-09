import React from 'react';
import Logo from '@/assets/brand/logo.png';
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='pl-primary pr-primary'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <Image src={Logo} alt="The Father's House" className='h-[90px] w-auto' />
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
