import styled from 'styled-components';

export const SlotMachineWrapper = styled.div`

.score-display-wrapper{
 z-index: 101;
 width: 100%;
 height: auto;
}

.lamp {
  height:10px;
  width: 10px;
  background: radial-gradient(circle, rgba(231,255,46,1) 0%, rgba(239,255,0,0) 100%);
}

.red-box-main-plate {
  width:400px;
  height: 660px;
}

.red-box-sides-plate {
  height: 660px;
  width: 600px;
  z-index: 100;
}

.red-box-front  { transform: translateZ(320px); }
.red-box-right  { transform: rotateY(90deg) translateZ(200px);  }
.red-box-top    { transform: rotateX(90deg) translateZ(330px); }

.main-slot-container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  /* width: 800px;
  height: 800px; */
  /* padding: 0 0 0 25vw; */
  justify-items: center;
  display: grid;
  padding: 50px;
}

.lever-wrapper {
  z-index: 1;
  position: absolute;
  height: 200px;
  width: 200px;
  top: 340px;
  /* right: -450px; */
  /* left: 760px; */
  right: -100px;
  rotate: 10deg;
}

.box-mount{
  width:400px;
  height: 660px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  /* padding: 200px; */
  /* transform-style: preserve-3d; 
  transform: rotateX(-5deg) rotateY(-5deg); */
}

.red-box  {
  justify-content: center;
  border-style: solid;
  border-color: black;
  z-index: 100;
  background-color: firebrick;

}

.control-panel{
  display: flex;
  justify-content: center;
  padding: 50px;
  /* border: solid; */
  /* border-radius: 3px;
  border-color: black;
  border-width: 2px; */
}

.display-frame {
  background-color: transparent;
  position: absolute;
  height: 215px;
  width: 320px;
  border-radius: 3px;
  border-color: black;
  border-width: 4px;
  border-style: solid;
  border-radius: 10px;
}
.display{
  display: flex;
  /* padding: 50px; */
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 1) 55px, rgba(0, 0, 0, 1) 160px, rgba(0, 0, 0, 0) 215px);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 1) 55px, rgba(0, 0, 0, 1) 160px, rgba(0, 0, 0, 0) 215px);
}
.rollResult {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.singleSlot{
  background-color: darkgray;
  border-color: gold;
  border-style: solid;
  border-width: 5px;
}
.slotImg{
    padding: 20px;
}
.loadingImg{
    padding: 0px;
    width: 90px;
    height: 90px;
}

.spin-button {
  display: none;
}

.button-wrapper {
  display: none;
}

.pointier {
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-left: 20px solid gray;
    border-top: 10px solid transparent;
    position: absolute;
    top: 22%;
    left: 10px;
    background-image: linear-gradient(to right, red, blue);
  }

@media screen and (max-width: 600px) {
  .slotImg{
    padding: 5px;
  }
  .loadingImg{
    padding: 0px;
    width: 60px;
    height: 60px;
  }
  .lever-wrapper {
    position: fixed;
    z-index: 1000;
    position: absolute;
    top: 340px;
    right: 0px;
  }

  .button-wrapper {
    display: flex;
    position: relative;
    justify-content: center;
    align-content: center;
    top: -120px;
    right: 10px;
  }

  .spin-button {
    display: flex;
    padding: 35px;
    background-color: firebrick;
    color: white;
    border: 2px dotted yellow;
    border-radius: 100%;
    cursor: pointer;
    -webkit-box-shadow: inset 0px 0px 20px 5px rgba(66, 68, 90, 0.8);
    -moz-box-shadow: inset 0px 0px 20px 5px rgba(66, 68, 90, 0.8);
    box-shadow: inset 0px 0px 20px 5px rgba(66, 68, 90, 0.8);
    font-weight: bolder;
  }
  .main-slot-container {
    padding: 0px;
  }
  .red-box-front {
    width: 100vw;
  }

  .red-box-sides-plate{
    display: none;
  }
  
}
`;
