import Button from '@/common/Button';
import Image from 'next/image';
import React from 'react';
import contactInfo from './contactInfo';

function ContactSection() {
  return (
    <div className='flex flex-col text-white'>
      <p className='font-secondary font-semibold text-lg mb-4'>Contact</p>
      <ul className='flex flex-col gap-4'>
        {contactInfo.map((info) => (
          <li key={info.text} className='flex gap-4 text-sm'>
            <Image src={info.icon} alt={info.alt} />
            {info.type === 'email' && (
              <a target='_blank' href={'mailto:' + info.text}>
                {info.text}
              </a>
            )}
            {info.type === 'phone' && (
              <a target='_blank' href={'tel:' + info.text}>
                {info.text}
              </a>
            )}
            {!info.type && <span>{info.text}</span>}
          </li>
        ))}
      </ul>
      <div className='mt-[51px] flex flex-col'>
        <p className='font-secondary font-semibold mb-[15px]'>Have an account?</p>
        <div className='flex gap-[29px]'>
          <Button className='!w-[110px] !h-[35px] !text-sm !bg-black !border-white !border !text-white hover:!bg-white hover:!text-black'>
            Log in
          </Button>
          <Button className='!w-[110px] !h-[35px] !text-sm !bg-black !border-white !border !text-white hover:!bg-white hover:!text-black'>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
