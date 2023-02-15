class MoviesApi {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject("Что-то пошло не так :(");
  }

  _fetch(link, method) {
    return fetch(`${this._url}${link}`, {
      method: method,
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getAllFilms() {
    return this._fetch("/beatfilm-movies", "GET");
  }
}

// Создаем класс апи
const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co",
  headers: {
    "content-type": "application/json",
  },
});

export default moviesApi;
