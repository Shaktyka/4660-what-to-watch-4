import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withCard from './with-card.js';

Enzyme.configure({
  adapter: new Adapter(),
});

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

const MockComponentWrapped = withCard(mockComponent);

describe(`withCard works correctly`, () => {

  it(`Card should change prop isPlaying`, ()=>{
    const component = shallow(
        <MockComponentWrapped
          film={onefilmData}
          onFilmCardClick={() => {}}
          onMouseEnterCard={() => {}}
          onMouseLeaveCard={() => {}}
          isPlaying={false}
        />
    );

    expect(component.props().isPlaying).toEqual(false);

    component.props().onMouseEnterCard();
    expect(component.props().isPlaying).toEqual(true);

    component.props().onMouseLeaveCard();
    expect(component.props().isPlaying).toEqual(false);
  });

});
