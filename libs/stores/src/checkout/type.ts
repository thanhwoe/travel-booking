import { IRoom } from '@shared/interfaces';

export interface IState {
  order: {
    room: IRoom;
    checkIn: Date;
    checkOut: Date;
    guests: number;
    totalPrice: number;
  } | null;
}

export interface IAction {
  setOrder: (order: IState['order']) => void;
  clearOrder: () => void;
}

export type IStore = IState & IAction;
