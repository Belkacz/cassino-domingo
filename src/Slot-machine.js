import React, { useState, useEffect } from "react";
import './Slot-machine.css'
 
export default function SlotMachine() {
  const [score, setNewScore] = useState([]);
  const [originallist, setOriginalList] = useState([]);
  const [list, setList] = useState([]);
  const [showresult, setShowResult] = useState(false);
 
 
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
 
  // useEffect(() => {
  //   fetch("https://my-json-server.typicode.com/Belkacz/cassino-server/roller")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
 
  let counter = 0
 
  function roll(counter) {
    console.log(counter)
    var intervalID = setInterval(function() {
      let randomlist = originallist;
      randomlist.sort(() => Math.random() - Math.random());
      let sliceelem = randomlist.slice(0, 1);
      console.log(sliceelem)
        setNewScore(prev => [...prev, sliceelem])
      counter ++
      if (counter > 4) {
        clearInterval(intervalID);
      }
    }, 1000);
 
 
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
 
  }
 
  const Results = () => (
    <div id="results">
      <p >Wylosowano </p>
      <br></br>
      <div className="slot">
      <section>
      <div className="container">
      {list.map(({ name, id }) => {
        return (
          <div key={id }>
          <span>{name}</span>
          </div>
        );
      })}
      </div>
      </section>
      </div>
    </div>
  );
 
  function test(e) {
    console.log(e)
    console.log("start")
 
  }
 
 
  return (
    <div>
      {showresult ? <Results /> : null}
      <button
        onClick={roll}
      >
        losuj
      </button>
      <br></br>
    </div>
  );
}