import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from "../NotFoundPopup/NotFoundPopup";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";

function App() {
  return (
    <div>
      <Header />
      <SearchForm />
      <MoviesCard
        link="http://almode.ru/uploads/posts/2021-05/1622193827_3-p-yaponskii-sad-3.jpg"
        name="First Card"
        time="1ч42м"
      />
      <Profile email="aaa@aa.ru" title="Artem" />
      <Promo />
      <main>
        <Main />
      </main>
      <Footer />
      <NotFound />
      <Register />
      <Login />
    </div>
  );
}

export default App;
