export const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Marco",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

export const getCourseDays = ({ daysOfWeek, totalHours, hoursPerDay }) => {
  totalHours = Number(totalHours);
  hoursPerDay = Number(hoursPerDay);

  daysOfWeek = daysOfWeek.map((el) =>
    WEEKDAYS.findIndex((weekDay) => weekDay === el)
  );

  function getFirstDay(weekday) {
    const today = new Date();
    const firstDaySelected = new Date();

    let differenceInDays;
    if (today.getDay() > weekday) {
      differenceInDays = 7 - today.getDay() + weekday;
    } else {
      differenceInDays = weekday - today.getDay();
    }

    firstDaySelected.setDate(today.getDate() + differenceInDays);
    return firstDaySelected;
  }
  let selectedDays = [];

  for (let i = 0; i < daysOfWeek.length; i++) {
    selectedDays.push(getFirstDay(daysOfWeek[i]));
  }

  selectedDays.sort((a, b) => a - b);

  totalHours -= selectedDays.length * hoursPerDay;
  let i = 0;
  while (totalHours > 0) {
    let current = selectedDays[i];
    let next = new Date(current);
    next.setDate(current.getDate() + 7);
    selectedDays.push(next);
    totalHours -= hoursPerDay;
    i++;
  }

  return selectedDays;
};

const filterCourseDays = (actualDay, courseDays) => {
  courseDays = courseDays
    .filter(
      (date) =>
        date.getFullYear() === actualDay.getFullYear() &&
        date.getMonth() === actualDay.getMonth()
    )
    .map((date) => date.getDate());

  return courseDays;
};

export const getColorProp = (day, courses, actualDay) => {
  for (let i = 0; i < courses.length; i++) {
    let courseDays = getCourseDays(courses[i]);
    courseDays = filterCourseDays(actualDay, courseDays);
    if (courseDays.includes(day)) {
      return i % 5;
    }
  }
};

const firstOfMonth = (actualDay) => {
  const day = 1;
  const month = actualDay.getMonth() + 1;
  const year = actualDay.getFullYear();
  return new Date(`${month}-${day}-${year}`);
};

export const mapPosition = (setMappedMonth, actualDay) => {
  let start = firstOfMonth(actualDay);
  let next = firstOfMonth(actualDay);
  next.setDate(start.getDate() + 1);
  let result = [[0, 0, 0, 0, 0, 0, 0]];
  let i = 0;
  result[i][start.getDay()] = start.getDate();
  let previous = start;
  let step = start.getDay();
  loop1: while (previous.getMonth() === next.getMonth()) {
    while (step < 6) {
      if (previous.getMonth() !== next.getMonth()) {
        break loop1;
      }
      result[i][next.getDay()] = next.getDate();
      previous.setDate(previous.getDate() + 1);
      next.setDate(next.getDate() + 1);
      step++;
    }
    step = -1;
    if (previous.getMonth() === next.getMonth()) {
      let newLine = [0, 0, 0, 0, 0, 0, 0];
      result = [...result, newLine];
    }
    i++;
  }
  setMappedMonth(result);
};
