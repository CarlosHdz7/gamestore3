import { useState } from 'react';

const useLocalStorage = <T>(initialValue: T | boolean = false, initialKey : string) => {
  const [storedValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(initialKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const getValue = (key: string) => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  const setValue = <V>(key: string, value: V) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const deleteValue = (key: string) => {
    window.localStorage.removeItem(key);
  };

  return {
    getValue, setValue, deleteValue, storedValue,
  };
};

export default useLocalStorage;
