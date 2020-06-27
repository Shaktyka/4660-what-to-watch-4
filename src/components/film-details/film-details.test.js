import React from 'react';
import renderer from 'react-test-renderer';
import FilmDetails from './film-details.jsx';

// import onefilmData from '../test-data.js';

const onefilmData = {
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

describe(`FilmDetails rendering`, () => {

  it(`FilmDetails renders correctly`, () => {

    const tree = renderer
      .create(
          <FilmDetails
            filmData={onefilmData}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
