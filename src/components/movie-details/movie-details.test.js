import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetails from './movie-details.jsx';

const filmData = {
  genre: `Drama`,
  year: 2018,
  description: [
    `Mindhunter`,
    `The film`,
    `They reach`
  ],
  director: `Bryan Singer`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  duration: 112
};

describe(`MovieDetails component rendering`, () => {

  it(`MovieDetails renders correctly`, () => {
    const {director, starring, duration, genre, year} = filmData;

    const tree = renderer
      .create(
          <MovieDetails
            director={director}
            starring={starring}
            duration={duration}
            genre={genre}
            year={year}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
