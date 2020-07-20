import React from 'react';
import renderer from 'react-test-renderer';

import Loader from './loader.jsx';

describe(`Loader rendering`, () => {

  it(`Loader renders correctly`, () => {
    const tree = renderer
      .create(<Loader/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
