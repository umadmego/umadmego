
'use client'

import React from 'react';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const photoHighlights = [
  { id: 1, src: '/images/home/slider/slider19.jpg' },
  { id: 2, src: '/images/home/slider/slider11.jpg' },
  { id: 3, src: '/images/home/slider/slider13.jpg' },
  { id: 4, src: '/images/home/slider/slider14.jpg' },
  { id: 5, src: '/images/home/slider/slider16.jpg' },
  { id: 6, src: '/images/home/slider/slider15.jpg' },
  { id: 7, src: '/images/home/slider/slider17.jpg' },
];

const PhotoHighlights: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-primary text-white">
       <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }
        .swiper-pagination-bullet {
          background-color: white !important;
        }
      `}</style>
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Destaques da Última Edição</h2>
        
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={1.25}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            breakpoints={{
                640: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                },
            }}
            className="w-full h-[350px]"
        >
          {photoHighlights.map((photo) => (
            <SwiperSlide key={photo.id} className="rounded-lg overflow-hidden group">
                <img src={photo.src} alt={`Destaque ${photo.id}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30"></div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <Link href="/photo">
            <a className="bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300">
              Ver Galeria Completa
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoHighlights;
