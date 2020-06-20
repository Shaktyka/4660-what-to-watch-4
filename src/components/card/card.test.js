import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card.jsx';

const filmData = {
  id: 1,
  title: `Mindhunter`,
  preview: `mindhunter.jpg`
};

describe(`Card rendering`, () => {

  it(`Card renders correctly`, () => {
    const tree = renderer
      .create(
          <Card
            film={filmData}
            mainTitleClickHandler={() => {}}
            onMouseEnterCard={() => {}}
            onMouseLeaveCard={() => {}}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
