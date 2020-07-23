import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './app.jsx';

const mockStore = configureStore([]);

describe(`App rendering`, () => {

  it(`App renders correctly`, () => {
    const store = mockStore({
      isLoading: false,
      selectedFilmId: 1
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
