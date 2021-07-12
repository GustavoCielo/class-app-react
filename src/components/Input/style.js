import styled from "styled-components";

export const InputStyled = styled.input`
  width: ${({ width }) => (width ? width : "100%")};
  padding: 8px;
  height: ${({ height }) => height};
  border-radius: 5px;
  background-color: transparent;

  color: var(--color-theme);
  border: none;

  ::placeholder {
    font-size: ${({ placeholderSize }) =>
      placeholderSize ? placeholderSize : "14px"};
    color: ${({ color }) => color && color};
  }
`;
