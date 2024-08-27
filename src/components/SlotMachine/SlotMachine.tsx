import React, { FC, useState, useEffect } from 'react';
import { SlotMachineWrapper } from './SlotMachine.styled';

interface SlotMachineProps {}

interface SlotItem {
   id: number;
   name: string;
   src?: string;
}

const SlotMachine: FC<SlotMachineProps> = () => {
    const [score, setNewScore] = useState<SlotItem[]>([]);
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
        { id: 1, name: 'losowanie' },
        { id: 2, name: 'losowanie' },
        { id: 3, name: 'losowanie' },
        { id: 4, name: 'losowanie' },
        { id: 5, name: 'losowanie' },
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
            const sliceelem = randomlist.slice(0, 1);
            listtocheck.push(sliceelem[0]);
            setNewScore((prev) => [sliceelem[0], ...prev].splice(0, 5));

            counter++;
            if (counter > 4) {
                checkwin(listtocheck);
                clearInterval(intervalID);
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

    return (
        <SlotMachineWrapper>
            <div>
                <p>Wylosowano:</p>
                <br />
                <div>
                    <section>
                        <div>
                            {score.map(({ name, id, src }, index) => (
                                <div key={`${id}-${name}-${index}`}>
                                    <span>{name}</span>
                                    {src && (
                                        <img
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
                <button onClick={roll}>Roll</button>
            </div>
        </SlotMachineWrapper>
    );
};

export default SlotMachine;
