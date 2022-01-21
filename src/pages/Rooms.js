import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
  const title = <Trans i18nKey='apartmentsTitle'></Trans>;
  const btn = <Trans i18nKey='btn2'></Trans>;
  return (
    <div>
      <Helmet>
        <title>Our Apartments</title>
        <meta
          name='description'
          content='We have two apartments with two double beds, a double room with a private bathroom, a large apartment of 80 sq.m with four double beds (ideal for two families), and a smaller one with three double beds (also suitable for two families). Each room has IPTV, air conditioning, and free WiFi throughout the complex.'
        />
        <link rel='canonical' href='/apartments' />
      </Helmet>
      <Hero hero='roomsHero'>
        <Banner title={title}>
          <Link className='btn-primary' to='/'>
            {btn}
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </div>
  );
};

export default Rooms;
