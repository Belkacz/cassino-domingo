import React, { FC, useEffect, useRef, useState } from 'react';
import { ReelWrapper } from './Reel.styled';
import { SlotItem } from '../../shared/interfaces';

interface ReelProps {
   symbols: SlotItem[];
   spinning: boolean;
   setScore: (reelId: number, slot: SlotItem) => void;
   id: number;
}

const winIndex = 2;

const Reel: FC<ReelProps> = ({ symbols, spinning, setScore, id }) => {
   const [displayedSymbols, setDisplayedSymbols] = useState(symbols);
   const [brakingSpin, brakingSpinSet] = useState(false);
   const [loadedApp, loadedAppSet] = useState(false);

   const [endSpinFxVolume, setEndSpinFxVolume] = useState(0.5);
   const endSpinFxSound = useRef(new Audio(require('../../assets/sounds/end-spin.mp3')));

   const moveFirstElemToEnd = (list: SlotItem[]) => {
      let firstElem = list.shift();
      if (firstElem !== undefined) {
         list.push(firstElem);
      }
      return list;
   }

   useEffect(() => {
      loadedAppSet(true);
   }, []);

   useEffect(() => {
      setDisplayedSymbols(symbols);
   }, [symbols]);

   useEffect(() => {
      if (spinning) {
         brakingSpinSet(false);
         const spin = setInterval(() => {
            setDisplayedSymbols((prevRell) => moveFirstElemToEnd([...prevRell]));
         }, 500);
         endSpinFxSound.current.pause();
         endSpinFxSound.current.currentTime = 0;
         return () => clearInterval(spin);
      } else if (loadedApp) {
         setScore(id, displayedSymbols[winIndex]);
         console.log("reel #", id, "dispalyed: ", displayedSymbols[winIndex] )
         brakingSpinSet(true);
         endSpinFxSound.current.volume = endSpinFxVolume;
         endSpinFxSound.current.play();
      }
   }, [spinning]);


   return (
      <ReelWrapper>
         <div className={`reel`}>
            {displayedSymbols.map((symbol, index) => (
               <div key={index} className={`symbol ${spinning ? 'spinning' : ''} ${brakingSpin ? 'end-spin' : ''}`}>
                  <img src={symbol.src} className='image' alt={symbol.name}></img>
               </div>
            ))}
         </div>
      </ReelWrapper>
   );
}

export default Reel;
