import { IUser } from './IUser';

export interface ISideButton{
  id: number,
  path: string,
  icon: string,
  title: string,
  showSideBar: () => void,
  logoutUser: () => void,
  storedValue: IUser | boolean
}
