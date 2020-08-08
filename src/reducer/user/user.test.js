import {reducer, ActionType, ActionCreator} from "./user.js";
import {AuthorizationStatus} from '../../consts.js';

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

const userDataObject = {
  id: 0,
  email: ``,
  name: ``,
  avatar: ``
};

const userData = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatar: `img/1.png`
};

describe(`User Reducer works correctly`, () => {

  it(`User Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`User Reducer should change isAuthorizationProgress by a given value`, () => {
    expect(reducer({
      isAuthorizationProgress: true
    }, {
      type: ActionType.FINISH_AUTHORIZATION_PROGRESS,
      payload: false,
    })).toEqual({
      isAuthorizationProgress: false
    });
  });

  it(`User Reducer should change authorizationStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });

  it(`User Reducer should change userData by a given value`, () => {
    expect(reducer({
      userData
    }, {
      type: ActionType.SET_USER_DATA,
      payload: userDataObject,
    })).toEqual({
      userData: userDataObject
    });

    expect(reducer({
      userData: userDataObject
    }, {
      type: ActionType.SET_USER_DATA,
      payload: userData,
    })).toEqual({
      userData
    });
  });

  it(`User Reducer should change authorizationError by a given value`, () => {
    const errorText = `401, bad request`;

    expect(reducer({
      authorizationError: errorText
    }, {
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: ``,
    })).toEqual({
      authorizationError: ``
    });

    expect(reducer({
      authorizationError: ``
    }, {
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: errorText,
    })).toEqual({
      authorizationError: errorText
    });
  });
});

describe(`User Action creators work correctly`, () => {

  it(`User Action Creator for setAuthorizationStatus returns correct action`, () => {
    expect(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`User Action Creator for setAuthorizationError returns correct action`, () => {
    expect(ActionCreator.setAuthorizationError(`auth error`)).toEqual({
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: `auth error`
    });

    expect(ActionCreator.setAuthorizationError(``)).toEqual({
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: ``
    });
  });

  it(`User Action Creator for setUserData returns correct action`, () => {
    expect(ActionCreator.setUserData(userData)).toEqual({
      type: ActionType.SET_USER_DATA,
      payload: userData
    });
  });

  it(`User Action Creator for finishAuthorizationProgress returns correct action`, () => {
    expect(ActionCreator.finishAuthorizationProgress(false)).toEqual({
      type: ActionType.FINISH_AUTHORIZATION_PROGRESS,
      payload: false
    });
  });

});
