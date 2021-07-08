import styled from "styled-components";

export const CardClassContainer = styled.div`
  width: 232px;
  height: 190px;
  background: #f8f8fd;

  border: 7px solid #9b5de5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  header {
    display: flex;
    align-items: center;
    padding-left: 20px;
    /* width: 231px; */
    height: 40px;
    background: #9b5de5;

    border-radius: 0 0 5px 5px;

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #fdfdff;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 63px;
    width: 187px;
    margin: 10px auto;
  }

  button {
    width: 115px;
    height: 30px;
    display: block;
    margin: 0 auto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;

    color: var(--primary-background);

    background: var(--secondary-background);
    border-radius: 20px;
  }
`;
