import React, { useEffect } from 'react';
import ContactContainer from '../components/ContactContainer';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  useEffect(() => {
    ReactGa.initialize('UA-217800648-1');

    ReactGa.pageview('/contact');
  });

  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name='description'
          content="Reserve an apartment or ask us anything. We'll be happy to host your next event!"
        />
        <link rel='canonical' href='/contact' />
      </Helmet>

      <ContactContainer />
    </div>
  );
};

export default Contact;
