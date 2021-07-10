import styled from "styled-components";

import { AiFillCloseCircle, AiFillClockCircle } from "react-icons/ai";
import { RiMoneyDollarCircleFill, RiStarHalfLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

export const Container = styled.div`
  width: 90%;
  max-width: 300px;
  padding: 10px 10px 5px 10px;

  margin: 0 auto;

  background-color: var(--hightlight-shadow);

  border-radius: 10px;

  .RowIcons {
    width: 80%;
  }

  .RowProfile {
    width: 60%;
  }

  .RowButton {
    width: 100%;
    padding: 0px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .RowInputInfo {
    width: 100%;

    flex-direction: column;

    p {
      width: 100%;
      font-weight: 500;

      font-size: 0.9rem;
    }
  }

  .UserProfile {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.7rem;
    }
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

export const IconUser = styled(FaUserCircle)`
  font-size: 40px;
  color: var(--color-theme);
`;

export const RowCell = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 0.9rem;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  height: 80px;
  max-height: 80px;
  border-radius: 10px;

  background-color: var(--background-primary);
`;
