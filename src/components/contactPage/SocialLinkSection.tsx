import React from 'react';
import socialLinks from './socialLinks';
import Image from 'next/image';

const SocialLinkSection = () => {
  return (
    <>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-3'>
        Entre em contato
      </h2>
      <p className='text-lg lg:text-2xl text-center font-medium mb-[59px]'>
        Esperamos que você tenha uma ótima experiência enquanto adoramos juntos. Estamos ansiosos para conhecer mais de você!
      </p>
      <div className='flex justify-center items-center gap-[46px]'>
        {socialLinks.map((link) => (
          <a
            href={link.destination}
            key={link.destination}
            target='_blank'
            rel='noreferrer'
          >
            <Image src={link.src} alt={link.alt} />
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialLinkSection;
