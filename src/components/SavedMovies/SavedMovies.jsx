import React from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
    message,
    savedMovies,
    searchSavedMovie,
    onDeleteMovie,
    isLoading,
    sortShortMovies,
    foundSavedMovies,
}) {
    const [shortMovies, setShortMovies] = React.useState([]);
    const [isChecked, setIsChecked] = React.useState(false);
    let movies = foundSavedMovies.length > 0 ? foundSavedMovies : savedMovies;
    if (message) {
        movies = [];
    }

    React.useEffect(() => {
        if (isChecked && !message) {
            setShortMovies(sortShortMovies(movies));
        }
    }, [isChecked, movies]);

    return (
        <section className="movies">
            <div className="section__content">
                <SearchForm
                    searchMovie={searchSavedMovie}
                    setIsChecked={setIsChecked}
                />
                <MoviesCardList
                    isLoading={isLoading}
                    savedMovies={isChecked ? shortMovies : movies}
                    message={message}
                    onDeleteMovie={onDeleteMovie}
                />
            </div>
        </section>
    );
};

export default SavedMovies;