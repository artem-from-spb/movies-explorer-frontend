import './NavTab.css';
import React from "react";
import { NavLink } from "react-router-dom";

import accountLogo from "../../images/header__account.svg";
import closeIcon from "../../images/nav__closeIcon.svg";

function NavTab ({ handleCloseMenu }) {
  return (
    <div className="nav">
      <ul className="nav__links">
        <li className="nav__item">
          <NavLink
            exact
            to="/"
            className="nav__link"
            activeClassName="nav__link_active"
            onClick={handleCloseMenu}
          >
            Главная
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/movies"
            className="nav__link"
            activeClassName="nav__link_active"
            onClick={handleCloseMenu}
          >
            Фильмы
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/saved-movies"
            className="nav__link"
            activeClassName="nav__link_active"
            onClick={handleCloseMenu}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/profile" onClick={handleCloseMenu}>
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
        className="nav__close-icon"
        onClick={handleCloseMenu}
      />
    </div>
  );
}

export default NavTab;
