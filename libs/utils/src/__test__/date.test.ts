import {
  displayDate,
  formatDate,
  generateDateRange,
  getFormattedTime,
  getNumberOfDays,
} from '../date';

describe('generateDateRange', () => {
  it('should generate a date range between two valid dates', () => {
    const start = '2023-12-01';
    const end = '2023-12-05';
    const result = generateDateRange(start, end);
    expect(result).toEqual([
      '2023-12-01',
      '2023-12-02',
      '2023-12-03',
      '2023-12-04',
      '2023-12-05',
    ]);
  });

  it('should return an empty array if start date is after end date', () => {
    const start = '2023-12-05';
    const end = '2023-12-01';
    const result = generateDateRange(start, end);
    expect(result).toEqual([]);
  });

  it('should return an array with a single date if start and end dates are the same', () => {
    const start = '2023-12-01';
    const end = '2023-12-01';
    const result = generateDateRange(start, end);
    expect(result).toEqual(['2023-12-01']);
  });

  it('should handle leap year dates correctly', () => {
    const start = '2024-02-28';
    const end = '2024-03-01';
    const result = generateDateRange(start, end);
    expect(result).toEqual(['2024-02-28', '2024-02-29', '2024-03-01']);
  });
});

describe('displayDate', () => {
  it('should return "Add dates" if startDate is null', () => {
    expect(displayDate(null, null)).toBe('Add dates');
    expect(displayDate(null, '2024-12-25')).toBe('Add dates');
  });

  it('should return "Anytime" if startDate is "all"', () => {
    expect(displayDate('all', null)).toBe('Anytime');
    expect(displayDate('all', '2024-12-25')).toBe('Anytime');
  });

  it('should return "day month" if only startDate is provided', () => {
    expect(displayDate('2024-12-25', null)).toBe('25 Dec');
    expect(displayDate('2024-01-01', null)).toBe('1 Jan');
  });

  it('should return "start.day - end.day month" if startDate and endDate are in the same month and year', () => {
    expect(displayDate('2024-12-01', '2024-12-25')).toBe('1 - 25 Dec');
    expect(displayDate('2024-07-15', '2024-07-20')).toBe('15 - 20 Jul');
  });

  it('should return "start.day month - end.day month" if startDate and endDate are in the same year but different months', () => {
    expect(displayDate('2024-11-25', '2024-12-05')).toBe('25 Nov - 5 Dec');
    expect(displayDate('2024-01-15', '2024-02-10')).toBe('15 Jan - 10 Feb');
  });

  it('should return "start.day month year - end.day month year" if startDate and endDate are in different years', () => {
    expect(displayDate('2023-12-25', '2024-01-05')).toBe(
      '25 Dec 2023 - 5 Jan 2024'
    );
    expect(displayDate('2022-06-01', '2023-06-01')).toBe(
      '1 Jun 2022 - 1 Jun 2023'
    );
  });
});

describe('getNumberOfDays', () => {
  it('should return 0 if startDate or endDate is undefined', () => {
    expect(getNumberOfDays(undefined, undefined)).toBe(0);
    expect(getNumberOfDays(new Date('2024-12-25'), undefined)).toBe(0);
    expect(getNumberOfDays(undefined, new Date('2024-12-25'))).toBe(0);
  });

  it('should return 1 if startDate and endDate are the same day', () => {
    const date = new Date('2024-12-25');
    expect(getNumberOfDays(date, date)).toBe(1);
  });

  it('should return the correct number of days for valid startDate and endDate', () => {
    expect(
      getNumberOfDays(new Date('2024-12-25'), new Date('2024-12-26'))
    ).toBe(1);
    expect(
      getNumberOfDays(new Date('2024-12-25'), new Date('2024-12-30'))
    ).toBe(5);
  });

  it('should return 0 if endDate is before startDate', () => {
    expect(
      getNumberOfDays(new Date('2024-12-30'), new Date('2024-12-25'))
    ).toBe(0);
  });

  it('should handle leap years correctly', () => {
    expect(
      getNumberOfDays(new Date('2024-02-28'), new Date('2024-03-01'))
    ).toBe(2);
  });

  it('should handle long time spans correctly', () => {
    expect(
      getNumberOfDays(new Date('2020-01-01'), new Date('2024-12-31'))
    ).toBe(1826);
  });
});

describe('getFormattedTime', () => {
  it('should format time correctly in AM period', () => {
    const date = new Date('2024-12-25T08:30:00');
    expect(getFormattedTime(date)).toBe('08:30 AM');
  });

  it('should format time correctly in PM period', () => {
    const date = new Date('2024-12-25T15:45:00');
    expect(getFormattedTime(date)).toBe('03:45 PM');
  });

  it('should handle midnight correctly', () => {
    const date = new Date('2024-12-25T00:00:00');
    expect(getFormattedTime(date)).toBe('12:00 AM');
  });

  it('should handle noon correctly', () => {
    const date = new Date('2024-12-25T12:00:00');
    expect(getFormattedTime(date)).toBe('12:00 PM');
  });

  it('should pad single-digit hours and minutes with leading zeros', () => {
    const date = new Date('2024-12-25T01:05:00');
    expect(getFormattedTime(date)).toBe('01:05 AM');
  });

  it('should format times in the PM period that are exactly at the hour', () => {
    const date = new Date('2024-12-25T14:00:00');
    expect(getFormattedTime(date)).toBe('02:00 PM');
  });
});

describe('formatDate', () => {
  it('should return an empty string for an empty input', () => {
    expect(formatDate('')).toBe('');
  });

  it('should format month only', () => {
    expect(formatDate('12')).toBe('12');
  });

  it('should format month and day', () => {
    expect(formatDate('1231')).toBe('12/31');
    expect(formatDate('072')).toBe('07/2');
  });

  it('should format month, day, and year', () => {
    expect(formatDate('12312024')).toBe('12/31/2024');
    expect(formatDate('07022024')).toBe('07/02/2024');
  });

  it('should ignore non-numeric characters in the input', () => {
    expect(formatDate('12a3b12024')).toBe('12/31/2024');
    expect(formatDate('07-02-2024')).toBe('07/02/2024');
  });

  it('should truncate extra characters beyond the expected format', () => {
    expect(formatDate('123120240000')).toBe('12/31/2024');
    expect(formatDate('07022024extra')).toBe('07/02/2024');
  });

  it('should handle incomplete date input gracefully', () => {
    expect(formatDate('12312')).toBe('12/31/2');
  });
});
