import Link from 'next/link';
import React from 'react';

type Variante = 'edicao' | 'tinta' | 'papel' | 'contorno' | 'contorno-claro';

const estilos: Record<Variante, string> = {
  edicao: 'bg-edicao text-white',
  tinta: 'bg-tinta text-papel',
  papel: 'bg-papel text-tinta',
  contorno: 'border border-tinta text-tinta',
  'contorno-claro': 'border border-pedra text-papel',
};

/** Botão-link no padrão do site: cantos retos, sem sombra. Links externos abrem em nova aba. */
function Botao({
  href,
  variante = 'tinta',
  className = '',
  children,
}: {
  href: string;
  variante?: Variante;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold transition-opacity hover:opacity-85 ${estilos[variante]} ${className}`;
  if (href.startsWith('http') || href.startsWith('mailto:')) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel='noopener noreferrer' className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export default Botao;
