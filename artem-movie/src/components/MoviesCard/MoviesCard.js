import "./MoviesCard.css";
import React, { useState } from "react";
import cardSavedOff from "../../images/card__saved.svg";
import cardSavedOn from "../../images/card__saved_true.svg";

function MoviesCard(card) {
  const [saved, setSaved] = useState(cardSavedOff);
  function handleSaveStatusImage() {
    if (saved === cardSavedOff) {
      setSaved(cardSavedOn);
    } else {
      setSaved(cardSavedOff);
    }
  }

  return (
    <section className="card">
      <img src={card.link} alt={card.name} className="card__image" />
      <h2 className="card__title">33 слова о дизайне</h2>
      <p className="card__time">{card.time}</p>
      <img
        src={saved}
        alt="saved-label"
        className="card__saved-image"
        onClick={handleSaveStatusImage}
      />
    </section>
  );
}

export default MoviesCard;
