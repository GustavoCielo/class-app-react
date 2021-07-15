import styled from "styled-components";

export const Container = styled.div`
  height: 420px;
  min-width: 310px;
  width: max-content;
  padding: 20px;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: var(--background-secondary);
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    width: 300px;
    padding: 0 0 10px 0;
    height: max-content;
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const DivMonthYear = styled.div`
  font-size: 15px;
  font-weight: 600;
  padding: 10px;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const MonthPicker = styled.span`
  padding-right: 5px;
`;

export const YearPicker = styled.span``;

export const Change = styled.div`
  cursor: pointer;
`;

export const CalendarBody = styled.div`
  padding: 10px;

  @media (max-width: 425px) {
    padding: 2px;
  }
`;

export const WeekDay = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 425px) {
    font-size: 0.7rem;
  }
`;

export const ListWeekDay = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  place-items: center;
`;

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
  gap: 2px;

  @media (max-width: 425px) {
    gap: 0;
  }
`;

const calendarColors = {
  0: "var(--calendar-first)",
  1: "var(--calendar-second)",
  2: "var(--calendar-third)",
  3: "var(--calendar-fourth)",
  4: "var(--calendar-fifth)",
};

export const Day = styled.div`
  height: 40px;
  width: 40px;
  background-color: ${({ children, colorProp }) =>
    calendarColors[colorProp]
      ? calendarColors[colorProp]
      : children && "var(--calendar-default)"};
  border-radius: 50%;
  border: ${({ today }) => today && "3px solid var(--color-theme)"};
  color: ${({ today }) =>
    today ? "var(--color-theme)" : "var(--background-secondary)"};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 25px;
    width: 25px;
    font-size: 0.8rem;
    border: ${({ today }) => today && "2px solid var(--color-theme)"};
  }

  @media (max-width: 425px) {
    font-size: 0.7rem;
    margin: 2.5px;
  }
`;
