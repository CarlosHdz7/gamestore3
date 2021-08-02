// import { useState } from "react";
import useLocalStorage from './useLocalStorage';

import { postLogin } from '../api/postLogin';

const useAuth = () => {
  // const [storedValue, setValue, deleteValue] = useLocalStorage('user');
  const [storedValue, setValue] = useLocalStorage('user');

  const login = async (credentials: any) => {
    const user = await postLogin(credentials);
    setValue(user);
  };

  // const logout = () => {

  // };

  return { storedValue, login };
};

export default useAuth;
