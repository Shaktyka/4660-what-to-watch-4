import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.USER;

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getAuthError = (state) => {
  return state[NAME_SPACE].authError;
};

const getUserData = (state) => {
  return state[NAME_SPACE].userData;
};

const getFavoritesFilms = (state) => {
  return state[NAME_SPACE].favoritesFilms;
};

export {
  getAuthorizationStatus,
  getAuthError,
  getUserData,
  getFavoritesFilms
};
