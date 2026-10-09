
'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  // Arte pronta (cartaz/banner): já traz texto, então aparece inteira e sem título sobreposto.
  artwork?: boolean;
};

const slides: Slide[] = [
  {
    id: 10,
    image: '/images/home/slider/cartaz-2027.webp',
    title: 'Congresso UMADMEGO 2027 – El Rói, o Deus que me vê – 6 a 10 de fevereiro de 2027',
    subtitle: '',
    buttonText: 'Saiba Mais',
    buttonLink: '/live',
    artwork: true,
  },
  {
    id: 11,
    image: '/images/home/slider/camiseta-2027.webp',
    title: 'Camiseta oficial El Rói – R$ 55,00 – peça pelo link da bio',
    subtitle: '',
    buttonText: 'Peça a sua no Instagram',
    buttonLink: 'https://www.instagram.com/umadmego/',
    artwork: true,
  },
  {
    id: 1,
    image: '/images/home/slider/slider12.jpg',
    title: 'UMADMEGO 2027',
    subtitle: '6 a 10 de fevereiro · El Rói, o Deus que me vê',
    buttonText: 'Evento Gratuito',
    buttonLink: '/about',
  },
  {
    id: 2,
    image: '/images/home/slider/slider2.jpg',
    title: 'Participe e Seja Transformado',
    subtitle: 'Uma experiência única de fé, comunhão e crescimento espiritual.',
    buttonText: 'Saiba Mais',
    buttonLink: '/about',
  },
  {
    id: 3,
    image: '/images/home/slider/slider3.jpg',
    title: 'Faça Parte da Nossa História',
    subtitle: 'Junte-se a nós para celebrar e adorar em um evento inesquecível.',
    buttonText: 'Sobre',
    buttonLink: '/about',
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];
  const isExternal = slide.buttonLink.startsWith('http');
  const buttonClass =
    'bg-secondary text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300';

  return (
    <div className="relative w-full h-[70vh] sm:h-[calc(100vh-6rem)] overflow-hidden bg-primary">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {slide.artwork ? (
            <>
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-60"
              />
              <img
                src={slide.image}
                alt={slide.title}
                className="relative w-full h-full object-contain pb-28"
              />
            </>
          ) : (
            <>
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50"></div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div
        className={`relative z-10 flex flex-col items-center h-full text-center text-white p-4 sm:p-8 ${
          slide.artwork ? 'justify-end pb-16 sm:pb-16' : 'justify-center'
        }`}
      >
        {!slide.artwork && (
          <>
            <motion.h1
              key={`${currentSlide}-title`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              key={`${currentSlide}-subtitle`}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-8"
            >
              {slide.subtitle}
            </motion.p>
          </>
        )}
        <motion.div
          key={`${currentSlide}-button`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: slide.artwork ? 0.3 : 0.9, ease: 'backOut' }}
        >
          {isExternal ? (
            <a href={slide.buttonLink} target="_blank" rel="noopener noreferrer" className={buttonClass}>
              {slide.buttonText}
            </a>
          ) : (
            <Link href={slide.buttonLink} className={buttonClass}>
              {slide.buttonText}
            </Link>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Ir para o slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-secondary' : 'bg-white/50'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
