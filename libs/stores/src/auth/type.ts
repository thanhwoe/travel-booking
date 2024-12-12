import { type User } from '@supabase/supabase-js';

export interface IState {
  user: User | null;
}

export interface IAction {
  setUser: (user: User) => void;
  clearUser: () => void;
}

export type IStore = IState & IAction;
