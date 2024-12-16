import { REGEX } from '@shared/constants';

export const generateDateRange = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const range: string[] = [];

  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    range.push(new Date(date).toISOString().split('T')[0]);
  }

  return range;
};

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const displayDate = (
  startDate: string | null,
  endDate: string | null
) => {
  if (!startDate) {
    return 'Add dates';
  }

  if (startDate === 'all') {
    return 'Anytime';
  }

  const start = {
    day: new Date(startDate).getDate(),
    month: new Date(startDate).getMonth(),
    year: new Date(startDate).getFullYear(),
  };

  if (!endDate) {
    return `${start.day} ${monthNames[start.month]}`;
  }

  const end = {
    day: new Date(endDate).getDate(),
    month: new Date(endDate).getMonth(),
    year: new Date(endDate).getFullYear(),
  };

  if (start.year === end.year) {
    if (start.month === end.month) {
      return `${start.day} - ${end.day} ${monthNames[start.month]}`;
    } else {
      return `${start.day} ${monthNames[start.month]} - ${end.day} ${
        monthNames[end.month]
      }`;
    }
  } else {
    return `${start.day} ${monthNames[start.month]} ${start.year} - ${
      end.day
    } ${monthNames[end.month]} ${end.year}`;
  }
};

export const getNumberOfDays = (startDate: Date, endDate: Date) => {
  if (!startDate || !endDate) {
    return 0;
  }
  if (
    REGEX.date.test(startDate.toString()) &&
    REGEX.date.test(endDate.toString())
  ) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.round((end.getTime() - start.getTime()) / 86400000);
  }
  return 0;
};
