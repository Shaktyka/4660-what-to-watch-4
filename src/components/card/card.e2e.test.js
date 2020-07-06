import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

configure({adapter: new Adapter()});

describe(`Card component test`, () => {

  it(`MovieCard is hovered`, () => {
    const onMouseEnterCard = jest.fn();
    const onMouseLeaveCard = jest.fn();

    const card = shallow(
        <Card
          film={onefilmData}
          onFilmCardClick={() => {}}
          onMouseEnterCard={onMouseEnterCard}
          onMouseLeaveCard={onMouseLeaveCard}
        />
    );

    const movieCard = card.find(`.catalog__movies-card`);

    movieCard.props().onMouseEnter();
    expect(onMouseEnterCard).toHaveBeenCalledTimes(1);
  });

  it(`MovieCard is unhovered`, () => {
    const onMouseEnterCard = jest.fn();
    const onMouseLeaveCard = jest.fn();

    const card = shallow(
        <Card
          film={onefilmData}
          onFilmCardClick={() => {}}
          onMouseEnterCard={onMouseEnterCard}
          onMouseLeaveCard={onMouseLeaveCard}
        />
    );

    const movieCard = card.find(`.catalog__movies-card`);

    movieCard.props().onMouseLeave();
    expect(onMouseLeaveCard).toHaveBeenCalledTimes(1);
  });

  it(`Card passes a data object when hovered`, () => {
    const onMouseEnterCard = jest.fn((id) => id);
    const onMouseLeaveCard = jest.fn();

    const card = shallow(
        <Card
          film={onefilmData}
          onFilmCardClick={() => {}}
          onMouseEnterCard={onMouseEnterCard}
          onMouseLeaveCard={onMouseLeaveCard}
        />
    );

    card.simulate(`mouseenter`);
    expect(onMouseEnterCard.mock.results[0].value).toBe(onefilmData.id);
  });

  it(`Card passes film's id beeing clicked`, () => {
    const onMouseEnterCard = jest.fn((id) => id);
    const onMouseLeaveCard = jest.fn();
    const onFilmCardClick = jest.fn((id) => id);

    const card = mount(
        <Card
          film={onefilmData}
          onFilmCardClick={onFilmCardClick}
          onMouseEnterCard={onMouseEnterCard}
          onMouseLeaveCard={onMouseLeaveCard}
        />
    );

    const movieCard = card.find(`.small-movie-card`);

    movieCard.simulate(`click`);
    expect(onFilmCardClick.mock.results[0].value).toBe(onefilmData.id);
  });

});
