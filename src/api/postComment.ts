/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

// import { ICredentials } from '../interfaces/ICredentials';
// import { IUser } from '../interfaces/IUser';
import { post } from './fetchInfo';

export const postComment = async (id: string, body : any, headers: any = {}) => {
  const comment = await post<any, any>(
    `${process.env.REACT_APP_API_URL}/games/${id}/comment`,
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
  return comment;
};
