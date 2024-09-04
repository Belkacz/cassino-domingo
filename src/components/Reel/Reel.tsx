import React, { FC, useEffect, useRef, useState } from 'react';
import { ReelWrapper } from './Reel.styled';

interface SlotItem {
   id: number;
   name: string;
   src?: string;
}

interface ReelProps {
   symbols: SlotItem[];
   spinning: boolean;
   id?: number;
}

const Reel: FC<ReelProps> = ({ symbols, spinning, id = 0 }) => {
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
      setDisplayedSymbols(symbols);

      if (spinning) {
         brakingSpinSet(false); // Resetujemy stan brakingSpin
         const spin = setInterval(() => {
            setDisplayedSymbols((prevRell) => moveFirstElemToEnd([...prevRell]));
         }, 500);

         return () => clearInterval(spin);
      } else if (loadedApp) {
         brakingSpinSet(true);
      }
      
      loadedAppSet(true)
   }, [symbols, spinning]);

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
