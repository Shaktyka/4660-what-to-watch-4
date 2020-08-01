import {reducer, ActionType, ActionCreator} from "./user.js";
import {AuthorizationStatus} from '../../consts.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
  authError: null
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

  it(`User Reducer should change authorizationStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });

  it(`User Reducer should change userData by a given value`, () => {
    expect(reducer({
      userData: {}
    }, {
      type: ActionType.SET_USER_DATA,
      payload: {},
    })).toEqual({
      userData: {}
    });

    expect(reducer({
      userData: {}
    }, {
      type: ActionType.SET_USER_DATA,
      payload: userData,
    })).toEqual({
      userData
    });
  });

  it(`User Reducer should change authError by a given value`, () => {
    const errorText = `401, bad request`;

    expect(reducer({
      authError: errorText
    }, {
      type: ActionType.SET_AUTH_ERROR,
      payload: null,
    })).toEqual({
      authError: null
    });

    expect(reducer({
      authError: null
    }, {
      type: ActionType.SET_AUTH_ERROR,
      payload: errorText,
    })).toEqual({
      authError: errorText
    });
  });
});

describe(`User Action creators work correctly`, () => {
  it(`Action Creator for authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });
});
