import React, { useState } from 'react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  message?: string;
  type: ToastType;
  duration?: number;
}

interface UseToastReturn {
  toast: (options: { title?: string; description?: string; message?: string; type?: ToastType; duration?: number }) => string;
  removeToast: (id: string) => void;
  ToastContainer: React.FC;
}

export function useToast(): UseToastReturn {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = ({
    title,
    description,
    message,
    type = 'info',
    duration = 3000
  }: { 
    title?: string; 
    description?: string; 
    message?: string;
    type?: ToastType; 
    duration?: number 
  }): string => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { 
      id, 
      title,
      description,
      message,
      type, 
      duration 
    };
    
    setToasts((prevToasts) => [...prevToasts, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  };

  const removeToast = (id: string): void => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const ToastContainer: React.FC = () => {
    return (
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`px-4 py-2 rounded-md shadow-lg ${
              toast.type === 'success' ? 'bg-green-500' :
              toast.type === 'error' ? 'bg-red-500' :
              toast.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
            } text-white max-w-md`}
          >
            {toast.title && <div className="font-bold">{toast.title}</div>}
            {toast.description && <div>{toast.description}</div>}
            {toast.message && <div>{toast.message}</div>}
          </div>
        ))}
      </div>
    );
  };

  return {
    toast: showToast,
    removeToast,
    ToastContainer,
  };
}
