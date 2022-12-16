import "./MoviesCard.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import cardSavedOff from "../../images/card__saved.svg";
import cardSavedOn from "../../images/card__saved_true.svg";
import deleteMovie from "../../images/moviecard__delete.svg";

function MoviesCard(card) {
  const [saved, setSaved] = useState(cardSavedOff);
  const { pathname } = useLocation();

  // переключатель избранное (зеленая метка)
  function handleSaveStatusImage() {
    if (saved === cardSavedOff) {
      setSaved(cardSavedOn);
    } else {
      setSaved(cardSavedOff);
    }
  }

  // переключатель лайка/крестика
  function handleLikeOrClose() {
    if (pathname === "/movies") {
      return saved;
    } else {
      return deleteMovie;
    }
  }

  return (
    <section className="card">
      <img src={card.link} alt={card.name} className="card__image" />
      <h2 className="card__title">33 слова о дизайне</h2>
      <p className="card__time">{card.time}</p>
      <img
        src={handleLikeOrClose()}
        alt="saved-label"
        className="card__saved-image"
        onClick={handleSaveStatusImage}
      />
    </section>
  );
}

export default MoviesCard;
