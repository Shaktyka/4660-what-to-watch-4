import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ShowMore from './show-more';

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
