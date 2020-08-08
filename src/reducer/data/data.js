import {extend} from '../../utils.js';
import {getAdaptedFilm, getAdaptedReview} from '../../adapter/adapter.js';
import {DEFAULT_GENRE, MAX_GENRES_LENGTH} from '../../consts.js';

const initialState = {
  films: [],
  favoritesFilms: [],
  promoFilm: {},
  genres: [],
  filmReviews: [],
  isFilmsLoading: false,
  isPromoLoading: false,
  isReviewsLoading: false,
  isFavoritesFilmsLoading: false,
  isReviewPosting: false,
  loadFilmsError: ``,
  loadPromoError: ``,
  loadReviewsError: ``,
  postingReviewError: ``,
  loadFavoritesFilmsError: ``
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_GENRES: `LOAD_GENRES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_FILMS_LOADING: `SET_FILMS_LOADING`,
  SET_PROMO_LOADING: `SET_PROMO_LOADING`,
  SET_REVIEWS_LOADING: `SET_REVIEWS_LOADING`,
  SET_FILMS_ERROR_MESSAGE: `SET_FILMS_ERROR_MESSAGE`,
  SET_PROMO_ERROR_MESSAGE: `SET_PROMO_ERROR_MESSAGE`,
  SET_REVIEWS_ERROR_MESSAGE: `SET_REVIEWS_ERROR_MESSAGE`,
  ADD_FAVORITE_FILM: `ADD_FAVORITE_FILM`,
  LOAD_FAVORITES_FILMS: `LOAD_FAVORITES_FILMS`,
  REMOVE_FAVORITE_FILM: `REMOVE_FAVORITE_FILM`,
  SET_REVIEW_POSTING: `SET_REVIEW_POSTING`,
  SET_REVIEW_ERROR_MESSAGE: `SET_REVIEW_ERROR_MESSAGE`,
  SET_FAVORITES_FILMS_LOADING: `SET_FAVORITES_FILMS_LOADING`,
  SET_FAVORITES_FILMS_ERROR_MESSAGE: `SET_FAVORITES_FILMS_ERROR_MESSAGE`,
  SET_REVIEW_SET: `SET_REVIEW_SET`
};

const Endpoint = {
  FILMS: `/films`,
  PROMO_FILM: `/films/promo`,
  REVIEWS: `/comments`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`
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

  setFilmsLoading: (isFilmsLoading) => {
    return (
      {
        type: ActionType.SET_FILMS_LOADING,
        payload: isFilmsLoading
      }
    );
  },

  setFavoritesFilmsLoading: (isFavoritesFilmsLoading) => {
    return (
      {
        type: ActionType.SET_FAVORITES_FILMS_LOADING,
        payload: isFavoritesFilmsLoading
      }
    );
  },

  setPromoLoading: (isPromoLoading) => {
    return (
      {
        type: ActionType.SET_PROMO_LOADING,
        payload: isPromoLoading
      }
    );
  },

  setReviewsLoading: (isReviewsLoading) => {
    return (
      {
        type: ActionType.SET_REVIEWS_LOADING,
        payload: isReviewsLoading
      }
    );
  },

  setReviewPosting: (isReviewPosting) => {
    return (
      {
        type: ActionType.SET_REVIEW_POSTING,
        payload: isReviewPosting
      }
    );
  },

  setFilmsErrorMessage: (message) => {
    return (
      {
        type: ActionType.SET_FILMS_ERROR_MESSAGE,
        payload: message
      }
    );
  },

  setFavoritesFilmsErrorMessage: (message) => {
    return (
      {
        type: ActionType.SET_FAVORITES_FILMS_ERROR_MESSAGE,
        payload: message
      }
    );
  },

  setPromoErrorMessage: (message) => {
    return (
      {
        type: ActionType.SET_PROMO_ERROR_MESSAGE,
        payload: message
      }
    );
  },

  setReviewsErrorMessage: (message) => {
    return (
      {
        type: ActionType.SET_REVIEWS_ERROR_MESSAGE,
        payload: message
      }
    );
  },

  setReviewErrorMessage: (message) => {
    return (
      {
        type: ActionType.SET_REVIEW_ERROR_MESSAGE,
        payload: message
      }
    );
  },

  addFavoriteFilm: (filmId) => {
    return {
      type: ActionType.ADD_FAVORITE_FILM,
      payload: filmId
    };
  },

  loadFavoritesFilms: (films) => {
    return {
      type: ActionType.LOAD_FAVORITES_FILMS,
      payload: films
    };
  },

  removeFavoriteFilm: (filmId) => {
    return {
      type: ActionType.REMOVE_FAVORITE_FILM,
      payload: filmId
    };
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

    case ActionType.SET_FILMS_LOADING:
      return extend(state, {
        isFilmsLoading: action.payload
      });

    case ActionType.SET_PROMO_LOADING:
      return extend(state, {
        isPromoLoading: action.payload
      });

    case ActionType.SET_REVIEWS_LOADING:
      return extend(state, {
        isReviewsLoading: action.payload
      });

    case ActionType.SET_REVIEW_POSTING:
      return extend(state, {
        isReviewPosting: action.payload
      });

    case ActionType.SET_FILMS_ERROR_MESSAGE:
      return extend(state, {
        loadFilmsError: action.payload
      });

    case ActionType.SET_FAVORITES_FILMS_ERROR_MESSAGE:
      return extend(state, {
        loadFavoritesFilmsError: action.payload
      });

    case ActionType.SET_PROMO_ERROR_MESSAGE:
      return extend(state, {
        loadPromoError: action.payload
      });

    case ActionType.SET_REVIEWS_ERROR_MESSAGE:
      return extend(state, {
        loadReviewsError: action.payload
      });

    case ActionType.ADD_FAVORITE_FILM:
      return extend(state, {
        favoritesFilms: [...state.favoritesFilms, action.payload]
      });

    case ActionType.LOAD_FAVORITES_FILMS:
      return extend(state, {
        favoritesFilms: action.payload
      });

    case ActionType.SET_FAVORITES_FILMS_LOADING:
      return extend(state, {
        isFavoritesFilmsLoading: action.payload
      });

    case ActionType.REMOVE_FAVORITE_FILM:
      return extend(state, {
        favoritesFilms: [...state.favoritesFilms].filter((film) => film.id !== action.payload.id)
      });
  }

  return state;
};

// Асинхронные операции
const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFilmsLoading(true));

    return api.get(Endpoint.FILMS)
      .then((result) => {
        const adaptedFilms = result.data.map((film) => getAdaptedFilm(film));

        dispatch(ActionCreator.loadFilms(adaptedFilms));
        const genresList = [
          DEFAULT_GENRE,
          ...new Set(adaptedFilms.map((filmObject) => filmObject.genre).slice(0, MAX_GENRES_LENGTH))
        ];
        dispatch(ActionCreator.loadGenres(genresList));
        dispatch(ActionCreator.setFilmsLoading(false));
      })
      .catch((error) => {
        dispatch(ActionCreator.setFilmsLoading(false));
        if (error.response.status !== 200) {
          dispatch(ActionCreator.setFilmsErrorMessage(`${error.response.status} ${error.response.data.error}`));
        } else {
          dispatch(ActionCreator.setFilmsErrorMessage(``));
        }
      });
  },

  loadFavoriteFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFavoritesFilmsLoading(true));

    return api.get(Endpoint.FAVORITE)
      .then((result) => {
        const adaptedFilms = result.data.map((film) => getAdaptedFilm(film));
        dispatch(ActionCreator.loadFavoritesFilms(adaptedFilms));
        dispatch(ActionCreator.setFavoritesFilmsLoading(false));
      })
      .catch((error) => {
        dispatch(ActionCreator.setFavoritesFilmsLoading(false));
        if (error.response.status !== 200) {
          dispatch(ActionCreator.setFavoritesFilmsErrorMessage(`${error.response.status} ${error.response.data.error}`));
        } else {
          dispatch(ActionCreator.setFavoritesFilmsErrorMessage(``));
        }
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setPromoLoading(true));

    return api.get(Endpoint.PROMO_FILM)
      .then((result) => {
        dispatch(ActionCreator.loadPromoFilm(getAdaptedFilm(result.data)));
        dispatch(ActionCreator.setPromoLoading(false));
      })
      .catch((error) => {
        dispatch(ActionCreator.setPromoLoading(false));
        if (error.response.status !== 200) {
          dispatch(ActionCreator.setPromoErrorMessage(`${error.response.status} ${error.response.data.error}`));
        } else {
          dispatch(ActionCreator.setPromoErrorMessage(``));
        }
      });
  },

  loadReviews: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setReviewsLoading(true));

    return api.get(`${Endpoint.REVIEWS}/${id}`)
      .then((result) => {
        const adaptedReviews = result.data.map((review) => getAdaptedReview(review));
        dispatch(ActionCreator.loadReviews(adaptedReviews));
        dispatch(ActionCreator.setReviewsLoading(false));
      })
      .catch((error) => {
        dispatch(ActionCreator.setReviewsLoading(false));
        if (error.response.status !== 200) {
          dispatch(ActionCreator.setReviewsErrorMessage(`${error.response.status} ${error.response.data.error}`));
        } else {
          dispatch(ActionCreator.setReviewsErrorMessage(``));
        }
      });
  },

  addReview: (filmId, reviewData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setReviewPosting(true));

    return api.post(`${Endpoint.COMMENTS}/${filmId}`, reviewData)
      .then(() => {
        dispatch(ActionCreator.setReviewPosting(false));
      })
      .then(() => {
        dispatch(Operation.loadReviews(filmId));
      })
      .catch((error) => {
        dispatch(ActionCreator.setReviewPosting(false));
        dispatch(ActionCreator.setReviewErrorMessage(`${error.response.status} ${error.response.data.error}`));
      });
  },

  changeFavoriteStatus: (id, status) => (dispatch, getState, api) => {
    return api.post(`${Endpoint.FAVORITE}/${id}/${status}`)
      .then(() => dispatch(Operation.loadFilms()))
      .then(() => dispatch(Operation.loadFavoriteFilms()))
      .then(() => dispatch(Operation.loadPromoFilm()))
      .catch((error) => {
        throw error;
      });
  }
};

export {reducer, ActionCreator, ActionType, Operation};
