/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

// import IGame from '../interfaces/IGame';
import IGame from '../interfaces/IGame';
import { get } from './fetchInfo';

export const getGameById = async (id: number) => {
  const game = await get<IGame>(
    `https://trainee-gamerbox.herokuapp.com/games/${id}`,
  );
  return game;
};
