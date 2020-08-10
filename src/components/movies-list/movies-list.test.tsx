import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as configureStore from 'redux-mock-store';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import NameSpace from '../../reducer/name-space';
import {noop, filmData} from '../test-data';

import MoviesList from './movies-list';

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    films: [],
    favoritesFilms: [],
    promoFilm: {},
    genres: [],
    isFilmsLoading: false,
    isPromoLoading: false,
    loadFilmsError: ``,
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

describe(`MoviesList rendering`, () => {

  it(`MoviesList renders correctly`, () => {

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <MoviesList
                films={[filmData]}
                onFilmCardClick={noop}
                onHoverCard={noop}
                isLoading={false}
                isShowed={true}
                onShowMoreClick={noop}
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
