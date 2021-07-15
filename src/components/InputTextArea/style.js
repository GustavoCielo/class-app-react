import styled from "styled-components";

export const TextAreaStyled = styled.textarea`
  width: 100%;
  min-height: ${({ height }) => (height ? height : "80px")};
  border-radius: 5px;
  background-color: transparent;
  color: var(--color-theme);
  resize: none;
`;
