/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import { post } from './fetchInfo';

export const postLogin = async (body : any, headers: any = {}) => {
  const user = await post<any, any>(
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
