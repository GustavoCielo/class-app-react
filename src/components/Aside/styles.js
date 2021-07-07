import styled from "styled-components";

export const AsideContainer = styled.aside`
  background-color: var(--secondary-background);
  width: 100px;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const AsideMainContainerImage = styled.div`
  height: 60%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;

  .figure-aside {
    width: 30px;
    height: 30px;
  }
`;

export const AsideBottomContainerImage = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .figure-bottom {
    width: 30px;
    height: 30px;
  }
`;

export const AsideTopContainerImage = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .figure-top {
    width: 30px;
    height: 30px;
  }
`;
