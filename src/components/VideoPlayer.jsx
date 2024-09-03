import React from 'react';
import { useSelector } from 'react-redux';
import TextBox from './TextBox';

const VideoPlayer = () => {
  const textBoxes = useSelector((state) => state.textBoxes);

  return (
    <div className="video-container" style={{ position: 'relative' }}>
      <video src="https://videos.pexels.com/video-files/3209298/3209298-uhd_2560_1440_25fps.mp4" controls style={{ width: '100%' }} />
      {textBoxes.map((box) => (
        <TextBox key={box.id} {...box} />
      ))}
    </div>
  );
};

export default VideoPlayer;
