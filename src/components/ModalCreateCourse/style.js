import styled from "styled-components";

export const Container = styled.form`
  height: 400px;
  width: 260px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #78848d;
  border-radius: 5px;
  background-color: var(--background-secondary);
`;

export const SubContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
`;

export const Title = styled.h3`
  width: 80%;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  .figure {
    width: 25px;
    height: 25px;
  }
`;

export const SubContainer2 = styled.div`
  width: 200px;
  background-color: #f0f0fa;
  margin-top: 15px;
  border: 1px solid #78848d;
  border-radius: 5px;
`;

export const SubContainer3 = styled.div`
  width: 200px;

  label {
    font-family: var(--primary-font);
    font-size: 14px;
    color: #78848d;
  }
`;

export const SubContainer31 = styled.div`
  background-color: #f0f0fa;
  border: 1px solid #78848d;
  border-radius: 5px;
`;

export const SelectContainer = styled.select`
  width: 200px;
  height: 50px;
  background-color: var(--gray-background);
  overflow-y: scroll;
`;

export const SubContainer4 = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form1 = styled.div`
  display: ${({ clicked }) => !clicked && "none"};
  margin: 0 auto;
`;

export const Form2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25%;
  display: ${({ clicked }) => !clicked && "none"};
`;

export const Question = styled.h4`
  font-size: 0.8rem;
  font-weight: 600;
  margin: 8px 0;
  color: rgba(0, 0, 0, 0.85);
`;

export const CustomCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LabelCheck = styled.label`
  width: 50%;
  font-size: 0.9rem;
`;

export const InputCheck = styled.input`
  margin-right: 3px;
`;

export const ContainerLink = styled(SubContainer2)`
  margin: 0;
`;

export const CustomSelect = styled.div`
  display: flex;
  gap: 5px;
`;

export const SelectForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 10px;
  background-color: var(--hightlight-shadow);

  div {
    background-color: var(--call-to-action);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: ${({ clicked }) => !clicked && "none"};
  }
`;

export const ButtonNext = styled.div`
  text-align: center;
  min-width: 120px;
  padding: 4px;
  border-radius: 12px;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 1rem;
  color: var(--call-to-action);
  border: 2px solid var(--call-to-action);
  cursor: pointer;
  width: 100px;
  height: 100px;
`;
