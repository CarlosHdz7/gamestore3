/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export enum Actions {
  SET_LOADING = 'SET_LOADING',
  SET_SUCCESS = 'SET_SUCCESS',
  SET_ERROR = 'SET_ERROR',
}

export type StateFetch<T> = {
  data: T | null,
  isLoading: boolean,
  error: string | null,
};

export type fetchActions<T> =
  | { type: Actions.SET_LOADING }
  | { type: Actions.SET_SUCCESS; payload: { data: T }}
  | { type: Actions.SET_ERROR; payload: { error: string }};
