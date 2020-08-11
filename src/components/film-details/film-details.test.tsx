import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import NameSpace from '../../reducer/name-space';
import {noop, filmData, MOVIE_NAV_TABS, comment} from '../test-data';

import FilmDetails from './film-details';

const mockStore = configureStore([]);

describe(`FilmDetails rendering`, () => {

  it(`FilmDetails renders correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: [filmData],
        isFilmsLoading: false,
        genres: [],
        filmReviews: [comment],
        loadFilmsError: ``
      },
      [NameSpace.APP_STATE]: {
        isLoading: false,
        selectedFilmId: 1,
        movieNavTabs: MOVIE_NAV_TABS,
        activeMovieNavTab: MOVIE_NAV_TABS[0],
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        userData: {
          id: 1,
          email: `Oliver.conner@gmail.com`,
          name: `Oliver.conner`,
          avatar: `img/1.png`
        },
      }
    });

    const history = {
      push: noop
    };

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <FilmDetails
                films={[filmData]}
                isFilmsLoading={false}
                selectedFilmId={1}
                history={history}
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
