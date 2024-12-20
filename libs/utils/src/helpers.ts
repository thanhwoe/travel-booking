import { ToastRef } from '@shared/interfaces';

let refs: { current: ToastRef | null }[] = [];

export const addNewRef = (newRef: ToastRef): void => {
  refs.push({
    current: newRef,
  });
};

export const removeOldRef = (oldRef: ToastRef | null): void => {
  refs = refs.filter((r) => r.current !== oldRef);
};

export const getRef = (): ToastRef | null => {
  const reversePriority = [...refs].reverse();
  const activeRef = reversePriority.find((ref) => ref?.current !== null);

  if (!activeRef) {
    return null;
  }

  return activeRef.current;
};
