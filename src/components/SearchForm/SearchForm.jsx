import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import serch from '../../images/serch.svg';


function SearchForm() {
    return (
        <form className="search-form">
            <div className="search-form__container">
                <input
                    type="text"
                    name="search"
                    className='search-form__input'
                    placeholder="Фильм"
                    minLength={1}
                    maxLength={30}
                    autoComplete="off"
                    required
                />
                <button
                    type="submit"
                    className='search-form__button clickable'
                >
                    <img src={serch} alt="поиск" />
                </button>
            </div>
            <FilterCheckbox />
            <span className="search-form__line" />
        </form>
    );
};

export default SearchForm;