import "./MoviesCard.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { BEATMOVIES_URL } from "../../utils/constants";

function MoviesCard({ card, setLikeMovie, removeMovie, savedMovies }) {
  const { pathname } = useLocation();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    savedMovies.map((movie) => {
      if (card.id === movie.id) {
        setIsLiked(true);
      }
    });
  }, [savedMovies]);

  function handleDeleteFilm() {
    removeMovie(card.id);
  }

  // function handleSaveCard(evt) {
  //   if (!evt.target.classList.contains("card__button_type_like_active")) {
  //     evt.target.classList.add("card__button_type_like_active");
  //   } else {
  //     evt.target.classList.remove("card__button_type_like_active");
  //   }
  // }

  function toggleLike() {
    if (isLiked) {
      handleDeleteFilm();
      setIsLiked(false);
    } else {
      setLikeMovie(card);
      setIsLiked(true);
    }
  }

  function changeDurationFormat(time) {
    let minutes = time % 60;
    let hours = (time - minutes) / 60;
    return `${hours}ч${minutes}м`;
  }

  return (
    <section className="card">
      <a
        href={card.trailerLink}
        className="card__youtube-link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={
            pathname === "/movies"
              ? BEATMOVIES_URL + card.image.url
              : BEATMOVIES_URL + card.image
          }
          alt={card.nameRU}
          className="card__image"
        />
      </a>

      <h2 className="card__title">{card.nameRU}</h2>
      <p className="card__time">{changeDurationFormat(card.duration)}</p>

      {pathname === "/saved-movies" ? (
        <button
          className="card__button card__button_type_remove"
          onClick={handleDeleteFilm}
        ></button>
      ) : (
        <button
          className={`card__button card__button_type_like ${
            isLiked ? "card__button_type_like_active" : ""
          }`}
          onClick={toggleLike}
        ></button>
      )}
    </section>
  );
}

export default MoviesCard;
