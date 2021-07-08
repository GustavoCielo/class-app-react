import styled from "styled-components";

export const ButtonStyled = styled.button`
  min-width: 100px;
  padding: 4px;
  border-radius: 12px;

  font-size: 1rem;
  font-weight: 600;

  background-color: ${(props) =>
    props.colorBG ? props.colorBG : "transparent"};
  color: ${(props) => (props.colorBG ? "white" : props.color)};
  border: 2px solid ${(props) => (props.colorBG ? props.colorBG : props.color)};
`;
