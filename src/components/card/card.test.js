import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card.jsx';

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
    `Mindhunter`,
    `The film`,
    `They reach`
  ],
  director: `Bryan Singer`,
  starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
  source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`Card rendering`, () => {

  it(`Card renders correctly`, () => {
    const tree = renderer
      .create(
          <Card
            film={onefilmData}
            onFilmCardClick={() => {}}
            onMouseEnterCard={() => {}}
            onMouseLeaveCard={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
