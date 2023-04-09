import React from 'react';
import ContactSection from './ContactSection';
import CopyrightSection from './CopyrightSection';
import LinkSection from './LinkSection';
import LogoSection from './LogoSection';

function Footer() {
  return (
    <footer>
      <div className='bg-black pt-[89px]'>
        <div className='grid grid-flow-col gap-20  pr-primary pl-primary'>
          <LogoSection />
          <LinkSection />
          <ContactSection />
        </div>
        <CopyrightSection />
      </div>
    </footer>
  );
}

export default Footer;
