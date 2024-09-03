import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ConfigPanel from '../components/ConfigPanel';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 60%', position: 'relative' }}>
        <VideoPlayer /> {/* Replace with your video player component */}
        {/* Ensure the text boxes are overlaid on the video */}
      </div>
      <div style={{ flex: '0 0 40%', padding: '10px', flexDirection: 'column' }}>
        <ConfigPanel /> {/* Configuration panel for text boxes */}
      </div>
    </div>
    
  );
};

export default Home;
