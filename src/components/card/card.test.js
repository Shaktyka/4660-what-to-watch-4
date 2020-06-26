import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card.jsx';

import onefilmData from '../test-data.js';

describe(`Card rendering`, () => {

  it(`Card renders correctly`, () => {
    const tree = renderer
      .create(
          <Card
            film={onefilmData}
            onFilmCardClick={() => {}}
            onMouseEnterCard={() => {}}
            onMouseLeaveCard={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
