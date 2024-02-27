import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const DashboardPage: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      carousel();
    }, 2000);

    return () => {
      clearInterval(carouselInterval);
    };
  }, [slideIndex]);

  const carousel = () => {
    slidesRef.current.forEach((slide, i) => {
      if (slide) {
        slide.style.display = 'none';
      }
    });

    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > slidesRef.current.length) {
        newIndex = 1;
      }

      const newSlide = slidesRef.current[newIndex - 1];
      if (newSlide) {
        newSlide.style.display = 'block';
      }

      return newIndex;
    });
  };

  return (
    <div className="mySlides" ref={(el) => (slidesRef.current[0] = el)}>
        <Image
          src="https://wakatime.com/share/@018ca02c-ab88-4ea4-9e74-48688ac3bbec/734d666a-cd86-496a-be0c-495fa1bf54bc.png"
          alt="dashboard"
          width={1200}
          height={800}
          layout="responsive"
        />
    </div>
  );
};

export default DashboardPage;
