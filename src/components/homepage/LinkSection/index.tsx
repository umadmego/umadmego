import React from 'react';
import LinkCard from './LinkCard';
import links from './links';

function LinkSection() {
  return (
    <div>
      {links.map((link) => (
        <LinkCard key={link.label} link={link} />
      ))}
    </div>
  );
}

export default LinkSection;
