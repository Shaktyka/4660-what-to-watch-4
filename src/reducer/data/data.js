import {extend} from '../../utils.js';
import {getAdaptedFilm} from '../../adapter/adapter.js';
import {DEFAULT_GENRE, MAX_GENRES_LENGTH} from '../../consts.js';

const initialState = {
  films: null,
  promoFilm: null,
  genres: null
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

// Все асинхронные операции
const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((res) => {
        const adaptedFilm = res.data.map((film) => getAdaptedFilm(film));
        dispatch(ActionCreator.loadFilms(adaptedFilm));
        dispatch(ActionCreator.loadGenres(
            [DEFAULT_GENRE, ...new Set(adaptedFilm.map((filmObject) => filmObject.genre)
              .slice(0, MAX_GENRES_LENGTH))])
        );
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((res) => {
        dispatch(ActionCreator.loadPromoFilm(getAdaptedFilm(res.data)));
      });
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
        films: action.payload
      });

    case ActionType.LOAD_GENRES:
      return extend(state, {
        genres: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
