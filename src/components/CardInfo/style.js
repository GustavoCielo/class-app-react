import styled from "styled-components";

export const CardInfoContainer = styled.div`
  width: 95%;
  max-width: 302px;
  height: 150px;
  background: #d6d6ef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 15px auto;

  .student {
    height: 70%;
    display: flex;
    flex-direction: row;

    img {
      margin: 17px 13px 0 16px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
  .buttonContainer {
    height: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3px;
      margin: 7px;
      height: 33px;
      width: 152px;
      border-radius: 20px;
      font-size: 14px;
      line-height: 19px;
      color: var(--background-primary);
      background: var(--color-theme);
    }
  }
`;
