import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './Luxury.css'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Details from './Details/Details';
import Similar from './Similar/Similar';


const Luxury = () => {
  const [settings, setSettings] = useState({
    customPaging: function (i) {
      return (
        <a>
          <img src={`/images/tabia${i + 1}.png`} alt='' />
          </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // If you have side effects to handle, you can use the useEffect hook here.

  return (
    <>
      <Header />
      <div className='carousel_outer'>
        <Slider {...settings}>
          
          <div>
            <img src='/images/tabia1.png' alt='' className='img_scroll' />
          </div>
          <div>
            <img src='/images/tabia2.png' alt='' className='img_scroll' />
          </div>
          <div>
            <img src='/images/tabia3.png' alt='' className='img_scroll' />
          </div>
          <div>
            <img src='/images/tabia4.png' alt='' className='img_scroll' />
          </div>
        </Slider>
      </div>
      <Details/>
      <Footer />
    </>
  );
};

export default Luxury
