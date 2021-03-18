import { takeLatest, put, call, select } from 'redux-saga/effects';
import { REM_FAV_CARD } from '../../utils/constants';
import { updateCards, updateCurrentCard } from '../actions';
import { replaceCard } from './addFavCardSaga';

export function* removeFavCardWatcher() {
  yield takeLatest(REM_FAV_CARD, removeFavCardWorker);
}

function* removeFavCardWorker(action) {
  const { cards } = yield select();
  // сайд эффект обновляем стейт карточек Browse
  const updatedCards = yield call(replaceCard, action.payload, cards);
  yield put(updateCards(updatedCards));
  // сайд эффект обновляем стейт текущей карточки
  yield put(updateCurrentCard(action.payload));
}
