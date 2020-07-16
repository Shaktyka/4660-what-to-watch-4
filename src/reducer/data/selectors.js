import NameSpace from '../name-space.js';
import {createSelector} from 'reselect';
import {getGenre} from '../app-state/selectors.js';
import {DEFAULT_GENRE} from '../../consts.js';

const NAME_SPACE = NameSpace.DATA;

const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

const getActiveFilm = (state) => {
  return state[NAME_SPACE].activeFilm;
};

const getGenres = (state) => {
  return state[NAME_SPACE].genres;
};

const getFilmsByGenre = createSelector(
    getGenre,
    getFilms,
    (genre, films) => {
      if (genre === DEFAULT_GENRE) {
        return films;
      }
      return films.filter((film) => film.genre === genre);
    }
);

export {getFilms, getActiveFilm, getGenres, getFilmsByGenre};
