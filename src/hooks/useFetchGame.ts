import { useEffect, useReducer, Reducer } from 'react';
import { Actions, StateFetch, fetchActions } from '../reducers/fetchReducer/actions';
import fetchReducer from '../reducers/fetchReducer';
import { getGameById } from '../api/getGameById';// import IGame from '../interfaces/IGame';
import IGame from '../interfaces/IGame';

const initialState: StateFetch<IGame> = {
  isLoading: false,
  error: '',
  data: null,
};

const useFetchGame = (id: number) => {
  const [state, dispatch] = useReducer<
    Reducer<StateFetch<IGame>, fetchActions<IGame>>
  >(fetchReducer, initialState);
  const { data: game, isLoading, error } = state;

  useEffect(() => {
    dispatch({ type: Actions.SET_LOADING });
    getGameById(id)
      .then((gameData) => {
        dispatch({ type: Actions.SET_SUCCESS, payload: { data: gameData } });
      })
      .catch(() => {
        dispatch({
          type: Actions.SET_ERROR,
          payload: { error: 'There was an error while loading the pokemon' },
        });
      });
  }, [id]);

  return { game, isLoading, error };
};

export default useFetchGame;
