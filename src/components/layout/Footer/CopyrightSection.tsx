
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  { icon: FaFacebook, href: 'https://facebook.com/umadmego' },
  { icon: FaInstagram, href: 'https://instagram.com/umadmego' },
  { icon: FaYoutube, href: 'https://youtube.com/umadmego' },
];

function CopyrightSection() {
  return (
    <div className="mt-16 border-t border-white/10 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-white/80">
        <p className="mb-4 sm:mb-0">© 2026 UMADMEGO. Todos os direitos reservados.</p>
        
        <div className="flex space-x-5">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
              <social.icon size={20} />
            </a>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default CopyrightSection;
