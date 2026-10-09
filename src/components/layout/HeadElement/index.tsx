import Head from 'next/head';
import React from 'react';

function HeadElement({
  pageTitle = 'UMADMEGO 2K27',
  description = 'El Rói – O Deus que me vê. 25º Congresso UMADMEGO, de 6 a 10 de fevereiro de 2027.',
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
      <meta name='theme-color' content='#000000' />

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
