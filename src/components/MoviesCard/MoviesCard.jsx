import './MoviesCard.css';
import cardLink from "../../images/Animator-Spanch-Bob.jpg";
import { Route, Switch } from 'react-router-dom';
import like from "../../images/like.svg";
import redLike from "../../images/redLike.svg";
import sCross from "../../images/sCross.svg";

function MoviesCard() {
  return (
    <div className="moviecard moviecard__content">
      <a href='/'>
        <img
          className="moviecard__img"
          src={cardLink}
          alt='картинка фильма'
        />
      </a>
      <div className='moviecard__info'>
        <div className="moviecard__block">
          <h3 className="moviecard__title">Чуть о фильме</h3>
          <p className="moviecard__time">Тайминг фильма</p>
        </div>
        <Switch>
          <Route exact path="/movies">
            <img src={redLike} alt="лайк" className='moviecard__like clickable' />
          </Route>
          <Route exact path="/saved-movies">
            <img src={sCross} alt="лайк" className='moviecard__cross clickable' />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MoviesCard;