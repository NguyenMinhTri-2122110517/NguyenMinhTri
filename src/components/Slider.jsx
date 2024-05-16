import React from 'react';
import slider from '../assets/slider.webp';
import slider1 from '../assets/slider1.webp';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className='carousel-item active'>
        <img src={slider} className='d-block w-100' alt='slider' />
      </div>
      <div className='carousel-item'>
        <img src={slider1} className='d-block w-100' alt='slider1' />
      </div>
    </Slider>
  );
}

export default SliderComponent;
