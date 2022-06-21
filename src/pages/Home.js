import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import ReactGa from 'react-ga';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import SimpleMap from '../components/Maps';
import Carousel from '../components/Carousel';
import Intro from '../components/Intro';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Testimonial from '../components/Testimonial';
import VideoPlayer from '../components/VideoPlayer';

const Home = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    ReactGa.initialize('UA-217800648-1');

    ReactGa.pageview('/');
  });

  const mainTitle = (
    <Trans i18nKey='mainTitle'>Welcome to Rural household Morava ŽIS</Trans>
  );
  const mainSubtitle = (
    <Trans i18nKey='mainSubtitle'>Wonderful place to enjoy.</Trans>
  );
  const intro = <Trans i18nKey='intro'></Trans>;
  const introDesc = <Trans i18nKey='introDesc'></Trans>;

  return (
    <div className='grids' id='home'>
      <Helmet>
        <title>Home page</title>
        <meta
          name='description'
          content='Welcome to Rural household Morava ŽIS. A place where you can feel at home.'
        />
        <link rel='canonical' href='/' />
      </Helmet>
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
        <VideoPlayer />
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
        <Testimonial />
      </div>

      <div
        data-aos='fade-zoom-in'
        data-aos-offset='400'
        data-aos-easing='ease-in-sine'
        data-aos-duration='800'
      >
        <FeaturedRooms />
      </div>
      <div
        data-aos='fade-zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <SimpleMap />
      </div>
    </div>
  );
};

export default Home;
