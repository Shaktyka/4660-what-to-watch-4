import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

const MOCK_FILMS = [
  {
    title: `Mindhunter`,
    preview: `mindhunter.jpg`
  },
  {
    title: `Moonrise Kingdom`,
    preview: `moonrise-kingdom.jpg`
  }
];

describe(`MoviesList rendering`, () => {

  it(`MoviesList renders correctly`, () => {

    const tree = renderer
      .create(
          <MoviesList
            films={MOCK_FILMS}
            mainTitleClickHandler={() => {}}
            onHoverCard={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
