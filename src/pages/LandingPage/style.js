import styled from "styled-components";
import vectorWave from "../../assets/vectorWave.svg";

export const HomeContainer = styled.div`
  background-image: url(${vectorWave});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  div {
    display: flex;
    flex-direction: column;
  }
  h1 {
    margin: 168px 0 0 72px;
  }
  p {
    margin-top: 32px;
    margin-left: 72px;
    margin-bottom: 24px;
  }
  button {
    margin-top: 14px;
    margin-left: 72px;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
`;
