/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import _ from 'lodash';

// import IGame from '../interfaces/IGame';
import { get } from './fetchInfo';

export const getComments = async (id: string) => {
  const comments = await get<any>(
    `${process.env.REACT_APP_API_URL}/games/${id}/comments?_limit=200`,
  );
  return _.orderBy(comments, ['id'], ['desc']);
};
