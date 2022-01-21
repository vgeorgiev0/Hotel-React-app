import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

const Error = () => {
  const error = <Trans i18nKey='error' />;
  const errorBtn = <Trans i18nKey='errorBtn' />;

  return (
    <div>
      <Helmet>
        <title>Error 404</title>
        <meta
          name='description'
          content='Something went wrong... If you have any problems with the page, please contact us!'
        />
        <meta name='robots' content='noindex' />
        <link rel='canonical' href='/error' />
      </Helmet>
      <Hero>
        <Banner title='404' subtitle={error}>
          <Link to='/' className='btn-primary'>
            {errorBtn}
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};

export default Error;
