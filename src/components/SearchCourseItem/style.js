import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gray-background);
  border: 1px solid #d6d6ef;
  width: 300px;
  height: 50px;
  border-radius: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  .input {
    width: 80%;
    height: 40px;
    background: var(--gray-background);
    border: none;
  }
`;
