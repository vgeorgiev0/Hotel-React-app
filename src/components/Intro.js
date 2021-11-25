import React from 'react';
import Banner from './Banner';

const Intro = (props) => {
  return (
    <div className='loading'>
      <Banner title={props.intro} subtitle={props.introDesc}></Banner>
    </div>
  );
};

export default Intro;
