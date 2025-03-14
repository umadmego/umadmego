import Head from 'next/head';
import React from 'react';

function HeadElement({
  pageTitle = "UMADMEGO 2K25",
  description = 'Ele Vem!',
  noIndex = false,
  siteLink = 'https://umadmego.com.br/',
}: {
  pageTitle?: string;
  description?: string;
  noIndex?: boolean;
  siteLink?: string;
}) {
  return (
    <Head>
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />

      {/* <!-- Main Tags --> */}
      <title>{pageTitle}</title>
      <meta name='title' content={pageTitle} />
      <meta name='description' content={description} />


      {noIndex === true && <meta name='robots' content='noIndex' />}
    </Head>
  );
}

export default HeadElement;
