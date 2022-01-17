import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Title from '../components/Title';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import mainImage from '../images/restaurant/001Res.jpg';
import img1 from '../images/restaurant/03Res.jpg';
import img2 from '../images/restaurant/13Res.jpg';
import img3 from '../images/restaurant/11Res.jpg';

const Restaurant = () => {
  const mainTitle = (
    <Trans i18nKey='mainTitle'>Welcome to Rural household Morava ŽIS</Trans>
  );
  const mainSubtitle = (
    <Trans i18nKey='mainSubtitle'>Wonderful place to enjoy.</Trans>
  );
  return (
    <div className='restaurantBody'>
      <Parallax bgImage={mainImage} strength={450}>
        <div className='para'>
          <Banner
            style={{ backgroundColor: '#E9ECEF' }}
            title={mainTitle}
            subtitle={mainSubtitle}
          >
            <Link to='/contact' className='btn-primary'>
              <Trans i18nKey='about'>Contact Us</Trans>
            </Link>
          </Banner>
        </div>
      </Parallax>
      <div className='services'>
        <Title title={'Have a celebration with us!'} />
      </div>

      <div className='columnLayout'>
        <div className='sectionContainer'>
          <div className='imageColumn'>
            <img src={img1} alt='Restaurant ZIS' />
          </div>

          <div className='columnContent' style={{ background: '#E9ECEF' }}>
            <div className='contentContainer'>
              <h5>We'll be happy to host your next event!</h5>
              <p>
                No matter what occasion you're celebrating — birthday,
                anniversary, marriage, baby shower — we offer customized menus
                for your group size. Celebrate together with more than 110
                people in our ceremonial hall where we organize all sorts of
                celebrations such as weddings, birthdays, banquets, and all of
                your happy moments.
              </p>
            </div>
          </div>
        </div>
        <div className='sectionContainer'>
          <div className='columnContent' style={{ background: '#E9ECEF' }}>
            <div className='contentContainer'>
              <h5>Capacity of up to 110 people in our ceremonial hall</h5>
              <div className='loading'>
                <button className='btn-primary'>Contact Us</button>
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
            <div className='contentContainer'>
              <h5>The best country restaurant near Nis</h5>
              <p>
                We offer a variety of dishes and drinks made with fresh
                ingredients and traditional Serbian recipes.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Hero hero='restaurantHero'></Hero>
      </div>
    </div>
  );
};

export default Restaurant;
