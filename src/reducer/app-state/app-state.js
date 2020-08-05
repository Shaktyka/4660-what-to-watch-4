import {extend} from '../../utils.js';

import {
  DEFAULT_GENRE,
  MOVIE_NAV_TABS,
  DEFAULT_MOVIE_NAV_TAB
} from '../../consts.js';

const initialState = {
  genre: DEFAULT_GENRE,
  movieNavTabs: MOVIE_NAV_TABS,
  activeMovieNavTab: MOVIE_NAV_TABS[0],
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  CHANGE_MOVIE_NAV_TAB: `CHANGE_MOVIE_NAV_TAB`,
  SORT_BY_GENRE: `SORT_BY_GENRE`,
  SET_SELECTED_FILM_ID: `SET_SELECTED_FILM_ID`,
  SET_SELECTED_FILM: `SET_SELECTED_FILM`,
  SET_REVIEWED_FILM: `SET_REVIEWED_FILM`,
};

const ActionCreator = {

  setGenre: (genre = DEFAULT_GENRE) => {
    return (
      {
        type: ActionType.SET_GENRE,
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
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload || DEFAULT_GENRE
      });

    case ActionType.CHANGE_MOVIE_NAV_TAB:
      return extend(state, {
        activeMovieNavTab: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
