import React from "react";
import './NotFoundPopup.css';

function NotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__error-text">Страница не найдена</p>
      <a href="\" className="not-found__link">Назад</a>
    </div>
  );
}

export default NotFound;
