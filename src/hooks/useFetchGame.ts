import {
  useEffect, useReducer, Reducer, useRef,
} from 'react';

import { Actions, StateFetch, fetchActions } from '../reducers/fetchReducer/actions';
import fetchReducer from '../reducers/fetchReducer';
import { getGameById } from '../api/getGameById';
import IGame from '../interfaces/IGame';

const initialState: StateFetch<IGame> = {
  isLoading: false,
  error: '',
  data: null,
};

const useFetchGame = (id: string) => {
  const [state, dispatch] = useReducer<
    Reducer<StateFetch<IGame>, fetchActions<IGame>>
  >(fetchReducer, initialState);
  const { data: game, isLoading, error } = state;
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    isMounted.current = true;
    dispatch({ type: Actions.SET_LOADING });
    getGameById(id)
      .then((gameData) => {
        if (isMounted.current) {
          dispatch({ type: Actions.SET_SUCCESS, payload: { data: gameData } });
        }
      })
      .catch(() => {
        if (isMounted.current) {
          dispatch({
            type: Actions.SET_ERROR,
            payload: { error: 'There was an error while loading the game' },
          });
        }
      });
    return () => {
      isMounted.current = false;
    };
  }, [id]);

  return { game, isLoading, error };
};

export default useFetchGame;
