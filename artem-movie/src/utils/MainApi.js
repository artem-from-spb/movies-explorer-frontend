// Пока без изменений из Место

class MainApi {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  // 0. repeat part
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject("Что-то пошло не так :(");
  }

  // 1. Загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // 2. Редактирование профиля
  editProfileData(data) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._checkResponse);
  }

  updateToken() {
    this._headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    };
  }
}

export const api = new MainApi({
  url: "http://localhost:3000/",
  headers: {
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "content-type": "application/json",
  },
});
