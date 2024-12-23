export const PRODUCT_KEY = {
  all: [{ scope: 'product' }] as const,
  lists: () => [...PRODUCT_KEY.all, 'list'] as const,
  list: (page?: number, query?: any) =>
    [...PRODUCT_KEY.lists(), page, query] as const,
  details: () => [...PRODUCT_KEY.all, 'detail'] as const,
  detail: (id: string) => [...PRODUCT_KEY.details(), id] as const,
};
