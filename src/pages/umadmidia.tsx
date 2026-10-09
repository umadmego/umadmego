import AppLayout from '@/components/layout/AppLayout';
import AboutSection from '@/components/umadmidiaPage/AboutSection';
import InstagramFeed from '@/components/umadmidiaPage/InstagramFeed';
import React from 'react';
import Head from 'next/head';

function Umadmidia() {
  return (
    <AppLayout>
      <Head>
        <script async src="https://www.instagram.com/embed.js"></script>
      </Head>
      <div className="bg-gray-800 text-white text-center py-12">
        <h1 className="text-5xl font-extrabold">UMADMIDIA</h1>
      </div>
      <AboutSection />
      <InstagramFeed />
    </AppLayout>
  );
}

export default Umadmidia;
