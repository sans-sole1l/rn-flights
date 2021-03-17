import { 
  ADD_FLIGHT_CARDS_REQUESTED,
  ADD_FLIGHT_CARDS_SUCCEEDED,
  ADD_FLIGHT_CARDS_FAILED,
  CLEAR_STATE,
  ADD_FAV_CARD,
  ADD_CUR_CARD,
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
    case CLEAR_STATE: {
      return  { ...state, cards: [], favCards: [], loading: false, error: false, errMsg: '' }
    }
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
      return  { ...state, favCards: action.payload }
    }
    case ADD_CUR_CARD: {
      return  { ...state, currentCard: action.payload }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
