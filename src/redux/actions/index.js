import { 
  ADD_FLIGHT_CARDS_REQUESTED,
  ADD_FLIGHT_CARDS_SUCCEEDED,
  ADD_FLIGHT_CARDS_FAILED,
  REMOVE_ALL_ITEMS,
  ADD_FAV_CARD,
  ADD_CUR_CARD,
} from "../../utils/constants"
import flightsRequest from "../../utils/SkyscannerApi";
import { formatDate } from "../../utils/utils";

export const addFlightCardsRequest = () => {
  return { type: ADD_FLIGHT_CARDS_REQUESTED }
};

export const addFlightCardsSuccess = (data) => {
  return { type: ADD_FLIGHT_CARDS_SUCCEEDED, payload: data }
};

export const addFlightCardsError = (data) => {
  return { type: ADD_FLIGHT_CARDS_FAILED, payload: data }
};

export const updateFavCards = (data) => {
  return { type: ADD_FAV_CARD, payload: data }
};

export const updateCurrentCard = (data) => {
  return { type: ADD_CUR_CARD, payload: data }
};

export const removeItems = () => {
  return { type: REMOVE_ALL_ITEMS }
};

// поиск рейсов
export const fetchSearchCards = () => {
  return (dispatch, getState) => {
    dispatch(addFlightCardsRequest());

    flightsRequest.getFlights()
      .then(res => {
        if (res.Quotes.length === 0) {
          alert('Ooops! No flights found...');
          dispatch(addFlightCardsSuccess([]));
          return;
        }

        // приводим массив карточек в удобный формат
        const foundCards = res.Quotes.map(el => {
          const originPlace = res.Places.find(i => i.PlaceId === el.OutboundLeg.OriginId);
          const destinationPlace = res.Places.find(i => i.PlaceId === el.OutboundLeg.DestinationId);
          const departureDate = formatDate(el.OutboundLeg.DepartureDate);
          const carrier = res.Carriers.find(i => i.CarrierId === el.OutboundLeg.CarrierIds[0]);
          return {
            departure: originPlace.CityName,
            arrival: destinationPlace.CityName,
            departurePort: originPlace.IataCode,
            arrivalPort: destinationPlace.IataCode,
            date: departureDate,
            time: '14:50',
            airlines: carrier.Name,
            price: `${el.MinPrice} ${res.Currencies[0].Symbol}`,
            boarding: '14:00',
            _id: el.QuoteDateTime + el.OutboundLeg.DepartureDate + el.MinPrice,
            isLiked: false
          }
        });
        dispatch(addFlightCardsSuccess(foundCards));
      })
      .catch(err => {
        alert(err);
        dispatch(addFlightCardsError(err));
      });
  }
}

// добавление карточки в избранное
export const handleAddFavCard = (card) => {
  return (dispatch, getState) => {
    const { favCards, cards } = getState();
    const markedCard = { ...card, isLiked: true };
    // добавляем карточку в список избранного
    dispatch(updateFavCards([ ...favCards, markedCard ]));
    // обновляем стейт карточек в Browse
    updateCardsState(cards, markedCard, dispatch);
    // обновляем стейт текущей карточки
    dispatch(updateCurrentCard(markedCard));
  }
}

// удаление избранной карточки
export const handleRemoveFavCard = (card) => {
  return (dispatch, getState) => {
    const { favCards, cards } = getState();
    const unmarkedCard = { ...card, isLiked: false };
    const favCardsArray = [...favCards];
    // возвращаем отфильтрованный по условию массив и обновляем стейт
    const updated = favCardsArray.filter(i => i._id !== card._id);
    dispatch(updateFavCards(updated));
    // обновляем стейт карточек в Browse
    updateCardsState(cards, unmarkedCard, dispatch);
    // обновляем стейт текущей карточки
    dispatch(updateCurrentCard(unmarkedCard));
  }
}

// обновляем стейт карточек в Browse
function updateCardsState(stateCards, newCard, dispatch) {
  // создаем новый массив чтобы не мутировать стейт
  // по индексу заменяем в массиве карточку
  const index = stateCards.findIndex(el => el._id === newCard._id);
  const refreshedCards = [...stateCards];
  refreshedCards.splice(index, 1, newCard);
  dispatch(addFlightCardsSuccess(refreshedCards));
}
