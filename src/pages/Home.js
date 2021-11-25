import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import DefaultMap from '../components/Maps';
import { Trans } from 'react-i18next';
import Carousel from '../components/Carousel';
import Intro from '../components/Intro';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const mainTitle = (
    <Trans i18nKey='mainTitle'>'Welcome to Rural household Morava ŽIS</Trans>
  );
  const mainSubtitle = (
    <Trans i18nKey='mainSubtitle'>Wonderful place to enjoy.</Trans>
  );
  const intro = <Trans i18nKey='intro'></Trans>;
  const introDesc = <Trans i18nKey='introDesc'></Trans>;

  return (
    <div className='grids'>
      <Hero>
        <Banner title={mainTitle} subtitle={mainSubtitle}>
          <Link to='/apartments' className='btn-primary'>
            <Trans i18nKey='btn1'>Our apartments</Trans>
          </Link>
        </Banner>
      </Hero>
      <div
        data-aos='fade-zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <Services />
      </div>
      <div
        data-aos='fade-zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <Intro intro={intro} introDesc={introDesc} />
      </div>
      <div
        data-aos='fade-zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <Carousel />
      </div>
      <div
        data-aos='fade-zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <FeaturedRooms />
      </div>
      <DefaultMap />
    </div>
  );
};

export default Home;
