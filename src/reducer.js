import {extend} from './utils.js';
import {FILMS_DATA, promoCardData} from './mocks/films.js';

const initialState = {
  genre: `All genres`,
  filmsList: FILMS_DATA,
  promoCard: promoCardData
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_BY_GENRE: `FILTER_BY_GENRE`
};

// Форматирование названия жанра (переписать потом)
const formatGenre = (genreName = ``) => {
  return genreName.length > 0 ? `${genreName[0].toUpperCase()}${genreName.slice(1).toLowerCase()}` : ``;
};

// Получение списка жанров
const getGenresList = (filmsList = []) => {
  const defaultGenre = `All genres`;
  const maxGenresAmount = 9;
  let genres = [defaultGenre];

  if (filmsList.length > 0) {
    for (let i = 0; i < filmsList.length; i++) {
      if (genres.length <= maxGenresAmount) {
        const genre = formatGenre(filmsList[i].genre);
        if (!genres.includes(genre) && genre.length !== 0) {
          genres.push(genre);
        }
      }
    }
  }
  return genres;
};

// Получение списка фильмов в соответствии выбранным жанром
const filterFilmsByGenre = (films = [], genre = `All genres`) => {
  const filteredFilms = (genre !== `All genres`) ? films.filter((film) => film.genre === genre) : films;
  return filteredFilms.length !== 0 ? filteredFilms : films;
};

// Изменение фильтра по жанрам
const changeFilterByGenre = (genre) => {

};

// Определяет объекты экшенов
const ActionCreator = {
  changeGenre: (selectedGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: selectedGenre
  }),

  filterByGenre: () => ({
    type: ActionType.FILTER_BY_GENRE
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.FILTER_BY_GENRE:
      return extend(state, {
        filmsList: filterFilmsByGenre(state.filmsList, state.genre)
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
