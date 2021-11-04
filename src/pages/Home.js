import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
// import { Trans, useTranslation } from 'react-i18next';
import DefaultMap from '../components/Maps';

const Home = (props) => {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  return (
    <>
      <Hero>
        <Banner title='Welcome to ŽIS' subtitle='Come and stay with us'>
          <Link to='/apartments' className='btn-primary'>
            Our Apartments
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <DefaultMap />
      <footer></footer>
    </>
  );
};

export default Home;
