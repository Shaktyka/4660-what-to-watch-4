import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';

configure({adapter: new Adapter()});

const Film = {
  ID: 1,
  TITLE: `Mindhunter`,
  PREVIEW: `mindhunter.jpg`
};

describe(`Card component test`, () => {

  it(`MovieCard is hovered`, () => {
    const onMouseEnterCard = jest.fn();
    const onMouseLeaveCard = jest.fn();

    const card = shallow(
        <Card
          id={Film.ID}
          title={Film.TITLE}
          poster={Film.PREVIEW}
          mainTitleClickHandler={() => {}}
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
          id={Film.ID}
          title={Film.TITLE}
          poster={Film.PREVIEW}
          mainTitleClickHandler={() => {}}
          onMouseEnterCard={onMouseEnterCard}
          onMouseLeaveCard={onMouseLeaveCard}
        />
    );

    const movieCard = card.find(`.catalog__movies-card`);

    movieCard.props().onMouseLeave();
    expect(onMouseLeaveCard).toHaveBeenCalledTimes(1);
  });

  it(`Card passes a data object when hovered`, () => {
    const onMouseEnterCard = jest.fn();
    const onMouseLeaveCard = jest.fn();

    const card = shallow(
        <Card
          id={Film.ID}
          title={Film.TITLE}
          poster={Film.PREVIEW}
          mainTitleClickHandler={() => {}}
          onMouseEnterCard={onMouseEnterCard}
          onMouseLeaveCard={onMouseLeaveCard}
        />
    );

    card.simulate(`mouseenter`, {key: true});

    expect(onMouseEnterCard).toHaveBeenCalledTimes(1);
  });

});
