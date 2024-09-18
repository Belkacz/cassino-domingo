import styled from 'styled-components';

export const ScoreDisplayWrapper = styled.div`

.score-display-containier{
    position: absolute;
    top: 300px;
    left: 40px;
    padding: 100

}

.set-center {
    display: flex;
    justify-content: center;
}

.border-top-boy {
    border-top: solid;
    border-color: gray;
}

.border-right-boy {
    border-right: solid;
    border-color: gray;
    width: 55%;
}
.padding-sides {
    padding: 0px 10px 0px 10px;
}

.separated-window {
    display:flex
}

.buttons {

}

.win-wrapper {
    flex-direction: column;
    width: 40%;
}

.bet-button-wrapper {
    padding:5px;
}

.bet-button {
    padding: 10px;
    border-radius: 100%;
    background-color: brown;
    font-weight: bold;
    color: wheat;
    -webkit-box-shadow: inset 0px 0px 2px 2px rgb(111, 111, 111);
    -moz-box-shadow: inset 0px 0px 2px 2px rgb(111, 111, 111);
    box-shadow: inset 0px 0px 2px 2px rgb(111, 111, 111);
}

.display-main {
    background-color: whitesmoke;
    height: 210px;
    width: 315px;
    border-style: solid;
    border-color: black;
    border-radius: 10px;
}
.text-wrapper {
    padding: 0px 0px 0px 10px;
    display: flex;
}
.title{
    font-weight: bold;
    white-space: pre;
}
`;
