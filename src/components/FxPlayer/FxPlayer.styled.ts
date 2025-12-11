import styled from 'styled-components';

export const FxPlayerWrapper = styled.div`

.music-box {
  width: 250px;
  background-color: firebrick;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: inset 40px 16px 60px -10px rgba(0, 0, 0, 0.78);
  margin-right: -34px;
  margin-top: 200px;
  padding: 10px;
}

.music-button-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  box-shadow: inset 0px 10px 50px 10px rgba(0, 0, 0, 0.78);
  border: 2px solid black;
}

.padding-box {
  padding: 20px;
}

.padding-slider {
  padding: 12px 0px 8px 0px
}

.music-button {
    padding: 10px;
    border-radius: 10px;
    background-color: brown;
    font-weight: bold;
    color: wheat;
    -webkit-box-shadow: inset 0px 0px 2px 2px rgb(111, 111, 111);
    -moz-box-shadow: inset 0px 0px 2px 2px rgb(111, 111, 111);
    box-shadow: inset 0px 0px 2px 2px rgb(111, 111, 111);
}

.padding-wrapper {
  padding: 10px;
}


@media (max-width: 600px) {
    .music-box  {
      margin-top: -95px;
      margin-left: -50px;
      width: 90vw;
    }
  }

`;
