import "./App.css";
import React, { useState } from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
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

import { MainApi } from "../../utils/MainApi";

import * as Auth from "../../utils/Auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  // ////
  const history = useHistory();

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
            setEmail(res.email);
            setName(res.name);
            setLoggedIn(true);

            history.push("/movies");
          }
        })
        .catch((err) => alert(err));
    }
  }

  function handleRegister({ name, email, password }) {
    Auth.register(name, email, password)
      .then(() => {
        // setMessage("Вы успешно зарегистрировались!");
        history.push("/movies");
      })
      .catch(() => {
        // setMessage("Что-то пошло не так! Попробуйте ещё раз.");
      });
  }

  function handleLogin({ email, password }) {
    Auth.authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          checkToken();
          history.push("/");
        }
      })
      .catch(() => {

      });
  }

  function handleLogOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <main>
              <Main />
            </main>
          </Route>
          <ProtectedRoute exact path="/movies">
            <Movies />
          </ProtectedRoute>
          <ProtectedRoute exact path="/saved-movies">
            <SavedMovies />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile">
            <Profile email={email} title={name} />
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
