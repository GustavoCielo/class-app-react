import styled from "styled-components";

export const Container = styled.form`
  height: 470px;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

export const SubContainer3 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`;

export const SubContainer4 = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  label {
    font-family: var(--primary-font);
    color: #78848d;
  }
`;

export const SelectContainer = styled.select`
  width: 200px;
  height: 50px;
  background-color: var(--gray-background);
  overflow-y: scroll;
`;

export const SubContainer6 = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
