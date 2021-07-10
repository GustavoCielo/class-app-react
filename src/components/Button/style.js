import styled from "styled-components";

export const ButtonStyled = styled.button`
  min-width: 120px;
  padding: 4px;
  border-radius: 12px;
  margin-bottom: 5px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-weight: 500;

  background-color: ${({ colorBG }) => (colorBG ? colorBG : "transparent")};
  color: ${({ colorBG, color }) =>
    colorBG ? "var(--background-primary)" : color};
  border: 2px solid ${({ colorBG, color }) => (colorBG ? colorBG : color)};
`;
