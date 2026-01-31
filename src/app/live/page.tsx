'use client'

import React from 'react';

function LivePage() {
  return (
    <main>
      <div className="bg-gray-900 py-12 text-white text-center">
        <h1 className="text-4xl font-bold">Ao Vivo</h1>
      </div>
      <section className="container mx-auto py-12 px-4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/live_stream?channel=UC9Fp6M5-hG2vju2fA6As25w"
            title="Transmissão ao vivo UMADMEGO"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
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
