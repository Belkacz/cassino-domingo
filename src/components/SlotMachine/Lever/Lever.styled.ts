import styled from 'styled-components';

export const LeverWrapper = styled.div`
.red {
    color: red
}

.slot-machine {
  position: relative;
  width: 300px; /* Szerokość maszyny */
  height: 400px; /* Wysokość maszyny */
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
}

.lever {
  position: absolute;
  top: 50vh;
  right: 25vw;
  background-color: #666;
  width: 20px;
  height: 150px;
  border-radius: 10px;
  cursor: pointer;
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
  transform: rotate(-20deg)
}

.lever.pull {
transition-delay: 0.5s;
  transform: rotate(-140deg);
}

`;
