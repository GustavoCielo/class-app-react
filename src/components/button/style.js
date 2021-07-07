import styled from "styled-components";

export const ButtonStyled = styled.button`
  min-width: 100px;
  padding: 8px;
  border-radius: 10px;

  font-size: 1rem;
  font-weight: 600;

  background-color: ${(props) => (props.color ? "#f35d56" : "#FDFDFF")};
  color: ${(props) => (props.color ? "white" : "#f35d56")};
  border: 2px solid #f35d56;
`;
