export interface ISearchFilter {
  guests?: number;
  location?: string;
  dates?: { startDate: string | null; endDate: string | null };
  price?: number[];
}
