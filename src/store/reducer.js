import {extend, formatInitCap} from '../utils.js';
import {FILMS_DATA, promoFilmData} from '../mocks/films.js';
import {ActionType} from './actions.js';

const MAX_GENRE_LENGTH = 9;
const DEFAULT_GENRE = `All genres`;
const MOVIE_NAV_TABS = [`Overview`, `Details`, `Reviews`];

// Получение списка жанров
const getGenresList = (filmsList = []) => {
  return [
    DEFAULT_GENRE,
    ...new Set(filmsList.map((film) => formatInitCap(film.genre)))
  ].slice(0, MAX_GENRE_LENGTH + 1);
};

const initialState = {
  genre: DEFAULT_GENRE,
  filmsList: FILMS_DATA,
  activeFilm: promoFilmData,
  genres: getGenresList(FILMS_DATA),
  movieNavTabs: MOVIE_NAV_TABS,
  activeMovieNavTab: MOVIE_NAV_TABS[0]
};

// Получение списка фильмов в соответствии выбранным жанром
const filterFilmsByGenre = (films = [], genre = `All genres`) => {
  const filteredFilms = (genre !== `All genres`) ? films.filter((film) => film.genre === genre) : films;
  return filteredFilms.length !== 0 ? filteredFilms : films;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload || DEFAULT_GENRE
      });

    case ActionType.FILTER_BY_GENRE:
      return extend(state, {
        filmsList: filterFilmsByGenre(FILMS_DATA, action.payload)
      });

    case ActionType.GET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload
      });

    case ActionType.CHANGE_MOVIE_NAV_TAB:
      return extend(state, {
        activeMovieNavTab: action.payload
      });
  }

  return state;
};

export default reducer;
