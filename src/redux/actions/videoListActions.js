import * as actionTypes from './actionTypes';

export const getVideoList = (region, nextPageToken) => ({
  type: actionTypes.GET_VIDEO_LIST,
  payload: {region, nextPageToken},
});

export const getVideoListSuccess = data => ({
  type: actionTypes.GET_VIDEO_LIST_SUCCESS,
  payload: data,
});

export const getVideoListFail = error => ({
  type: actionTypes.GET_VIDEO_LIST_FAIL,
  payload: error,
});

export const setLoading = value => ({
  type: actionTypes.SET_LOADING,
  payload: value,
});
