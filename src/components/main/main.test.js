import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const MOCK_FILMS = [
  {
    id: 1,
    title: `Mindhunter`,
    preview: `mindhunter.jpg`
  },
  {
    id: 2,
    title: `Moonrise Kingdom`,
    preview: `moonrise-kingdom.jpg`
  }
];

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
            mainTitleClickHandler={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
