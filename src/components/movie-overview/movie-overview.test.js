import React from 'react';
import renderer from 'react-test-renderer';

import MovieOverview from './movie-overview.jsx';

const filmData = {
  ratingScore: 6.7,
  ratingCount: 410,
  description: [
    `Mindhunter`,
    `The film`,
    `They reach`
  ],
  director: `Bryan Singer`,
  starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`]
};

describe(`MovieOverview component rendering`, () => {

  it(`MovieOverview renders correctly`, () => {
    const {ratingScore, ratingCount, description, director, starring} = filmData;

    const tree = renderer
      .create(
          <MovieOverview
            ratingScore={ratingScore}
            ratingCount={ratingCount}
            description={description}
            director={director}
            starring={starring}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
