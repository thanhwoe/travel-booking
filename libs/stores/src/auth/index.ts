import { createJSONStorage, persist } from 'zustand/middleware';
import { IStore } from './type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createSelectors } from '../createSelector';

const store = create<IStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => {
        set({ user });
      },
      clearUser: () => {
        set({ user: null });
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export const useAuthStore = createSelectors(store);
