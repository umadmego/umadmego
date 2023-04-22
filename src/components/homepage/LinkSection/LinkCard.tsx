import Image from 'next/image';
import React from 'react';
import { LinkType } from './links';
import styles from './styles.module.css';

function LinkCard({ link }: { link: LinkType }) {
  return (
    <div className={'h-[661px] w-full relative ' + styles.img}>
      <Image className={'w-full h-full object-cover'} alt='' src={link.image} />
      <div className='absolute bottom-[26px] left-1/2 -translate-x-1/2 text-white z-10'>
        {link.label}
      </div>
    </div>
  );
}

export default LinkCard;
