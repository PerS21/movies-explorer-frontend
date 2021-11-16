import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList () {
    return (
    <section className="movies__cardlist">
      <ul className="cards__list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
      </ul>
      <div className='movies__more clickable'>Еще</div>
    </section>
  );
};

export default MoviesCardList;