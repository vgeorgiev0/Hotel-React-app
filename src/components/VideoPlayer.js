import React from 'react';
import ReactPlayer from 'react-player';
import Title from './Title';

const VideoPlayer = () => {
  return (
    <div>
      <Title title={'Our Promotional Video'}></Title>
      <ReactPlayer
        width='100vw'
        height='60vh'
        className='video'
        url='https://www.youtube.com/watch?v=z4mfHMVTaKw'
      />
    </div>
  );
};

export default VideoPlayer;
