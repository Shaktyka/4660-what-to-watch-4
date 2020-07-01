import React from 'react';
import renderer from 'react-test-renderer';
import SimilarMovies from './similar-movies.jsx';

const MAX_SIMILAR_FILMS_AMOUNT = 4;
import {FILMS_DATA} from '../test-data.js';

describe(`SimilarMovies rendering`, () => {

  it(`SimilarMovies renders correctly`, () => {
    const films = FILMS_DATA.slice(0, MAX_SIMILAR_FILMS_AMOUNT);

    const tree = renderer
      .create(
          <SimilarMovies
            films={films}
            onFilmCardClick={() => {}}
            onHoverCard={() => {}}
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
