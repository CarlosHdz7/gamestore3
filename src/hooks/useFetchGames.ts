import {
  useEffect, Reducer, useReducer, useRef,
} from 'react';

import { Actions, StateFetch, fetchActions } from '../reducers/fetchReducer/actions';
import fetchReducer from '../reducers/fetchReducer';
import { getGames } from '../api/getGames';
import IGame from '../interfaces/IGame';

const initialState: StateFetch<Array<IGame>> = {
  isLoading: false,
  error: '',
  data: null,
};

const useFetchGames = (name: string) => {
  const [state, dispatch] = useReducer<
    Reducer<StateFetch<Array<IGame>>, fetchActions<Array<IGame>>>
  >(fetchReducer, initialState);
  const { data: games, isLoading, error } = state;
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    isMounted.current = true;
    dispatch({ type: Actions.SET_LOADING });
    getGames(name)
      .then((gamesData) => {
        if (isMounted.current) {
          dispatch({ type: Actions.SET_SUCCESS, payload: { data: gamesData } });
        }
      })
      .catch(() => {
        if (isMounted.current) {
          dispatch({
            type: Actions.SET_ERROR,
            payload: { error: 'There was an error while loading games' },
          });
        }
      });

    return () => {
      isMounted.current = false;
    };
  }, [name]);

  return { games, isLoading, error };
};

export default useFetchGames;
