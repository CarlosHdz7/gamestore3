const useLocalStorage = (initialValue: any = false) => {
  const getValue = (key: any) => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  const setValue = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const deleteValue = (key: any) => {
    window.localStorage.removeItem(key);
  };

  return { getValue, setValue, deleteValue };
};

export default useLocalStorage;
