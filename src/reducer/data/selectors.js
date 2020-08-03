import NameSpace from '../name-space.js';
import {createSelector} from 'reselect';
import {getGenre} from '../app-state/selectors.js';
import {DEFAULT_GENRE} from '../../consts.js';

const NAME_SPACE = NameSpace.DATA;

const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

const getGenres = (state) => {
  return state[NAME_SPACE].genres;
};

const getReviews = (state) => {
  return state[NAME_SPACE].filmReviews;
};

const getIsFilmsLoading = (state) => {
  return state[NAME_SPACE].isFilmsLoading;
};

const getIsPromoLoading = (state) => {
  return state[NAME_SPACE].isPromoLoading;
};

const getIsReviewsLoading = (state) => {
  return state[NAME_SPACE].isReviewsLoading;
};

const getIsReviewPosting = (state) => {
  return state[NAME_SPACE].isReviewPosting;
};

const getIsReviewSent = (state) => {
  return state[NAME_SPACE].isReviewSent;
};

const getFilmsErrorMessage = (state) => {
  return state[NAME_SPACE].loadFilmsErr;
};

const getPromoErrorMessage = (state) => {
  return state[NAME_SPACE].loadPromoErr;
};

const getReviewsErrorMessage = (state) => {
  return state[NAME_SPACE].loadReviewsErr;
};

const getReviewErrorMessage = (state) => {
  return state[NAME_SPACE].postingReviewErr;
};

const getFavoritesFilms = (state) => {
  return state[NAME_SPACE].favoritesFilms;
};

const getIsFavoritesFilmsLoading = (state) => {
  return state[NAME_SPACE].isFavoritesFilmsLoading;
};

const getLoadFavoritesFilmsErr = (state) => {
  return state[NAME_SPACE].loadFavoritesFilmsErr;
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

export {
  getFilms,
  getPromoFilm,
  getGenres,
  getFilmsByGenre,
  getReviews,
  getFilmsErrorMessage,
  getPromoErrorMessage,
  getReviewsErrorMessage,
  getIsFilmsLoading,
  getIsPromoLoading,
  getIsReviewsLoading,
  getFavoritesFilms,
  getIsReviewPosting,
  getReviewErrorMessage,
  getIsFavoritesFilmsLoading,
  getLoadFavoritesFilmsErr,
  getIsReviewSent
};
