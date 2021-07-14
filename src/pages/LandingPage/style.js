import styled from "styled-components";
import vectorWave from "../../assets/vectorWave.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeContainer = styled.div`
  height: 100vh;
  h1 {
    margin: 168px 0 0 72px;
  }
  p {
    margin-top: 32px;
    margin-left: 72px;
    margin-bottom: 24px;
    width: 50%;
  }
  button {
    margin-top: 14px;
    margin-left: 72px;
  }
  a:visited,
  a:link,
  a:hover,
  a:active,
  a {
    text-decoration: none;
    color: inherit;
    width: 215px;
  }
  @media (min-width: 768px) {
    background-image: url(${vectorWave});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100%;
    height: 100vh;
    overflow: hidden;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;
