import React from 'react';
import renderer from 'react-test-renderer';

import SignIn from './sign-in.jsx';

describe(`SignIn rendering`, () => {

  it(`SignIn renders correctly`, () => {
    const tree = renderer
      .create(
          <SignIn />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
