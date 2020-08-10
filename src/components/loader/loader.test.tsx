import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Loader from './loader';

describe(`Loader rendering`, () => {

  it(`Loader renders correctly`, () => {
    const tree = renderer
      .create(<Loader/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
