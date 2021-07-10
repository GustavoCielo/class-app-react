import styled from "styled-components";

export const ModalWalletContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 33%;
    h2 {
      font-size: 24px;
      font-weight: bold;
      margin: 16px 0 0 24px;
    }
    span {
      margin: 11px 15px;
      cursor: pointer;
    }
  }
  .money {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 33%;
    figure {
      margin: 0 12px 0 18px;
    }
    span {
      font-size: 36px;
      font-weight: bold;
    }
  }
  .buttonContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 33%;
  }
`;
