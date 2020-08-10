import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as configureStore from 'redux-mock-store';

import NameSpace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import {noop, GENRES} from '../test-data';

import GenresList from './genres-list';

const mockStore = configureStore([]);

describe(`GenresList rendering`, () => {

  it(`GenresList renders correctly with the first active filter`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        genres: GENRES,
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
              onGenreClick={noop}
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
        genres: GENRES,
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
              onGenreClick={noop}
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
