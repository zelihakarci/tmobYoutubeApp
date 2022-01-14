import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import {getVideoListSaga} from './videoListSaga';

export function* watchVideoList() {
  yield takeEvery(actionTypes.GET_VIDEO_LIST, getVideoListSaga);
}
