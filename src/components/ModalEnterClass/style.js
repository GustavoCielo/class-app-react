import styled from "styled-components";

import { AiFillCloseCircle } from "react-icons/ai";

export const Container = styled.div`
  width: 90%;
  max-width: 300px;
  padding: 10px 10px 5px 10px;
  margin: 0 auto;
  background-color: var(--hightlight-shadow);
  border-radius: 10px;
`;

export const ContainerRow = styled.div`
  width: 100%;
  padding-bottom: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 15px;
  }

  a {
    text-decoration: underline;
    margin-left: 15px;
  }

  span {
    font-weight: 600;
  }
`;

export const IconClose = styled(AiFillCloseCircle)`
  font-size: 25px;
`;
