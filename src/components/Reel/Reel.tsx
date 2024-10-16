import React, { FC, useEffect, useRef, useState } from 'react';
import { ReelWrapper } from './Reel.styled';
import { SlotItem } from '../../shared/interfaces';
import { WinColors } from '../../shared/enums';

interface ReelProps {
   symbols: SlotItem[];
   spinning: boolean;
   setScore: (reelId: number, slot: SlotItem) => void;
   id: number;
   color: WinColors;
}

const winningColorMap: { [key in WinColors]: string } = {
   [WinColors.Gold]: "gold-border",
   [WinColors.Silver]: "silver-border",
   [WinColors.Bronze]: "bronze-border",
   [WinColors.Doublet1]: "red-border",
   [WinColors.Doublet2]: "red-border",
   [WinColors.Pair]: "green-border",
   [WinColors.None]: 'base-border',
   [WinColors.Empty]: 'base-border',
};


const winIndex = 2;

const Reel: FC<ReelProps> = ({ symbols, spinning, setScore, id , color }) => {
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
            {displayedSymbols.map((symbol, index) => {
               const borderImage = index === winIndex ? winningColorMap[color] : 'base-border'; 
               return (
                  <div 
                     key={index} 
                     className={`symbol ${spinning ? 'spinning' : ''} ${brakingSpin ? 'end-spin' : ''} ${borderImage}`}
                  >
                     <img src={symbol.src} className='image' alt={symbol.name}></img>
                  </div>
               );
            })}
         </div>
      </ReelWrapper>
   );
}

export default Reel;
