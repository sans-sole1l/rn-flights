export class Api {
  constructor(config) {
    this._url = config.url;
  }

  getFlights() {
    return fetch(`${this._url}/flights`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  saveFlight(data) {
    return fetch(`${this._url}/flights`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  deleteFlight(flightId) {
    return fetch(`${this._url}/flights/${flightId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}

const apiRequest = new Api({
  url: 'https://api.liisflights.students.nomoreparties.xyz',
})

export default apiRequest;
