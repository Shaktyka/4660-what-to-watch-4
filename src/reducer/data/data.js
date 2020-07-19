import {extend} from '../../utils.js';
import {getAdaptedFilm /* , getAdaptedReview */} from '../../adapter/adapter.js';
import {DEFAULT_GENRE, MAX_GENRES_LENGTH} from '../../consts.js';

const initialState = {
  films: [],
  promoFilm: {},
  genres: [],
  filmReviews: [],
  isLoading: false,
  loadFilmsErr: null,
  loadPromoErr: null,
  loadReviewsErr: null
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_GENRES: `LOAD_GENRES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_LOADING: `SET_LOADING`,
  SET_FILMS_ERR_MSG: `SET_FILMS_ERR_MSG`,
  SET_PROMO_ERR_MSG: `SET_PROMO_ERR_MSG`,
  SET_REVIEWS_ERR_MSG: `SET_REVIEWS_ERR_MSG`
};

const Endpoint = {
  FILMS: `/films`,
  PROMO_FILM: `/films/promo`,
  REVIEWS: `/comments/`
};

const ActionCreator = {

  loadFilms: (films) => {
    return ({
      type: ActionType.LOAD_FILMS,
      payload: films
    });
  },

  loadPromoFilm: (film) => {
    return ({
      type: ActionType.LOAD_PROMO_FILM,
      payload: film
    });
  },

  loadGenres: (genres) => {
    return {
      type: ActionType.LOAD_GENRES,
      payload: genres
    };
  },

  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews
    };
  },

  setLoading: (isLoading) => {
    return (
      {
        type: ActionType.SET_LOADING,
        payload: isLoading
      }
    );
  },

  setFilmsErrMsg: (message) => {
    return (
      {
        type: ActionType.SET_FILMS_ERR_MSG,
        payload: message
      }
    );
  },

  setPromoErrMsg: (message) => {
    return (
      {
        type: ActionType.SET_PROMO_ERR_MSG,
        payload: message
      }
    );
  },

  setReviewsErrMsg: (message) => {
    return (
      {
        type: ActionType.SET_REVIEWS_ERR_MSG,
        payload: message
      }
    );
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });

    case ActionType.LOAD_GENRES:
      return extend(state, {
        genres: action.payload,
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        filmReviews: action.payload
      });

    case ActionType.SET_LOADING:
      return extend(state, {
        isLoading: action.payload
      });

    case ActionType.SET_FILMS_ERR_MSG:
      return extend(state, {
        loadFilmsErr: action.payload
      });

    case ActionType.SET_PROMO_ERR_MSG:
      return extend(state, {
        loadPromoErr: action.payload
      });

    case ActionType.SET_REVIEWS_ERR_MSG:
      return extend(state, {
        loadReviewsErr: action.payload
      });
  }

  return state;
};

// Асинхронные операции
const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoading(true));

    return api.get(Endpoint.FILMS)
      .then((res) => {
        const adaptedFilms = res.data.map((film) => getAdaptedFilm(film));

        dispatch(ActionCreator.loadFilms(adaptedFilms));
        const genresList = [
          DEFAULT_GENRE,
          ...new Set(adaptedFilms.map((filmObject) => filmObject.genre).slice(0, MAX_GENRES_LENGTH))
        ];
        dispatch(ActionCreator.loadGenres(genresList));
        dispatch(ActionCreator.setLoading(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setLoading(false));
        if (err.response.status !== 200) {
          dispatch(ActionCreator.setFilmsErrMsg(`${err.response.status} ${err.response.data.error}`));
        } else {
          dispatch(ActionCreator.setFilmsErrMsg(null));
        }
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(Endpoint.PROMO_FILM)
      .then((res) => {
        dispatch(ActionCreator.loadPromoFilm(getAdaptedFilm(res.data)));
      })
      .catch((err) => {
        dispatch(ActionCreator.setLoading(false));
        if (err.response.status !== 200) {
          dispatch(ActionCreator.setPromoErrMsg(`${err.response.status} ${err.response.data.error}`));
        } else {
          dispatch(ActionCreator.setPromoErrMsg(null));
        }
      });
  },

  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`${Endpoint.COMMENTS}${id}`)
      .then((res) => {
        dispatch(ActionCreator.loadReviews(res.data));
      })
      .catch((err) => {
        dispatch(ActionCreator.setLoading(false));
        if (err.response.status !== 200) {
          dispatch(ActionCreator.setReviewsErrMsg(`${err.response.status} ${err.response.data.error}`));
        } else {
          dispatch(ActionCreator.setReviewsErrMsg(null));
        }
      });
  }
};

export {reducer, ActionCreator, ActionType, Operation};
