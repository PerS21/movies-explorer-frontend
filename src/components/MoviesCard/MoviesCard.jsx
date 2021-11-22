import './MoviesCard.css';
import { Route, Switch } from 'react-router-dom';
import like from "../../images/like.svg";
import redLike from "../../images/redLike.svg";
import sCross from "../../images/sCross.svg";
import { MOVIES_IMAGE_BASE_URL } from "./../../utils/constants";

function MoviesCard(props) {
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (mins >= 60) {
      return hours + "ч " + minutes + "м";
    } else {
      return minutes + "м";
    }
  }

  const liked = props.isMovieSaved ? redLike : like;

  function handleButtonClick() {
    return props.onChangeState(props.card);
  }

  function handleButtonClick1() {
    return props.onDeleteMovie({ id: props.card.movieId });
  }

  return (
    <div className="moviecard moviecard__content">
        <Switch>
          <Route exact path="/movies">
          <a href={props.card.trailerLink} target="_blank" rel='noreferrer'>
            <img
              className="moviecard__img"
              src={`${MOVIES_IMAGE_BASE_URL}${props.card.image.url}`}
              alt='картинка фильма'
            />
            </a>
          </Route>
          <Route exact path="/saved-movies">
          <a href={props.card.trailer} target="_blank" rel='noreferrer'>
            <img
              className="moviecard__img"
              src={props.card.image}
              alt='картинка фильма'
            />
            </a>
          </Route>
        </Switch>
      <div className='moviecard__info'>
        <div className="moviecard__block">
          <h3 className="moviecard__title">{props.card.nameRU}</h3>
          <p className="moviecard__time">{getTimeFromMins(props.card.duration)}</p>
        </div>
        <Switch>
          <Route exact path="/movies">
            <img src={liked} alt="лайк" className='moviecard__like clickable' onClick={handleButtonClick} />
          </Route>
          <Route exact path="/saved-movies">
            <img src={sCross} alt="лайк" className='moviecard__cross clickable' onClick={handleButtonClick1} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MoviesCard;