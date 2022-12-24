import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(card) {
  const { pathname } = useLocation();

  // переключатель избранное (зеленая метка)
  function handleSaveStatusImage(evt) {
    if (!evt.target.classList.contains("card__button_type_like_active")) {
      evt.target.classList.add("card__button_type_like_active");
    } else {
      evt.target.classList.remove("card__button_type_like_active");
    }
  }

  function handleRemoveMovie() {
    // удаление фильма из избранного
  }

  return (
    <section className="card">
      <img src={card.link} alt={card.name} className="card__image" />
      <h2 className="card__title">33 слова о дизайне</h2>
      <p className="card__time">{card.time}</p>

      {pathname === "/saved-movies" ? (
        <button
          className="card__button card__button_type_remove"
          onClick={handleRemoveMovie}
        ></button>
      ) : (
        <button
          className="card__button card__button_type_like"
          onClick={handleSaveStatusImage}
        ></button>
      )}
    </section>
  );
}

export default MoviesCard;
