import React from 'react';

const InstagramFeed: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">Siga-nos no Instagram</h2>
        <p className="mb-8 text-lg text-gray-700">Acompanhe nossas postagens, bastidores e novidades em tempo real.</p>
        <a 
          href="https://instagram.com/umadmego" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Ver no Instagram
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
