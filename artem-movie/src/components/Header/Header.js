import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logo.png";
import accountLogo from "../../images/header__account.svg";
import openMenuIcon from "../../images/nav__open-icon.svg";

import Navigation from "../Navigation/Navigation";

function Header(props) {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  //constants
  const path =
    pathname !== "/movies" &&
    pathname !== "/saved-movies" &&
    pathname !== "/profile" &&
    pathname !== "/";

  const defaultPath = pathname === "/";

  //не отображаем header на 404, регистрации, логине
  if (path) {
    return <></>;
  }

  //закрытие меню по клику на ссылку
  function handleCloseMenu() {
    setShowMenu(false);
  }

  //открытие меню по нажатию на иконку хедера
  function handleOpenMenu() {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }

  return (
    <header className={`header ${pathname === "/" ? "header_color_blue" : ""}`}>
      <Link to="/">
        <img src={logo} className="header__logo" alt="Логотип проекта" />
      </Link>

      <div
        className={`header__links ${
          defaultPath ? "header__links_visible_false" : ""
        }`}
      >
        <Link to="/movies" className="header__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__link">
          Сохранённые фильмы
        </Link>
        <Link to="/profile">
          <div
            className={`header__account ${
              defaultPath ? "header__account_visible_false" : ""
            }`}
          >
            <img
              src={accountLogo}
              className="header__account-logo"
              alt="Логотип аккаунта"
            />
            <p className="header__account-text">Аккаунт</p>
          </div>
        </Link>
      </div>
      <img
        src={openMenuIcon}
        alt="Меню"
        className="header__open-icon"
        onClick={handleOpenMenu}
      />
      <div className={`header__navigation ${showMenu ? 'header__navigation_visible_true' : ''}`}>
        <Navigation handleCloseMenu={handleCloseMenu} />
      </div>

      <div
        className={`header__promo-links ${
          defaultPath ? "" : "header__promo-links_visible_false"
        }`}
      >
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
