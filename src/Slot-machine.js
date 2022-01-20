import React, { useState, useEffect } from "react";
import "./Slot-machine.css";

export default function SlotMachine() {
  const [score, setNewScore] = useState([]);
  const [originallist, setOriginalList] = useState([]);
  const [showresult, setShowResult] = useState(false);
  const [win, setWin] = useState(0);

  useEffect(() => {
    const getList = async () => {
      const resp = await fetch(
        "https://my-json-server.typicode.com/Belkacz/cassino-server/roller"
      );
      const data = await resp.json();
      setOriginalList(data);
    };
    getList();
  }, []);

  let placeholder = [
    { "id": 1, "name": "losowanie" },
    { "id": 2, "name": "losowanie" },
    { "id": 3, "name": "losowanie" },
    { "id": 4, "name": "losowanie" },
    { "id": 5, "name": "losowanie" },
  ]

  function roll() {
    let counter = 0;
    let listtocheck = [];
    if (score.length > 4) {
      setNewScore((prev)=>[...placeholder]);
    }
    let intervalID = setInterval(function () {
      setShowResult(true);
      let randomlist = originallist;
      randomlist.sort(() => Math.random() - Math.random());
      let sliceelem = randomlist.slice(0, 1);
      listtocheck.push(sliceelem[0]);
      setNewScore((prev) => [sliceelem[0], ...prev].splice(0,5));

      counter++;
      // checkwin(listtocheck);
      if (counter > 4) {
        checkwin(listtocheck);
        clearInterval(intervalID);
      }
    }, 1000);
  }

  function checkwin(listtocheck) {
    let bigeststrike = 0;
    console.log(score)

    listtocheck.forEach((element1) => {
      let actualstrike = 0;
      listtocheck.forEach((element2) => {
        if (element1 === element2) {
          actualstrike++;
          if (actualstrike > bigeststrike) {
            bigeststrike = actualstrike;
          }
        }
      });
    });
    if (bigeststrike === 3) {
      setWin(3);
    } else if (bigeststrike === 4) {
      setWin(4);
    } else if (bigeststrike > 4) {
      setWin(5);
    } else {
      setWin(1);
    }

    // function compareFrequency(a, b) {
    //   return frequency[b] - frequency[a];
    // }

    // const occurrencesOf = (number, numbers) =>
    //   numbers.reduce(

    //     (counter, currentNumber) =>
    //       number === currentNumber ? counter + 1 : counter,
    //     0
    //   );

    //   let sortscore = listtocheck.sort(function(a, b) {
    //     if (a.id === b.id) {
    //         if(a.order > b.order) return -1; else return 1;
    //     }
    // });
    // console.log(sortscore)
    // sortscore.forEach((element) => {
    //   console.log(occurrencesOf(element, sortscore))
    //   console.log(occurrencesOf(element, sortscore)>2)
    //   if (occurrencesOf(element, sortscore) > 2) {
    //     setWin(3);
    //   } else if (occurrencesOf(element, sortscore) > 3) {
    //     setWin(3);
    //   } else if (occurrencesOf(element, sortscore) > 4) {
    //     setWin(4);
    //   } else {
    //     setWin(1);
    //   }
    // });
  }

  // setShowResult(false)
  // let randomlist = originallist;
  // randomlist.sort(() => Math.random() - Math.random());
  // let slicelist = randomlist.slice(0, 5);
  // for (let i= 0; i <4; i++){
  //   console.log(slicelist)
  // }
  // setList(slicelist)
  // setTimeout(() => {
  //   setShowResult(true);
  // }, 2137);
  // let randomElement = list[Math.floor(Math.random()*list.length)]

  const Results = () => {
    let winorlose = <div></div>;
    if (score.length === 5) {
      if (win === 1) {
        winorlose = <p>przegrałes</p>;
      } else if (win === 0) {
        winorlose = null;
      } else if (win === 3) {
        winorlose = <p>trafiłeś {win}</p>;
      } else if (win === 4) {
        winorlose = <p>trafiłeś {win}</p>;
      } else if (win === 5) {
        winorlose = <p>trafiłeś {win}</p>;
      }
    }
    // switch (win) {
    //   case 1:
    //     winorlose = <p>przegrałeś</p>;
    //     break;
    //   case 3:
    //     winorlose = <p>trafiłeś 3</p>;
    //     break;
    //   case 4:
    //     winorlose = <p>trafiłeś 4</p>;
    //     break;
    //   case 5:
    //     winorlose = <p>trafiłeś 5</p>;
    //     break;
    // }
    return (
      <div id="">
        <p>Wylosowano </p>
        <br></br>
        <div className="">
          <section>
            <div className="">
              {score.map(({ name, id, src }, index) => {
                return (
                  <div key={id + name + index}>
                    <span>{name}</span>
                    <img src={src} display={"inline"}  alt={name} width={"50px"}></img>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div>{winorlose}</div>
      </div>
      
    );
  };

  return (
    <div>
      <button onClick={roll}>losuj</button>
      <br></br>
      {showresult ? <Results /> : null}
      <br></br>
    </div>
  );
}
