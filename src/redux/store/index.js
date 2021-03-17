import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
