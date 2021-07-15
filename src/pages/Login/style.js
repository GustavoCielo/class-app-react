import styled from "styled-components";

import WaveLeft from "../../assets/wave-left.svg";
import WaveRight from "../../assets/wave-right.svg";
import ImageLogin from "../../assets/figurelogin.svg";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-rows: repeat(2, minmax(50vh, 2fr));
  grid-template-areas:
    "wave form wave2"
    "wave animation wave2";

  .wave {
    grid-area: wave;
    background-image: url(${WaveLeft});

    @media (max-width: 767px) {
      display: none;
    }
  }

  .form {
    grid-area: form;

    justify-self: center;
    align-self: center;
  }

  .animation {
    grid-area: animation;
  }

  .wave2 {
    grid-area: wave2;
    background-image: url(${WaveRight});

    @media (max-width: 767px) {
      display: none;
    }
  }
`;
