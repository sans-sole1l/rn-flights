import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import { rootSaga } from '../sagas/rootSaga';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, saga));
saga.run(rootSaga);

export default store;
