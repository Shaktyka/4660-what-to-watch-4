import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from "../../reducer/name-space";

import App from './app.jsx';

const mockStore = configureStore([]);

describe(`App rendering`, () => {

  it(`App renders correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: [],
        favoritesFilms: [],
        promoFilm: {},
        genres: [],
      },
      [NameSpace.APP_STATE]: {
        isLoading: false,
        selectedFilmId: 1,
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        userData: {},
      }
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
