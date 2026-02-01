import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const headerStyle = {
    backgroundImage: `url('/assets/images/photo/segundanoite2025.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <header className="text-white text-center py-20" style={headerStyle}>
      <div className="bg-black bg-opacity-60 py-12">
        <h1 className="text-5xl font-extrabold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
