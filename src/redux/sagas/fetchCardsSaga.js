import { takeLatest, put, call } from 'redux-saga/effects';
import { ADD_FLIGHT_CARDS_REQUESTED } from '../../utils/constants';
import flightsRequest from '../../utils/SkyscannerApi';
import { formatDate } from '../../utils/utils';
import { addFlightCardsError, addFlightCardsSuccess } from '../actions';

export function* fetchCardsWatcher() {
  yield takeLatest(ADD_FLIGHT_CARDS_REQUESTED, fetchCardsWorker);
}

function* fetchCardsWorker() {
  try {
    const payload = yield call(fetchCards);
    yield put(addFlightCardsSuccess(payload));
  } catch (err) {
    yield put(addFlightCardsError(err))
    alert(err);
  }
}

function fetchCards() {
  return flightsRequest.getFlights()
    .then(res => {
      if (res.Quotes.length === 0) {
        alert('Ooops! No flights found...');
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
      return foundCards;
    })
}
