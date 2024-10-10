import styled from 'styled-components';

export const NameBoxWrapper = styled.div`

@keyframes colorChange {
  0% {
    background-color: green;
  }
  25% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }
  75% {
    background-color: blue;
  }
  100% {
    background-color: green;
  }
}
.main-name-box {
    z-index: 101;
   /* padding: 0px 0px 100px 20px; */
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  width: 400px;
  height: 100px;
}
.name-box {
  background-color: yellow;
  border-style: solid;
  border-color: black;
  padding: 5px 20px 0px 20px;
  width: 300px;
}

.back-light {
  animation: colorChange 8s infinite;
}

.name-box-front  {
  transform: translateZ(320px);
}

.name-box-right { 
  top: 6px;
  transform: rotateY(90deg) translateZ(165px);
  height:80px;
}

.name-box-top{
  transform: rotateX(-90deg) translateZ(-146px);
  height: 300px;
  width: 300px;
  top: 0px;
  left:17px;
}

.light-switch {
  width: 12px;
  height: 50px;
  background-color: gray;
  transform: rotate(40deg);
  position: absolute;
  left: 359px;
  top: 10px;
  border-radius: 2px;
  border: 1px solid black;
  transform-origin: 0% 90%;
  box-shadow: inset 2px 2px 2px 1px black;
}

.switch-off {
  transform: rotate(120deg)
}

.no-light {
  background-color: rgba(220, 220, 220, 0.9);
}

.chink {
  position: absolute;
  height: 41px;
  width: 8px;
  background-color: black;
  border-radius: 4px;
  left: 364px;
  top: 38px;
}

@keyframes offSwitch{
    from {
        transform: rotate(40deg);
    }
    to {
        transform: rotate(120deg);
    }
  }
`;
