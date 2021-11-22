import React from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { CurrentUserContext } from "./../../contexts/CurrentUserContext";

function SavedMovies({
    message,
    searchSavedMovie,
    onDeleteMovie,
    isLoading,
    sortShortMovies,
    foundSavedMovies,
}) {
    const [shortMovies, setShortMovies] = React.useState([]);
    const [isChecked, setIsChecked] = React.useState(false);
    const currentUser = React.useContext(CurrentUserContext);

    function usersMovies(val){
        return val.owner === currentUser._id;
    }

    let movies = foundSavedMovies.length > 0 ? foundSavedMovies.filter(usersMovies) : [];

    if (message) {
        movies = [];
    }

    React.useEffect(() => {
        if (isChecked && !message) {
            setShortMovies(sortShortMovies(movies));
        }
    }, [isChecked]);

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