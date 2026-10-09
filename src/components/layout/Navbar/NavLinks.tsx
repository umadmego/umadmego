import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import links from './links';

function NavLinks() {
  const pathname = usePathname();
  return (
    <div className='flex items-center gap-9'>
      {links.map((link) => (
        <Link
          key={link.destination}
          href={link.destination}
          className={
            pathname === link.destination
              ? 'p-[10px] border-b-secondary border-b-[3px] text-secondary'
              : ''
          }
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
