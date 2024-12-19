export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export function getPageRange(page: number, limit: number) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  return [from, to];
}

export const generatePriceRange = (query: string) => {
  switch (query) {
    case '<50':
      return { min: 0, max: 50 };
    case '50-99':
      return { min: 50, max: 99 };

    case '100-200':
      return { min: 100, max: 200 };

    case '>200':
      return { min: 200 };

    default:
      return { min: 0, max: 0 };
  }
};
