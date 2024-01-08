// App.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const video = document.getElementById('streamVideo');

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <div className="App">
      <h2>Welcome to the video streaming website</h2>
      <video id="streamVideo" width="700px" height="400px" controls>
        <source src="https://d22reslxbyf40r.cloudfront.net/sample_1.mp4" type="video/mp4" />
      </video>
      <div className="controls">
        <button className="playButton" onClick={togglePlay}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
      </div>
    </div>
  );
}

export default App;
