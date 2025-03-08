import Header from '@/components/photoPage/Header';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import PhotoSection from "@/components/photoPage/PhotoSection";

const PhotoPage = () => {
  return (
    <AppLayout>
      <Header />
      <div className='px-primary py-[100px]'>
        <PhotoSection />
      </div>
    </AppLayout>
  );
};

export default PhotoPage;
