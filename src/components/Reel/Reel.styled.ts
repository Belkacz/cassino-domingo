import styled from 'styled-components';

export const ReelWrapper = styled.div`

.rel-cont{
  /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 1) 50px,rgba(0, 0, 0, 1) 200px, rgba(0, 0, 0, 0) 250px); */
}

.symbol {
  height: 50px;
  text-align: center;
  font-size: 24px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.image{
    height: 45px;
}

.reel {
  display: flex;
  flex-direction: column;
  height: 100%; /* Wysokość kontenera */
  overflow: hidden; /* Ukrywa wszystko poza kontenerem */
}

.symbol {
  flex: 0 0 100%; /* Każdy symbol zajmuje 100% wysokości kontenera */
}

.spinning {
  animation: spin 20ms infinite linear;
}

@keyframes spin { 
  0% { transform: translateY(0); }
  100% { transform: translateY(-100px);}
}

/* .spinning {
  animation: spin 100ms infinite linear;
}

@keyframes spin {
  0% { transform: translateY(0); }
  100% { transform: translateY(-12%); }
} */

`;
