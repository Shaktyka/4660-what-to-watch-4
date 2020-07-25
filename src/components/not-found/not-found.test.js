import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from './not-found.jsx';

describe(`NotFound rendering`, () => {

  it(`NotFound renders correctly`, () => {
    const tree = renderer
      .create(
          <NotFound />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
