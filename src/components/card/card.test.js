import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card.jsx';

const Film = {
  ID: 1,
  TITLE: `Mindhunter`,
  PREVIEW: `mindhunter.jpg`
};

describe(`Card rendering`, () => {

  it(`Card renders correctly`, () => {
    const tree = renderer
      .create(
          <Card
            id={Film.ID}
            title={Film.TITLE}
            poster={Film.PREVIEW}
            mainTitleClickHandler={() => {}}
            onHoverCard={() => {}}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
