import styled from 'styled-components';

export const SlotMachineWrapper = styled.div`
.display{
  display: flex;
  justify-content: center;
  padding: 50px
}
.rell-cont{
  display: flex;
  /* padding: 50px; */
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 1) 100px, rgba(0, 0, 0, 0) 150px);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 1) 100px, rgba(0, 0, 0, 0) 150px);
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
