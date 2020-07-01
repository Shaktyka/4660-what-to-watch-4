import {extend} from './utils.js';
import {FILMS_DATA, promoFilmData} from './mocks/films.js';
import {formatInitCap} from './utils';

const MAX_GENRE_LENGTH = 9;
const DEFAULT_GENRE = `All genres`;

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_BY_GENRE: `FILTER_BY_GENRE`,
  GET_ACTIVE_FILM: `GET_ACTIVE_FILM`
};

// Получение списка жанров
const getGenresList = (filmsList = []) => {
  const defaultGenre = `All genres`;
  let genres = [defaultGenre];

  if (filmsList.length > 0) {
    for (let i = 0; i < filmsList.length; i++) {
      if (genres.length <= MAX_GENRE_LENGTH) {
        const genre = formatInitCap(filmsList[i].genre);
        if (!genres.includes(genre) && genre.length !== 0) {
          genres.push(genre);
        }
      }
    }
  }
  return genres;
};

const initialState = {
  genre: DEFAULT_GENRE,
  filmsList: FILMS_DATA,
  activeFilm: promoFilmData,
  genres: getGenresList(FILMS_DATA)
};

// Получение списка фильмов в соответствии выбранным жанром
const filterFilmsByGenre = (films = [], genre = `All genres`) => {
  const filteredFilms = (genre !== `All genres`) ? films.filter((film) => film.genre === genre) : films;
  return filteredFilms.length !== 0 ? filteredFilms : films;
};

// Определяет объекты экшенов
const ActionCreator = {
  changeGenre: (genre = DEFAULT_GENRE) => {
    return (
      {
        type: ActionType.CHANGE_GENRE,
        payload: genre
      }
    );
  },

  filterByGenre: (genre = DEFAULT_GENRE) => {
    return (
      {
        type: ActionType.FILTER_BY_GENRE,
        payload: genre
      }
    );
  },

  getActiveFilm: (id) => ({
    type: ActionType.GET_ACTIVE_FILM,
    payload: id
  })
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
