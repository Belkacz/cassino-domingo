import React from 'react';
import './App.css';
import SlotMachine from './components/SlotMachine/SlotMachine';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {

  return (
    <div className="App">
      <div className='main-wrapper'>
        <div className='flex-container'>
          <MusicPlayer />
          <SlotMachine />
        </div>
      </div>
    </div>
  );
}

export default App;
