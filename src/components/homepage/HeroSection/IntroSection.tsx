import Button from '@/common/Button';
import Link from 'next/link';
import React from 'react';

function IntroSection() {
  return (
    <div className='pr-primary pl-primary flex flex-col justify-center p-5 h-full'>
      <h1 className='text-primary text-[35px] max-w-[547px]'>
        Welcome to <br />
        <span className='font-secondary font-bold text-[55px]'>
          The Father&apos;s House Church
        </span>
      </h1>
      <p className='text-[28px] font-normal mt-[7px] mb-[59px]'>
        Experience the power of God&apos;s word
      </p>
      <div className='flex items-center flex-wrap gap-10'>
        <Link href='/church-locations'>
          <Button className='!h-[60px] !text-lg'>Find a Location</Button>
        </Link>
        <Link href='/media'>
          <Button className='!h-[60px] !text-lg'>Join us Online</Button>
        </Link>
      </div>
    </div>
  );
}

export default IntroSection;
