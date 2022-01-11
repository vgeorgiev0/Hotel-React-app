import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

const Restaurant = () => {
  const mainTitle = (
    <Trans i18nKey='mainTitle'>Welcome to Rural household Morava ŽIS</Trans>
  );
  const mainSubtitle = (
    <Trans i18nKey='mainSubtitle'>Wonderful place to enjoy.</Trans>
  );
  return (
    <div>
      <Hero>
        <Banner title={mainTitle} subtitle={mainSubtitle}>
          <Link to='/contact' className='btn-primary'>
            <Trans i18nKey='about'>Contact Us</Trans>
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};

export default Restaurant;
