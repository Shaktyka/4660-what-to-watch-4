import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import {noop, filmData, MOVIE_NAV_TABS} from '../test-data';

import MovieNavTabs from './movie-nav-tabs';

const mockStore = configureStore([]);

describe(`MovieNavTabs component rendering`, () => {

  it(`MovieNavTabs renders correctly with the first active filter`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: [filmData]
      },
      [NameSpace.APP_STATE]: {
        movieNavTabs: MOVIE_NAV_TABS,
        activeMovieNavTab: MOVIE_NAV_TABS[0],
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieNavTabs
              onTabClick={noop}
              tabs={MOVIE_NAV_TABS}
              activeTab={MOVIE_NAV_TABS[0]}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`MovieNavTabs renders correctly with the last active tab`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: [filmData]
      },
      [NameSpace.APP_STATE]: {
        movieNavTabs: MOVIE_NAV_TABS,
        activeMovieNavTab: MOVIE_NAV_TABS[MOVIE_NAV_TABS.length - 1],
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieNavTabs
              onTabClick={noop}
              tabs={MOVIE_NAV_TABS}
              activeTab={MOVIE_NAV_TABS[MOVIE_NAV_TABS.length - 1]}
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
