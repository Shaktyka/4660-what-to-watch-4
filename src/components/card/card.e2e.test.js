import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';

import {onefilmData} from '../test-data.js';

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
