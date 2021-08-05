// import { useState } from "react";
import useLocalStorage from './useLocalStorage';

import { postLogin } from '../api/postLogin';
import { ICredentials } from '../interfaces/ICredentials';
import { IUser } from '../interfaces/IUser';

const useAuth = () => {
  const { getValue, setValue, deleteValue } = useLocalStorage<IUser>(false);

  const getUser = () => getValue('user');

  const login = async (credentials: ICredentials) => {
    const user = await postLogin(credentials);
    setValue<IUser>('user', user);
  };

  const logout = async (key: string) => {
    deleteValue(key);
  };

  return { getUser, login, logout };
};

export default useAuth;
