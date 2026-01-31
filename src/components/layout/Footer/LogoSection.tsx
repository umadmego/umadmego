
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/brand/logo-white-2026.png';

function LogoSection() {
  return (
    <div className="flex flex-col gap-[30px] items-center md:items-start text-center md:text-left">
      <Image
        src={logo}
        alt="Logo UMADMEGO"
        width={200}
        height={66}
        className="mx-auto md:mx-0"
      />
      <p className="text-white text-[15px]">
        Copyright © UMADMEGO {new Date().getFullYear()}. Todos os direitos reservados.
      </p>
    </div>
  );
}

export default LogoSection;
