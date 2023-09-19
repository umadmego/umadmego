import AboutHeader from '@/components/aboutPage/AboutHeader';
import HistorySection from '@/components/aboutPage/HistorySection';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

function About() {
  return (
    <AppLayout>
      <AboutHeader />
      <HistorySection />
    </AppLayout>
  );
}

export default About;
