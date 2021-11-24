import React, { Component } from 'react';
import Slider from 'react-slick';
import c1 from '../images/carousel/c1.jpg';
import c2 from '../images/carousel/c2.jpg';
import c3 from '../images/carousel/c3.jpg';
import c4 from '../images/carousel/c4.jpg';
import c5 from '../images/carousel/c5.jpg';
import c6 from '../images/carousel/c6.jpg';
import c7 from '../images/carousel/c7.jpg';
import c8 from '../images/carousel/c8.jpg';

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className='carousel'>
        <Slider {...settings}>
          <div>
            <img src={c1} alt='image1' />
          </div>
          <div>
            <img src={c2} alt='image2' />
          </div>
          <div>
            <img src={c3} alt='image3' />
          </div>
          <div>
            <img src={c4} alt='image4' />
          </div>
          <div>
            <img src={c5} alt='image5' />
          </div>
          <div>
            <img src={c6} alt='image6' />
          </div>
          <div>
            <img src={c7} alt='image7' />
          </div>
          <div>
            <img src={c8} alt='image8' />
          </div>
        </Slider>
      </div>
    );
  }
}
