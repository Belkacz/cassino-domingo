import React, { FC, useState, useEffect, useRef } from 'react';
import { SlotMachineWrapper } from './SlotMachine.styled';
import Lever from './Lever/Lever';

import Reel from '../Reel/Reel';

interface SlotMachineProps { }

interface SlotItem {
    id: number;
    name: string;
    src?: string;
}

const SlotMachine: FC<SlotMachineProps> = () => {
    const [score, setNewScore] = useState<SlotItem[]>([
        { id: 1, name: 'seven', src: '/img/seven.png' },
        { id: 2, name: 'seven', src: '/img/seven.png' },
        { id: 3, name: 'seven', src: '/img/seven.png' },
        { id: 4, name: 'seven', src: '/img/seven.png' },
        { id: 5, name: 'seven', src: '/img/seven.png' },]);
    const [originallist, setOriginalList] = useState<SlotItem[]>([]);
    const [showresult, setShowResult] = useState<boolean>(false);

    const [win, setWin] = useState<number>(0);
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

    const rell1SpinRef = useRef(rell1Spin);

    // useEffect(() => {
    //     if(leverStatus ==  true){
    //         console.log('lever stat : '+ leverStatus)
    //         rell1SpinRef.current = rell1Spin;
    //         console.log(rell1SpinRef.current)
    //         // setNewRell1(generateRandomReel(baseList, 1));
    //         // setNewRell2(generateRandomReel(baseList, 1));
    //         // setNewRell3(generateRandomReel(baseList, 1));
    //         // setNewRell4(generateRandomReel(baseList, 1));
    //         // setNewRell5(generateRandomReel(baseList, 1));
    //     }

    // }, [leverStatus]);


    // useEffect(() => {
    //     const getList = async () => {
    //         const resp = await fetch(
    //             'https://my-json-server.typicode.com/Belkacz/cassino-server/roller'
    //         );
    //         const data: SlotItem[] = await resp.json();
    //         setOriginalList(data);
    //     };
    //     getList();
    // }, []);



    const checkwin = (listtocheck: SlotItem[]) => {
        let biggestStrike = 0;

        listtocheck.forEach((element1) => {
            let actualStrike = 0;
            listtocheck.forEach((element2) => {
                if (element1.name === element2.name) {
                    actualStrike++;
                    if (actualStrike > biggestStrike) {
                        biggestStrike = actualStrike;
                    }
                }
            });
        });

        if (biggestStrike === 3) {
            setWin(3);
        } else if (biggestStrike === 4) {
            setWin(4);
        } else if (biggestStrike > 4) {
            setWin(5);
        } else {
            setWin(1);
        }
    };

    const results = (): JSX.Element => {
        let winOrLose: JSX.Element | null = null;

        if (score.length === 5) {
            if (win === 1) {
                winOrLose = <p>Przegrałeś</p>;
            } else if (win === 3 || win === 4 || win === 5) {
                winOrLose = <p>Trafiłeś {win}</p>;
            }
        }

        return <div>{winOrLose}</div>;
    };

    const generateRandomReel = (randomList: SlotItem[], multiplicator: number) => {
        const shuffledList = [...randomList].sort(() => Math.random() - 0.5);
        let finalList: SlotItem[] = [];
        for (let i = 0; i < multiplicator; i++) {
            finalList = finalList.concat(shuffledList);
        }
        return finalList;
    }

    const moveFirstElemToEnd = (list: SlotItem[]) => {
        let firstElem = list.shift();
        if (firstElem !== undefined) {
            list.push(firstElem);
        }
        return list;
    }

    const spin = () => {
        let counter = 0;
        let listtocheck: SlotItem[] = [];
        let spin1Status = true;
        let spin2Status = true;
        let spin3Status = true;
        let spin4Status = true;
        let spin5Status = true;


        setNewRell1(generateRandomReel(baseList, 1));
        setNewRell2(generateRandomReel(baseList, 1));
        setNewRell3(generateRandomReel(baseList, 1));
        setNewRell4(generateRandomReel(baseList, 1));
        setNewRell5(generateRandomReel(baseList, 1));

        const intervalID = setInterval(() => {
            // if (spin1Status) {
            //     setNewRell1((prevRell) => moveFirstElemToEnd([...prevRell]));
            // }
            // if (spin2Status) {
            //     setNewRell2((prevRell) => moveFirstElemToEnd([...prevRell]));
            // }
            // if (spin3Status) {
            //     setNewRell2((prevRell) => moveFirstElemToEnd([...prevRell]));
            // }
            // if (spin4Status) {
            //     setNewRell3((prevRell) => moveFirstElemToEnd([...prevRell]));
            // }
            // if (spin5Status) {
            //     setNewRell5((prevRell) => moveFirstElemToEnd([...prevRell]));
            // }


            switch (counter) {
                case 2:
                    setRell1Spin(false)
                    spin1Status = false;
                    break;
                case 4:
                    setRell2Spin(false)
                    spin2Status = false;
                    break;
                case 6:
                    setRell3Spin(false)
                    spin3Status = false;
                    break;
                case 8:
                    setRell4Spin(false)
                    spin4Status = false;
                    break;
                case 10:
                    setRell5Spin(false)
                    spin5Status = false;
                    checkwin(listtocheck);
                    clearInterval(intervalID);
                    setLeverStatus(false);
                    break;
                default:
                // code block
            }
            if (counter > 10) {
                setRell5Spin(false)
                checkwin(listtocheck);
                clearInterval(intervalID);
                setLeverStatus(false);
            }
            counter++;
        }, 500);
    }

    const handleLeverPull = () => {
        spin();
        setLeverStatus(true);
        setRell1Spin(true);
        setRell2Spin(true);
        setRell3Spin(true);
        setRell4Spin(true);
        setRell5Spin(true);

        console.log('Dźwignia pociągnięta');
    };

    return (
        <SlotMachineWrapper>
            <div>
                <h1>Jednoręki Bandyta</h1>
            </div>
            <div className='display'>
                <div className='rell-cont'>
                    <div className='rell1'>
                        <Reel symbols={rell1} spinning={rell1Spin} />
                    </div>
                    <div className='rell2'>
                        <Reel symbols={rell2} spinning={rell2Spin} />
                    </div>
                    <div className='rell3'>
                        <Reel symbols={rell3} spinning={rell3Spin} />
                    </div>
                    <div className='rell4'>
                        <Reel symbols={rell4} spinning={rell4Spin} />
                    </div>
                    <div className='rell5'>
                        <Reel symbols={rell5} spinning={rell5Spin} />
                    </div>
                </div>
            </div>

            <div>
                <Lever onPull={handleLeverPull} leverStatus={leverStatus}></Lever>
            </div>

        </SlotMachineWrapper>
    );
};

export default SlotMachine;
