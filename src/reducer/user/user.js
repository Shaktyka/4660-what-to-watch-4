import {extend} from '../../utils.js';
import {AuthorizationStatus} from '../../consts.js';
import {getAdaptedFilm, getAdaptedUserData} from '../../adapter/adapter.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
  authError: null
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTH_ERROR: `SET_AUTH_ERROR`,
  SET_USER_DATA: `SET_USER_DATA`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },

  setAuthError: (text) => {
    return {
      type: ActionType.SET_AUTH_ERROR,
      payload: text
    };
  },

  setUserData: (userInfo) => {
    return {
      type: ActionType.SET_USER_DATA,
      payload: userInfo
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });

    case ActionType.SET_AUTH_ERROR:
      return extend(state, {
        authError: action.payload
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
      .then((res) => {
        return getAdaptedUserData(res.data);
      })
      .catch((err) => {
        if (err.status === 401) {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
          dispatch(ActionCreator.setUserData({}));
        }
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((res) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(getAdaptedUserData(res.data)));
        dispatch(ActionCreator.setAuthError(null));
      })
      .catch((err) => {
        if (err.code !== 200) {
          dispatch(ActionCreator.setAuthError(err.message));
        } else {
          dispatch(ActionCreator.setAuthError(null));
        }
        throw err;
      });
  }
};

export {reducer, ActionType, ActionCreator, AuthorizationStatus, Operation};
