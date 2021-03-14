import { 
  ADD_FLIGHT_CARDS_REQUESTED,
  ADD_FLIGHT_CARDS_SUCCEEDED,
  ADD_FLIGHT_CARDS_FAILED,
  REMOVE_ALL_ITEMS,
} from "../utils/constants"
import flightsRequest from "../utils/SkyscannerApi";
import apiRequest from "../utils/api";
import { formatEnDate } from "../utils/utils";

export const addFlightCardsRequest = () => {
  return { type: ADD_FLIGHT_CARDS_REQUESTED }
};

export const addFlightCardsSuccess = (data) => {
  return { type: ADD_FLIGHT_CARDS_SUCCEEDED, payload: data }
};

export const addFlightCardsError = () => {
  return { type: ADD_FLIGHT_CARDS_FAILED }
};

export const removeItems = () => {
  return { type: REMOVE_ALL_ITEMS }
};

// добавление карточки в избранное
export const fetchAddFavCard = (card) => {
  return (dispatch, getState) => {
    dispatch(addFlightCardsRequest());
    // отделяем ненужные поля деструктуризацией
    const { __v, isMarked, ...favCard } = card;
    
    apiRequest.saveFlight(favCard)
      .then((newCard) => {
        const markedCard = {...newCard, isMarked: true};
        const cardKey = card.price + card.date;
        const { cardsData } = getState();

        // создаем новый массив чтобы не мутировать стейт
        // по индексу заменяем в массиве карточку
        const refreshedCards = [...cardsData];
        const index = cardsData.findIndex(el => (el.price + el.date) === cardKey);
        refreshedCards.splice(index, 1, markedCard);
        dispatch(addFlightCardsSuccess(refreshedCards));
        localStorage.setItem('cards', JSON.stringify(refreshedCards));
      })
      .catch(err => {
        console.log(err);
        dispatch(addFlightCardsError());
      });
  }
}

// удаление избранной карточки
export const fetchRemoveFavCard = (card) => {
  return (dispatch, getState) => {
    dispatch(addFlightCardsRequest());
    apiRequest.deleteFlight(card._id)
      .then(res => {
        console.log(res)
        const { _id, ...newCard } = card;
        const cardKey = card.price + card.date;
        const { cardsData } = getState();
        const refreshedCards = [...cardsData]
        const index = cardsData.findIndex(el => (el.price + el.date) === cardKey);
        refreshedCards.splice(index, 1, {...newCard, isMarked: false});
        dispatch(addFlightCardsSuccess(refreshedCards));
        localStorage.setItem('cards', JSON.stringify(refreshedCards)); 
      })
      .catch(err => {
        console.log(err);
        dispatch(addFlightCardsError());
      });
  }
}

// поиск рейсов
export const fetchSearchCards = (date) => {
  return (dispatch, getState) => {
    dispatch(addFlightCardsRequest());

    flightsRequest.getFlights(date)
      .then(res => {
        const { cardsData } = getState();

        if (res.Quotes.length === 0) {
          console.log('Рейсы не найдены');
          dispatch(addFlightCardsSuccess([...cardsData]));
          return;
        }

        // приводим массив карточек в удобный формат
        const foundCards = res.Quotes.map(el => {
          const originPlace = res.Places.find(i => i.PlaceId === el.OutboundLeg.OriginId);
          const destinationPlace = res.Places.find(i => i.PlaceId === el.OutboundLeg.DestinationId);
          const departureDate = formatEnDate(el.OutboundLeg.DepartureDate);
          const carrier = res.Carriers.find(i => i.CarrierId === el.OutboundLeg.CarrierIds[0]);

          return {
            departure: `${originPlace.CityName} (${originPlace.IataCode})`,
            arrival: `${destinationPlace.CityName} (${destinationPlace.IataCode})`,
            date: departureDate,
            time: '13:00',
            airlines: carrier.Name,
            price: `${el.MinPrice} ${res.Currencies[0].Symbol}`,
            isMarked: false
          }
        });
        localStorage.setItem('cards', JSON.stringify([...cardsData, ...foundCards]));
        dispatch(addFlightCardsSuccess([...cardsData, ...foundCards]));
      })
      .catch(err => {
        console.log(err);
        dispatch(addFlightCardsError());
      });
  }
}

// получение массива избранных карточек
export const fetchFavoriteCards = () => {
  return (dispatch, getState) => {
    dispatch(addFlightCardsRequest());

    apiRequest.getFlights()
      .then(cards => {
        const markedCards = cards.map(c => {
          return {...c, isMarked: true};
        });
        dispatch(addFlightCardsSuccess(markedCards));
      })
      .catch(err => {
        console.log(err);
        dispatch(addFlightCardsError());
      });
  }
}