import { currentMonth } from './utils';

export class SkyscannerApi {
  constructor(config) {
    this._url = config.url;
  }

  getFlights() {
    return fetch(`${this._url}/apiservices/browseroutes/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/${currentMonth}`, {
        method: 'GET',
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}

const flightsRequest = new SkyscannerApi({
  url: "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
})

const apiKey = '30806d9b5amsh71a12016a6a358fp1cba0djsn1cc9b4897124'

export default flightsRequest;
