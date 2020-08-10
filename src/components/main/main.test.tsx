import React from 'react';

import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import NameSpace from "../../reducer/name-space";
import configureStore from 'redux-mock-store';
import {BrowserRouter} from 'react-router-dom';

import {Main} from './main.jsx';

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

const userData = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatar: `img/1.png`
};

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
  push: () => {}
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
                isLoading={false}
                isFilmsLoading={false}
                isPromoLoading={false}
                history={history}
                userData={userData}
                authorizationStatus={`AUTH`}
                changeFavoriteStatus={() => {}}
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
