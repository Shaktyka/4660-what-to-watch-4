import {extend} from '../../utils.js';
import {AuthorizationStatus} from '../../consts.js';
import {getAdaptedUserData} from '../../adapter/adapter.js';
import {Operation as DataOperation} from '../data/data.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {
    id: 0,
    email: ``,
    name: ``,
    avatar: ``
  },
  authorizationError: ``
};

const userDataObject = {
  id: 0,
  email: ``,
  name: ``,
  avatar: ``
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTHORIZATION_ERROR: `SET_AUTHORIZATION_ERROR`,
  SET_USER_DATA: `SET_USER_DATA`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },

  setAuthorizationError: (text) => {
    return {
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: text
    };
  },

  setUserData: (userData) => {
    return {
      type: ActionType.SET_USER_DATA,
      payload: userData
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });

    case ActionType.SET_AUTHORIZATION_ERROR:
      return extend(state, {
        authorizationError: action.payload
      });

    case ActionType.SET_USER_DATA:
      return extend(state, {
        userData: action.payload
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((result) => {
        return getAdaptedUserData(result.data);
      })
      .catch((error) => {
        if (error.status === 401) {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
          dispatch(ActionCreator.setUserData(userDataObject));
        }
        throw error;
      });
  },

  login: (authtorizationData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authtorizationData.email,
      password: authtorizationData.password,
    })
      .then((result) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(getAdaptedUserData(result.data)));
        dispatch(ActionCreator.setAuthorizationError(``));
      })
      .then(() => {
        dispatch(DataOperation.loadFavoriteFilms());
      })
      .catch((error) => {
        if (error.code !== 200) {
          dispatch(ActionCreator.setAuthorizationError(error.message));
        } else {
          dispatch(ActionCreator.setAuthorizationError(``));
        }
        throw error;
      });
  }
};

export {reducer, ActionType, ActionCreator, AuthorizationStatus, Operation};
