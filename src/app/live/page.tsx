'use client'

import React from 'react';

function LivePage() {
  return (
    <main>
      <div className="bg-gray-900 py-12 text-white text-center">
        <h1 className="text-4xl font-bold">Ao Vivo</h1>
      </div>
      <section className="container mx-auto py-12 px-4">
        {/* 2025 Playlist */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">UMADMEGO 2025 - Ao Vivo</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?si=WTNi1aXV45lW4Yx5&amp;list=PLtkZK7cmglg5KwTf3Mhwe-MgGbzJa6Fyi"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* 2024 Playlist */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">UMADMEGO 2024 - Ao Vivo</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?si=_Zb1ZAouid0v1L8_&amp;list=PLtkZK7cmglg72U_LEHRJdxbxaaCCvh_Vi"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Acompanhe nossas transmissões</h2>
            <p className="text-lg">
                Fique por dentro de todos os nossos cultos e eventos ao vivo, diretamente do nosso canal no YouTube.
            </p>
            <a 
                href="https://www.youtube.com/@umadmego"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-red-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
                Inscreva-se no canal
            </a>
        </div>
      </section>
    </main>
  );
}

export default LivePage;