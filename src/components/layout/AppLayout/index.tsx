import Head from 'next/head';
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { edicao } from '@/content/edicao';
import { site } from '@/content/site';

function AppLayout({
  title,
  description,
  children,
}: {
  title?: string;
  /** Substitui a descrição padrão do site (busca e prévia de links compartilhados). */
  description?: string;
  children: React.ReactNode;
}) {
  return (
    // A cor da edição atual fica disponível para todo o site como --color-edicao (bg-edicao, text-edicao...).
    <div style={{ '--color-edicao': edicao.cor } as React.CSSProperties} className='flex min-h-screen flex-col'>
      {title && (
        <Head>
          <title>{`${title} · ${site.nome}`}</title>
          <meta property='og:title' content={`${title} · ${site.nome}`} key='og:title' />
        </Head>
      )}
      {description && (
        <Head>
          <meta name='description' content={description} key='description' />
          <meta property='og:description' content={description} key='og:description' />
        </Head>
      )}
      <Navbar />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
