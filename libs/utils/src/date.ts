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

export const getNumberOfDays = (startDate?: Date, endDate?: Date) => {
  if (!startDate || !endDate) {
    return 0;
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (start instanceof Date && end instanceof Date) {
    const day = Math.round((end.getTime() - start.getTime()) / 86400000);
    return day < 0 ? 0 : day === 0 ? 1 : day;
  }
  return 0;
};

export const getFormattedTime = (date: Date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export const formatDate = (value: string) => {
  const numbersOnly = value.replace(/\D/g, '');

  const mm = numbersOnly.slice(0, 2);
  const dd = numbersOnly.slice(2, 4);
  const yyyy = numbersOnly.slice(4, 8);

  let formattedValue = mm;
  if (dd) formattedValue += `/${dd}`;
  if (yyyy) formattedValue += `/${yyyy}`;
  return formattedValue;
};
