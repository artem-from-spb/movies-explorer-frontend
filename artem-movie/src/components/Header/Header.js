import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logo.png";
import accountLogo from "../../images/header__account.svg";

function Header(props) {
  const { pathname } = useLocation();
  if (
    pathname !== "/movies" &&
    pathname !== "/saved-movies" &&
    pathname !== "/" &&
    pathname !== "/profile"
  ) {
    return <></>;
  }

  return (
    <header className="header header_color_blue">
      <Link to="/">
        <img src={logo} className="header__logo" alt="Логотип проекта" />
      </Link>

      <div className="header__links">
        <Link to="/movies" className="header__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__link">
          Сохранённые фильмы
        </Link>

        <div className="header__account">
          <img
            src={accountLogo}
            className="header__account-logo"
            alt="Логотип аккаунта"
          />
          <p className="header__account-text">Аккаунт</p>
        </div>
      </div>
      <div className="header__promo-links">
        <Link to="/signup" className="header__register-link">
          Регистрация
        </Link>
        <Link to="/signin" className="header__enter-link">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
