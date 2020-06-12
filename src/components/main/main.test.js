import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const MOCK_FILMS = [`Eternal Sunshine`, `Arizona Dream`, `Fargo`];

const promoCardData = {
  title: `Dr.No`,
  genre: `Thriller`,
  releaseYear: 1962
};

describe(`Main rendering`, () => {

  it(`Main renders correctly`, () => {
    const tree = renderer
      .create(
          <Main
            promoCard={promoCardData}
            films={MOCK_FILMS}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
