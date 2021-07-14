import styled from "styled-components";

export const MainStyled = styled.main`
  width: 95%;
  height: 80vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(10vh, 1fr) minmax(70vh, 2fr);
  grid-template-areas:
    "titulo titulo"
    "cards animacao";

  .titulo {
    grid-area: titulo;
  }

  .cards {
    grid-area: cards;
  }

  .animacao {
    grid-area: animacao;
    display: flex;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 80vh;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(8vh, 1fr) minmax(80vh, 2fr);
    grid-template-areas:
      "titulo"
      "cards";

    .animacao {
      display: none;
    }
  }
`;
