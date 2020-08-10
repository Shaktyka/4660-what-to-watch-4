import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '../test-data';

import GenreItem from './genre-item';

describe(`GenreItem rendering`, () => {

  it(`GenreItem renders correctly like clicked element`, () => {
    const genre = `Comedy`;

    const tree = renderer
      .create(
          <GenreItem
            genre={genre}
            isActive={true}
            onGenreClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`GenreItem renders correctly`, () => {
    const genre = `Comedy`;

    const tree = renderer
      .create(
          <GenreItem
            genre={genre}
            isActive={false}
            onGenreClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
