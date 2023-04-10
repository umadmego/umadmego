import React from 'react';
import ImageCard from './ImageCard';
import { ImageGroup1, ImageGroup2, ImageGroup3 } from './images';
import styles from './styles.module.css';

function GallerySection() {
  return (
    <>
      <div className={styles.imageSlider}>
        {ImageGroup1.map((image) => (
          <ImageCard image={image} />
        ))}
      </div>
      <div
        className={styles.imageSlider}
        style={{
          animationDirection: 'alternate-reverse',
        }}
      >
        {ImageGroup2.map((image) => (
          <ImageCard image={image} />
        ))}
      </div>
      <div className={styles.imageSlider}>
        {ImageGroup3.map((image) => (
          <ImageCard image={image} />
        ))}
      </div>
    </>
  );
}

export default GallerySection;
