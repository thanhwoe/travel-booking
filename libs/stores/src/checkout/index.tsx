import { IStore } from './type';
import { create } from 'zustand';
import { createSelectors } from '../createSelector';

const store = create<IStore>()((set) => ({
  order: null,
  setOrder: (order) => set(() => ({ order })),
  clearOrder: () => set(() => ({ order: null })),
}));

export const useCheckoutStore = createSelectors(store);
