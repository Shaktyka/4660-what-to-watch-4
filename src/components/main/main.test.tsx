import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import NameSpace from '../../reducer/name-space';
import {noop, filmData, userData} from '../test-data';

import {Main} from './main';

const mockStore = configureStore([]);

const genresList = [`All genres`, `Crime`, `Sci-Fi`, `Drama`];

const store = mockStore({
  [NameSpace.DATA]: {
    films: [filmData],
    isFilmsLoading: false,
    favoritesFilms: [filmData],
    genres: genresList,
    promoFilm: filmData,
    isPromoLoading: false,
    loadFilmsError: ``,
    loadPromoError: ``
  },
  [NameSpace.APP_STATE]: {
    genre: `All genres`
  },
  [NameSpace.USER]: {
    authorizationStatus: `AUTH`,
    userData
  }
});

const history = {
  push: noop
};

describe(`Main rendering`, () => {

  it(`Main renders correctly`, () => {

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <Main
                films={[filmData]}
                promoFilm={filmData}
                loadFilmsError={``}
                loadPromoError={``}
                isFilmsLoading={false}
                isPromoLoading={false}
                history={history}
                userData={userData}
                authorizationStatus={`AUTH`}
                changeFavoriteStatus={noop}
              />
            </Provider>
          </BrowserRouter>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
