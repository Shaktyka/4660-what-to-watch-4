import {extend} from '../../utils.js';
import {getAdaptedFilm} from '../../adapter/adapter.js';

import {
  DEFAULT_GENRE,
  MOVIE_NAV_TABS,
  DEFAULT_MOVIE_NAV_TAB
} from '../../consts.js';

const initialState = {
  genre: DEFAULT_GENRE,
  selectedFilmId: 0,
  selectedFilm: {},
  movieNavTabs: MOVIE_NAV_TABS,
  activeMovieNavTab: MOVIE_NAV_TABS[0],
  reviewedFilm: {}
};

const Endpoint = {
  FILMS: `/films`,
  PROMO_FILM: `/films/promo`,
  REVIEWS: `/comments/`,
  FAVORITE: `/favorite`
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
  },

  setSelectedFilmId: (id) => {
    return (
      {
        type: ActionType.SET_SELECTED_FILM_ID,
        payload: id
      }
    );
  },

  setSelectedFilm: (data) => {
    return (
      {
        type: ActionType.GET_SELECTED_FILM,
        payload: data
      }
    );
  },

  setReviewedFilm: (data) => {
    return (
      {
        type: ActionType.SET_REVIEWED_FILM,
        payload: data
      }
    );
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload || DEFAULT_GENRE
      });

    case ActionType.SET_SELECTED_FILM_ID:
      return extend(state, {
        selectedFilmId: action.payload
      });

    case ActionType.SET_SELECTED_FILM:
      return extend(state, {
        selectedFilm: action.payload
      });

    case ActionType.CHANGE_MOVIE_NAV_TAB:
      return extend(state, {
        activeMovieNavTab: action.payload
      });

    case ActionType.SET_REVIEWED_FILM:
      return extend(state, {
        reviewedFilm: action.payload
      });
  }

  return state;
};

const Operation = {

  getFavoriteFilm: (id, status) => (dispatch, getState, api) => {
    return api.get(`${Endpoint.FAVORITE}/${id}/${status}`)
      .then((result) => {
        dispatch(ActionCreator.setSelectedFilm(getAdaptedFilm(result.data)));
      })
      .catch((error) => {
        throw error;
      });
  }
};

export {reducer, ActionType, ActionCreator, Operation};
