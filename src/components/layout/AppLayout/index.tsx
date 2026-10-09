import Head from 'next/head';
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { edicao } from '@/content/edicao';
import { site } from '@/content/site';

function AppLayout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    // A cor da edição atual fica disponível para todo o site como --color-edicao (bg-edicao, text-edicao...).
    <div style={{ '--color-edicao': edicao.cor } as React.CSSProperties} className='flex min-h-screen flex-col'>
      {title && (
        <Head>
          <title>{`${title} · ${site.nome}`}</title>
        </Head>
      )}
      <Navbar />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
