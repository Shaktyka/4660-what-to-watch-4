import React from 'react';
import renderer from 'react-test-renderer';
import FilmDetails from './film-details.jsx';

const MOCK_FILM_DATA = {
  id: 6,
  title: `Midnight Special`,
  preview: `midnight-special.jpg`,
  genre: `Fighter`,
  year: 2015,
  poster: `the-grand-budapest-hotel-poster.jpg`,
  cover: `bg-the-grand-budapest-hotel.jpg`,
  ratingScore: 5.9,
  ratingCount: 210,
  description: [
    `Midnight Special is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
    `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
    `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
  ],
  director: `Bryan Singer`,
  starring: [`Leslie Mann`, `John Cena`]
};

describe(`FilmDetails rendering`, () => {

  it(`FilmDetails renders correctly`, () => {

    const tree = renderer
      .create(
          <FilmDetails
            films={MOCK_FILM_DATA}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
