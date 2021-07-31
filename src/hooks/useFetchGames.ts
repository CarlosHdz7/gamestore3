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

const useFetchGames = () => {
  const [state, dispatch] = useReducer<
    Reducer<StateFetch<Array<IGame>>, fetchActions<Array<IGame>>>
  >(fetchReducer, initialState);
  const { data: games, isLoading, error } = state;
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    isMounted.current = true;
    dispatch({ type: Actions.SET_LOADING });
    getGames()
      .then((gamesData) => {
        if (isMounted.current) {
          dispatch({ type: Actions.SET_SUCCESS, payload: { data: gamesData } });
        }
      })
      .catch(() => {
        dispatch({
          type: Actions.SET_ERROR,
          payload: { error: 'There was an error while loading the pokemon' },
        });
      });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { games, isLoading, error };
};

export default useFetchGames;
