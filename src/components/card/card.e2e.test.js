import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';

configure({adapter: new Adapter()});

const Film = {
  TITLE: `Mindhunter`,
  PREVIEW: `mindhunter.jpg`
};

describe(`Card component test`, () => {

  it(`Card passes a data object when hovered`, () => {
    const onHoverCard = jest.fn();

    const card = shallow(
        <Card
          title={Film.TITLE}
          poster={Film.PREVIEW}
          mainTitleClickHandler={() => {}}
          onHoverCard={onHoverCard}
        />
    );

    card.simulate(`mouseover`, {key: true});

    expect(onHoverCard).toHaveBeenCalledTimes(1);
  });

});
