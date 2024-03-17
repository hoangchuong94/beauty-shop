'use client';
import React from 'react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import logo1 from '/public/logo-provider/logo-001.png';
import logo2 from '/public/logo-provider/logo-002.png';
import logo3 from '/public/logo-provider/logo-003.png';
import logo4 from '/public/logo-provider/logo-004.png';
import logo5 from '/public/logo-provider/logo-005.png';
import logo6 from '/public/logo-provider/logo-006.png';

const SlideComponent = () => {
  const slides = [
    { id: 1, image: logo1.src },
    { id: 2, image: logo2.src },
    { id: 3, image: logo3.src },
    { id: 4, image: logo4.src },
    { id: 5, image: logo5.src },
    { id: 6, image: logo6.src },
    // Add more slides as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div className="pr-2" key={slide.id}>
            <figure>
              <Image
                src={slide.image}
                alt="logo provider"
                width={200}
                height={100}
                className="border border-neutral-800"
              />
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideComponent;
