import "./Movies.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";



function Movies({ movies }) {
  return (
    <>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </>
  );
}

export default Movies;
