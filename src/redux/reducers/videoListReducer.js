import * as actionTypes from '../actions/actionTypes';

const initialState = {
  videoList: [],
  error: null,
  loading: true,
  nextPageToken: '',
};

const getVideoListSuccess = (state, action) => {
  return {
    ...state,
    videoList: action.payload.items,
    loading: false,
    nextPageToken: action.payload.nextPageToken,
  };
};

const getVideoListFail = (state, action) => {
  return {
    ...state,
    error: action.payload.error,
    loading: false,
  };
};

const setLoading = (state, action) => {
  return {
    ...state,
    loading: action.payload,
  };
};


const videoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_VIDEO_LIST_SUCCESS:
      return getVideoListSuccess(state, action);
    case actionTypes.GET_VIDEO_LIST_FAIL:
      return getVideoListFail(state, action);
    case actionTypes.SET_LOADING:
      return setLoading(state, action);
    default:
      return state;
  }
};
export default videoListReducer;
