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
import c9 from '../images/carousel/c9.jpg';
import c10 from '../images/carousel/c10.jpg';
import c11 from '../images/carousel/c11.jpg';
import c12 from '../images/carousel/c12.jpg';
import c13 from '../images/carousel/c13.jpeg';
import c14 from '../images/carousel/c14.jpeg';
import c15 from '../images/carousel/c15.jpeg';
import c16 from '../images/carousel/c16.jpg';

// TODO Change image c10 with wider image

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 5000,
      initialSlide: 0,
      pauseOnHover: true,
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
            <img src={c9} alt='image9' />
          </div>
          <div>
            <img src={c4} alt='image4' />
          </div>
          <div>
            <img src={c6} alt='image6' />
          </div>
          <div>
            <img src={c7} alt='image7' />
          </div>
          <div>
            <img src={c2} alt='image2' />
          </div>
          <div>
            <img src={c8} alt='image8' />
          </div>
          <div>
            <img src={c10} alt='image10' />
          </div>
          <div>
            <img src={c3} alt='image3' />
          </div>
          <div>
            <img src={c11} alt='image11' />
          </div>
          <div>
            <img src={c12} alt='image12' />
          </div>
          <div>
            <img src={c13} alt='image13' />
          </div>
          <div>
            <img src={c14} alt='image14' />
          </div>
          <div>
            <img src={c5} alt='image5' />
          </div>
          <div>
            <img src={c15} alt='image15' />
          </div>
          <div>
            <img src={c16} alt='image16' />
          </div>
        </Slider>
      </div>
    );
  }
}
