/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import _ from 'lodash';
import { IComment } from '../interfaces/IComment';

// import IGame from '../interfaces/IGame';
import { get } from './fetchInfo';

export const getComments = async (id: number) => {
  const comments = await get<Array<IComment>>(
    `${process.env.REACT_APP_API_URL}/games/${id}/comments?_limit=200`,
  );
  return _.orderBy(comments, ['id'], ['desc']);
};
