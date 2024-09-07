import React, { FC, useEffect, useMemo, useState } from 'react';
import { ScoreDisplayWrapper } from './ScoreDisplay.styled';
import { SlotItemScore } from '../../shared/interfaces';
import { WinColors } from '../../shared/enums';

interface ScoreDisplayProps {
   score: SlotItemScore[]
   strike: WinColors;
}

const strikeMessages: { [key in WinColors]: string } = {
   [WinColors.Gold]: "x5 !!!",
   [WinColors.Silver]: "x4 !!",
   [WinColors.Bronze]: "x3 !",
   [WinColors.Doublet1]: "x2x2",
   [WinColors.Doublet2]: "x2x2",
   [WinColors.Pair]: "x2",
   [WinColors.None]: "No strike!",
};


const ScoreDisplay: FC<ScoreDisplayProps> = ({ score, strike }) => {
   const [strikeMsg, setStrikeMsg] = useState("No Strike");
   const [combo, setCombo] = useState(0);


   useEffect(() => {
      setCombo(calculateCombo(strike));
      setStrikeMsg(changeStrikeMsg(strike));
   }, [strike]);

   const calculateCombo = (strike: WinColors) => {
      let newCombo = combo
      if (strike === WinColors.None) {
         newCombo = 0;
      } else {
         newCombo++;
      }
      return newCombo;
   };

   const changeStrikeMsg = (strike: WinColors) => {
      console.log('strike')
      let strikes: string = "";
      for (let key in strikeMessages) {
         if (key === strike) {
            strikes = (strikeMessages[key as WinColors]);
         }
      }
      return strikes;
   };

   return (
      <ScoreDisplayWrapper>
         <div className='score-display-containier'>
            <div className='display-main'>
               <div className='strike-display'>
                  <div className='strike'>
                     <p className='strike-title'>Strike: </p>
                     <p> {strikeMsg}</p>
                  </div>
                  <div className='strike'>
                     <p className='strike-title'>Combo: x </p>
                     <p> {combo}</p>
                  </div>
               </div>
            </div>
         </div>
      </ScoreDisplayWrapper>
   );
};

export default ScoreDisplay;
