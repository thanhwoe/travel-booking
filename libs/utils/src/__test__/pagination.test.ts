import {
  generatePagination,
  generatePriceRange,
  getPageRange,
} from '../pagination';

describe('generatePagination', () => {
  it('should return all page numbers when totalPages is 7 or less', () => {
    expect(generatePagination(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(generatePagination(3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should handle the first few pages when totalPages is greater than 7', () => {
    expect(generatePagination(1, 10)).toEqual([1, 2, 3, '...', 9, 10]);
    expect(generatePagination(3, 10)).toEqual([1, 2, 3, '...', 9, 10]);
  });

  it('should handle the last few pages when totalPages is greater than 7', () => {
    expect(generatePagination(9, 10)).toEqual([1, 2, '...', 8, 9, 10]);
    expect(generatePagination(10, 10)).toEqual([1, 2, '...', 8, 9, 10]);
  });

  it('should handle pages in the middle range when totalPages is greater than 7', () => {
    expect(generatePagination(5, 10)).toEqual([1, '...', 4, 5, 6, '...', 10]);
    expect(generatePagination(6, 12)).toEqual([1, '...', 5, 6, 7, '...', 12]);
  });

  it('should return correct pagination when currentPage is the only edge case', () => {
    expect(generatePagination(4, 10)).toEqual([1, '...', 3, 4, 5, '...', 10]);
    expect(generatePagination(7, 12)).toEqual([1, '...', 6, 7, 8, '...', 12]);
  });

  it('should return correct pagination when totalPages is much greater than 7', () => {
    expect(generatePagination(1, 100)).toEqual([1, 2, 3, '...', 99, 100]);
    expect(generatePagination(50, 100)).toEqual([
      1,
      '...',
      49,
      50,
      51,
      '...',
      100,
    ]);
  });
});

describe('getPageRange', () => {
  it('should calculate the correct range for the first page', () => {
    expect(getPageRange(1, 10)).toEqual([0, 9]);
    expect(getPageRange(1, 5)).toEqual([0, 4]);
  });

  it('should calculate the correct range for subsequent pages', () => {
    expect(getPageRange(2, 10)).toEqual([10, 19]);
    expect(getPageRange(3, 5)).toEqual([10, 14]);
  });

  it('should calculate the correct range when the page is very high', () => {
    expect(getPageRange(100, 10)).toEqual([990, 999]);
    expect(getPageRange(1000, 5)).toEqual([4995, 4999]);
  });

  it('should handle edge cases with small limits', () => {
    expect(getPageRange(1, 1)).toEqual([0, 0]);
    expect(getPageRange(2, 1)).toEqual([1, 1]);
  });

  it('should handle large limits', () => {
    expect(getPageRange(1, 100)).toEqual([0, 99]);
    expect(getPageRange(2, 100)).toEqual([100, 199]);
  });
});

describe('generatePriceRange', () => {
  it('should return the correct range for "<50"', () => {
    expect(generatePriceRange('<50')).toEqual({ min: 0, max: 50 });
  });

  it('should return the correct range for "50-99"', () => {
    expect(generatePriceRange('50-99')).toEqual({ min: 50, max: 99 });
  });

  it('should return the correct range for "100-200"', () => {
    expect(generatePriceRange('100-200')).toEqual({ min: 100, max: 200 });
  });

  it('should return the correct range for ">200"', () => {
    expect(generatePriceRange('>200')).toEqual({ min: 200 });
  });

  it('should return the default range for unknown queries', () => {
    expect(generatePriceRange('unknown')).toEqual({ min: 0, max: 0 });
    expect(generatePriceRange('')).toEqual({ min: 0, max: 0 });
  });

  it('should handle edge cases with unexpected input formats', () => {
    expect(generatePriceRange(null as unknown as string)).toEqual({
      min: 0,
      max: 0,
    });
    expect(generatePriceRange(undefined as unknown as string)).toEqual({
      min: 0,
      max: 0,
    });
    expect(generatePriceRange('random-string')).toEqual({ min: 0, max: 0 });
  });
});
