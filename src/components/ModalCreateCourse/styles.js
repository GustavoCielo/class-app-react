import styled from "styled-components";

export const Container = styled.form`
  height: 350px;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #78848d;
  border-radius: 5px;
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
  .figure {
    width: 25px;
    height: 25px;
  }
`;

export const SubContainer2 = styled.div`
  margin: 0 auto;
  width: 200px;
  background-color: #f0f0fa;
  margin-top: 21px;
  border: 1px solid #78848d;
  border-radius: 5px;
`;

export const SubContainer3 = styled.div`
  width: 200px;
  margin: 0 auto;

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
  justify-content: center;
  align-items: center;
  margin-top: 21px;
`;
