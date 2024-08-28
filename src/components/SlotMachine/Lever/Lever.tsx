import React, { FC, useState, useEffect } from 'react';
import { LeverWrapper } from './Lever.styled';

interface LeverProps {
   onPull: () => void;
   leverStatus: boolean;

 }

const Lever: FC<LeverProps> = ({ onPull, leverStatus}) => {


   useEffect(() => {
      console.log('lever statu = '+ leverStatus)
   }, [leverStatus])

   return (
      <LeverWrapper>
         <div>
            <div onClick={onPull} className={`lever ${leverStatus ? "pull" : ""}`} ></div> 
         </div>
      </LeverWrapper>
   );
}

export default Lever;
