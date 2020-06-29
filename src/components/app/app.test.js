import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {FILMS_DATA, promoCardData} from '../test-data.js';

import App from './app.jsx';

const mockStore = configureStore([]);
const genres = [`All genres`, `Crime`, `Sci-Fi`, `Drama`];
const genre = `All genres`;

describe(`App rendering`, () => {

  it(`App renders correctly`, () => {
    const store = mockStore({
      genre,
      genres
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              genre={genre}
              genres={genres}
              promoCard={promoCardData}
              films={FILMS_DATA}
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
