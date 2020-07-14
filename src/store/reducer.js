import {extend, formatInitCap} from '../utils.js';
import {FILMS_DATA, promoFilmData, REVIEWS} from '../mocks/films.js';
import {ActionType} from './actions.js';

import {
  MAX_GENRE_LENGTH,
  DEFAULT_GENRE,
  MOVIE_NAV_TABS
} from '../consts.js';

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
  selectedFilmId: null,
  activeFilm: promoFilmData,
  activeFilmId: promoFilmData.id,
  genres: getGenresList(FILMS_DATA),
  movieNavTabs: MOVIE_NAV_TABS,
  activeMovieNavTab: MOVIE_NAV_TABS[0],
  filmReviews: REVIEWS
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

    case ActionType.SET_SELECTED_FILM:
      return extend(state, {
        activeFilm: FILMS_DATA.find((film) => film.id === action.payload) || FILMS_DATA[0]
      });

    case ActionType.CHANGE_MOVIE_NAV_TAB:
      return extend(state, {
        activeMovieNavTab: action.payload
      });
  }

  return state;
};

export default reducer;
