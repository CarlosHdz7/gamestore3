/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

// import IGame from '../interfaces/IGame';
import IGame from '../interfaces/IGame';
import { get } from './fetchInfo';

export const getGameById = async (id: string) => {
  const game = await get<IGame>(
    `${process.env.REACT_APP_API_URL}/games/${id}`,
  );
  return game;
};
