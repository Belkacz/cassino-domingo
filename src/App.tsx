import React from 'react';
import './App.css';
import SlotMachine from './components/SlotMachine/SlotMachine';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#B22222',
      },
      secondary: {
        main: '#555555',
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <div className='main-wrapper'>
        <div className='flex-container'>
          <MusicPlayer />
          <SlotMachine />
        </div>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
