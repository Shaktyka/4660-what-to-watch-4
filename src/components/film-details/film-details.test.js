
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from "../../reducer/name-space";
import {BrowserRouter} from 'react-router-dom';

import FilmDetails from './film-details.jsx';

const MOVIE_NAV_TABS = [`Overview`, `Details`, `Reviews`];

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

const comment = {
  id: 1,
  userId: 4,
  userName: `Kate Muir`,
  rating: 8.9,
  comment: `Discerning travellers`,
  date: `2019-05-08T14:13:56.569Z`
};

const mockStore = configureStore([]);

describe(`FilmDetails rendering`, () => {

  it(`FilmDetails renders correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: [filmData],
        isFilmsLoading: false,
        genres: [],
        filmReviews: [comment]
      },
      [NameSpace.APP_STATE]: {
        isLoading: false,
        selectedFilmId: 1,
        movieNavTabs: MOVIE_NAV_TABS,
        activeMovieNavTab: MOVIE_NAV_TABS[0],
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        userData: {},
      }
    });

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <FilmDetails
                films={[filmData]}
                filmData={filmData}
                isFilmsLoading={false}
                selectedFilmId={1}
                onTabClick={() => {}}
                onGenreClick={() => {}}
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
