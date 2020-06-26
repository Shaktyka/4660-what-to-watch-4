import React from 'react';
import renderer from 'react-test-renderer';
import FilmDetails from './film-details.jsx';

import onefilmData from '../test-data.js';

describe(`FilmDetails rendering`, () => {

  it(`FilmDetails renders correctly`, () => {

    const tree = renderer
      .create(
          <FilmDetails
            filmData={onefilmData}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
