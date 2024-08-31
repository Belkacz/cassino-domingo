import React, { FC, useState, useEffect } from 'react';
import { LeverWrapper } from './Lever.styled';

interface LeverProps {
   onPull: () => void;
   leverStatus: boolean;

}

const Lever: FC<LeverProps> = ({ onPull, leverStatus }) => {

   return (
      <LeverWrapper>
         <div className='lever-socket-container '>
            <div className='lever-socket'></div>
         <div className="lever-container">
            <div onClick={onPull} className={`lever ${leverStatus ? "pulled" : ""}`} >
                  <div className="knob"></div>
            </div>
         </div>
         </div>

      </LeverWrapper>
   );
}

export default Lever;
