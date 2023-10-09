import React from 'react';
import Footer from '../Footer';
import MobileDownloadBar from '../MobileDownloadBar';
import Navbar from '../Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // toast css
import DirectionSection from '@/components/homepage/DirectionSection';
import SubscribeSection from '@/components/homepage/SubscribeSection';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <MobileDownloadBar />
      <main className='bg-[#FFF5F2]'>
        {children}

        <DirectionSection />
        <SubscribeSection />
      </main>
      <ToastContainer
        style={{
          fontSize: 16,
          zIndex: 30,
        }}
        theme='colored'
        autoClose={5000}
        position='top-right'
        hideProgressBar={true}
        closeOnClick={true}
      />
      <Footer />
    </>
  );
}

export default AppLayout;
