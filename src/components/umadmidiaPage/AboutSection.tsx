import React from 'react';
import Image from 'next/image';
import equipeUmadmidia from '@/assets/images/photo/equipe-umadmidia.png';

const AboutSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
          {/* Image Section: 1/3 width on desktop */}
          <div className="md:w-1/3">
            <Image
              src={equipeUmadmidia}
              alt="Equipe UMADMIDIA reunida em evento."
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section: 2/3 width on desktop */}
          <div className="md:w-2/3 p-8 sm:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Equipe UMADMIDIA
            </h2>
            <a 
              href="https://www.instagram.com/umadmidia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-lg font-medium text-indigo-600 hover:text-indigo-500"
            >
              @umadmidia
            </a>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Os olhos e o coração por trás de cada registro! 
              Somos a equipe oficial de mídia da UMADMEGO, dedicada a capturar e eternizar cada momento de fé e comunhão.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                O que fazemos:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li><span className="font-semibold text-gray-800">Captura de fotos:</span> Eternizando momentos de fé.</li>
                <li><span className="font-semibold text-gray-800">Stories em tempo real:</span> Levando você para dentro do evento.</li>
                <li><span className="font-semibold text-gray-800">Creative de Vídeos:</span> Edições que transmitem energia e unção.</li>
                <li><span className="font-semibold text-gray-800">Bastidores:</span> Mostrando o amor e a dedicação por trás das câmeras.</li>
              </ul>
            </div>
            <p className="mt-8 font-semibold text-lg text-gray-800">
              Nossa missão é compartilhar fé e criar memórias. Siga-nos! 🎥🔥
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
