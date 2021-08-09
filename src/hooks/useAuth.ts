import useLocalStorage from './useLocalStorage';

import { postLogin } from '../api/postLogin';
import { ICredentials } from '../interfaces/ICredentials';
import { IUser } from '../interfaces/IUser';

const useAuth = () => {
  const { getValue, setValue, deleteValue } = useLocalStorage<IUser>(false);

  const getUser = (): IUser => getValue('user');

  const login = async (credentials: ICredentials) => {
    const user = await postLogin(credentials);
    setValue<IUser>('user', user);
  };

  const logout = async (key: string) => {
    await deleteValue(key);
  };

  return { getUser, login, logout };
};

export default useAuth;
