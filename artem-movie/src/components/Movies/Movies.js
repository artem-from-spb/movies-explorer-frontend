import "./Movies.css";
import { cardsToAdd } from "../../utils/constants";
import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({
  searchFilms,
  filteredMovies,
  setFilteredMovies,
  setIsSearch,
  setLikeMovie,
  removeMovie,
  savedMovies,
  filteredCards,
  setFilteredCards,
  errorFind,
  isLoading,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isMoreMovies, setIsMoreMovies] = useState(false);
  const [amountCards, setAmountCards] = useState(16);
  const [amountMoreCards, setAmountMoreCards] = useState(4);

  useEffect(() => {
    if (localStorage.getItem("isSearch") !== null) {
      setIsSearch(JSON.parse(localStorage.getItem("isSearch")));
      setFilteredMovies(JSON.parse(localStorage.getItem("filteredMovies")));
    }
    window.addEventListener("resize", changeWidthWindow);
    return () => {
      window.removeEventListener("resize", changeWidthWindow);
    };
  }, []);

  useEffect(() => {
    addMoreCards();
  }, [windowWidth]);

  useEffect(() => {
    setFilteredCards(filteredMovies.slice(0, amountCards));
    if (amountCards < filteredMovies.length) {
      setIsMoreMovies(true);
    } else {
      setIsMoreMovies(false);
    }
  }, [filteredMovies, amountCards]);

  // задержка (планшеты)
  function changeWidthWindow() {
    setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 1000);
  }

  function handleMore() {
    const newAmount = filteredCards.length + amountMoreCards;
    setFilteredCards(filteredMovies.slice(0, newAmount));
    if (newAmount >= filteredMovies.length) {
      setIsMoreMovies(false);
    }
  }

  function addMoreCards() {
    switch (true) {
      case windowWidth < 760:
        setAmountCards(cardsToAdd.mobile.cards);
        setAmountMoreCards(cardsToAdd.mobile.add);
        break;

      case windowWidth < 930:
        setAmountCards(cardsToAdd.tablet.cards);
        setAmountMoreCards(cardsToAdd.tablet.add);
        break;

      case windowWidth < 1220:
        setAmountCards(cardsToAdd.note.cards);
        setAmountMoreCards(cardsToAdd.note.add);
        break;

      default:
        setAmountCards(cardsToAdd.table.cards);
        setAmountMoreCards(cardsToAdd.table.add);
        break;
    }
  }
  return (
    <>
      <SearchForm searchFilms={searchFilms} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          filteredMovies={filteredMovies}
          filteredCards={filteredCards}
          handleMore={handleMore}
          isMoreMovies={isMoreMovies}
          setLikeMovie={setLikeMovie}
          removeMovie={removeMovie}
          savedMovies={savedMovies}
          errorFind={errorFind}
        />
      )}
    </>
  );
}

export default Movies;
