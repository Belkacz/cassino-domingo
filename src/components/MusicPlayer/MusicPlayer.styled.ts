import styled from 'styled-components';

export const MusicPlayerWrapper = styled.div`

.music-box {
  width: 150px;
  background-color: firebrick;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: inset 40px 16px 60px -10px rgba(0, 0, 0, 0.78);
  margin-right: -34px;
  margin-top: 300px;
  padding: 20px;
}

.music-button-wrapper {
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: inset 0px 10px 50px 10px rgba(0, 0, 0, 0.78);
  border: 2px solid black;
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

`;
