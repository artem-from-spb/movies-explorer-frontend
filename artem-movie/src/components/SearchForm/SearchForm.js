import "./SearchForm.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import { inputErrorSearchRequest } from "../../utils/constants";

function SearchForm({ searchFilms }) {
  const { pathname } = useLocation();

  const [searchInputData, setSearchInputData] = useState("");
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [searchInputError, setSearchInputError] = useState("");

  useEffect(() => {
    if (pathname === "/movies") {
      if (localStorage.getItem("isSearch") !== null) {
        try {
          setSearchInputData(localStorage.getItem("searchText"));
          setIsShortFilm(JSON.parse(localStorage.getItem("isShortFilm")));
        } catch (err) {
          console.log(err);
        }
      }
    }
  }, []);

  function handleChangeInput(e) {
    setSearchInputData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchInputData.length) {
      setSearchInputError(inputErrorSearchRequest);
    } else {
      searchFilms(searchInputData, isShortFilm);
      setSearchInputError("");
      if (pathname === "/movies") {
        localStorage.setItem("searchText", searchInputData);
        localStorage.setItem("isShortFilm", JSON.stringify(isShortFilm));
      }
    }
  }

  function handleShortFilms() {
    if (isShortFilm) {
      setIsShortFilm(false);
      searchFilms(searchInputData, false);
      if (pathname === "/movies") {
        localStorage.setItem("isShortFilm", JSON.stringify(false));
      }
    } else {
      setIsShortFilm(true);
      searchFilms(searchInputData, true);
      if (pathname === "/movies") {
        localStorage.setItem("isShortFilm", JSON.stringify(true));
      }
    }
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <input
          className="search__input"
          type="text"
          placeholder="Фильм"
          required
          onChange={handleChangeInput}
          value={searchInputData}
        ></input>
        <button className="search__button" type="submit">
          Найти
        </button>
      </form>

      <FilterCheckbox
        handleShortFilmsInput={handleShortFilms}
        isShortFilmCheckedInput={isShortFilm}
      />
      <p className="register__error search__error">{searchInputError}</p>
    </section>
  );
}
export default SearchForm;
