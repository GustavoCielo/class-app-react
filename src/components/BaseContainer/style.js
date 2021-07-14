import styled from "styled-components";

export const DivStyled = styled.div`
  background-color: #f8f8fd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 16px;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
