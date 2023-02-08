import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  handleMore,
  isMoreMovies,
  setLikeMovie,
  filteredMovies,
  removeMovie,
  savedMovies,
  filteredCards,
  errorFind,
}) {
  return (
    <section className="movies">
      {filteredMovies.length ? (
        <>
          <ul className="movies__container">
            {filteredCards.map((movie, i) => {
              return (
                <MoviesCard
                  key={movie.id}
                  card={movie}
                  removeMovie={removeMovie}
                  savedMovies={savedMovies}
                  setLikeMovie={setLikeMovie}
                />
              );
            })}
          </ul>
          {isMoreMovies && (
            <button
              className="movies__more-button"
              type="button"
              onClick={handleMore}
            >
              Ещё
            </button>
          )}
        </>
      ) : (
        <p className="movies__nomovies">
          {errorFind ? errorFind : "Ничего не найдено"}
        </p>
      )}
    </section>
  );
}

export default MoviesCardList;
