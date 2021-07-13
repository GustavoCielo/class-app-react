import styled from "styled-components";

import { AiFillCloseCircle } from "react-icons/ai";

export const IconClose = styled(AiFillCloseCircle)`
  font-size: 25px;
`;

export const Row = styled.div`
  width: 90%;
  padding: 10px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;

export const RowControllers = styled.div`
  width: 90%;
  padding: 40px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  p {
    font-weight: 600;
  }
`;
