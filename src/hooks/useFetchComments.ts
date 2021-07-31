import { useEffect, useReducer, Reducer } from 'react';
import { Actions, StateFetch, fetchActions } from '../reducers/fetchReducer/actions';
import fetchReducer from '../reducers/fetchReducer';
import { getComments } from '../api/getComments';// import IGame from '../interfaces/IGame';

const initialState: StateFetch<any> = {
  isLoading: false,
  error: '',
  data: null,
};

const useFetchComments = (id: string) => {
  const [state, dispatch] = useReducer<
    Reducer<StateFetch<any>, fetchActions<any>>
  >(fetchReducer, initialState);
  const { data: comments, isLoading, error } = state;

  useEffect(() => {
    dispatch({ type: Actions.SET_LOADING });
    getComments(id)
      .then((commentsData) => {
        dispatch({ type: Actions.SET_SUCCESS, payload: { data: commentsData } });
      })
      .catch(() => {
        dispatch({
          type: Actions.SET_ERROR,
          payload: { error: 'There was an error while loading the pokemon' },
        });
      });
  }, [id]);

  return { comments, isLoading, error };
};

export default useFetchComments;
