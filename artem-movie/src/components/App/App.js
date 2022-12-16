import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from "../NotFoundPopup/NotFoundPopup";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SearchForm from "../SearchForm/SearchForm";
import Movies from "../Movies/Movies";
import Preloader from "../Preloader/Preloader";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <main>
            <Main />
          </main>
        </Route>
        <Route exact path="/movies">
          <SearchForm />
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/profile">
          <Profile email="aaa@aa.ru" title="Artem" />
        </Route>
        <Route exact path="/not-found">
          <NotFound />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        
      </Switch>
      <Footer />
      {/* <Preloader /> */}
    </div>
  );
}

export default App;
