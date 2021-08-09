/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import useAuth from '../hooks/useAuth';
import { IComment } from '../interfaces/IComment';
import { TComment } from '../types/TComment';
import { THeaders } from '../types/THeaders';
import { post, getConfig } from './fetchInfo';

export const postComment = async (id: string, body : TComment) => {
  const { getUser } = useAuth();
  const storedValue = getUser();

  const headers: THeaders = {
    Authorization: `Bearer ${storedValue.jwt}`,
  };

  const config = getConfig(headers);

  const comment = await post<TComment, IComment>(
    `${process.env.REACT_APP_API_URL}/games/${id}/comment`,
    body,
    config,
  );
  return comment;
};
