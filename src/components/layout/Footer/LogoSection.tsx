import React from 'react';
import Image from 'next/image';
import logo from '@/assets/brand/logo-white-2026.png';

function LogoSection() {
  return (
    <div className="flex flex-col gap-[30px] items-start">
      <Image
        src={logo}
        alt="Logo UMADMEGO"
        width={150}
        height={50}
      />
      <p className="text-white text-[15px]">
        Copyright © UMADMEGO {new Date().getFullYear()}. Todos os direitos reservados.
      </p>
    </div>
  );
}

export default LogoSection;
