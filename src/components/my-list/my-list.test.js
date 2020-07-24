import React from 'react';
import renderer from 'react-test-renderer';

import MyList from './my-list.jsx';

describe(`MyList rendering`, () => {

  it(`MyList renders correctly`, () => {
    const tree = renderer
      .create(
          <MyList />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
