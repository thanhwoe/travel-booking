export const PRODUCT_KEY = {
  all: (page?: number, query?: any) => [{ scope: 'product', page, query }],
  detail: (id: string) => [{ scope: 'product', id }],
};
