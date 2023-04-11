// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
import HeroSection from '@/components/homepage/HeroSection';
import WelcomeSection from '@/components/homepage/WelcomeSection';
import AppLayout from '@/components/layout/AppLayout';

export default function Home() {
  // const paragraphRef = useRef<HTMLParagraphElement>(null);

  // // Animate the paragraph
  // useEffect(() => {
  //   gsap.from(paragraphRef.current, { x: 300, duration: 2 });
  // }, [paragraphRef]);

  return (
    <AppLayout>
      <HeroSection />
      <WelcomeSection />
    </AppLayout>
  );
}
