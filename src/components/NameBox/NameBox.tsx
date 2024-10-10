import React, { FC, useState } from 'react';
import { NameBoxWrapper } from './NameBox.styled';

interface NameBoxProps { }

const NameBox: FC<NameBoxProps> = () => {
   const [backlight, setBacklight] = useState(true)

   const toggleBackLight = () => {
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
               <h1>Jednoręki Bandyta</h1>
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
