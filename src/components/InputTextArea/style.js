import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 200px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d6d6ef;
  background-color: var(--gray-background);

  textarea {
    width: 100%;
    padding: 8px;

    border: none;
    background-color: transparent;
    color: #78848d;
  }
`;
