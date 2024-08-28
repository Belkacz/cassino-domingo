import React, { FC, useState, useEffect } from 'react';
import { SlotMachineWrapper } from './SlotMachine.styled';
import Lever from './Lever/Lever';

import sevenImg from '../../assets/img/seven.png';

interface SlotMachineProps {}

interface SlotItem {
   id: number;
   name: string;
   src?: string;
}

const SlotMachine: FC<SlotMachineProps> = () => {
    const [score, setNewScore] = useState<SlotItem[]>([
        { id: 1, name: 'seven', src:'/img/seven.png' },
        { id: 2, name: 'seven', src:'/img/seven.png' },
        { id: 3, name: 'seven', src:'/img/seven.png' },
        { id: 4, name: 'seven', src:'/img/seven.png' },
        { id: 5, name: 'seven', src:'/img/seven.png' },]);
    const [originallist, setOriginalList] = useState<SlotItem[]>([]);
    const [showresult, setShowResult] = useState<boolean>(false);
    const [win, setWin] = useState<number>(0);

    useEffect(() => {
        const getList = async () => {
            const resp = await fetch(
                'https://my-json-server.typicode.com/Belkacz/cassino-server/roller'
            );
            const data: SlotItem[] = await resp.json();
            setOriginalList(data);
        };
        getList();
    }, []);

    const placeholder: SlotItem[] = [
        { id: 1, name: 'losowanie', src:'/loading.png' },
        { id: 2, name: 'losowanie', src:'/loading.png' },
        { id: 3, name: 'losowanie', src:'/loading.png' },
        { id: 4, name: 'losowanie', src:'/loading.png' },
        { id: 5, name: 'losowanie', src:'/loading.png' },
    ];

    const roll = () => {
        let counter = 0;
        let listtocheck: SlotItem[] = [];

        if (score.length > 4) {
            setNewScore([...placeholder]);
        }

        const intervalID = setInterval(() => {
            setShowResult(true);
            let randomlist = [...originallist];
            randomlist.sort(() => Math.random() - Math.random());
            const sliceElem = randomlist.slice(0, 1);
            listtocheck.push(sliceElem[0]);

            setNewScore((prev) => {
                const newScore = [...prev];
                console.log(prev)
                newScore[counter-1] = sliceElem[0];
                return newScore;
            });

            counter++;
            if (counter > 4) {
                checkwin(listtocheck);
                clearInterval(intervalID);
                setLeverStatus(false);
            }
        }, 1000);
    };

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

    const [leverStatus, setLeverStatus] = useState(false);

    const handleLeverPull = () => {
        setLeverStatus(true);
        roll();
        console.log('Dźwignia pociągnięta');
      };

    return (
        <SlotMachineWrapper>
            <div>
            <h1>Jednoręki Bandyta</h1>
            </div>
            <div>
                <p>Wylosowano:</p>
                <br />
                <div>
                    <section>
                        <div className='rollResult'>
                            {score.map(({ name, id, src }, index) => (
                                <div className='singleSlot' key={`${id}-${name}-${index}`}>
                                    {src && (
                                        <img className={`slotImg ${name === 'losowanie' ? 'loadingImg' : ''}`}
                                            src={src}
                                            style={{ display: 'inline' }}
                                            alt={name}
                                            width="50px"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                {results()}
            </div>
            <div>
                <Lever onPull={handleLeverPull} leverStatus={leverStatus}></Lever>
            </div>
        </SlotMachineWrapper>
    );
};

export default SlotMachine;
