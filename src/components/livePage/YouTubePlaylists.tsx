import React from 'react';

const YouTubePlaylists = () => {
  return (
    <div className="bg-white p-6">
      <div className="container mx-auto text-center">

        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">UMADMEGO 2027</h2>
          <p className="text-xl text-gray-700">
            O 24º Congresso UMADMEGO já tem data marcada! Prepare-se para dias inesquecíveis de 6 a 10 de fevereiro de 2027, com o tema "El Rói – O Deus que me vê". Em breve, mais informações.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">UMADMEGO 2025</h2>
          <p className="text-lg text-gray-600 mb-4">Relembre os melhores momentos do nosso último congresso.</p>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?list=PLtkZK7cmglg5KwTf3Mhwe-MgGbzJa6Fyi"
              title="YouTube video player - UMADMEGO 2025"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">UMADMEGO 2024</h2>
          <p className="text-lg text-gray-600 mb-4">Veja como foram as ministrações e momentos de adoração do ano anterior.</p>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?list=PLtkZK7cmglg72U_LEHRJdxbxaaCCvh_Vi"
              title="YouTube video player - UMADMEGO 2024"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default YouTubePlaylists;