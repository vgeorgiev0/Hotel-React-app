import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import DefaultMap from '../components/Maps';
import { Trans } from 'react-i18next';

const Home = (props) => {
  const mainTitle = (
    <Trans i18nKey='mainTitle'>'Welcome to Rural household Morava ŽIS</Trans>
  );
  const mainSubtitle = (
    <Trans i18nKey='mainSubtitle'>Wonderful place to enjoy.</Trans>
  );

  return (
    <div>
      <Hero>
        <Banner title={mainTitle} subtitle={mainSubtitle}>
          <Link to='/apartments' className='btn-primary'>
            <Trans i18nKey='btn1'>Our apartments</Trans>
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <DefaultMap />
    </div>
  );
};

export default Home;
