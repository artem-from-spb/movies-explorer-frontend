import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logoAuth.svg";
import accountLogo from "../../images/header__account.svg";
import openMenuIcon from "../../images/nav__open-icon.svg";

import NavTab from "../NavTab/NavTab";

function Header({ loggedIn }) {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  //закрытие меню по клику на ссылку/нажитию на крестик
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
      {loggedIn ? (
        <>
          <nav className="header__links">
            <NavLink
              to="/movies"
              className="header__link"
              activeClassName="header__link_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="header__link"
              activeClassName="header__link_active"
            >
              Сохранённые фильмы
            </NavLink>
            <Link to="/profile">
              <div className="header__account">
                <img
                  src={accountLogo}
                  className="header__account-logo"
                  alt="Логотип аккаунта"
                />
                <p className="header__account-text">Аккаунт</p>
              </div>
            </Link>
          </nav>

          {/* Меню */}
          <img
            src={openMenuIcon}
            alt="Меню"
            className="header__open-icon"
            onClick={handleOpenMenu}
          />
          <div
            className={`header__nav ${
              showMenu ? "header__nav_visible_true" : ""
            }`}
          >
            <NavTab handleCloseMenu={handleCloseMenu} />
          </div>
          {/* /Меню */}

        </>
      ) : (
        <div className="header__promo-links">
          <Link to="/signup" className="header__register-link">
            Регистрация
          </Link>
          <Link to="/signin" className="header__enter-link">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
