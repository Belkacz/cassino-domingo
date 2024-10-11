import React, { FC, useEffect, useRef, useState } from 'react';
import { MusicPlayerWrapper } from './MusicPlayer.styled';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Stack from '@mui/material/Stack';
import { VolumeDown } from '@mui/icons-material';
import Slider from '@mui/material/Slider';
import VolumeUp from '@mui/icons-material/VolumeUp';

interface MusicPlayerProps { }

const MusicPlayer: FC<MusicPlayerProps> = () => {
   const [musicStatus, setMusicStatus] = useState(false);
   const [musicVolume, setMusicVolume] = useState(1);
   const [currentTrackIdx, setCurrentTrackIdx] = useState(1);
   const musicRef = useRef(new Audio(require('../../assets/music/music-long.mp3')));

   const tracks = [
      require('../../assets/music/music-long.mp3'),
      require('../../assets/music/music-long2.mp3'),
   ];

   const setNextTrack = () => {
      if (currentTrackIdx < tracks.length - 1) {
         setCurrentTrackIdx(currentTrackIdx + 1);
      } else {
         setCurrentTrackIdx(0);
      }
   };

   useEffect(() => {
      if (musicStatus) {
         musicRef.current.src = tracks[currentTrackIdx];
         musicRef.current.volume = musicVolume;
         musicRef.current.play();
      } else {
         musicRef.current.pause();
      }

      musicRef.current.addEventListener('ended', setNextTrack);

      return () => {
         musicRef.current.pause();
         musicRef.current.currentTime = 0;
      };
   }, [currentTrackIdx, musicStatus]);

      const handleMusicVolume = (event: Event, newValue: number | number[]) => {

      let floatValue = 0;
      if (typeof newValue === "number") {
         floatValue = newValue / 100;
      } else if (Array.isArray(newValue)) {
         floatValue = newValue[0] / 100;
      }


      setMusicVolume(floatValue);
      musicRef.current.volume = floatValue;
    };


   return (
      <MusicPlayerWrapper>
         <div className='music-box'>
            <div className='padding-wrapper'>
               <div className='music-button-wrapper padding-box'>
                  <label className='title'>MUSIC</label>
                  <button className='music-button' onClick={() => setMusicStatus((prev) => !prev)}>
                     {musicStatus ? <VolumeOffIcon></VolumeOffIcon> : <VolumeUpIcon></VolumeUpIcon>}
                  </button>
               </div>
            </div>
            <div className='padding-wrapper'>
               <div className='music-button-wrapper padding-slider'>
                  <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
                     <VolumeDown />
                     <Slider color="primary" aria-label="Volume" value={musicVolume * 100} onChange={handleMusicVolume} />
                     <VolumeUp />
                  </Stack>
               </div>
            </div>
         </div>

      </MusicPlayerWrapper>
   )
}

export default MusicPlayer;
