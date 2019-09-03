import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getFollowersInfo } from './api';
import { getApiKey } from './../Auth';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow)
}

export function* fetchFollowersFlow(action) {
  const apiKey = yield select(getApiKey);
  const response = yield call(getFollowersInfo, apiKey, action.payload);

  try {
    yield put(fetchSuccess(response));
  } catch ({ message }) {
    yield put(fetchFailure(message));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
