import styled from "styled-components";

import WaveLeft from "../../assets/wave-left.svg";
import WaveRight from "../../assets/wave-right.svg";
import ImageLogin from "../../assets/figurelogin.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerForm = styled.div`
  margin: 0 auto;
`;

export const ContainerCentral = styled.div`
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerWaveLeft = styled.div`
  width: 200px;
  height: 100vh;
  position: absolute;
  z-index: -1;

  background: url(${WaveLeft}) no-repeat center;
  background-size: cover;
  background-position: center;
`;

export const ContainerWaveRight = styled.div`
  width: 200px;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  background: url(${WaveRight}) no-repeat center;
  background-size: cover;
  background-position: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContainerImageLogin = styled.div`
  width: 400px;
  height: 320px;

  background: url(${ImageLogin}) no-repeat center;
  background-size: contain;
  background-position: center;

  @media (max-width: 767px) {
    display: none;
  }
`;
