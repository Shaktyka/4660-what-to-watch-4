const MAX_GENRES_LENGTH = 9;
const DEFAULT_GENRE = `All genres`;
const MOVIE_NAV_TABS = [`Overview`, `Details`, `Reviews`];
const DEFAULT_MOVIE_NAV_TAB = `Overview`;
const FILMS_PORTION = 8;

const BASE_URL = `https://4.react.pages.academy`;

const TabName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MYLIST: `/mylist`
};

export {
  MAX_GENRES_LENGTH,
  DEFAULT_GENRE,
  MOVIE_NAV_TABS,
  DEFAULT_MOVIE_NAV_TAB,
  TabName,
  FILMS_PORTION,
  AuthorizationStatus,
  AppRoute,
  BASE_URL
};
