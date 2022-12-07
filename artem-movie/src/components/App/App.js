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

function App() {
  return (
    <div>
      <Header />
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
