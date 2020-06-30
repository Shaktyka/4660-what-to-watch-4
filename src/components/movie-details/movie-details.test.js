import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetails from './movie-details.jsx';

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
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  duration: 111
};

describe(`MovieDetails component rendering`, () => {

  it(`MovieDetails renders correctly`, () => {
    const tree = renderer
      .create(
          <MovieDetails
            director={filmData.director}
            starring={filmData.starring}
            duration={filmData.duration}
            genre={filmData.genre}
            year={filmData.year}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
