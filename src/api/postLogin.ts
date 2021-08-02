/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import { ICredentials } from '../interfaces/ICredentials';
import { IUser } from '../interfaces/IUser';
import { post } from './fetchInfo';

export const postLogin = async (body : ICredentials, headers: any = {}) => {
  const user = await post<ICredentials, IUser>(
    'https://trainee-gamerbox.herokuapp.com/auth/local',
    body,
    {
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    },
  );
  return user;
};
