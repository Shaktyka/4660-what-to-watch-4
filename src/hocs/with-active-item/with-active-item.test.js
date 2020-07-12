import React from 'react';
import renderer from 'react-test-renderer';

import withActiveItem from './with-active-item.js';

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

const mockComponent = () => <div />;

const MockComponentWrapped = withActiveItem(mockComponent);

// Продумать ещё раз набор тестов для хока

describe(`withActiveItem rendering`, () => {

  it(`withActiveItem renders with ...`, ()=>{
    const tree = renderer.create(
        <MockComponentWrapped
          film={onefilmData}
          // дописать
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`withActiveItem renders with ...`, ()=>{
    const tree = renderer.create(
        <MockComponentWrapped
          // дописать
          activeItem={false}
          setActiveItem={()=>{}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
