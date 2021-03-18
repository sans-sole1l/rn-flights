import { 
  ADD_FLIGHT_CARDS_REQUESTED,
  ADD_FLIGHT_CARDS_SUCCEEDED,
  ADD_FLIGHT_CARDS_FAILED,
  ADD_FAV_CARD,
  REM_FAV_CARD,
  ADD_CUR_CARD,
  UPDATE_CARDS,
} from '../../utils/constants';

const initialState = {
  cards: [],
  favCards: [],
  currentCard: {},
  loading: false,
  error: false,
  errMsg: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLIGHT_CARDS_REQUESTED: {
      return  { ...state, loading: true, error: false, }
    }
    case ADD_FLIGHT_CARDS_SUCCEEDED: {
      return  { ...state, cards: action.payload, loading: false, error: false, }
    }
    case ADD_FLIGHT_CARDS_FAILED: {
      return  { ...state, loading: false, error: true, errMsg: action.payload }
    }
    case ADD_FAV_CARD: {
      return  { ...state, favCards: [...state.favCards, action.payload] }
    }
    case REM_FAV_CARD: {
      return  { ...state, favCards: filterFavCards(action.payload, [...state.favCards]) }
    }
    case UPDATE_CARDS: {
      return  { ...state, cards: action.payload }
    }
    case ADD_CUR_CARD: {
      return  { ...state, currentCard: action.payload }
    }
    default: {
      return state;
    }
  }
}

function filterFavCards(actionPayload, favCards) {
  return favCards.filter(i => i._id !== actionPayload._id);
}

export default reducer;
