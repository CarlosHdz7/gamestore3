const useLocalStorage = <T>(initialValue: T | boolean = false) => {
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

  return { getValue, setValue, deleteValue };
};

export default useLocalStorage;
