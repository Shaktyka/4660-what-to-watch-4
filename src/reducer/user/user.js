import {extend} from '../../utils.js';
import {AuthorizationStatus} from '../../consts.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  showSendError: false
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((res) => {
        // console.log(res);
        // dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((res) => {
        // в теле запроса возвращает объект res.data
        // запишет авторизац-ный токен в куки
        // сервер может вернуть код 400 (Bad request)
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  }

};

export {reducer, ActionType, ActionCreator, AuthorizationStatus, Operation};
