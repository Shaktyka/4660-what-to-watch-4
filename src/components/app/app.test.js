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
        isFilmsLoading: false,
        isPromoLoading: false
      },
      [NameSpace.APP_STATE]: {
        isLoading: false,
        selectedFilmId: 1,
        genre: `All genres`,
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        userData: {
          id: 0,
          email: ``,
          name: ``,
          avatar: ``
        },
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              isLoading={false}
              error={``}
            />
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
