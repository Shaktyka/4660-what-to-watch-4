import React from 'react';
import renderer from 'react-test-renderer';

import AddReview from './add-review.jsx';

describe(`AddReview rendering`, () => {

  it(`AddReview renders correctly`, () => {
    const tree = renderer
      .create(
          <AddReview />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
