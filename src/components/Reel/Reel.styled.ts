import styled from 'styled-components';

export const ReelWrapper = styled.div`

.rel-cont{
  /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 1) 50px,rgba(0, 0, 0, 1) 200px, rgba(0, 0, 0, 0) 250px); */
}
.reel {
  /* height: 150px; */
  overflow: hidden;
  position: relative;
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

.spinning {
  animation: spin 2s infinite linear;
}

@keyframes spin {
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
}

`;
