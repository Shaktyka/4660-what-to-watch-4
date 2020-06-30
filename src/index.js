import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer.js';

import App from './components/app/app.jsx';

const store = createStore(
    reducer,
    window._REDUX_DEVTOOLS_EXTENSION_ ? window._REDUX_DEVTOOLS_EXTENSION_() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
