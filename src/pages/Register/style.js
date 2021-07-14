import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background-primary);

  @media (max-width: 749px) {
    justify-content: flex-start;
  }
`;

export const Title = styled.h1`
  text-align: center;
  padding-bottom: 100px;
  color: var(--font-color);

  @media (max-width: 749px) {
    padding: 20px 50px;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 749px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;
