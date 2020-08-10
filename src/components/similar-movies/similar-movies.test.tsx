import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import {noop, filmData} from '../test-data';

import SimilarMovies from './similar-movies';

const MAX_SIMILAR_FILMS_AMOUNT = 4;

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    films: [],
    favoritesFilms: [],
    promoFilm: {},
    genres: [],
    isFilmsLoading: false,
    isPromoLoading: false,
    loadFilmsError: ``
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

describe(`SimilarMovies rendering`, () => {

  it(`SimilarMovies renders correctly`, () => {
    const films = [filmData].slice(0, MAX_SIMILAR_FILMS_AMOUNT);

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <SimilarMovies
                films={films}
                isLoading={false}
                loadFilmsError={``}
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
