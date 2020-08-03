import React from 'react';
import renderer from 'react-test-renderer';
import NameSpace from "../../reducer/name-space";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import GenresList from './genres-list.jsx';

const genresList = [`All genres`, `Crime`, `Sci-Fi`, `Drama`, `Comedy`];
const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    films: [],
    favoritesFilms: [],
    promoFilm: {},
    genres: [],
  },
  [NameSpace.APP_STATE]: {
    isLoading: false,
    selectedFilmId: 1,
    genres: genresList,
    genre: `All genres`
  },
  [NameSpace.USER]: {
    authorizationStatus: `NO_AUTH`,
    userData: {},
  }
});

describe(`GenresList rendering`, () => {

  it(`GenresList renders correctly with the first active filter`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <GenresList
              activeGenre={`All genres`}
              onGenreClick={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
