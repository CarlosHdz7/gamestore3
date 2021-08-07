import {
  useEffect, useReducer, Reducer, useRef,
} from 'react';

import { Actions, StateFetch, fetchActions } from '../reducers/fetchReducer/actions';
import fetchReducer from '../reducers/fetchReducer';
import { getComments } from '../api/getComments';
import { IComment } from '../interfaces/IComment';

const initialState: StateFetch<Array<IComment>> = {
  isLoading: false,
  error: '',
  data: null,
};

const useFetchComments = (id: number) => {
  const [state, dispatch] = useReducer<
    Reducer<StateFetch<Array<IComment>>, fetchActions<Array<IComment>>>
  >(fetchReducer, initialState);
  const { data: comments, isLoading, error } = state;
  const isMounted = useRef<boolean>(true);

  const getCommentsRefresh = () => {
    isMounted.current = true;
    dispatch({ type: Actions.SET_LOADING });
    getComments(id)
      .then((commentsData) => {
        if (isMounted.current) {
          dispatch({ type: Actions.SET_SUCCESS, payload: { data: commentsData } });
        }
      })
      .catch(() => {
        dispatch({
          type: Actions.SET_ERROR,
          payload: { error: 'There was an error while loading the pokemon' },
        });
      });
  };

  useEffect(() => {
    getCommentsRefresh();
    return () => {
      isMounted.current = false;
    };
  }, [id]);

  return {
    comments, isLoading, error, getCommentsRefresh,
  };
};

export default useFetchComments;
