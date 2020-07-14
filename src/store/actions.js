import {
  DEFAULT_GENRE,
  DEFAULT_MOVIE_NAV_TAB
} from '../consts.js';

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_BY_GENRE: `FILTER_BY_GENRE`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  CHANGE_MOVIE_NAV_TAB: `CHANGE_MOVIE_NAV_TAB`,
  SORT_BY_GENRE: `SORT_BY_GENRE`
};

// Определяет объекты экшенов
export const ActionCreator = {
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

  changeMovieNavTab: (tab = DEFAULT_MOVIE_NAV_TAB) => {
    return (
      {
        type: ActionType.CHANGE_MOVIE_NAV_TAB,
        payload: tab
      }
    );
  },

  setActiveFilm: (id) => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: id
  })
};
