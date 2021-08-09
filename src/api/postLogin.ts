/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import { ICredentials } from '../interfaces/ICredentials';
import { IUser } from '../interfaces/IUser';
import { THeaders } from '../types/THeaders';
import { post, getConfig } from './fetchInfo';

export const postLogin = async (body : ICredentials, headers: THeaders = {}) => {
  const config = getConfig(headers);

  const user = await post<ICredentials, IUser>(
    `${process.env.REACT_APP_API_URL}/auth/local`,
    body,
    config,
  );
  return user;
};
