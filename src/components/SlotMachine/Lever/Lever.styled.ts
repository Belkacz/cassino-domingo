import styled from 'styled-components';

export const LeverWrapper = styled.div`

.slot-machine {
  position: relative;
  width: 300px;
  height: 400px;
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
}

.lever {

  background-color: #666;
  width: 20px;
  height: 100px;
  /* border-radius: 10px; */
  cursor: pointer;
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
  transform: rotate(10deg);
  box-shadow: inset 1px 5px 5px 5px gray;
  border-radius: 10px;
}

/* .lever-shadow{
  height: 100%;
  width: 40%;
  padding: 2px 0px 0px 2px;
  background-color: gainsboro;
} */

.lever-container{
  position: absolute;
  /* top: 50vh;
  right: 25vw; */
  top:-120px;
  left: 60px;
  transform-style: preserve-3d;
  perspective: 800px;
}


.lever.pulled {
  transition-delay: 0.2s;
  /* transform: rotate(-140deg); */
  /* transition: transform 0.5s ease; */
  animation: pullLever 2s ease;
}


@keyframes pullLever {
0% {
      transform: perspective(none) translate3d(0px, 0px, 0px) rotate3d(0, 0, 0, 0deg) rotate3d(0, 0, 0, 0deg) rotate(10deg); 
      /* transform: rotate(-10deg); */
    }
    25% {
      transform: perspective(800px) translate3d(55px, 70px, -10px) rotate3d(0, 0, 0, -80deg) rotate3d(0, 1, 0, -20deg) rotate(80deg); 
    }
    50% {
      transform: perspective(none) translate3d(30px, 129px, -10px) rotate3d(0, 0, 0, -80deg) rotate3d(0, 1, 0, -20deg) rotate(120deg); 
    }
    75% {
      transform: perspective(800px) translate3d(50px, 70px, -10px) rotate3d(0, 0, 0, -80deg) rotate3d(0, 1, 0, -20deg) rotate(80deg); 
    }
    100% {
      transform: perspective(none) translate3d(0px, 0px, 0px) rotate3d(0, 0, 0, 0deg) rotate3d(0, 0, 0, 0deg) rotate(10deg); 
      /* transform: rotate(-10deg); */
    }
}


.lever-socket-container {
  position: absolute;
  /* top: 60vh;
  right: 20vw; */

    width: 200px;
    height: 100px;
    margin: 20px;
    
  }

  .lever-socket {
    rotate: 90deg;
    width: 200px;
    height: 100px;
    
    background-color: red;
    position: relative;
    border-radius: 100px 100px 0 0;
    overflow: hidden;
    transform: perspective(800px) rotateX(-30deg) rotateY(20deg);
  }


  .lever-socket::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    width: 80%;
    height: 80%;
    background: gray; 
    border-radius: 100px 100px 0 0;
    /* transform: perspective(px) rotateX(-20deg) rotateY(-0deg); */
    border-style: solid;
  }

  .lever-socket::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 20px;
    width: 75%;
    height: 75%;
    background: red; 
    border-radius: 100px 100px 0 0;
    /* transform: perspective(800px) rotateX(-20deg) rotateY(-10deg); */
    border-style: solid;
  }


.handle {
  width: 10px;
  height: 100%;
  background-color: #555;
  position: relative;
}

.knob {
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  box-shadow: inset 2px 1px 3px black; */
  box-shadow: inset 3px -3px 10px 10px gray;
}

@media (max-width: 600px) {
    .flex-container {
      flex-direction: column-reverse;
      align-items: center;
    }
  .lever-socket-container {
    display: none;
  }
  .lever-socket {
    display: none;
  }
  .lever-container {
    display: none;
  }
  }


`;
