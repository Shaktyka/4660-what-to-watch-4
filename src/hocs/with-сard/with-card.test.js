import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import withCard from './with-card.js';

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

const MockComponent = ({isPlaying}) => {
  return (
    <article
      isPlaying={isPlaying}
    >FilmCard</article>
  );
};

MockComponent.propTypes = {
  isPlaying: PropTypes.bool.isRequired
};

const MockComponentWrapped = withCard(MockComponent);

describe(`Rendering with withCard`, () => {

  it(`Card with withCard renders correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        film={onefilmData}
        onFilmCardClick={() => {}}
        onMouseEnterCard={() => {}}
        onMouseLeaveCard={() => {}}
        isPlaying={false}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
