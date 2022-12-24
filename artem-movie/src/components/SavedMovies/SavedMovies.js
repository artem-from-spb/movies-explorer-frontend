import "./SavedMovies.css";

import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {
  return (
    <>
      <SearchForm />
      <ul className="movies_padding_big">
        <li>
          <MoviesCard
            link="http://almode.ru/uploads/posts/2021-05/1622193827_3-p-yaponskii-sad-3.jpg"
            name="First Card"
            time="1ч42м"
          />
        </li>
        <li>
          <MoviesCard
            link="http://almode.ru/uploads/posts/2021-05/1622193827_3-p-yaponskii-sad-3.jpg"
            name="First Card"
            time="1ч42м"
          />
        </li>
        <li>
          <MoviesCard
            link="http://almode.ru/uploads/posts/2021-05/1622193827_3-p-yaponskii-sad-3.jpg"
            name="First Card"
            time="1ч42м"
          />
        </li>
      </ul>
    </>
  );
}

export default SavedMovies;
