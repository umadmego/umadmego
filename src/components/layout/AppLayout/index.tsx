import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default AppLayout;
