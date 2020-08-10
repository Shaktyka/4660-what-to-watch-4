import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space';

import App from './app';

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
        isPromoLoading: false,
        loadFilmsError: ``,
        loadPromoError: ``
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
        isAuthorizationProgress: false
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              isLoading={false}
              loadFilmsError={``}
              loadPromoError={``}
              isAuthorizationProgress={false}
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
