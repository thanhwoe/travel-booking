export interface ToastProps {
  title: string;
  message?: string;
}

export interface ToastRef {
  show: (title: string, options?: Record<string, any>) => void;
}
