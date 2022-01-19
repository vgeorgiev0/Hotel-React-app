import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import CarouselRestaurant from '../components/CarouselRestaurant';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import img1 from '../images/restaurant/03Res.jpg';
import img2 from '../images/restaurant/13Res.jpg';
import img3 from '../images/restaurant/11Res.jpg';

const Restaurant = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const restaurantTitle = <Trans i18nKey='restaurantTitle'></Trans>;
  const restaurantDescription = (
    <Trans i18nKey='restaurantDescription'>Wonderful place to enjoy.</Trans>
  );
  const about = <Trans i18nKey='about' />;
  const restaurantOp = <Trans i18nKey='restaurantOp' />;
  const restaurantServTitle1 = <Trans i18nKey='restaurantServTitle1' />;
  const restaurantServDesc1 = <Trans i18nKey='restaurantServDesc1' />;
  const restaurantServTitle2 = <Trans i18nKey='restaurantServTitle2' />;
  const restaurantServTitle3 = <Trans i18nKey='restaurantServTitle3' />;
  const restaurantServDesc3 = <Trans i18nKey='restaurantServDesc3' />;
  const restaurantGallery = <Trans i18nKey='restaurantGallery' />;
  const restaurantFooter = <Trans i18nKey='restaurantFooter' />;

  return (
    <div className='restaurantBody'>
      <Hero hero='restaurantHero'>
        <Banner title={restaurantTitle} subtitle={restaurantDescription}>
          <Link to='/contact' className='btn-primary'>
            {about}
          </Link>
        </Banner>
      </Hero>
      <h2
        style={{ textAlign: 'center', marginBottom: '20vh', marginTop: '20vh' }}
      >
        {restaurantOp}
      </h2>

      <div className='columnLayout'>
        <div className='sectionContainer'>
          <div className='imageColumn'>
            <img src={img1} alt='Restaurant ZIS' />
          </div>

          <div className='columnContent' style={{ background: '#E9ECEF' }}>
            <div
              className='contentContainer'
              data-aos='fade-zoom-in'
              data-aos-offset='200'
              data-aos-easing='ease-in-sine'
              data-aos-duration='600'
            >
              <h5>{restaurantServTitle1}</h5>
              <p>{restaurantServDesc1}</p>
            </div>
          </div>
        </div>
        <div className='sectionContainer'>
          <div className='columnContent' style={{ background: '#E9ECEF' }}>
            <div
              className='contentContainer'
              data-aos='fade-zoom-in'
              data-aos-offset='200'
              data-aos-easing='ease-in-sine'
              data-aos-duration='600'
            >
              <h5 style={{ textAlign: 'center' }}>{restaurantServTitle2}</h5>
              <div className='loading'>
                <Link to='/contact' className='btn-primary'>
                  {about}
                </Link>
              </div>
            </div>
          </div>
          <div className='imageColumn'>
            <img src={img2} alt='Restaurant ZIS' />
          </div>
        </div>
        <div className='sectionContainer'>
          <div className='imageColumn'>
            <img src={img3} alt='Restaurant ZIS' />
          </div>

          <div className='columnContent' style={{ background: '#E9ECEF' }}>
            <div
              className='contentContainer'
              data-aos='fade-zoom-in'
              data-aos-offset='200'
              data-aos-easing='ease-in-sine'
              data-aos-duration='600'
            >
              <h5>{restaurantServTitle3}</h5>
              <p>{restaurantServDesc3}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ textAlign: 'center', marginBottom: '10vh' }}>
          {restaurantGallery}
        </h3>
        <div style={{ marginBottom: '20vh' }}>
          <CarouselRestaurant />
        </div>
      </div>
      <div
        data-aos='fade-zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <Hero hero='restaurantFooterHero'>
          <h6>{restaurantFooter}</h6>
          <Link to='/contact' className='btn-primary'>
            <Trans i18nKey='about'>Contact Us</Trans>
          </Link>
        </Hero>
      </div>
    </div>
  );
};

export default Restaurant;
