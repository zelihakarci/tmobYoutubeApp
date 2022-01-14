import {combineReducers} from 'redux';
import regionReducer from './regionReducer';
import videoListReducer from './videoListReducer';

const reducers = combineReducers({
  regionReducer,
  videoListReducer,
});

export default reducers;
