import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from "../../reducer/name-space";
import {BrowserRouter} from 'react-router-dom';

import FilmDetails from './film-details.jsx';

const MOVIE_NAV_TABS = [`Overview`, `Details`, `Reviews`];

const FILMS_DATA = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    year: 2018,
    preview: `/img/bohemian-rhapsody.jpg`,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.6,
    ratingCount: 240,
    description: [
      `Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    duration: 120
  }
];

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
        films: FILMS_DATA,
        favoritesFilms: [],
        promoFilm: {},
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
                filmData={FILMS_DATA[0]}
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
