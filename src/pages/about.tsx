import AboutHeader from '@/components/aboutPage/AboutHeader';
import HistorySection from '@/components/aboutPage/HistorySection';
import VisionSection from '@/components/aboutPage/VisionSection';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

function About() {
  return (
    <AppLayout>
      <AboutHeader />
      <HistorySection />
      <VisionSection />
    </AppLayout>
  );
}

export default About;
