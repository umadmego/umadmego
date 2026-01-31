
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const photoHighlights = [
  { id: 1, src: '/images/home/slider/slider19.jpg', colSpan: 'col-span-1', rowSpan: 'sm:row-span-2' },
  { id: 2, src: '/images/home/slider/slider11.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 3, src: '/images/home/slider/slider13.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 4, src: '/images/home/slider/slider14.jpg', colSpan: 'col-span-1', rowSpan: 'sm:row-span-2' },
  { id: 5, src: '/images/home/slider/slider16.jpg', colSpan: 'col-span-1 sm:col-span-2', rowSpan: 'sm:row-span-2' },
  { id: 6, src: '/images/home/slider/slider15.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 7, src: '/images/home/slider/slider17.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];

const PhotoHighlights: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-primary text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Destaques da Última Edição</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" style={{ gridAutoRows: '200px' }}>
          {photoHighlights.map((photo) => (
            <motion.div
              key={photo.id}
              className={`${photo.colSpan} ${photo.rowSpan} relative overflow-hidden rounded-lg`}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <img src={photo.src} alt={`Destaque ${photo.id}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[rgba(107,79,75,0.4)] opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/photo">
            <a className="bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-secondary transition-colors duration-300">
              Ver Galeria Completa
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoHighlights;
