import React from 'react';
import renderer from 'react-test-renderer';

import ShowMore from './show-more.jsx';

describe(`ShowMore rendering`, () => {

  it(`ShowMore renders correctly`, () => {
    const tree = renderer
      .create(
          <ShowMore
            onShowMoreClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
