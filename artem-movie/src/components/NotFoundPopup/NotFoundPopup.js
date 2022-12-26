import React from "react";
import { Link } from "react-router-dom";

import "./NotFoundPopup.css";

function NotFound() {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__error-text">Страница не найдена</p>
      <Link to="/" className="not-found__link">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
