import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import ImageCard from './ImageCard';
import { ImageGroup1, ImageGroup2, ImageGroup3 } from './images';
import styles from './styles.module.css';

function GallerySection() {
  const allImages = useMemo(() => [...ImageGroup1, ...ImageGroup2, ...ImageGroup3], []);

  return (
    <div className="lg:flex gap-[18px] lg:flex-[50%] h-[50vh] lg:h-full">
      {/* Mobile: Swiper Carousel */}
      <div className="lg:hidden h-full w-full">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="h-full w-full"
        >
          {allImages.map((image, index) => (
            <SwiperSlide key={index} className="w-[250px] h-[350px]">
              <ImageCard image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: Original 3-Column Layout */}
      <div className="hidden lg:flex gap-[18px] w-full h-full">
        <div className={styles.imageSlider}>
          {ImageGroup1.map((image, index) => (
            <ImageCard image={image} key={index} />
          ))}
        </div>
        <div
          className={styles.imageSlider}
          style={{
            animationDirection: 'alternate-reverse',
          }}
        >
          {ImageGroup2.map((image, index) => (
            <ImageCard image={image} key={index} />
          ))}
        </div>
        <div className={styles.imageSlider}>
          {ImageGroup3.map((image, index) => (
            <ImageCard image={image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
