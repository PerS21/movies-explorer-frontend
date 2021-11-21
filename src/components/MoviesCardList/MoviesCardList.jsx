import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from "../Preloader/Preloader";

import {
  CARDS_FOR_MAX_WIN_SIZE,
  CARDS_FOR_MEDIUM_WIN_SIZE,
  CARDS_FOR_MIN_WIN_SIZE,
  ADD_CARDS_FOR_MAX_WIN_SIZE,
  ADD_CARDS_FOR_MEDIUM_WIN_SIZE,
} from "./../../utils/constants";

function MoviesCardList(props) {
  const movies = props.movies || props.savedMovies || [];
  const windowWidth = window.innerWidth;
  const [cardsArray, setCardsArray] = React.useState(0);

  const renderCards = React.useCallback(() => {
    if (windowWidth > 768) {
      setCardsArray(CARDS_FOR_MAX_WIN_SIZE);
    } else if (windowWidth > 480 && windowWidth < 768) {
      setCardsArray(CARDS_FOR_MEDIUM_WIN_SIZE);
    } else {
      setCardsArray(CARDS_FOR_MIN_WIN_SIZE);
    }
  }, [windowWidth]);

  const handleAddCardClick = () => {
    if (windowWidth > 1020) {
      setCardsArray(cardsArray + ADD_CARDS_FOR_MAX_WIN_SIZE);
    } else {
      setCardsArray(cardsArray + ADD_CARDS_FOR_MEDIUM_WIN_SIZE);
    }
  };

  React.useEffect(() => renderCards(), [renderCards]);

  React.useEffect(() => {
    window.addEventListener("resize", renderCards);
    return () => {
      window.removeEventListener("resize", renderCards);
    };
  }, []);


  return (
    <section className="movies__cardlist">
      {props.isLoading ? (
        <Preloader />
      ) : (
        <>
          {props.message && <p className="movies-message">{props.message}</p>}
          <ul className="cards__list">
            {movies &&
              movies.slice(0, cardsArray).map((movie) => {
                if (
                  props.savedMovies.find((elem) => {
                    return elem.movieId === movie.id})
                ) {
                  return (
                    <MoviesCard
                      card={movie}
                      key={movie.id}
                      onChangeState={props.onMovieUnsave}
                      isMovieSaved={true}
                      onDeleteMovie={props.onDeleteMovie}
                    />
                  );
                } else {
                  return (
                    <MoviesCard
                      card={movie}
                      key={movie.id}
                      onChangeState={props.onMovieSave}
                      isMovieSaved={false}
                      onDeleteMovie={props.onDeleteMovie}
                    />
                  );
                }
              })}
          </ul>
          {movies.length > cardsArray && (
            <button
              className="movies__more clickable"
              type="button"
              onClick={handleAddCardClick}
            >
              Еще
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default MoviesCardList;