import React, { FC, useState, useEffect, useRef } from 'react';
import { SlotMachineWrapper } from './SlotMachine.styled';
import Lever from './Lever/Lever';

import Reel from '../Reel/Reel';
import { SlotItem, SlotItemScore } from '../../shared/interfaces';
import ScoreDisplay from '../ScoreDisplay/ScoreDisplay';
import { WinColors } from '../../shared/enums';

interface SlotMachineProps { }

const SlotMachine: FC<SlotMachineProps> = () => {

    const [checkWinOnce, setcheckWinOnce] = useState(false);
    const [strike, setStrike] = useState(WinColors.Empty);
    const [score, setNewScore] = useState<SlotItemScore[]>([
        { id: 1, name: 'none', src: '', winStrike: WinColors.Empty},
        { id: 2, name: 'none', src: '', winStrike: WinColors.Empty},
        { id: 3, name: 'none', src: '', winStrike: WinColors.Empty},
        { id: 4, name: 'none', src: '', winStrike: WinColors.Empty},
        { id: 5, name: 'none', src: '', winStrike: WinColors.Empty},
    ]);

    const [leverStatus, setLeverStatus] = useState(false);

    const [rell1Spin, setRell1Spin] = useState(false);
    const [rell2Spin, setRell2Spin] = useState(false);
    const [rell3Spin, setRell3Spin] = useState(false);
    const [rell4Spin, setRell4Spin] = useState(false);
    const [rell5Spin, setRell5Spin] = useState(false);


    const [rell1, setNewRell1] = useState<SlotItem[]>([
        { id: 1, name: 'seven', src: '/img/seven.png' },
        { id: 2, name: 'seven', src: '/img/seven.png' },
        { id: 3, name: 'seven', src: '/img/seven.png' },
        { id: 4, name: 'seven', src: '/img/seven.png' },
        { id: 5, name: 'seven', src: '/img/seven.png' },]);
    const [rell2, setNewRell2] = useState<SlotItem[]>([
        { id: 1, name: 'seven', src: '/img/seven.png' },
        { id: 2, name: 'seven', src: '/img/seven.png' },
        { id: 3, name: 'seven', src: '/img/seven.png' },
        { id: 4, name: 'seven', src: '/img/seven.png' },
        { id: 5, name: 'seven', src: '/img/seven.png' },]);
    const [rell3, setNewRell3] = useState<SlotItem[]>([
        { id: 1, name: 'seven', src: '/img/seven.png' },
        { id: 2, name: 'seven', src: '/img/seven.png' },
        { id: 3, name: 'seven', src: '/img/seven.png' },
        { id: 4, name: 'seven', src: '/img/seven.png' },
        { id: 5, name: 'seven', src: '/img/seven.png' },]);
    const [rell4, setNewRell4] = useState<SlotItem[]>([
        { id: 1, name: 'seven', src: '/img/seven.png' },
        { id: 2, name: 'seven', src: '/img/seven.png' },
        { id: 3, name: 'seven', src: '/img/seven.png' },
        { id: 4, name: 'seven', src: '/img/seven.png' },
        { id: 5, name: 'seven', src: '/img/seven.png' },]);
    const [rell5, setNewRell5] = useState<SlotItem[]>([
        { id: 1, name: 'seven', src: '/img/seven.png' },
        { id: 2, name: 'seven', src: '/img/seven.png' },
        { id: 3, name: 'seven', src: '/img/seven.png' },
        { id: 4, name: 'seven', src: '/img/seven.png' },
        { id: 5, name: 'seven', src: '/img/seven.png' },]);

    const baseList: SlotItem[] = [
        { id: 1, name: 'angry', src: '/img/angry.png' },
        { id: 2, name: 'cherries', src: '/img/cherries.png' },
        { id: 3, name: 'grapes', src: '/img/grapes.png' },
        { id: 4, name: 'lemon', src: '/img/lemon.png' },
        { id: 5, name: 'orange', src: '/img/orange.png' },
        { id: 6, name: 'pulm', src: '/img/plum.png' },
        { id: 7, name: 'seven', src: '/img/seven.png' },
        { id: 8, name: 'star', src: '/img/star.png' },
        { id: 9, name: 'watermelon', src: '/img/watermelon.png' },
    ];


    useEffect(() => {
        if (checkWinOnce && !leverStatus && score.every(slot => slot.name !== "none")) {
            checkWin();
        }
    }, [score]);

    const setScore = (reelId: number, slot: SlotItem) => {

        setNewScore((prev) =>  {
            const updatedScore = [...prev];
            const resultSlot: SlotItemScore = {
                id: slot.id,
                name: slot.name,
                src: slot.src,
                winStrike: WinColors.Empty,
            }

            updatedScore[reelId] = resultSlot;

            return updatedScore;
        })
    }

    const checkWin = () => {
        setcheckWinOnce(false);
        let winningElement: SlotItem;
        let dubler: SlotItem;
        let itsDubler = false;
        let biggestStrike = 0;
        score.forEach((element1) => {
            let actualStrike = 0;
            score.forEach((element2) => {
                if (element1.name === element2.name) {
                    actualStrike++;
                    if (actualStrike > biggestStrike) {
                        biggestStrike = actualStrike;
                        winningElement = element1
                    } else if(actualStrike === 2 && biggestStrike === 2 && winningElement.name !== element1.name) {
                        itsDubler = true;
                        dubler = element1;
                    }
                }
            });
        });

        if (biggestStrike > 1) {
            setNewScore((prevScore) => {
                const updatedStrikes = [...prevScore];
                updatedStrikes.forEach((slot) => {
                    if (winningElement && winningElement.name === slot.name && biggestStrike === 3) {
                        slot.winStrike = WinColors.Bronze;
                        setStrike(WinColors.Bronze);
                    } else if (winningElement && winningElement.name === slot.name && biggestStrike === 4) {
                        slot.winStrike = WinColors.Silver;
                        setStrike(WinColors.Silver);
                    } else if (winningElement && winningElement.name === slot.name && biggestStrike === 5) {
                        slot.winStrike = WinColors.Gold;
                        setStrike(WinColors.Gold);
                    } else if (winningElement && itsDubler && winningElement.name === slot.name && biggestStrike === 2) {
                        slot.winStrike = WinColors.Doublet1;
                        setStrike(WinColors.Doublet1);
                    } else if (itsDubler && dubler && dubler.name === slot.name && biggestStrike === 2) {
                        slot.winStrike = WinColors.Doublet2;
                        setStrike(WinColors.Doublet2);
                    } else if (winningElement && !itsDubler && winningElement.name === slot.name && biggestStrike === 2) {
                        slot.winStrike = WinColors.Pair;
                        setStrike(WinColors.Pair);
                    }
                });
                return updatedStrikes;
            });
        } else {
            setStrike(WinColors.None);
        }
    };

    const resetWins = () => {
        setNewScore((prevScore) =>
            prevScore.map((elem) => ({
                ...elem,
                name: 'none',
                src: '',
                winStrike: WinColors.Empty
            }))
        );
        setStrike(WinColors.Empty);
    }

    const generateRandomReel = (randomList: SlotItem[], multiplicator: number) => {
        const shuffledList = [...randomList].sort(() => Math.random() - 0.5);
        let finalList: SlotItem[] = [];
        for (let i = 0; i < multiplicator; i++) {
            finalList = finalList.concat(shuffledList);
        }
        return finalList;
    }

    const spin = () => {
        resetWins();
        setcheckWinOnce(true);
        let counter = 0;

        setNewRell1(generateRandomReel(baseList, 1));
        setNewRell2(generateRandomReel(baseList, 1));
        setNewRell3(generateRandomReel(baseList, 1));
        setNewRell4(generateRandomReel(baseList, 1));
        setNewRell5(generateRandomReel(baseList, 1));

        const intervalID = setInterval(() => {
            switch (counter) {
                case 1:
                    setRell1Spin(false)
                    break;
                case 2:
                    setRell2Spin(false)
                    break;
                case 3:
                    setRell3Spin(false)
                    break;
                case 4:
                    setRell4Spin(false)
                    break;
                case 5:
                    setRell5Spin(false)
                    clearInterval(intervalID);
                    setLeverStatus(false);
                    break;
                default:
            }
 
            counter++;
        }, 1000);
    }

    const handleLeverPull = () => {
        if(!leverStatus){
            spin();
            setLeverStatus(true);
            setRell1Spin(true);
            setRell2Spin(true);
            setRell3Spin(true);
            setRell4Spin(true);
            setRell5Spin(true);
    
            console.log('Dźwignia pociągnięta');
        } else {
            console.log('Dźwignia zablokowana');
        }

    };

    return (
        <SlotMachineWrapper>
            <div className='mian-slot-container'>
                <div className='main-name-box box-3d'>
                    <div className='name-box plate name-box-top'>
                    </div>
                    <div className='name-box plate name-box-right'>
                    </div>
                    <div className='name-box plate name-box-front'>
                        <h1>Jednoręki Bandyta</h1>
                    </div>
                </div>

                <div className='box-mount box-3d'>
                    {/* <div className='back-box'>
                    </div> */}
                    <div className='plate red-box red-box-sides-plate red-box-right'>
                    </div>
                    <div className='plate red-box red-box-top red-box-main-plate '>
                    </div>
                    <div className='plate red-box red-box-front red-box-main-plate '>
                        <div className='control-panel'>
                            <div className='display'>
                                <div className='rell1'>
                                    <Reel symbols={rell1} spinning={rell1Spin} setScore={setScore} id={0} />
                                </div>
                                <div className='rell2'>
                                    <Reel symbols={rell2} spinning={rell2Spin} setScore={setScore} id={1}/>
                                </div>
                                <div className='rell3'>
                                    <Reel symbols={rell3} spinning={rell3Spin} setScore={setScore} id={2}/>
                                </div>
                                <div className='rell4'>
                                    <Reel symbols={rell4} spinning={rell4Spin} setScore={setScore} id={3}/>
                                </div>
                                <div className='rell5'>
                                    <Reel symbols={rell5} spinning={rell5Spin} setScore={setScore} id={4}/>
                                </div>
                            </div>
                            <div className='display-frame'></div>
                            <div className='score-display-wrapper'>
                        <ScoreDisplay score={score} strike={strike} leverStatus={leverStatus}></ScoreDisplay>
                    </div>

                        </div>

                    </div>
                    
                    <div className='lamp'></div>
                    <div className='lever-wrapper'>
                        <Lever onPull={handleLeverPull} leverStatus={leverStatus}></Lever>
                    </div>


                </div>

            </div>



        </SlotMachineWrapper>
    );
};

export default SlotMachine;
