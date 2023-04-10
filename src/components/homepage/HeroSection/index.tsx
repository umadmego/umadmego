import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import { useAppSelector } from '@/store/hooks';
import dynamic from 'next/dynamic';
import React from 'react';
import IntroSection from './IntroSection';

const DynamicGallery = dynamic(() => import('./GallerySection'), {
  loading: () => (
    <div className='flex items-center justify-center'>
      <LoadingIndicator />
    </div>
  ),
});

function HeroSection() {
  const { open: mobileBarOpen } = useAppSelector((state) => state.mobileBar);

  return (
    <header
      className={`bg-[#FFF2EE] ${
        mobileBarOpen ? 'h-[calc(100vh-96px-48px)]' : 'h-[calc(100vh-96px)]'
      }`}
      // Height of header is screen height - navbar height - mobile bar height if open
    >
      <div className='flex justify-between h-full overflow-hidden'>
        <IntroSection />
        <DynamicGallery />
      </div>
    </header>
  );
}

export default HeroSection;
