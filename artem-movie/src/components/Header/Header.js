import landing_logo from "../../images/landing-logo.png";
import logo from "../../images/logo.png";
//import { Link, useLocation } from "react-router-dom";
import React from "react";

function Header(props) {
  //  const location = useLocation();

  return (
    <header className="header">
      <div className="header__block">
        <img src={logo} className="header__logo" alt="Логотип проекта" />
        <p className="header__register-link">Регистрация</p>
        <button className="header__enter-link">Войти</button>

        {/* {props.loggedIn ? <p className="header__email">{props.email}</p> : ""}
          {props.loggedIn ? (
            <Link
              className="header__enter-link"
              onClick={props.onSignOut}
              to="/sign-up"
            >
              Выйти
            </Link>
          ) : (
            <Link
              className="header__enter-link"
              to={location.pathname === "/sign-up" ? "/sign-in" : "/sign-up"}
            >
              {location.pathname === "/sign-up" ? "Войти" : "Регистрация"}
            </Link>
          )} */}
      </div>
      <h1 className="header__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img
        src={landing_logo}
        className="header__landing-logo"
        alt="Логотип Лендинга"
      />
    </header>
  );
}

export default Header;
