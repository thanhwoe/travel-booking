export const PRODUCT_KEY = {
  all: (page?: number, query?: Record<string, string>) => [
    { scope: 'product', page, query },
  ],
};
