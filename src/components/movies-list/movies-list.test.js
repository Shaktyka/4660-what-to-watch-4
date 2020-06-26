import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

import {FILMS_DATA} from '../test-data.js';

describe(`MoviesList rendering`, () => {

  it(`MoviesList renders correctly`, () => {

    const tree = renderer
      .create(
          <MoviesList
            films={FILMS_DATA}
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
