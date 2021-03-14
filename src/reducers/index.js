import { 
  ADD_FLIGHT_CARDS_REQUESTED,
  ADD_FLIGHT_CARDS_SUCCEEDED,
  ADD_FLIGHT_CARDS_FAILED,
  REMOVE_ALL_ITEMS,
} from '../utils/constants';

const initialState = {
  cardsData: [],
  loading: false,
  error: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ALL_ITEMS: {
      return  { ...state, cardsData: [] }
    }
    case ADD_FLIGHT_CARDS_REQUESTED: {
      return  { ...state, loading: true, error: false, }
    }
    case ADD_FLIGHT_CARDS_SUCCEEDED: {
      return  { ...state, cardsData: action.payload, loading: false, error: false, }
    }
    case ADD_FLIGHT_CARDS_FAILED: {
      return  { ...state, loading: false, error: true, }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
