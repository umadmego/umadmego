import React from 'react';
import Logo from '@/assets/brand/logo.png';
import Image from 'next/image';
import NavLinks from './NavLinks';

function Navbar() {
  return (
    <nav className='pl-primary pr-primary'>
      <div className='flex justify-between items-center'>
        <Image src={Logo} alt="The Father's House" className='h-[90px] w-auto' />
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
