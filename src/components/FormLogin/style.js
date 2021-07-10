import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 400px;
  min-width: 300px;
  padding: 10px;

  background-color: #ffffff;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.23);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.23);

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
