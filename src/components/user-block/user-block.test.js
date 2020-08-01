import React from 'react';
import renderer from 'react-test-renderer';

import UserBlock from './user-block.jsx';

describe(`UserBlock rendering`, () => {

  it(`UserBlock renders correctly`, () => {
    const userData = {
      avatar: `/img.jpg`,
      name: `Igar`
    };

    const tree = renderer
      .create(
          <UserBlock
            isAuthorized={true}
            userData={userData}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
