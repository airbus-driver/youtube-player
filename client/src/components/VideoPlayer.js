import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId, options, onEnd, onError }) => {
  const onReady = (event) => {
    if (videoId) {
      const result = event.target.playVideo();
      console.log('result', result);
    }
  }

  return (
    <YouTube videoId={videoId || ''}  opts={options} onReady={onReady} onEnd={onEnd} onError={onError} />
  );
};

export default VideoPlayer;
