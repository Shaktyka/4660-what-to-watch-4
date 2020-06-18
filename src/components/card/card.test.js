import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card.jsx';

const Film = {
  TITLE: `Mindhunter`,
  PREVIEW: `mindhunter.jpg`
};

describe(`Card rendering`, () => {

  it(`Card renders correctly`, () => {
    const tree = renderer
      .create(
          <Card
            title={Film.TITLE}
            preview={Film.PREVIEW}
            mainTitleClickHandler={() => {}}
            onHoverCard={() => {}}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
