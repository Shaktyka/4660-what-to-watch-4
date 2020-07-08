import React from 'react';
import renderer from 'react-test-renderer';

import GenreItem from './genre-item.jsx';

describe(`GenreItem rendering`, () => {

  it(`GenreItem renders correctly like clicked element`, () => {
    const genre = `Comedy`;
    const activeClass = `catalog__genres-item--active`;

    const tree = renderer
      .create(
          <GenreItem
            genre={genre}
            activeClass={activeClass}
            onGenreClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`GenreItem renders correctly`, () => {
    const genre = `Comedy`;
    const activeClass = ``;

    const tree = renderer
      .create(
          <GenreItem
            genre={genre}
            activeClass={activeClass}
            onGenreClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
