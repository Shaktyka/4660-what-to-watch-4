import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

import {promoCardData} from '../test-data.js';
const FILMS_DATA = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    year: 2018,
    preview: `/img/bohemian-rhapsody.jpg`,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.6,
    ratingCount: 240,
    description: [
      `Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 2,
    title: `Dardjeeling Limited`,
    preview: `/img/dardjeeling-limited.jpg`,
    genre: `Comedy`,
    year: 2019,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 7.6,
    ratingCount: 140,
    description: [
      `Dardjeeling Limited is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Leslie Mann`, `John Cena`, `Ike Barinholtz`],
    source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

const genres = [`All genres`, `Crime`, `Sci-Fi`, `Drama`];
const genre = `All genres`;

describe(`Main rendering`, () => {

  it(`Main renders correctly`, () => {
    const tree = renderer
      .create(
          <Main
            genre={genre}
            genres={genres}
            promoCard={promoCardData}
            films={FILMS_DATA}
            onFilmCardClick={() => {}}
            onGenreClick={() => {}}
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
