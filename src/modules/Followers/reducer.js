import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { createSelector } from 'reselect';

const data = handleActions(
  {
    [fetchRequest]: () => [],
    [fetchSuccess]: (_state, action) => action.payload
  },
  []
)

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
)

const error = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchFailure]: (_state, action) => action.payload
  },
  null
)

export const getData = createSelector(
  state => state.followers.data,
  data => !!data ? data : null
)

export const getIsLoading = createSelector(
  state => state.followers.isLoading,
  isLoading => isLoading
)

export const getError = createSelector(
  state => state.followers.error,
  error => error
)

export default combineReducers({ data, isLoading, error })