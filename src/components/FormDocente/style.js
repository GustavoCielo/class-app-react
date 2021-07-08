import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 90%;
  max-width: 400px;
  padding: 10px;
  margin: 0 auto;

  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 9px 1px rgba(0, 0, 0, 0.23);
  box-shadow: 5px 5px 9px 1px rgba(0, 0, 0, 0.23);
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 5px;
`;

export const CellRowDate = styled.div`
  margin: 5px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelDataForm = styled.p`
  width: 80%;
  font-size: 0.7rem;
  text-align: center;
`;

export const ContainerLabel = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-size: 0.7rem;
    margin-right: 3px;
    margin-left: 5px;
  }
`;

export const Cell = styled.div`
  width: 100%;
  margin: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CellTextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;

  p {
    font-size: 0.7rem;
    margin-bottom: 3px;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.8rem;
    text-align: center;
  }

  span {
    font-weight: 600;
  }
`;
