import './MoviesCard.css';
import ddd from "../../images/Animator-Spanch-Bob.jpg";
import like from "../../images/like.png";


function MoviesCard() {
  return (
    <div className="moviecard moviecard__content">
      <a href='/'>
        <img
          className="moviecard__img"
          src={ddd}
          alt='картинка фильма'
        />
      </a>
      <div className='moviecard__info'>
        <div className="moviecard__block">
          <h3 className="moviecard__title">Чуть о фильме</h3>
          <p className="moviecard__time">Тайминг фильма</p>
        </div>
        <img src={like} alt="лайк" className='moviecard__like clickable' />
      </div>
    </div>
  );
};

export default MoviesCard;