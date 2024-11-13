import React, { useState } from 'react';

const Carousel = () => {
  const images = [
    {
      src: 'http://sibkd.semarangkab.go.id/simpeg/packages/upload/photo/slider/slider_new.png',
      alt: 'Reformasi birokrasi untuk Indonesia yang lebih baik',
      caption: 'Reformasi birokrasi untuk Indonesia yang lebih baik'
    },
    {
      src: 'http://sibkd.semarangkab.go.id/simpeg/packages/upload/photo/slider/PDcYiO.png',
      alt: 'Pondasi revolusi mental PNS',
      caption: 'Pondasi revolusi mental PNS'
    },
    {
      src: 'http://sibkd.semarangkab.go.id/simpeg/packages/upload/photo/slider/CUZeuA.png',
      alt: 'Tanamkan 3 nilai revolusi mental aparatur sipil negara',
      caption: 'Tanamkan 3 nilai revolusi mental aparatur sipil negara'
    },
    {
      src: 'http://sibkd.semarangkab.go.id/simpeg/packages/upload/photo/slider/irgpLH.jpg',
      alt: 'Simulasi CAT online untuk latihan ujian penerimaan calon PNS',
      caption: 'Simulasi CAT online untuk latihan ujian penerimaan calon PNS'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Carousel Wrapper */}
      <div className="relative">
        {/* Image Slide */}
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            currentIndex === 0
              ? 'translate-x-0'
              : currentIndex === 1
              ? 'translate-x-full'
              : currentIndex === 2
              ? '-translate-x-full'
              : ''
          }`}
        >
          {/* Image Content */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? 'block' : 'hidden'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center py-2">
                {image.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
