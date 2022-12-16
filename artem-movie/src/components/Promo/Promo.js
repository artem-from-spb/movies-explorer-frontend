import "./Promo.css";

import React from "react";
import { Link } from "react-router-dom";

import landing_logo from "../../images/landing-logo.png";
import logo from "../../images/logo.png";

function Promo(props) {


  return (
    <section className="promo">
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
