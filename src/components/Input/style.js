import styled from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  padding: 8px;

  border-radius: 5px;
  background-color: transparent;
  font-size: ${({ inputSize }) => (inputSize ? inputSize : "12px")};
  color: ${({ colorBG }) => (colorBG ? colorBG : "var(--color-theme)")};
  border: none;
`;
