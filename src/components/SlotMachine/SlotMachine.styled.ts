import styled from 'styled-components';

export const SlotMachineWrapper = styled.div`

.plate{
  display: flex;
  position: absolute;
  -webkit-box-shadow: inset 40px 16px 60px -10px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: inset 40px 16px 60px -10px rgba(0, 0, 0, 0.78);
  box-shadow: inset 40px 16px 60px -10px rgba(0, 0, 0, 0.78);
}

.main-palte {
  width:400px;
  height: 660px;
}


.sides {
  height: 660px;
  width: 600px;
  z-index: 100;
  -webkit-box-shadow: inset 40px 16px 60px -10px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: inset 40px 16px 60px -10px rgba(0, 0, 0, 0.78);
  box-shadow: inset 40px 16px 60px -10px rgba(0, 0, 0, 0.78);
}

.front  { transform: translateZ(320px); }
.back   { transform: rotateY(0deg) translateZ(-50px); }
.left   { transform: rotateY(-90deg) translateZ(250px); }
.right  { transform: rotateY(90deg) translateZ(200px);  }
.top    { transform: rotateX(90deg) translateZ(330px); }
.bottom { transform: rotateX(-90deg) translateZ(50px); }

@keyframes colorChange {
  0% {
    background-color: green;
  }
  50% {
    background-color: red;
  }
  100% {
    background-color: yellow;
  }
}
.main-name-box{
    z-index: 100;
   padding: 0px 0px 100px 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
}
.name-box{
  background-color: yellow;
  border-style: solid;
  border-color: black;
  padding: 5px 20px 0px 20px;
  width: 300px;
  animation: colorChange 1s alternate 5;
}

.mian-slot-container {
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

.box-3d{
  transform-style: preserve-3d; 
  transform: rotateX(-3deg) rotateY(-3deg);
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

.box {
  justify-content: center;
  border-style: solid;
  border-color: black;
  z-index: 100;
  background-color: firebrick;

}

.display{
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
  height: 200px;
  width: 310px;
  border-radius: 3px;
  border-color: gold;
  border-width: 2px;
  border: solid;
  border-radius: 10px;
}
.rell-cont{
  display: flex;
  /* padding: 50px; */
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 1) 150px, rgba(0, 0, 0, 0) 200px);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 1) 150px, rgba(0, 0, 0, 0) 200px);
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

.box {

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


}
`;
