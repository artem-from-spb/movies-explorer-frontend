import "./SavedMovies.css";

import React, { useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  savedMovies,
  filteredSavedMovies,
  removeMovie,
  searchSavedFilms,
  isLoading,
}) {
  useEffect(() => {
    searchSavedFilms("", false);
  }, []);

  return (
    <>
      <SearchForm searchFilms={searchSavedFilms} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          filteredMovies={filteredSavedMovies}
          filteredCards={filteredSavedMovies}
          removeMovie={removeMovie}
          savedMovies={savedMovies}
        />
      )}
    </>
  );
}

export default SavedMovies;
