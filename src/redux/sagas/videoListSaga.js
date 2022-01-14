import {put} from 'redux-saga/effects';
import axios from 'axios';
import {
  getVideoListSuccess,
  getVideoListFail,
} from '../actions/videoListActions';

export function* getVideoListSaga(action) {
  try {
    const location =
      action.payload.region.latitude + ',' + action.payload.region.longitude;
    const pageToken = action.payload.nextPageToken;
    const response = yield axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=${location}&locationRadius=10km&maxResults=10&pageToken=${pageToken}&type=video&key=AIzaSyCS7hK82TeJQ8PfzUeano8neraDMEmzLbw`,
    );
    yield put(getVideoListSuccess(response.data));
  } catch (error) {
    yield put(getVideoListFail(error));
  }
}
