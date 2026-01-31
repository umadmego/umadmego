
'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/home/slider/slider1.jpg',
  '/images/home/slider/slider2.jpg',
  '/images/home/slider/slider3.jpg',
  '/images/home/slider/slider4.jpg',
  '/images/home/slider/slider5.jpg',
  '/images/home/slider/slider6.jpg',
  '/images/home/slider/slider7.jpg',
];

const HeroSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt="UMADMEGO Congress"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={prevSlide} className="text-white p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all">
          <ChevronLeft size={32} />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={nextSlide} className="text-white p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
