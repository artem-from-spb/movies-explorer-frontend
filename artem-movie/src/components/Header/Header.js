import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import accountLogo from "../../images/header__account.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип проекта" />
      <div className="header__links">
        <a href="/" className="header__link">
          Фильмы
        </a>
        <a href="/" className="header__link">
          Сохранённые фильмы
        </a>
      </div>
      <div className="header__account">
        <img
          src={accountLogo}
          className="header__account-logo"
          alt="Логотип аккаунта"
        />
        <p className="header__account-text">Аккаунт</p>
      </div>
    </header>
  );
}

export default Header;
