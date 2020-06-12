import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card.jsx';

const FILM_TITLE = `Matrix`;

describe(`Card rendering`, () => {

  it(`Card renders correctly`, () => {
    const tree = renderer
      .create(<Card title={FILM_TITLE} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
