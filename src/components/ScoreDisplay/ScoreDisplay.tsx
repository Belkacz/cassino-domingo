import React, { FC, useEffect, useMemo, useState } from 'react';
import { ScoreDisplayWrapper } from './ScoreDisplay.styled';
import { SlotItemScore } from '../../shared/interfaces';
import { WinColors } from '../../shared/enums';
import Button from '@mui/material/Button';

interface ScoreDisplayProps {
   score: SlotItemScore[]
   strike: WinColors;
   leverStatus: boolean;
}

const strikeMessages: { [key in WinColors]: string } = {
   [WinColors.Gold]: "x5 !!!",
   [WinColors.Silver]: "x4 !!",
   [WinColors.Bronze]: "x3 !",
   [WinColors.Doublet1]: "x2x2",
   [WinColors.Doublet2]: "x2x2",
   [WinColors.Pair]: " PAIR ",
   [WinColors.None]: "No strike!",
   [WinColors.Empty]: " ... ",
};

const strikeMultiplicator: { [key in WinColors]: number } = {
   [WinColors.Gold]: 5,
   [WinColors.Silver]: 4,
   [WinColors.Bronze]: 3,
   [WinColors.Doublet1]: 2,
   [WinColors.Doublet2]: 2,
   [WinColors.Pair]: 1,
   [WinColors.None]: 0,
   [WinColors.Empty]: 0,
};


const ScoreDisplay: FC<ScoreDisplayProps> = ({ score, strike, leverStatus }) => {
   const [strikeMsg, setStrikeMsg] = useState("No Strike");
   const [combo, setCombo] = useState(1);
   const [money, setMoney] = useState(1000);
   const [bet, setBet] = useState(0);
   const [win, setWin] = useState(0);

   useEffect(() => {
      console.log("useeddect stike =  ", strike)
      if (leverStatus) {
         setMoney((prev) => prev + win);
      } else {
         setStrikeMsg(changeStrikeMsg(strike));
      }
      if (strike !== WinColors.Empty) {
         const win = calcualteResult(strike);
         setWin(win);
         setMoney((prev) => prev + calcualteResult(strike));
         setTimeout(() => {
            setBet(0);
         }, 2000);
      }
   }, [strike]);

   useEffect(() => {
      if (leverStatus) {
         setStrikeMsg("Losowanie ...")
         setWin(0);
      } else {
         setStrikeMsg(" None ")
      }
   }, [leverStatus]);

   const calcualteResult = (strike: WinColors): number => {
      const comboResult = calculateCombo(strike);
      setCombo(comboResult);
      const winned = calcualteWin(strike, comboResult)
      return winned;
   }

   const calculateCombo = (strike: WinColors) => {
      console.log("STRIKE = ", strike)
      let newCombo = combo
      if (strike === WinColors.None) {
         newCombo = 1;
      } else {
         newCombo++;
      }
      return newCombo;
   };

   const changeStrikeMsg = (strike: WinColors) => {
      let strikes: string = "";
      for (let key in strikeMessages) {
         if (key === strike) {
            strikes = (strikeMessages[key as WinColors]);
         }
      }
      return strikes;
   };

   const changeBet = (payload: number) => {
      if (bet + payload >= 0 && money - payload >= 0) {
         setBet(bet + payload);
         setMoney(money - payload);
      }
   }

   const calcualteWin = (strike: WinColors, combo: number) => {
      let result = 0;
      let multi = 0;
      if (strike !== WinColors.Empty && strike !== WinColors.None) {
         for (let key in strikeMultiplicator) {
            if (key === strike) {
               multi = (strikeMultiplicator[key as WinColors]);
            }
         }
         result = bet * multi * combo;
      }
      return result;
   }

   return (
      <ScoreDisplayWrapper>
         <div className='score-display-container'>
            <div className='display-main'>
               <div className='separated-window'>
                  <div className='strike-display border-right-boy'>
                     <div className='text-wrapper'>
                        <p className='title'>Strike: </p>
                        <p> {strikeMsg}</p>
                     </div>
                     <div className='text-wrapper'>
                        <p className='title'>Combo: x </p>
                        <p> {combo}</p>
                     </div>
                  </div>
                  <div className='win-wrapper set-center'>
                     <p className='title'> Win:</p>
                     <p className='title'> {win} </p>
                  </div>
               </div>

               <div className='text-wrapper set-center border-top-boy padding-sides '>
                  <p className='title bet-value '>Bet: </p>

                  <div className='bet-button-wrapper'><Button className='bet-button' onClick={() => changeBet(-5)} disabled={leverStatus}> -5 </Button>
                  </div>
                  <div className='bet-button-wrapper'> <Button className='bet-button' onClick={() => changeBet(-1)} disabled={leverStatus}> -1 </Button>
                  </div> <p> {bet}</p> <p> $</p>
                  <div className='bet-button-wrapper'><Button className='bet-button' onClick={() => changeBet(1)} disabled={leverStatus}> +1 </Button></div>
                  <div className='bet-button-wrapper'><Button className='bet-button' onClick={() => changeBet(5)} disabled={leverStatus}> +5 </Button></div>
               </div>
               <div className='text-wrapper set-center border-top-boy '>
                  <p className='title'>Money: </p>
                  <p> {money}</p> <p> $</p>
               </div>
            </div>
         </div>
      </ScoreDisplayWrapper>
   );
};

export default ScoreDisplay;
