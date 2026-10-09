import React from 'react';
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { site } from '@/content/site';

export const redes = [
  { nome: 'Instagram', href: site.redes.instagram, Icone: FiInstagram },
  { nome: 'YouTube', href: site.redes.youtube, Icone: FiYoutube },
  { nome: 'Facebook', href: site.redes.facebook, Icone: FiFacebook },
];

/** Ícones das redes sociais em quadrados de 44px. */
function Redes({ escuro = true }: { escuro?: boolean }) {
  return (
    <div className='flex gap-2'>
      {redes.map(({ nome, href, Icone }) => (
        <a
          key={nome}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={nome}
          className={`flex size-11 items-center justify-center border hover:opacity-80 ${
            escuro ? 'border-grafite' : 'border-linha'
          }`}
        >
          <Icone size={18} aria-hidden='true' />
        </a>
      ))}
    </div>
  );
}

export default Redes;
