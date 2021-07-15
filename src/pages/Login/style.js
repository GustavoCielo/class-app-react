import styled from "styled-components";

import WaveLeft from "../../assets/wave-left.svg";
import WaveRight from "../../assets/wave-right.svg";
import ImageLogin from "../../assets/figurelogin.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const Wave1 = styled.div`
  width: 20%;

  background-image: url(${WaveLeft});

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContainerCentral = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const ContainerAnimation = styled.div`
  width: 50%;
  justify-self: flex-end;
`;

export const Wave2 = styled.div`
  width: 20%;

  background-image: url(${WaveRight});

  @media (max-width: 767px) {
    display: none;
  }
`;
