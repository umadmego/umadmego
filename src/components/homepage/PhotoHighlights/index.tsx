
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const photoHighlights = [
  { id: 1, src: '/images/home/gallery/gallery1.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { id: 2, src: '/images/home/gallery/gallery2.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 3, src: '/images/home/gallery/gallery3.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 4, src: '/images/home/gallery/gallery4.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { id: 5, src: '/images/home/gallery/gallery5.jpg', colSpan: 'col-span-2', rowSpan: 'row-span-2' },
  { id: 6, src: '/images/home/gallery/gallery6.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 7, src: '/images/home/gallery/gallery7.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];

const PhotoHighlights: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Destaques da Última Edição</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ gridAutoRows: '200px' }}>
          {photoHighlights.map((photo) => (
            <motion.div
              key={photo.id}
              className={`${photo.colSpan} ${photo.rowSpan} relative overflow-hidden rounded-lg`}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <img src={photo.src} alt={`Destaque ${photo.id}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Ver Foto</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/photo">
            <a className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300">
              Ver Galeria Completa
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoHighlights;
