import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const MOCK_FILMS = [
  {
    title: `Bohemian Rhapsody`,
    preview: `bohemian-rhapsody.jpg`
  },
  {
    title: `Dardjeeling Limited`,
    preview: `dardjeeling-limited.jpg`
  },
  {
    title: `Fantastic beasts: the crimes of Grindelwald`,
    preview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }
];

const promoCardData = {
  title: `Dr.No`,
  genre: `Thriller`,
  releaseYear: 1962
};

describe(`App rendering`, () => {

  it(`App renders correctly`, () => {
    const tree = renderer
      .create(
          <App
            promoCard={promoCardData}
            films={MOCK_FILMS}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
