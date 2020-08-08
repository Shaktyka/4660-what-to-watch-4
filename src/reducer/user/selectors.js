import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.USER;

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getAuthorizationProgress = (state) => {
  return state[NAME_SPACE].isAuthorizationProgress;
};

const getAuthorizationError = (state) => {
  return state[NAME_SPACE].authorizationError;
};

const getUserData = (state) => {
  return state[NAME_SPACE].userData;
};

export {
  getAuthorizationStatus,
  getAuthorizationError,
  getUserData,
  getAuthorizationProgress
};
