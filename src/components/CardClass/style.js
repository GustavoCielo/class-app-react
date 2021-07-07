import styled from "styled-components";

export const CardClassContainer = styled.div`
  width: 232px;
  height: 190px;

  /* background secundary */

  background: #f8f8fd;
  /* Cor calendario 2 */

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

    border-radius: 0 0 13px 13px;

    h2 {
      font-family: Red Hat Display;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #fdfdff;
    }
  }
  button {
    width: 115px;
    height: 30px;
    left: 216px;
    top: 603px;
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;

    color: #ffffff;

    background: #003f66;
    border-radius: 20px;
  }
`;
