import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./NotFoundPopup.css";

function NotFound() {
  const history = useHistory();

  function pushBack() {
    return history.goBack();
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__error-text">Страница не найдена</p>
      <button onClick={pushBack} className="not-found__link">
        Назад
      </button>
    </section>
  );
}

export default NotFound;
