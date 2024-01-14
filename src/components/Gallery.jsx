import React, { useState } from 'react';
import '../style/components/gallery.scss';
import arrowLeft from '../assets/images/arrowleft.svg';
import arrowRight from '../assets/images/arrowright.svg';

const Gallery= ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const hide = images.length > 1;  

  return (
    <div className="gallery">
      <img className='gallery__img' src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />

      {hide && ( 
      <div className="slide__arrow">
        <img className='slide__arrow__left' src={arrowLeft} alt="Previous" onClick={handlePrev} />
        <img className='slide__arrow__right' src={arrowRight} alt="Next" onClick={handleNext} />
      </div>
    )}

      {hide && ( 
        <p className="slide__counter">{currentImageIndex + 1}/{images.length}</p>
      )} 
    </div>
  );
};

export default Gallery;

