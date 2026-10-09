import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <AppLayout>
      <div className='w-full h-screen flex justify-center items-center flex-col text-center px-4'>
        <h1 className='text-7xl font-bold text-secondary font-secondary'>404</h1>
        <p className='mt-[38px] text-primary text-[40px] font-bold max-w-[561px]'>
          Ops, esta página não existe!
        </p>
        <Link
          href='/'
          className='mt-12 inline-block bg-primary text-white font-bold py-3 px-12 rounded-lg'
        >
          Voltar ao início
        </Link>
      </div>
    </AppLayout>
  );
};

export default NotFoundPage;
