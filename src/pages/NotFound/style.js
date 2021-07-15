import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: var(--background-primary);
`;

export const DivLottie = styled.div`
  width: 650px;
  height: 650px;

  @media (max-width: 768px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 600px) {
    width: 80%;
    height: 80%;
  }
`;

export const DivWaveLeft = styled.div`
  width: 100vh;
  transform: rotate(90deg);
  position: absolute;
  left: calc(-50vh);

  @media (max-width: 600px) {
    display: none;
  }
`;

export const DivWaveRight = styled.div`
  width: 100vh;
  position: absolute;
  transform: rotate(-90deg);
  right: calc(-50vh);

  @media (max-width: 600px) {
    display: none;
  }
`;
