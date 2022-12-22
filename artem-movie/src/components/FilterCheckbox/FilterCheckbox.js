import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox() {
  return (
    <div action="search-filter" className="filter">
      <input type="checkbox" id="checkbox" className="filter__checkbox" />
      <label htmlFor="checkbox" className="filter__label">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
