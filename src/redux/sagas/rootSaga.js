import { fork } from 'redux-saga/effects';
import { addFavCardWatcher } from './addFavCardSaga';
import { fetchCardsWatcher } from './fetchCardsSaga';
import { removeFavCardWatcher } from './removeFavCardSaga';

export function* rootSaga() {
  yield fork(fetchCardsWatcher);
  yield fork(addFavCardWatcher);
  yield fork(removeFavCardWatcher);
}
