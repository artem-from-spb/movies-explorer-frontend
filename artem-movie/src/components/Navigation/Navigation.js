import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

import accountLogo from "../../images/header__account.svg";
import closeIcon from "../../images/nav__closeIcon.svg";

function Navigation({ handleCloseMenu }) {
  return (
    <div className="navigation">
      <ul className="navigation__links">
        <li className="navigation__item">
          <NavLink
            exact
            to="/"
            className="navigation__link"
            activeClassName="navigation__link_active"
            onClick={handleCloseMenu}
          >
            Главная
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/movies"
            className="navigation__link"
            activeClassName="navigation__link_active"
            onClick={handleCloseMenu}
          >
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/saved-movies"
            className="navigation__link"
            activeClassName="navigation__link_active"
            onClick={handleCloseMenu}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/profile">
            <div className="header__account header__account_position_static">
              <img
                src={accountLogo}
                className="header__account-logo"
                alt="Логотип аккаунта"
              />
              <p className="header__account-text">Аккаунт</p>
            </div>
          </NavLink>
        </li>
      </ul>
      <img
        src={closeIcon}
        alt="Закрыть меню"
        className="navigation__close-icon"
        onClick={handleCloseMenu}
      />
    </div>
  );
}

export default Navigation;
