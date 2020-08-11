import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '../test-data';

import ShowMore from './show-more';

describe(`ShowMore rendering`, () => {

  it(`ShowMore renders correctly`, () => {
    const tree = renderer
      .create(
          <ShowMore
            onShowMoreClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
