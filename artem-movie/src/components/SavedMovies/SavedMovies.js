import './SavedMovies.css';

import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies(props) {
  return (
    <section className="movies">
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
  );
}

export default SavedMovies;
