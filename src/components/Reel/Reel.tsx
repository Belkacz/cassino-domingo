import React, { FC, useEffect, useRef } from 'react';
import { ReelWrapper } from './Reel.styled';
interface SlotItem {
   id: number;
   name: string;
   src?: string;
}
interface ReelProps {
   symbols: SlotItem[];
   spinning: boolean;
}

const Reel: FC<ReelProps> = ({ symbols, spinning }) => {
   const reelRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
      const reelElement = document.querySelector('.reel');
      if (reelRef.current) {
         console.log('Reel element height:', reelRef.current.clientHeight);
         // Możesz tutaj dodać inne manipulacje DOM, np. obliczenia, animacje itp.
      }
   }, [spinning]); // Zależności tablicy - efekt uruchomi się po zmianie `spinning`

   return (<ReelWrapper>
      
      <div className={`reel ${spinning ? 'spinning' : ''}`}>
         {symbols.map((symbol, index) => (
            <div key={index} className="symbol">
               <img src={symbol.src} className='image'></img>
            </div>
         ))}
      </div>



   </ReelWrapper>
   );
}



export default Reel;
