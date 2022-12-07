import landing_logo from "../../images/landing-logo.png";
import logo from "../../images/logo.png";
//import { Link, useLocation } from "react-router-dom";
import React from "react";
import './Promo.css';

function Promo(props) {
  //  const location = useLocation();

  return (
    <section className="promo">
      <div className="promo__block">
        <img src={logo} className="promo__logo" alt="Логотип проекта" />
        <p className="promo__register-link">Регистрация</p>
        <button className="promo__enter-link">Войти</button>

        {/* {props.loggedIn ? <p className="promo__email">{props.email}</p> : ""}
          {props.loggedIn ? (
            <Link
              className="promo__enter-link"
              onClick={props.onSignOut}
              to="/sign-up"
            >
              Выйти
            </Link>
          ) : (
            <Link
              className="promo__enter-link"
              to={location.pathname === "/sign-up" ? "/sign-in" : "/sign-up"}
            >
              {location.pathname === "/sign-up" ? "Войти" : "Регистрация"}
            </Link>
          )} */}
      </div>
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img
        src={landing_logo}
        className="promo__landing-logo"
        alt="Логотип Лендинга"
      />
    </section>
  );
}

export default Promo;
