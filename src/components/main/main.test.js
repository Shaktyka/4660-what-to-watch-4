import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

import {FILMS_DATA, promoCardData} from '../test-data.js';
const genres = [`All genres`, `Crime`, `Sci-Fi`, `Drama`];
const genre = `All genres`;

describe(`Main rendering`, () => {

  it(`Main renders correctly`, () => {
    const tree = renderer
      .create(
          <Main
            genre={genre}
            genres={genres}
            promoCard={promoCardData}
            films={FILMS_DATA}
            onFilmCardClick={() => {}}
            onGenreClick={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
