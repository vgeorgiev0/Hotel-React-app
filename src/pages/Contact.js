import React from 'react';
import ContactContainer from '../components/ContactContainer';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
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
