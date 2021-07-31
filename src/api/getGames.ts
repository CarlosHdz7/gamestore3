/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

// import IGame from '../interfaces/IGame';
import { get } from './fetchInfo';

export const getGames = async () => {
  const games = await get<any>(
    'https://trainee-gamerbox.herokuapp.com/games',
  );
  return games;
};
