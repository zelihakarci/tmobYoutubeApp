import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './index';
import {watchVideoList} from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
  const Store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(watchVideoList);
  return Store;
};
export const AppStore = createAppStore();
