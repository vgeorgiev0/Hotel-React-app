import React from 'react';
import ReactPlayer from 'react-player';
import Title from './Title';
import { Trans } from 'react-i18next';

const VideoPlayer = () => {
  const ourVideo = <Trans i18nKey='ourVideo'></Trans>;

  return (
    <div>
      <Title title={ourVideo}></Title>
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
