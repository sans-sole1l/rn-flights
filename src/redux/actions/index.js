import { 
  ADD_FLIGHT_CARDS_REQUESTED,
  ADD_FLIGHT_CARDS_SUCCEEDED,
  ADD_FLIGHT_CARDS_FAILED,
  ADD_FAV_CARD,
  REM_FAV_CARD,
  UPDATE_CARDS,
  ADD_CUR_CARD,
} from "../../utils/constants"

export const addFlightCardsRequest = () => {
  return { type: ADD_FLIGHT_CARDS_REQUESTED }
};

export const addFlightCardsSuccess = (data) => {
  return { type: ADD_FLIGHT_CARDS_SUCCEEDED, payload: data }
};

export const addFlightCardsError = (data) => {
  return { type: ADD_FLIGHT_CARDS_FAILED, payload: data }
};

export const addFavCard = (data) => {
  return { type: ADD_FAV_CARD, payload: data }
};

export const removeFavCard = (data) => {
  return { type: REM_FAV_CARD, payload: data }
};

export const updateCards = (data) => {
  return { type: UPDATE_CARDS, payload: data }
};

export const updateCurrentCard = (data) => {
  return { type: ADD_CUR_CARD, payload: data }
};
