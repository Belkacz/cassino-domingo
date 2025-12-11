import React, { FC, useEffect, useRef, useState } from 'react';
import { NameBoxWrapper } from './NameBox.styled';

interface NameBoxProps {
   fxVolume: number;
   fxSound: boolean;
}

const NameBox: FC<NameBoxProps> = ({fxVolume, fxSound}) => {
   const [backlight, setBacklight] = useState(true)
   const clickSound = useRef(new Audio(require('../../assets/sounds/click.mp3')));
   clickSound.current.volume = fxVolume;

   const toggleBackLight = () => {
      clickSound.current.volume = fxVolume;
      if(fxSound){
         clickSound.current.play();
      }
      setBacklight(!backlight);
   }

   return (
      <NameBoxWrapper>
         <div className='main-name-box box-3d'>
            <div className={`name-box plate name-box-top ${backlight ? 'back-light' : 'no-light'}`}>
            </div>
            <div className={`name-box plate name-box-right ${backlight ? 'back-light' : 'no-light'}`}>
            </div>
            <div className={`name-box plate name-box-front ${backlight ? 'back-light' : 'no-light'}`}>
               <img className='logo' src="/logo.png" alt="logo" />
            </div>
            <div className='chink'>
            </div>
            <div className={`light-switch ${backlight ? '' : 'switch-off'}`} onClick={toggleBackLight}>
            </div>

         </div>
      </NameBoxWrapper>
   );
}


export default NameBox;
