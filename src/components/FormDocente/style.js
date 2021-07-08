import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  padding: 10px;

  margin: 0 auto;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-right: 3px;
  }
`;

export const FormRow = styled.div`
  width: 100%;

  display: flex;
`;

export const RowCell = styled.div`
  width: 50%;
  margin: 5px;
  background-color: #f0f0fa;
  border: 1px solid var(--color-theme);
  border-radius: 5px;
`;

export const RowCellMerge = styled.div`
  width: 100%;
  margin: 5px;
  background-color: #f0f0fa;
  border: 1px solid var(--color-theme);
  border-radius: 5px;
`;

export const ContainerSingle = styled.div`
  width: 50%;
  margin: 5px;
`;

export const ContainerInputSingle = styled.div`
  width: 100%;
  margin: 5px;
  background-color: #f0f0fa;
  border: 1px solid var(--color-theme);
  border-radius: 5px;

  :nth-child(2) {
    margin-left: 0px;
  }
`;

export const ContainerTextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /*   justify-content: center;
  align-items: center; */
`;

export const ContainerSingleTextArea = styled.div`
  width: 100%;
  margin: 5px;

  background-color: #f0f0fa;
`;
