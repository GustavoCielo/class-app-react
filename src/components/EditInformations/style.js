import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 400px;
  height: 550px;
  background-color: var(--background-secondary);
  padding-right: 10px;
  border-radius: 15px;
  border: 1px solid #78848d;
`;

export const SubContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const SubContainer11 = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .figure {
    width: 70%;
    height: 70%;
  }
`;

export const Title = styled.h4`
  font-size: 18px;
`;

export const SubContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 14px;
  border-bottom: 2px solid var(--hightlight-shadow);
  width: 90%;
`;

export const SubContainer21 = styled.div`
  display: flex;
  align-items: center;

  .figure {
    width: 17px;
    height: 17px;
    color: #78848d;
  }
`;

export const SubContainer22 = styled.div`
  width: 60%;
`;

export const SubContainer3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SubContainer31 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
