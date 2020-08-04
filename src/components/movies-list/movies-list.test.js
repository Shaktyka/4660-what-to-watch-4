import React from 'react';

import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from "../../reducer/name-space";

import MoviesList from './movies-list.jsx';

const filmData = {
  bgColor: `#A6B7AC`,
  cover: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
  description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City
    seeking revenge against Bill the Butcher, his father's killer.`,
  director: `Martin Scorsese`,
  duration: 167,
  genre: `Crime`,
  id: 1,
  isFavorite: false,
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

describe(`MoviesList rendering`, () => {

  it(`MoviesList renders correctly`, () => {

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <MoviesList
                films={[filmData]}
                onFilmCardClick={() => {}}
                onHoverCard={() => {}}
                isLoading={false}
                isShowed={true}
                onShowMoreClick={() => {}}
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
