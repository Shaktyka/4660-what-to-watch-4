import React from 'react';
import renderer from 'react-test-renderer';
import NameSpace from "../../reducer/name-space";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import GenresList from './genres-list.jsx';

const genresList = [`All genres`, `Crime`, `Sci-Fi`, `Drama`, `Comedy`];
const mockStore = configureStore([]);

describe(`GenresList rendering`, () => {

  it(`GenresList renders correctly with the first active filter`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        genres: genresList,
      },
      [NameSpace.APP_STATE]: {
        genre: `All genres`
      }
    });

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

  it(`GenresList renders correctly with the third active filter`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        genres: genresList,
      },
      [NameSpace.APP_STATE]: {
        genre: `Sci-Fi`
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <GenresList
              activeGenre={`Sci-Fi`}
              onGenreClick={() => {}}
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
