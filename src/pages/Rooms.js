import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';
import { Trans } from 'react-i18next';

const Rooms = () => {
  const title = <Trans i18nKey='apartmentsTitle'></Trans>;
  const btn = <Trans i18nKey='btn2'></Trans>;
  return (
    <div>
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
