import React from 'react';
import Title from './Title';

const Intro = (props) => {
  return (
    <div className='loading'>
      <Title title={props.intro}></Title>
      <p
        style={{
          display: 'block',
          border: '7px double #E3B74F',
          borderRadius: '40px 0px 40px 0px',
          marginLeft: '8%',
          marginRight: '8%',
          marginBottom: '10%',
          padding: '5%',
          textAlign: 'left',
          textTransform: 'none',
          fontSize: '20px',
          wordSpacing: '0.2em',
          fontFamily: `'Libre Baskerville', serif`,
        }}
      >
        {props.introDesc}
      </p>
    </div>
  );
};

export default Intro;
