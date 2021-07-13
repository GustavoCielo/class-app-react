import styled from "styled-components";

export const SelectStyled = styled.select`
  width: 100%;

  border-radius: 5px;
  padding: 7px;

  background-color: transparent;
  color: ${({ colorBG }) => (colorBG ? colorBG : "var(--color-theme)")};
  font-size: ${({ inputSize }) => (inputSize ? inputSize : "12px")};
  border: none;
`;
