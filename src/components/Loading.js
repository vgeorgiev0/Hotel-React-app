import React from 'react';
import loadingGif from '../images/gif/loading-6.gif';

const Loading = () => {
  return (
    <div className='loading'>
      <h4>Loading...</h4>
      <img className='loadingSpinner' src={loadingGif} alt='' />
    </div>
  );
};

export default Loading;
