import {extend} from '../../utils.js';

import {
  DEFAULT_GENRE,
  MOVIE_NAV_TABS,
  DEFAULT_MOVIE_NAV_TAB
} from '../../consts.js';

const initialState = {
  genre: DEFAULT_GENRE,
  selectedFilmId: null,
  movieNavTabs: MOVIE_NAV_TABS,
  activeMovieNavTab: MOVIE_NAV_TABS[0],
  errorMessage: null,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_BY_GENRE: `FILTER_BY_GENRE`,
  SET_SELECTED_FILM: `SET_SELECTED_FILM`,
  CHANGE_MOVIE_NAV_TAB: `CHANGE_MOVIE_NAV_TAB`,
  SORT_BY_GENRE: `SORT_BY_GENRE`
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

  changeMovieNavTab: (tab = DEFAULT_MOVIE_NAV_TAB) => {
    return (
      {
        type: ActionType.CHANGE_MOVIE_NAV_TAB,
        payload: tab
      }
    );
  },

  setSelectedFilm: (id) => {
    return (
      {
        type: ActionType.SET_SELECTED_FILM,
        payload: id
      }
    );
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload || DEFAULT_GENRE
      });

    case ActionType.SET_SELECTED_FILM:
      return extend(state, {
        selectedFilmId: action.payload
      });

    case ActionType.CHANGE_MOVIE_NAV_TAB:
      return extend(state, {
        activeMovieNavTab: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
