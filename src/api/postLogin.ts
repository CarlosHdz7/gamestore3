/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import { ICredentials } from '../interfaces/ICredentials';
import { IUser } from '../interfaces/IUser';
import { THeaders } from '../types/THeaders';
import { post } from './fetchInfo';

export const postLogin = async (body : ICredentials, headers: THeaders = {}) => {
  const user = await post<ICredentials, IUser>(
    `${process.env.REACT_APP_API_URL}/auth/local`,
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
