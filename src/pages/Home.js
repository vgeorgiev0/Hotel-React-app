import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Hero>
      <Banner title='Wellcome' subtitle='Enjoy'>
        <Link to='/rooms' className='btn-primary'>
          Our Rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
