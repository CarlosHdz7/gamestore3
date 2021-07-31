/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

// import IGame from '../interfaces/IGame';
import { get } from './fetchInfo';

export const getComments = async (id: string) => {
  const comments = await get<any>(
    `https://trainee-gamerbox.herokuapp.com/games/${id}/comments?_limit=200`,
  );
  return comments;
};
