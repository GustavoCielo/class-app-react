import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 400px;
  padding: 10px;

  margin: 0 auto;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.8rem;
    margin-right: 3px;
  }

  h5 {
    margin-left: 5px;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

export const FormRow = styled.div`
  width: 100%;

  display: flex;
`;

export const RowCellMerge = styled.div`
  width: 100%;
  margin: 5px;
  background-color: #f0f0fa;
  border: 1px solid #78848d;
  border-radius: 5px;
`;

export const RowButton = styled.div`
  width: 100%;

  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.8rem;
    padding-top: 5px;
  }

  span {
    font-weight: 600;
  }
`;
