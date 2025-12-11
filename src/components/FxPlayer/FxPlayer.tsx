import React, { FC, useState } from 'react';
import { FxPlayerWrapper } from './FxPlayer.styled';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export interface FxPlayerProps {
  fxVolume: number;
  setFxVolume: React.Dispatch<React.SetStateAction<number>>;
  setSound: React.Dispatch<React.SetStateAction<boolean>>;
}

const FxPlayer: FC<FxPlayerProps> = ({ fxVolume, setFxVolume, setSound }) => {
   const [fxStatus, setFxStatus] = useState(false);
  
  const handleFxVolume = (event: Event, newValue: number | number[]) => {
    const floatValue =
      typeof newValue === 'number'
        ? newValue / 100
        : newValue[0] / 100;

    setFxVolume(floatValue);
  };

  return (
    <FxPlayerWrapper>
      <div className='music-box'>
         <div className='padding-wrapper'>
            <div className='music-button-wrapper padding-box'>
               <label className='title'>FX</label>
               <button className='music-button' onClick={() => setSound((prev) => !prev)}>
                  {fxStatus ? <VolumeOffIcon></VolumeOffIcon> : <VolumeUpIcon></VolumeUpIcon>}
               </button>
            </div>
         </div>
        <div className='padding-wrapper'>
          <div className='music-button-wrapper padding-slider'>
            <Stack spacing={2} direction='row' sx={{ alignItems: 'center', mb: 1 }}>
              <VolumeDown />
              <Slider
                color='primary'
                aria-label='Volume'
                value={fxVolume * 100}
                onChange={handleFxVolume}
              />
              <VolumeUp />
            </Stack>
          </div>
        </div>
      </div>
    </FxPlayerWrapper>
  );
};

export default FxPlayer;
