import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from "../NotFoundPopup/NotFoundPopup";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

import { inputErrorConflict, inputErrorLogin } from "../../utils/constants";

function App() {
  const history = useHistory();
  const { pathname } = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });

  // Ошибки при логине и рег
  const [authError, setAuthError] = useState("");

  // Профиль, сообщение ОК при изменении
  const [isProfileMessage, setIsProfileMessage] = useState("");

  // Ошибка, если карточки не загрузятся
  const [cardsError, setCardsError] = useState("");

  // Загрузка
  const [isLoading, setIsLoading] = useState(false);

  // Поиск
  const [isSearch, setIsSearch] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  // Мои карточки
  const [savedMovies, setSavedMovies] = useState([]);

  // Начальная инициализация
  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((data) => {
          getSavedFilms(data._id);
          return setCurrentUser(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err.status}`);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn && (pathname === "/signin" || pathname === "/signup")) {
      history.push("/movies");
    }
  }, [loggedIn, history, pathname]);

  useEffect(() => {
    checkToken();
  }, []);

  function handleLogin({ email, password }) {
    setIsLoading(true);
    mainApi
      .authorize({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setAuthError(inputErrorLogin);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUser(user) {
    setIsLoading(true);
    mainApi
      .editUserInfo(user)
      .then((data) => {
        setCurrentUser(data);
        handleFormsErrorMessage("Данные обновлены")
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleFormsErrorMessage(message) {
    setIsProfileMessage(message);
    setTimeout(() => {
      setIsProfileMessage("");
    }, 2000);
  }

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    mainApi
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email: email, password: password });
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setAuthError(inputErrorConflict);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function checkToken() {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .getContent(token)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
          history.push(pathname);
        })
        .catch((err) => {
          handleLogout();
          console.log(`Ошибка: ${err}`);
        });
    }
  }

  function handleLogout() {
    setCurrentUser({
      name: "",
      email: "",
      _id: "",
    });
    setIsSearch(false);
    setLoggedIn(false);
    setFilteredMovies([]);
    setFilteredCards([]);
    setSavedMovies([]);

    localStorage.removeItem("isShortFilm");
    localStorage.removeItem("isSearch");
    localStorage.removeItem("jwt");
    localStorage.removeItem("searchText");

    localStorage.removeItem("filteredMovies");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("movies");

    history.push("/");
  }

  function searchFilms(filmName, isShortFilm) {
    const regex = new RegExp(filmName, "i");
    if (JSON.parse(localStorage.getItem("movies")) === null) {
      setIsLoading(true);
      moviesApi
        .getAllFilms()
        .then((data) => {
          localStorage.setItem("movies", JSON.stringify(data));
          filteredAllMovies(data, regex, isShortFilm);
        })
        .catch((err) => {
          setCardsError(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filteredAllMovies(
        JSON.parse(localStorage.getItem("movies")),
        regex,
        isShortFilm
      );
    }
  }

  function searchSavedFilms(filmName, isShortFilm) {
    const regex = new RegExp(filmName, "i");

    setFilteredSavedMovies(
      savedMovies.filter((card) => regex.test(card.nameRU))
    );

    if (isShortFilm) {
      setFilteredSavedMovies(savedMovies.filter((card) => card.duration < 41));
    }
  }

  function getSavedFilms(userId) {
    mainApi
      .getAllFilms()
      .then((data) => {
        setSavedMovies(data.filter((card) => card.owner === userId));
        console.log(savedMovies);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify(data.filter((card) => card.owner === userId))
        );

        setFilteredSavedMovies(data.filter((card) => card.owner === userId));
      })
      .catch((err) => console.log(err));
  }

  function filteredAllMovies(movies, regex, isShortFilm) {
    setIsSearch(true);
    localStorage.setItem("isSearch", JSON.stringify(true));

    if (isShortFilm) {
      setFilteredMovies(
        movies.filter((card) => regex.test(card.nameRU) && card.duration < 41)
      );
      localStorage.setItem(
        "filteredMovies",
        JSON.stringify(
          movies.filter((card) => regex.test(card.nameRU) && card.duration < 41)
        )
      );
    } else {
      setFilteredMovies(movies.filter((card) => regex.test(card.nameRU)));
      localStorage.setItem(
        "filteredMovies",
        JSON.stringify(movies.filter((card) => regex.test(card.nameRU)))
      );
    }
  }

  function handleLikeMovie(card) {
    mainApi
      .addNewFilm(card)
      .then((card) => {
        setSavedMovies([...savedMovies, card]);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([...savedMovies, card])
        );
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  function removeMovie(cardId) {
    savedMovies.forEach((movie) => {
      if (movie.id === cardId) {
        mainApi
          .removeMovie(movie._id || movie.id || movie.movieId)
          .then((res) => {
            setSavedMovies(savedMovies.filter((card) => card.id !== cardId));
            localStorage.getItem(
              "savedMovies",
              savedMovies.filter((card) => card.id !== cardId)
            );
            setFilteredSavedMovies(
              filteredSavedMovies.filter((card) => card.id !== cardId)
            );
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
      }
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        {pathname === "/" ||
        pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile" ? (
          <Header loggedIn={loggedIn} />
        ) : (
          <></>
        )}

        <Switch>
          <Route exact path="/">
            <main>
              <Main />
            </main>
          </Route>
          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Movies
              isSearch={isSearch}
              searchFilms={searchFilms}
              filteredMovies={filteredMovies}
              setFilteredMovies={setFilteredMovies}
              setIsSearch={setIsSearch}
              setLikeMovie={handleLikeMovie}
              removeMovie={removeMovie}
              savedMovies={savedMovies}
              filteredCards={filteredCards}
              setFilteredCards={setFilteredCards}
              errorFind={cardsError}
              isLoading={isLoading}
            />
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <SavedMovies
              savedMovies={savedMovies}
              filteredSavedMovies={filteredSavedMovies}
              removeMovie={removeMovie}
              searchSavedFilms={searchSavedFilms}
              isLoading={isLoading}
            />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              handleLogOut={handleLogout}
              onUpdateUser={handleUpdateUser}
              profileChangeOkMessage={isProfileMessage}
              isLoading={isLoading}
            />
          </ProtectedRoute>
          <Route exact path="/signup">
            <Register onSubmit={handleRegister} authErrorCommon={authError} />
          </Route>
          <Route exact path="/signin">
            <Login onLogin={handleLogin} authErrorCommon={authError} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
