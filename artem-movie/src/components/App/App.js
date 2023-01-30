import "./App.css";
import React, { useState, useEffect } from "react";
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

import { api } from "../../utils/MainApi";

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
            setLoggedIn(true);
            setEmail(res.email);
            setName(res.name);
          }
        })
        .catch((err) => alert(err));
    }
  }

  useEffect(() => {
    if (loggedIn) {
      api.updateToken();
      api.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn, history]);

  useEffect(() => {
    checkToken();
  }, [history]);


  function handleRegister({ name, email, password }) {
    Auth.register(name, email, password)
      .then(() => {
        console.log("Вы успешно зарегистрировались!");
        handleLogin({ email, password })
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
          console.log("LOGIN OK");
          console.log(loggedIn);
          console.log(res.token);
          history.push("/movies");
          setEmail(res.email);
          setName(res.name);
          console.log(email);
          console.log(name);
        }
      })
      .catch((err) => {
        console.log(err);
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
          <ProtectedRoute exact path="/movies" loggedIn={loggedIn}>
            <Movies />
          </ProtectedRoute>
          <ProtectedRoute exact path="/saved-movies"  loggedIn={loggedIn}>
            <SavedMovies />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
            <Profile email={email} name={name} />
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
          {/* <Route path="*">
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
          </Route> */}
        </Switch>
        <Footer />
        {/* <Preloader /> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
