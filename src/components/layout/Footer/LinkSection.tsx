
import React from 'react';

const footerLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/about' },
  { name: 'Galeria', href: '/photo' },
  { name: 'Contato', href: '/contact' },
];

function LinkSection() {
  return (
    <div className='flex flex-col text-white'>
      <h3 className="font-bold text-lg mb-6">Navegação</h3>
      <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
        {footerLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-secondary transition-colors duration-300">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkSection;
