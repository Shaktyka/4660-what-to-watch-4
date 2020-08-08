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
  authorizationError: ``,
  isAuthorizationProgress: true,
};

const ActionType = {
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  SET_AUTHORIZATION_ERROR: `SET_AUTHORIZATION_ERROR`,
  SET_USER_DATA: `SET_USER_DATA`,
  FINISH_AUTHORIZATION_PROGRESS: `FINISH_AUTHORIZATION_PROGRESS`,
};

const ActionCreator = {
  setAuthorizationStatus: (status) => {
    return {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: status
    };
  },

  finishAuthorizationProgress: () => {
    return {
      type: ActionType.FINISH_AUTHORIZATION_PROGRESS,
      payload: false,
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

    case ActionType.SET_AUTHORIZATION_STATUS:
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

    case ActionType.FINISH_AUTHORIZATION_PROGRESS:
      return extend(state, {
        isAuthorizationProgress: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((result) => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(getAdaptedUserData(result.data)));
        dispatch(ActionCreator.finishAuthorizationProgress());
      })
      .catch((error) => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
        dispatch(ActionCreator.finishAuthorizationProgress());
        dispatch(ActionCreator.setAuthorizationError(error.message));
      });
  },

  login: (authorizationData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authorizationData.email,
      password: authorizationData.password,
    })
      .then((result) => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(getAdaptedUserData(result.data)));
        dispatch(ActionCreator.setAuthorizationError(``));
      })
      .then(() => {
        dispatch(DataOperation.loadFavoriteFilms());
      })
      .catch((error) => {
        dispatch(ActionCreator.setAuthorizationError(error.message));
        dispatch(ActionCreator.setAuthorizationError(``));
      });
  }
};

export {reducer, ActionType, ActionCreator, AuthorizationStatus, Operation};
