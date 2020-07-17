import {extend} from '../../utils.js';
import {getAdaptedFilm} from '../../adapter/adapter.js';
import {DEFAULT_GENRE, MAX_GENRES_LENGTH} from '../../consts.js';

const initialState = {
  films: [],
  promoFilm: {},
  genres: []
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_GENRES: `LOAD_GENRES`
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
  }
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
  }

  return state;
};

// Все асинхронные операции
const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((res) => {
        const adaptedFilms = res.data.map((film) => getAdaptedFilm(film));
        dispatch(ActionCreator.loadFilms(adaptedFilms));
        const genresList = [
          DEFAULT_GENRE,
          ...new Set(adaptedFilms.map((filmObject) => filmObject.genre).slice(0, MAX_GENRES_LENGTH))
        ];
        dispatch(ActionCreator.loadGenres(genresList));
      })
      .catch((err) => {
        //
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((res) => {
        dispatch(ActionCreator.loadPromoFilm(getAdaptedFilm(res.data)));
      });
  }
};

export {reducer, ActionCreator, ActionType, Operation};
