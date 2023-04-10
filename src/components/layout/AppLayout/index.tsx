import React from 'react';
import Footer from '../Footer';
import MobileDownloadBar from '../MobileDownloadBar';
import Navbar from '../Navbar';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <MobileDownloadBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default AppLayout;
