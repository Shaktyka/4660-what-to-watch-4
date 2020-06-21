import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';

configure({adapter: new Adapter()});

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
  starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`]
};

const mockEvent = {
  preventDefault() {}
};

describe(`Card component test`, () => {

  it(`MovieCard is hovered`, () => {
    const onMouseEnterCard = jest.fn();
    const onMouseLeaveCard = jest.fn();

    const card = shallow(
        <Card
          film={filmData}
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
          film={filmData}
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
          film={filmData}
          onFilmCardClick={() => {}}
          onMouseEnterCard={onMouseEnterCard}
          onMouseLeaveCard={onMouseLeaveCard}
        />
    );

    card.simulate(`mouseenter`);
    expect(onMouseEnterCard.mock.results[0].value).toBe(filmData.id);
  });

  it(`Card passes id of film when img's wrap is clicked`, () => {
    const onMouseEnterCard = jest.fn((id) => id);
    const onMouseLeaveCard = jest.fn();
    const onFilmCardClick = jest.fn((id) => id);

    const card = shallow(
        <Card
          film={filmData}
          onFilmCardClick={onFilmCardClick}
          onMouseEnterCard={onMouseEnterCard}
          onMouseLeaveCard={onMouseLeaveCard}
        />
    );

    const imgWrap = card.find(`.small-movie-card__image`);

    imgWrap.simulate(`click`);
    expect(onFilmCardClick.mock.results[0].value).toBe(filmData.id);
  });

  it(`Card passes id of film when film's title is clicked`, () => {
    const onMouseEnterCard = jest.fn((id) => id);
    const onMouseLeaveCard = jest.fn();
    const onFilmCardClick = jest.fn((id) => id);

    const card = shallow(
        <Card
          film={filmData}
          onFilmCardClick={onFilmCardClick}
          onMouseEnterCard={onMouseEnterCard}
          onMouseLeaveCard={onMouseLeaveCard}
        />
    );

    const title = card.find(`.small-movie-card__title`);

    title.simulate(`click`, mockEvent);
    expect(onFilmCardClick.mock.results[0].value).toBe(filmData.id);
  });

});
