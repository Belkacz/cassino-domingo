import React, { FC, useEffect, useMemo, useState } from 'react';
import { ScoreDisplayWrapper } from './ScoreDisplay.styled';
import { SlotItemScore } from '../../shared/interfaces';
import { WinColors } from '../../shared/enums';

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
   [WinColors.Pair]: " PARA ",
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
      console.log(strike)
      if (leverStatus) {
         // setStrikeMsg("Losowanie ...")
         // setMoney((prev) => prev + win);
         // setWin(0)
      } else {
         setStrikeMsg(changeStrikeMsg(strike));
         if (strike !== WinColors.Empty) {
            setCombo(calculateCombo(strike));
            setWin(calcualteWin(strike));
            setMoney((prev) => prev + win);
            setBet(0);
         }
      }
      console.log("WIN : ", win)
   }, [strike]);

   useEffect(() => {
      if(leverStatus) {
         setStrikeMsg("Losowanie ...")
         setMoney((prev) => prev + win);
         setWin(0);
      } else {
         setStrikeMsg(" None ")
      }
   }, [leverStatus]);

   const calculateCombo = (strike: WinColors) => {
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

   const calcualteWin = (strike: WinColors) => {
      let result = 0;
      let multi = 0;
      if(strike !== WinColors.Empty && strike !== WinColors.None) {
         for (let key in strikeMultiplicator) {
            if (key === strike) {
               multi = (strikeMultiplicator[key as WinColors]);
            }
         }
         result = bet * multi * combo;
      }
      console.log("bet : ", bet);
      console.log("multi : ",multi)
      console.log("combo : ",combo)
      console.log("result : ",result)

      setBet(0);
      return result;
   }

   return (
      <ScoreDisplayWrapper>
         <div className='score-display-containier'>
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
                  <p className='title'>Bet: </p>

                  <div className='bet-button-wrapper'><button className='bet-button' onClick={() => changeBet(-5)}> -5 </button>
                  </div>
                  <div className='bet-button-wrapper'> <button className='bet-button' onClick={() => changeBet(-1)}> -1 </button>
                  </div> <p> {bet}</p> <p> $</p>
                  <div className='bet-button-wrapper'><button className='bet-button' onClick={() => changeBet(1)}> +1 </button></div>
                  <div className='bet-button-wrapper'><button className='bet-button' onClick={() => changeBet(5)}> +5 </button></div>
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
