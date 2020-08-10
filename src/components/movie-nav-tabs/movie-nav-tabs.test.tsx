import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space';

import MovieNavTabs from './movie-nav-tabs';

const TABS = [`Overview`, `Details`, `Reviews`];

const filmData = {
  bgColor: `#A6B7AC`,
  cover: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
  description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City
    seeking revenge against Bill the Butcher, his father's killer.`,
  director: `Martin Scorsese`,
  duration: 167,
  genre: `Crime`,
  id: 1,
  isFavorite: true,
  poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
  preview: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingCount: 370881,
  ratingScore: 8.8,
  source: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
  title: `Gangs of new york`,
  year: 2002
};

const mockStore = configureStore([]);

describe(`MovieNavTabs component rendering`, () => {

  it(`MovieNavTabs renders correctly with the first active filter`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: [filmData]
      },
      [NameSpace.APP_STATE]: {
        movieNavTabs: TABS,
        activeMovieNavTab: TABS[0],
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieNavTabs
              onTabClick={() => {}}
              tabs={TABS}
              activeTab={TABS[0]}
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
        movieNavTabs: TABS,
        activeMovieNavTab: TABS[TABS.length - 1],
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieNavTabs
              onTabClick={() => {}}
              tabs={TABS}
              activeTab={TABS[TABS.length - 1]}
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
