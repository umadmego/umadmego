import React from 'react';
import backgroundImage from '@/assets/images/photo/segundanoite2025.jpg';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const headerStyle = {
    backgroundImage: `url('${backgroundImage.src}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <header className="text-white text-center py-20" style={headerStyle}>
      <div className="bg-black/60 py-12">
        <h1 className="text-5xl font-extrabold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
