import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.USER;

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getShowSendError = (state) => {
  return state[NAME_SPACE].showSendError;
};

export {getAuthorizationStatus, getShowSendError};
