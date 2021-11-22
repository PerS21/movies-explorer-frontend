import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import serch from '../../images/serch.svg';


function SearchForm({ searchMovie, setIsChecked }) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [isShortMovies, setIsShortMovies] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    React.useEffect(() => {
        setErrorMessage("");
    }, [searchTerm]);

    function onCheckboxToggle(checked) {
        setIsShortMovies(checked);
        setIsChecked(!isShortMovies);
    }

    function onChange(e) {
        setSearchTerm(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!searchTerm) {
            setErrorMessage("Нужно ввести ключевое слово");
            return;
        }

        searchMovie(searchTerm);
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form__container">
                <input
                    type="text"
                    name="search"
                    className='search-form__input'
                    placeholder="Фильм"
                    minLength={1}
                    maxLength={30}
                    autoComplete="off"
                    onChange={onChange}
                    value={searchTerm}
                />
                <button
                    type="submit"
                    className='search-form__button clickable'
                >
                    <img src={serch} alt="поиск" />
                </button>
            </div>
            <span className="search__input_error">{errorMessage}</span>
            <FilterCheckbox onCheckboxToggle={onCheckboxToggle} />
            <span className="search-form__line" />
        </form>
    );
};

export default SearchForm;