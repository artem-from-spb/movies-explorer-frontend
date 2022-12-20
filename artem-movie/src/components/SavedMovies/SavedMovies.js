import "./SavedMovies.css";

import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {
  return (
    <>
      <SearchForm />
      <section className="movies__container movies">
        <MoviesCard
          link="http://almode.ru/uploads/posts/2021-05/1622193827_3-p-yaponskii-sad-3.jpg"
          name="First Card"
          time="1ч42м"
        />
        <MoviesCard
          link="http://almode.ru/uploads/posts/2021-05/1622193827_3-p-yaponskii-sad-3.jpg"
          name="First Card"
          time="1ч42м"
        />
        <MoviesCard
          link="http://almode.ru/uploads/posts/2021-05/1622193827_3-p-yaponskii-sad-3.jpg"
          name="First Card"
          time="1ч42м"
        />
      </section>
    </>
  );
}

export default SavedMovies;
