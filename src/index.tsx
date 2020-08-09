import * as React from "react";
import * as ReactDOM from "react-dom";

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';
import createAPI from './api';
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from './reducer/user/user';
import {Operation as DataOperation} from './reducer/data/data';

import App from './components/app/app';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);
const root = document.querySelector(`#root`);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromoFilm());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
);
