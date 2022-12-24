import "./SearchForm.css";
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  return (
    <section className="search">
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Фильм"
          required
        ></input>
        <button className="search__button" type="button">
          Найти
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
}
export default SearchForm;
