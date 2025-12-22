import React, { useState } from 'react';
import './App.css';
import SlotMachine from './components/SlotMachine/SlotMachine';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import { createTheme, ThemeProvider, Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FxPlayer from './components/FxPlayer/FxPlayer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
  const [fxVolume, setFxVolume] = useState(0.2);
  const [fxSound, setSound] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

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

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleOpenRules = () => {
    setGameStarted(false)
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {!gameStarted ? (
          // Ekran powitalny
          <div className='welcome-screen'>
            <Card className='welcome-card' sx={{ 
              maxWidth: 600, 
              padding: 4,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              border: '2px solid #B22222'
            }}>
              <CardContent>
                <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#B22222', fontWeight: 'bold', textAlign: 'center' }}>
                  <img className='logo-welcome' src="/logo.png" alt="logo" />
                </Typography>

                {/* Info Zasady gry */}
                <Accordion className="custom-accordion">
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon className="expand-icon" />}
                    className="accordion-summary"
                  >
                    <Typography className="accordion-title">Zasady gry</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="accordion-details">
                    <Typography className="accordion-text">
                      Dopasuj kilk symboli tego samego typu w jednym rzucie aby zagrnąć wygraną. Im więcej tych samych symboli wylosujesz tym lepiej, za każdy dodatkowy wylosowany ten sam symbol dostajesz większą nagrodę.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Info Mnożniki */}
                <Accordion className="custom-accordion">
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon className="expand-icon" />}
                    className="accordion-summary"
                  >
                    <Typography className="accordion-title">Mnożniki</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="accordion-details">
                    <ul className="accordion-list">
                      <li>Dublet: 1x wygrywasz ile postawiłeś</li>
                      <li>2x2 (dwie pary): 2x wygrywasz dwa razy tyle ile postawiłeś</li>
                      <li>3 (Bronze): 3x wygrywasz trzy razy tyle ile postawiłeś</li>
                      <li>4 (Silver): 4x wygrywasz cztery razy tyle ile postawiłeś</li>
                      <li>5 (Gold): 5x wygrywasz pięć razy tyle ile postawiłeś</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                {/* Info Combo */}
                <Accordion className="custom-accordion">
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon className="expand-icon" />}
                    className="accordion-summary"
                  >
                    <Typography className="accordion-title">Combo</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="accordion-details">
                    <Typography className="accordion-text" sx={{ marginBottom: 2 }}>
                      W momęcie gdy masz dobrą passę twój mnożnik wzsrasta przez tak zwany stream, 1 wygrana to x1, 2 z rzędu to x2 i tak dalej.
                    </Typography>
                    <Typography className="accordion-text accordion-example">
                      Przykład: Wylosowałeś nagrodę Bronze za zakład 5$, jest to twoja druga wygrana z rzędu więc masz Strike x2, twoja nagroda to 5x3x2=30
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Lista symbole */}
                <Accordion className="custom-accordion">
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon className="expand-icon" />}
                    className="accordion-summary"
                  >
                    <Typography className="accordion-title">Możliwe symbole do wylosowania</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="accordion-details">
                    <ul className="symbols-list">
                      <li className="symbol-item">
                        <img className='image-welcome' src='/img/angry.png' alt='czerwona gwiazda' />
                        <span>czerwona gwiazda</span>
                      </li>
                      <li className="symbol-item">
                        <img className='image-welcome' src='/img/cherries.png' alt='wiśnie' />
                        <span>wiśnie</span>
                      </li>
                      <li className="symbol-item">
                        <img className='image-welcome' src='/img/lemon.png' alt='cytryna' />
                        <span>cytryna</span>
                      </li>
                      <li className="symbol-item">
                        <img className='image-welcome' src='/img/plum.png' alt='cytryna' />
                        <span>śliwka</span>
                      </li>
                      <li className="symbol-item">
                        <img className='image-welcome' src='/img/seven.png' alt='cytryna' />
                        <span>siódemka</span>
                      </li>
                      <li className="symbol-item">
                        <img className='image-welcome' src='/img/star.png' alt='cytryna' />
                        <span>gwiazda</span>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Button 
                  variant="contained" color="primary" size="large" onClick={handleStartGame} className='button-play'>
                    GRAJ
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          // Główna gra
          <>
            <IconButton
              onClick={handleOpenRules}
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                color: 'firebrick',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                '&:hover': {
                  backgroundColor: 'rgba(178, 34, 34, 0.2)',
                },
              }}
            >
              <MenuIcon sx={{ fontSize: 40 }} />
            </IconButton>

            <div className='main-wrapper'>
              <div className='flex-container'>
                <div className='sound-container'>
                  <FxPlayer fxVolume={fxVolume} setFxVolume={setFxVolume} fxSound={fxSound} setSound={setSound}/>
                  <MusicPlayer />
                </div>
                <SlotMachine fxVolume={fxVolume} fxSound={fxSound}/>
              </div>
            </div>
          </>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;