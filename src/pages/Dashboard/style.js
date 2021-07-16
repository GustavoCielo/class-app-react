import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 42px 26px;
  overflow: hidden;
  h2 {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin-bottom: 28px;
  }
  p {
    margin-bottom: 25px;
    font-size: 10px;
  }
  span {
    font-weight: bold;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    .BaseContainer {
      display: none;
    }
  }
`;

export const StyledContainer = styled.div`
  background-color: #f8f8fd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 16px;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};

  @media (max-width: 768px) {
    display: none;
  }
`;
