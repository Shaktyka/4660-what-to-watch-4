import React from 'react';
import renderer from 'react-test-renderer';

import MovieOverview from './movie-overview.jsx';

const filmData = {
  id: 7,
  title: `Mindhunter`,
  preview: `mindhunter.jpg`,
  genre: `Drama`,
  year: 2018,
  poster: `the-grand-budapest-hotel-poster.jpg`,
  cover: `bg-the-grand-budapest-hotel.jpg`,
  ratingScore: 6.7,
  ratingCount: 410,
  description: [
    `Mindhunter is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
    `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
    `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
  ],
  director: `Bryan Singer`,
  starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
  source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`MovieOverview component rendering`, () => {

  it(`MovieOverview renders correctly`, () => {
    const tree = renderer
      .create(
          <MovieOverview
            ratingScore={filmData.ratingScore}
            ratingCount={filmData.ratingCount}
            description={filmData.description}
            director={filmData.director}
            starring={filmData.starring}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
