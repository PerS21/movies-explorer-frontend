import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
    return (
        <section className="movies">
            <div className="section__content">
                <SearchForm />
                <MoviesCardList />
            </div>
        </section>
    );
};

export default SavedMovies;