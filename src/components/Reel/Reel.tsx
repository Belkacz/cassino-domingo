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

         return () => clearInterval(spin);
      } else if (loadedApp) {
         setScore(id, displayedSymbols[winIndex]);
         brakingSpinSet(true);
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
