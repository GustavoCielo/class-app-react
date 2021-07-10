import styled from "styled-components";

export const Container = styled.div`
  height: 460px;
  width: 460px;
  border: 1px solid #78848d;
  background-color: var(--background-secondary);
  border-radius: 20px;

  box-shadow: 0px 5px 5px 2px #ccc;
`;

export const SubContainer1 = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 1px solid #78848d;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .figure {
    color: #78848d;
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
`;

export const Title = styled.h4``;

export const SubContainer2 = styled.div`
  display: flex;
  align-items: flex-end;
  height: 80%;
  justify-content: center;
`;

export const SubContainer21 = styled.div`
  background-color: #f0f0fa;
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  border: 1px solid #78848d;
`;

export const SubContainer211 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const InputChat = styled.input``;

export const ButtonChat = styled.div`
  width: 20px;
  height: 20px;
  display: flex;

  .figure2 {
    height: 100%;
    width: 100%;
  }
`;
