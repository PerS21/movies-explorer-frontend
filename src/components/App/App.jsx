import React from "react";
import './App.css';
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from "./../Movies/Movies";
import SavedMovies from "./../SavedMovies/SavedMovies";
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from "./../Login/Login";
import PageNotFound from "./../PageNotFound/PageNotFound";
import Footer from "./../Footer/Footer";

import { CurrentUserContext } from "./../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import moviesApi from "./../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import {
  CONFLICT_EMAIL_MESSAGE,
  AUTH_ERROR_MESSAGE,
  PROFILE_UPDATE_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  MOVIES_NOT_FOUND_MESSAGE,
  SUCCSESS_UPDATE_MESSAGE,
  MOVIES_SERVER_ERROR_MESSAGE,
  INVALID_DATA_MESSAGE,
} from "./../../utils/responseMessages";
import { shortMovie } from "./../../utils/constants";



function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    email: "",
  });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isMoviesLoading, setIsMoviesLoading] = React.useState(false);
  const [isUserDataLoading, setIsUserDataLoading] = React.useState(true);
  const [isSavedMoviesLoading, setIsSavedMoviesLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const [message, setMessage] = React.useState(null);
  const [isFormSending, setIsFormSending] = React.useState(false);

  const history = useHistory();

  const resetMessage = () => {
    setMessage(null);
  };

  React.useEffect(() => {
    if (loggedIn) {
      const userLocalStorage = localStorage.getItem("currentUser");
      const moviesLocalStorage = localStorage.getItem("movies");
      const savedMovieLocalStorage = localStorage.getItem("savedMovies");

      if (!userLocalStorage) {
        mainApi
          .getUserInfo()
          .then((res) => {
            localStorage.setItem("currentUser", JSON.stringify(res || {}));
            setCurrentUser(res || {});
          })
          .catch((err) =>
            console.log("Невозможно получить данные с сервера", err)
          );
      } else {
        setCurrentUser(JSON.parse(userLocalStorage));
      }

      if (!moviesLocalStorage) {
        moviesApi
          .getMovies()
          .then((res) => {
            localStorage.setItem("movies", JSON.stringify(res || []));
            setMovies(res || []);
            setIsMoviesLoading(false);
          })
          .catch((err) => {
            if (err === "500") {
              setMessage(MOVIES_SERVER_ERROR_MESSAGE);
            }
            console.log(err);
          });
      } else {
        setMovies(JSON.parse(moviesLocalStorage));
        setIsMoviesLoading(false);
      }

      if (!savedMovieLocalStorage) {
        mainApi
          .getUserMovies()
          .then((res) => {
            localStorage.setItem("savedMovies", JSON.stringify(res || []));
            setSavedMovies(res || []);
            setIsSavedMoviesLoading(false);
          })
          .catch((err) => {
            if (err === "500") {
              setMessage(MOVIES_SERVER_ERROR_MESSAGE);
            }
            console.log(err);
          });
      } else {
        setSavedMovies(JSON.parse(savedMovieLocalStorage));
        setIsSavedMoviesLoading(false);
      }
    }
  }, [loggedIn]);

  React.useEffect(() => {
    resetMessage();
  }, []);

  const handleTokenCheck = React.useCallback(() => {
    mainApi
      .getUserInfo()
      .then(() => {
        setLoggedIn(true);
        setIsUserDataLoading(false);
      })
      .catch((err) => {
        setLoggedIn(false);
        setIsUserDataLoading(false);
        console.log(`Error: ${err}`);
      });
  }, []);

  React.useEffect(() => {
    handleTokenCheck();
  }, [handleTokenCheck]);

  function showResponseMessage(message) {
    setMessage(message);
    setTimeout(() => setMessage(""), 10000);
  }

  function handleLoginSubmit(data) {
    setIsFormSending(true);
    mainApi
      .login(data)
      .then((res) => {
        localStorage.setItem('email', res.email);
        localStorage.setItem('authorization', `Bearer ${res.jwt}`);
        handleTokenCheck();
      })
      .catch((err) => {
        if (err === "400") {
          return showResponseMessage(INVALID_DATA_MESSAGE);
        } else if (err === "401") {
          return showResponseMessage(AUTH_ERROR_MESSAGE);
        } else if (err === "500") {
          return showResponseMessage(SERVER_ERROR_MESSAGE);
        }
        console.log(err);
      })
      .finally(() => setIsFormSending(false));
  }

  function handleRegisterSubmit(data) {
    setIsFormSending(true);
    mainApi
      .register(data)
      .then((res) => {
        handleLoginSubmit(data);
      })
      .catch((err) => {
        if (err === "400") {
          return showResponseMessage(INVALID_DATA_MESSAGE);
        } else if (err === "409") {
          return showResponseMessage(CONFLICT_EMAIL_MESSAGE);
        } else if (err === "500") {
          return showResponseMessage(SERVER_ERROR_MESSAGE);
        }
        console.log(err);
      })
      .finally(() => setIsFormSending(false));
  }

  function handleEditProfile(email, name) {
    setIsFormSending(true);
    mainApi
      .setUserInfo(email, name)
      .then((res) => {
        localStorage.setItem("currentUser", JSON.stringify(res));
        setCurrentUser(res);
        showResponseMessage(SUCCSESS_UPDATE_MESSAGE);
      })
      .catch((err) => {
        if (err === "500") {
          return showResponseMessage(SERVER_ERROR_MESSAGE);
        } else if (err === "400") {
          return showResponseMessage(PROFILE_UPDATE_ERROR_MESSAGE);
        }
        console.log(err);
      })
      .finally(() => setIsFormSending(false));
  }

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false)
    history.push("/");
  }

  // функция поиска фильма
  function handleMovieSearch(query) {
    const searchTerm = query.toLowerCase();

    const movieSearchResult = movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(searchTerm);
    });
    if (movieSearchResult.length === 0) {
      setMessage(MOVIES_NOT_FOUND_MESSAGE);
      setFoundMovies([]);
    } else {
      setFoundMovies(movieSearchResult);
      resetMessage();
    }
  }

  //функция сохранения фильмв
  function handleMovieLike(movie) {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([res, ...savedMovies])
        );
        setSavedMovies([res, ...savedMovies]);
        setFoundSavedMovies([res, ...savedMovies]);
        setMessage('');
      })
      .catch((err) => {
        console.log(
          `Невозможно сохранить карточку с фильмом. Код ошибки ${err}`
        );
        setMessage(err);
      });
  }

  //функция поиска в сохраненных фильмах
  function handleSavedMovieSearch(query) {
    const searchTerm = query.toLowerCase();

    if (searchTerm === "") {
      setFoundSavedMovies([]);
      resetMessage();
      return;
    }
    const savedMovieSearchResult = savedMovies.filter((item) => {
      return item.nameRU.toLowerCase().includes(searchTerm);
    });

    if (savedMovieSearchResult.length === 0) {
      setMessage(MOVIES_NOT_FOUND_MESSAGE);
      setFoundSavedMovies([]);
    } else {
      setFoundSavedMovies(savedMovieSearchResult);
      resetMessage();
    }
  }

  //функция сортировки короткометражек
  function sortShortMovies(movies) {
    const shortMoviesArray = movies.filter(
      (movie) => movie.duration <= shortMovie
    );
    return shortMoviesArray;
  }

  //функция удаления фильма
  function handleDeleteMovie(movie) {
    console.log(111)
    const savedMovie = savedMovies.find((elem) => elem.movieId === movie.id);

    if (!savedMovie) {
      console.error("Попытка удалить фильм, который не был сохранен.", movie);
      return;
    }

    console.log(savedMovie)

    mainApi
      .deleteMovie(savedMovie._id)

      .then((res) => {
        localStorage.setItem(
          "savedMovies",
          JSON.stringify(savedMovies.filter((i) => i._id !== savedMovie._id))
        );

        setSavedMovies(savedMovies.filter((i) => i._id !== savedMovie._id));
        setFoundSavedMovies(
          savedMovies.filter((i) => i._id !== savedMovie._id)
        );
      })
      .catch((err) => {
        console.log(err);
        console.error(
          `Невозможно удалить карточку с фильмом. Код ошибки ${err}`
        );
      });
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__container">
          <Header loggedIn={loggedIn}/>
          <Switch>
            <ProtectedRoute
              path="/movies"
              component={Movies}
              searchMovie={handleMovieSearch}
              isLoading={isMoviesLoading}
              movies={foundMovies}
              message={message}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              onMovieSave={handleMovieLike}
              onMovieUnsave={handleDeleteMovie}
              sortShortMovies={sortShortMovies}
              isUserDataLoading={isUserDataLoading}
            />

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              isUserDataLoading={isUserDataLoading}
              isLoading={isSavedMoviesLoading}
              foundSavedMovies={foundSavedMovies}
              message={message}
              loggedIn={loggedIn}
              searchSavedMovie={handleSavedMovieSearch}
              onDeleteMovie={handleDeleteMovie}
              sortShortMovies={sortShortMovies}
            />

            <ProtectedRoute
              path="/profile"
              component={Profile}
              isUserDataLoading={isUserDataLoading}
              isLoading={isUserDataLoading}
              message={message}
              isSending={isFormSending}
              loggedIn={loggedIn}
              onSignOut={handleSignOut}
              onEditProfile={handleEditProfile}
            />

            <Route path="/signup">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Register
                  onRegister={handleRegisterSubmit}
                  isSending={isFormSending}
                  message={message}
                />
              )}
            </Route>

            <Route path="/signin">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login
                  onLogin={handleLoginSubmit}
                  isSending={isFormSending}
                  message={message}
                />
              )}
            </Route>

            <Route exact path="/">
              <Main />
            </Route>

            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
