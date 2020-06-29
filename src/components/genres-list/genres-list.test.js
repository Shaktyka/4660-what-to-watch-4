import React from 'react';
import renderer from 'react-test-renderer';

import GenresList from './genres-list.jsx';

const genres = [`All genres`, `Crime`, `Sci-Fi`, `Drama`, `Comedy`];

describe(`GenresList rendering`, () => {

  it(`GenresList renders correctly with the first active filter`, () => {
    const activeGenre = `All genres`;

    const tree = renderer
      .create(
          <GenresList
            genres={genres}
            activeGenre={activeGenre}
            onGenreClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`GenresList renders correctly with the third active filter`, () => {
    const activeGenre = `Sci-Fi`;

    const tree = renderer
      .create(
          <GenresList
            genres={genres}
            activeGenre={activeGenre}
            onGenreClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

