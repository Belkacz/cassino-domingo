import styled from 'styled-components';

export const ReelWrapper = styled.div`

.rel-cont{
  /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 1) 50px,rgba(0, 0, 0, 1) 200px, rgba(0, 0, 0, 0) 250px); */
}

.symbol {
  height: 60px;
  width: 60px;
  text-align: center;
  font-size: 24px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.image{
    height:60px;
}

.reel {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
  top: -67px;
}

.symbol {
  flex: 0 0 100%;
}

.spinning {
  animation: spin 20ms infinite linear;
}

@keyframes spin { 
  0% { transform: translateY(0); }
  100% { transform: translateY(-80px);}
}

.end-spin {
  animation: end-spin 500ms ease-out;
}

@keyframes end-spin {
  0% { transform: translateY(0px);}
  33% { transform: translateY(40%);}
  66% { transform: translateY(-33%);}
  100% { transform: translateY(0px);}
}

/* .spinning {
  animation: spin 100ms infinite linear;
}

@keyframes spin {
  0% { transform: translateY(0); }
  100% { transform: translateY(-12%); }
} */

  .gold-border {
    border: 2px solid gold;
  }

  .silver-border {
    border: 2px solid silver;
  }

  .bronze-border {
    border: 2px solid brown;
  }

  .green-border {
    border: 2px solid green;
  }

  .red-border {
    border: 2px solid red;
  }

  .base-border {
    border: 2px solid #e6dede;
  }

`;
