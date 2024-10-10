import React, { FC, useEffect, useRef, useState } from 'react';
import { MusicPlayerWrapper } from './MusicPlayer.styled';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

interface MusicPlayerProps { }

const MusicPlayer: FC<MusicPlayerProps> = () => {
   const [musicStatus, setMusicStatus] = useState(false);
   const [musicVolume, setMusicVolume] = useState(0.2);
   const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
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

   return (
      <MusicPlayerWrapper>

         <div className='music-box'>
            <div className='music-button-wrapper'>
               <label className='title'>MUSIC</label>
               <button className='music-button' onClick={() => setMusicStatus((prev) => !prev)}>
                  {musicStatus ? <VolumeOffIcon></VolumeOffIcon> : <VolumeUpIcon></VolumeUpIcon>}
               </button>

            </div>
         </div>

      </MusicPlayerWrapper>
   )
}

export default MusicPlayer;
