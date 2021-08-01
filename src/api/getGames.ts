/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import IGame from '../interfaces/IGame';
import { get } from './fetchInfo';

export const getGames = async (name: string = '') => {
  const games = await get<Array<IGame>>(
    `https://trainee-gamerbox.herokuapp.com/games?name_contains=${name}`,
  );
  return games;
};
