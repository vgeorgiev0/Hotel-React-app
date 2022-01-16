import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import mainImage from '../images/contact.jpg';
import ImageGallery from '../components/ImageGallery';

const Restaurant = () => {
  const mainTitle = (
    <Trans i18nKey='mainTitle'>Welcome to Rural household Morava ŽIS</Trans>
  );
  const mainSubtitle = (
    <Trans i18nKey='mainSubtitle'>Wonderful place to enjoy.</Trans>
  );
  return (
    <div>
      <Parallax bgImage={mainImage} strength={450}>
        <div className='para'>
          <Banner title={mainTitle} subtitle={mainSubtitle}>
            <Link to='/contact' className='btn-primary'>
              <Trans i18nKey='about'>Contact Us</Trans>
            </Link>
          </Banner>
        </div>
      </Parallax>
      <div>
        <ImageGallery />
      </div>
      <div>
        <Hero hero='restaurantHero'></Hero>
      </div>
    </div>
  );
};

export default Restaurant;
