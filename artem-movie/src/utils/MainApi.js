class MainApi {
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

  _fetchBody(link, method, body) {
    return fetch(`${this._url}${link}`, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  getAllFilms() {
    this._headers = {
      ...this._headers,
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    };
    return this._fetch("/movies", "GET");
  }

  addNewFilm(movie) {
    return this._fetchBody("/movies", "POST", {
      id: movie.id,
      nameRU: movie.nameRU || "не указано",
      nameEN: movie.nameEN || "не указано",
      trailerLink: movie.trailerLink,
      image: movie.image.url,
      description: movie.description || "не указано",
      year: movie.year,
      duration: movie.duration,
      director: movie.director || "не указано",
      country: movie.country || "не указано",
    });
  }

  removeMovie(movieId) {
    return this._fetch(`/movies/${movieId}`, "DELETE");
  }

  getUserInfo() {
    this._headers = {
      ...this._headers,
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    };
    return this._fetch("/users/me", "GET");
  }

  editUserInfo(data) {
    return this._fetchBody("/users/me", "PATCH", data);
  }

  // Регистрация
  register({ name, email, password }) {
    return this._fetchBody("/signup", "POST", {
      name: name,
      email: email,
      password: password,
    });
  }

  // Авторизация
  authorize({ email, password }) {
    return this._fetchBody("/signin", "POST", {
      email: email,
      password: password,
    });
  }

  getContent = (jwt) => {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        Accept: "applications/json",
        "Content-type": "applications/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkResponse);
  };
}

// Создаем класс апи
const mainApi = new MainApi({
  url: "https://api.artem-movies.nomoredomains.icu",
  //url: "http://localhost:3000",
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export default mainApi;
