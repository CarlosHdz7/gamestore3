/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import IGame from '../interfaces/IGame';
import { get } from './fetchInfo';

export const getGames = async (name: string = '') => {
  let query = `${process.env.REACT_APP_API_URL}/games?`;
  if (name) {
    query += `name_contains=${name}`;
  }

  const games = await get<Array<IGame>>(
    query,
  );
  return games;
};
