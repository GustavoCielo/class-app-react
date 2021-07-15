import {
  Container,
  CalendarHeader,
  DivMonthYear,
  MonthPicker,
  YearPicker,
  Change,
  CalendarBody,
  WeekDay,
  ListWeekDay,
  CalendarDays,
  Day,
} from "./style";
import { MONTHS, WEEKDAYS, mapPosition, getColorProp } from "./helpers";
import { useState, useEffect } from "react";

const Calendar = ({ courses }) => {
  const [actualDay, setActualDay] = useState(new Date());
  const [mappedMonth, setMappedMonth] = useState();

  const handleNext = () => {
    const next = actualDay;
    next.setMonth(next.getMonth() + 1);
    setActualDay(next);
    setMappedMonth(undefined);
  };

  const handlePrevious = () => {
    const previous = actualDay;
    previous.setMonth(previous.getMonth() - 1);
    setActualDay(previous);
    setMappedMonth(undefined);
  };

  const stringfyDate = (date) => {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  };

  const compareDayWithDate = (day) => {
    const dayToCompare = new Date(
      `${actualDay.getMonth() + 1}/${day}/${actualDay.getFullYear()}`
    );
    const today = new Date();
    return stringfyDate(today) === stringfyDate(dayToCompare);
  };

  useEffect(() => {
    if (mappedMonth === undefined) {
      mapPosition(setMappedMonth, actualDay);
    }
  }, [mappedMonth, actualDay]);

  return (
    <Container>
      <CalendarHeader>
        <Change onClick={() => handlePrevious()}>{"<"}</Change>
        <DivMonthYear>
          {actualDay && (
            <>
              <MonthPicker>{MONTHS[actualDay.getMonth()]}</MonthPicker>
              <YearPicker>{actualDay.getFullYear()}</YearPicker>
            </>
          )}
        </DivMonthYear>
        <Change onClick={handleNext}>{">"}</Change>
      </CalendarHeader>
      <CalendarBody>
        <WeekDay>
          {WEEKDAYS.map((weekday) => (
            <ListWeekDay>{weekday}</ListWeekDay>
          ))}
        </WeekDay>
        {mappedMonth &&
          mappedMonth.map((week) => (
            <CalendarDays>
              {week.map((day) => (
                <Day
                  today={compareDayWithDate(day)}
                  colorProp={courses && getColorProp(day, courses, actualDay)}
                >
                  {day !== 0 && day}
                </Day>
              ))}
            </CalendarDays>
          ))}
      </CalendarBody>
    </Container>
  );
};

export default Calendar;
