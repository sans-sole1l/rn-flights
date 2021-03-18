import { takeLatest, put, call, select } from 'redux-saga/effects';
import { ADD_FAV_CARD } from '../../utils/constants';
import { updateCards, updateCurrentCard } from '../actions';

export function* addFavCardWatcher() {
  yield takeLatest(ADD_FAV_CARD, addFavCardWorker);
}

function* addFavCardWorker(action) {
  const state = yield select();
  // сайд эффект обновляем стейт карточек Browse
  const cardsPayload = yield call(replaceCard, action.payload, state.cards);
  yield put(updateCards(cardsPayload));
  // сайд эффект обновляем стейт текущей карточки
  yield put(updateCurrentCard(action.payload));
}

// обновляем массив карточек для Browse
export function replaceCard(markedCard, stateCards) {
  const index = stateCards.findIndex(el => el._id === markedCard._id);
  // создаем новый массив чтобы не мутировать стейт
  // по индексу заменяем в массиве карточку
  const refreshedCards = [...stateCards];
  refreshedCards.splice(index, 1, markedCard);
  return refreshedCards;
}
