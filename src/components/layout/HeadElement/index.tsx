import Head from 'next/head';
import React from 'react';
import { site } from '@/content/site';

function HeadElement({
  pageTitle = site.nome,
  description = site.descricao,
  noIndex = false,
}: {
  pageTitle?: string;
  description?: string;
  noIndex?: boolean;
}) {
  return (
    <Head>
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#151413' />

      <title>{pageTitle}</title>
      <meta name='title' content={pageTitle} />
      <meta name='description' content={description} />

      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='pt_BR' />

      {noIndex === true && <meta name='robots' content='noIndex' />}
    </Head>
  );
}

export default HeadElement;
