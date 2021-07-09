import styled from "styled-components";

import { AiFillCloseCircle, AiFillClockCircle } from "react-icons/ai";
import { RiMoneyDollarCircleFill, RiStarHalfLine } from "react-icons/ri";

export const Container = styled.div`
  width: 90%;
  padding: 10px;

  margin: 0 auto;

  background-color: var(--hightlight-shadow);

  border-radius: 10px;

  .RowIcons {
    width: 80%;
  }
`;

export const ContainerRow = styled.div`
  width: 100%;
  padding-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconClose = styled(AiFillCloseCircle)`
  font-size: 25px;
`;

export const IconMoney = styled(RiMoneyDollarCircleFill)`
  margin-right: 5px;
`;

export const IconClock = styled(AiFillClockCircle)`
  margin-right: 5px;
`;

export const IconStar = styled(RiStarHalfLine)`
  margin-right: 5px;
`;

export const RowCell = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 0.9rem;
  }
`;
