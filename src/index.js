import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer/app-state/app-state.js';
import thunk from 'redux-thunk';
import createAPI from './api.js';
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from './reducer/user/user.js';

import App from './components/app/app.jsx';

const api = createAPI(() => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

// store.dispatch(DataOperation.loadFilms());
// store.dispatch(DataOperation.loadPromoFilm());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
