import styled from "styled-components";

import WaveLeft from "../../assets/wave-left.svg";
import FigStudent from "../../assets/student.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;
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

  @media (max-width: 767px) {
    display: none;
  }
`;

export const FigureStudent = styled.div`
  width: 350px;
  height: 350px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;

  background: url(${FigStudent}) no-repeat center;
  background-size: contain;
  background-position: center;

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
`;
