import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import SlotMachine from './components/SlotMachine/SlotMachine';

function App() {
  const [musicStatus, setMusicStatus] = useState(false);
  const [musicVolume, setMusicVolume] = useState(0.2);
  const music1 = useRef(new Audio(require('./assets/music/music1.mp3')));

  useEffect(() => {
    if (musicStatus) {
      music1.current.loop = true;
      music1.current.volume = musicVolume;
      music1.current.play();
    } else {
      music1.current.pause();
    }

    return () => {
      music1.current.pause();
      music1.current.currentTime = 0;
    };
  }, [musicStatus]);

  const startMusic = () => {
    setMusicStatus(true);
  };

  return (
    <div className="App">
      <div className='main-wrapper'>
        {/* Flex container for music box and slot machine */}
        <div className='flex-container'>
          <div className='music-box'>
            <div className='music-button-wrapper'>
              <button onClick={() => setMusicStatus((prev) => !prev)}>
                MUSIC {!musicStatus ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
          <SlotMachine />
        </div>
      </div>
    </div>
  );
}

export default App;
