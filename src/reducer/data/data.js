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
  loadFilmsErr: null,
  loadPromoErr: null,
  loadReviewsErr: null,
  isReviewPosting: false,
  postingReviewErr: null,
  isFavoritesFilmsLoading: false,
  loadFavoritesFilmsErr: null
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_GENRES: `LOAD_GENRES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_FILMS_LOADING: `SET_FILMS_LOADING`,
  SET_PROMO_LOADING: `SET_PROMO_LOADING`,
  SET_REVIEWS_LOADING: `SET_REVIEWS_LOADING`,
  SET_FILMS_ERR_MSG: `SET_FILMS_ERR_MSG`,
  SET_PROMO_ERR_MSG: `SET_PROMO_ERR_MSG`,
  SET_REVIEWS_ERR_MSG: `SET_REVIEWS_ERR_MSG`,
  ADD_FAVORITE_FILM: `ADD_FAVORITE_FILM`,
  LOAD_FAVORITES_FILMS: `LOAD_FAVORITES_FILMS`,
  REMOVE_FAVORITE_FILM: `REMOVE_FAVORITE_FILM`,
  SET_REVIEW_POSTING: `SET_REVIEW_POSTING`,
  SET_REVIEW_ERR_MSG: `SET_REVIEW_ERR_MSG`,
  SET_FAVORITES_FILMS_LOADING: `SET_FAVORITES_FILMS_LOADING`,
  SET_FAVORITES_FILMS_ERR_MSG: `SET_FAVORITES_FILMS_ERR_MSG`
};

const Endpoint = {
  FILMS: `/films`,
  PROMO_FILM: `/films/promo`,
  REVIEWS: `/comments/`,
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

  setFilmsErrMsg: (message) => {
    return (
      {
        type: ActionType.SET_FILMS_ERR_MSG,
        payload: message
      }
    );
  },

  setFavoritesFilmsErrMsg: (message) => {
    return (
      {
        type: ActionType.SET_FAVORITES_FILMS_ERR_MSG,
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

  setReviewErrMsg: (message) => {
    return (
      {
        type: ActionType.SET_REVIEW_ERR_MSG,
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

    case ActionType.SET_FILMS_ERR_MSG:
      return extend(state, {
        loadFilmsErr: action.payload
      });

    case ActionType.SET_FAVORITES_FILMS_ERR_MSG:
      return extend(state, {
        loadFavoritesFilmsErr: action.payload
      });

    case ActionType.SET_PROMO_ERR_MSG:
      return extend(state, {
        loadPromoErr: action.payload
      });

    case ActionType.SET_REVIEWS_ERR_MSG:
      return extend(state, {
        loadReviewsErr: action.payload
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
      .then((res) => {
        const adaptedFilms = res.data.map((film) => getAdaptedFilm(film));

        dispatch(ActionCreator.loadFilms(adaptedFilms));
        const genresList = [
          DEFAULT_GENRE,
          ...new Set(adaptedFilms.map((filmObject) => filmObject.genre).slice(0, MAX_GENRES_LENGTH))
        ];
        dispatch(ActionCreator.loadGenres(genresList));
        dispatch(ActionCreator.setFilmsLoading(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setFilmsLoading(false));
        if (err.response.status !== 200) {
          dispatch(ActionCreator.setFilmsErrMsg(`${err.response.status} ${err.response.data.error}`));
        } else {
          dispatch(ActionCreator.setFilmsErrMsg(null));
        }
      });
  },

  loadFavoriteFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFavoritesFilmsLoading(true));

    return api.get(Endpoint.FAVORITE)
      .then((res) => {
        const adaptedFilms = res.data.map((film) => getAdaptedFilm(film));
        dispatch(ActionCreator.loadFavoritesFilms(adaptedFilms));
        dispatch(ActionCreator.setFavoritesFilmsLoading(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setFavoritesFilmsLoading(false));
        if (err.response.status !== 200) {
          dispatch(ActionCreator.setFavoritesFilmsErrMsg(`${err.response.status} ${err.response.data.error}`));
        } else {
          dispatch(ActionCreator.setFavoritesFilmsErrMsg(null));
        }
        throw err;
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setPromoLoading(true));

    return api.get(Endpoint.PROMO_FILM)
      .then((res) => {
        dispatch(ActionCreator.loadPromoFilm(getAdaptedFilm(res.data)));
        dispatch(ActionCreator.setPromoLoading(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setPromoLoading(false));
        if (err.response.status !== 200) {
          dispatch(ActionCreator.setPromoErrMsg(`${err.response.status} ${err.response.data.error}`));
        } else {
          dispatch(ActionCreator.setPromoErrMsg(null));
        }
      });
  },

  loadReviews: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setReviewsLoading(true));

    return api.get(`${Endpoint.REVIEWS}${id}`)
      .then((res) => {
        const adaptedReviews = res.data.map((review) => getAdaptedReview(review));
        dispatch(ActionCreator.loadReviews(adaptedReviews));
        dispatch(ActionCreator.setReviewsLoading(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setReviewsLoading(false));
        if (err.response.status !== 200) {
          dispatch(ActionCreator.setReviewsErrMsg(`${err.response.status} ${err.response.data.error}`));
        } else {
          dispatch(ActionCreator.setReviewsErrMsg(null));
        }
      });
  },

  addReview: (filmId, reviewData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setReviewPosting(true));

    return api.post(`${Endpoint.COMMENTS}/${filmId}`, reviewData)
      .then((res) => {
        dispatch(ActionCreator.setReviewPosting(false));
        console.log(res);
      })
      .catch((err) => {
        dispatch(ActionCreator.setReviewPosting(false));
        if (err.response.status !== 200) {
          dispatch(ActionCreator.setReviewErrMsg(`${err.response.status} ${err.response.data.error}`));
        } else {
          dispatch(ActionCreator.setReviewErrMsg(null));
        }
        throw err;
      });
  },

  changeFavoriteStatus: (id, status) => (dispatch, getState, api) => {
    return api.post(`${Endpoint.FAVORITE}/${id}/${status}`)
      .then(() => {
        //
      })
      .catch((err) => {
        throw err;
      });
  }
};

export {reducer, ActionCreator, ActionType, Operation};
