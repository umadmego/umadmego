
import React from 'react';
import Image from 'next/image';

function LogoSection() {
  return (
    <div className='flex flex-col gap-[30px] items-start'>
      <Image src="/assets/brand/logo-white-2026.png" alt="Logo" width={256} height={64} className="mb-4" />
      
      <div className="text-white text-sm text-opacity-80">
        <p className="mb-2">© 2026 UMADMEGO. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default LogoSection;
