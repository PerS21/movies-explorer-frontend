import React from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { CurrentUserContext } from "./../../contexts/CurrentUserContext";

function Movies({
    movies,
    isLoading,
    searchMovie,
    onMovieSave,
    onMovieUnsave,
    savedMovies,
    message,
    sortShortMovies,
}) {
    const [shortMovies, setShortMovies] = React.useState([]);
    const [isChecked, setIsChecked] = React.useState(false);
    const currentUser = React.useContext(CurrentUserContext);

    function usersMovies(val){
        return val.owner === currentUser._id;
    }

    savedMovies = savedMovies.length > 0 ? savedMovies.filter(usersMovies) : [];

    React.useEffect(() => {
        if (isChecked) {
            setShortMovies(sortShortMovies(movies));
        }
    }, [isChecked]);

    return (
        <section className="movies">
            <div className="section__content">
                <SearchForm
                    searchMovie={searchMovie}
                    setIsChecked={setIsChecked}
                />
                <MoviesCardList
                    isLoading={isLoading}
                    movies={isChecked ? shortMovies : movies}
                    savedMovies={savedMovies}
                    message={message}
                    onMovieSave={onMovieSave}
                    onMovieUnsave={onMovieUnsave} />
            </div>
        </section>
    );
};

export default Movies;