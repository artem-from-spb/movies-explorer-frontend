import "./FilterCheckbox.css";

function FilterCheckbox({ handleShortFilmsInput, isShortFilmCheckedInput }) {
  return (
    <div action="search-filter" className="filter">
      <input
        type="checkbox"
        id="checkbox"
        className="filter__checkbox"
        checked={isShortFilmCheckedInput}
        onChange={handleShortFilmsInput}
      />
      <label htmlFor="checkbox" className="filter__label">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
