import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <section className="movies">
      <ul className="movies__container">

          {movies.map((card, i) => (
            <MoviesCard
              card={card}
              key={card.id || card.movieId}
            />
          ))}

      </ul>
      <button type="button" className="movies__more-button">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
