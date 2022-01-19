import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

const Error = () => {
  const error = <Trans i18nKey='error' />;
  const errorBtn = <Trans i18nKey='errorBtn' />;

  return (
    <Hero>
      <Banner title='404' subtitle={error}>
        <Link to='/' className='btn-primary'>
          {errorBtn}
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
