import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from "../NotFoundPopup/NotFoundPopup";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import Preloader from "../Preloader/Preloader";
import SavedMovies from "../SavedMovies/SavedMovies";

import { api } from "../../utils/MainApi";

import * as Auth from "../../utils/Auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();
  const { pathname } = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // значения для Профиля
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function checkToken() {
    const token = localStorage.getItem("jwt");
    if (token) {
      Auth.checkData(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setEmail(res.email);
            setName(res.name);
            console.log(loggedIn);
          }
        })
        .catch((err) => alert(err));
    }
  }

  useEffect(() => {
    if (loggedIn) {
      api.updateToken();
      api
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
          console.log(loggedIn);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn, history]);

  useEffect(() => {
    checkToken();
    console.log(loggedIn);
  }, [history]);

  function handleRegister({ name, email, password }) {
    Auth.register(name, email, password)
      .then(() => {
        console.log("Вы успешно зарегистрировались!");
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
        console.log("Что-то пошло не так! Попробуйте ещё раз.");
      });
  }

  function handleLogin({ email, password }) {
    Auth.authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          checkToken();

          console.log(loggedIn);

          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/");
    console.log(loggedIn);
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
          <ProtectedRoute exact path="/movies" loggedIn={loggedIn}>
            <Movies />
          </ProtectedRoute>
          <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn}>
            <SavedMovies />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
            <Profile email={email} name={name} handleLogOut={handleLogOut} />
          </ProtectedRoute>
          <Route exact path="/signup">
            <Register onSubmit={handleRegister} />
          </Route>
          <Route exact path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
        {/* <Preloader /> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
